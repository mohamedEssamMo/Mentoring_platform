import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendEmail = async (req, res) => {
  const { subject, email, message } = req.body;

  // --- Basic validation ---
  if (!subject || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Subject, email, and message are required",
    });
  }

  try {
    // --- Transporter ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // --- Email structure ---
    const mailOptions = {
      from: `"Website Contact" <${process.env.EMAIL}>`, // safer & prevents spam filtering
      replyTo: email, // allows you to reply directly to sender
      to: process.env.EMAIL,
      subject: `📬 New message — ${subject}`,
      text: `
From: ${email}
Subject: ${subject}

${message}
      `,
      html: `
        <div style="font-family: Arial; padding: 15px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #333;">📬 New Message</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
    };

    // --- Send email ---
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
