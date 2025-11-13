import User from "../models/UserSchema.js";
import Mentor from "../models/MentorSchema.js";
import Booking from "../models/BookingSchema.js";
import Stripe from "stripe";

export const getCheckoutSession = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.mentorId);
    const user = await User.findById(req.userId);

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
      cancel_url: `${req.protocol}://${req.get("host")}/mentors/${mentor.id}`,
      customer_email: user.email,
      client_reference_id: req.params.mentorId,
      line_items: [
        {
          price_data: {
            currency: "bdt",
            unit_amount: mentor.hourlyFee * 100,
            product_data: {
              name: mentor.name,
              description: mentor.bio,
              images: [mentor.photo],
            },
          },
          quantity: 1,
        },
      ],
    });
    const booking = new Booking({
      mentor: mentor._id,
      user: user._id,
      ticketPrice: mentor.hourlyFee,
      session: session.id,
    });
    await booking.save();

    res
      .status(200)
      .json({ success: true, message: "Successfully paid", session });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Error creating checkout session" });
  }
};
