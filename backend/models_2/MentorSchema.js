import mongoose from "mongoose";

const MentorSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    photo: { type: String },
    hourlyFee: { type: Number },
    role: {
      type: String,
      required: true,
      default: "mentor",
    },

    // === Structured Fields ===

    areaOfExpertise: {
      type: String,
      // Example list, you can change this to your 6 areas
      enum: [
        "Software Engineering",
        "Marketing",
        "Design",
        "Finance",
        "Product Management",
        "Human Resources",
      ],
    },
    jobTitle: { type: String },

    qualifications: {
      type: Array,
    },
    experiences: {
      type: Array,
    },

    bio: { type: String, maxLength: 250 }, // Added a reasonable maxLength
    about: { type: String },
    location: { type: String },

    links: [
      {
        name: { type: String, required: true }, // e.g., "LinkedIn", "Portfolio"
        url: { type: String, required: true },
      },
    ],

    timezone: { type: String },

    timeSlots: { type: Array },

    // === Ratings ===

    averageRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    totalRating: {
      type: Number,
      default: 0,
    },

    // === Admin & Relational Fields ===

    isApproved: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    sessions: [{ type: mongoose.Types.ObjectId, ref: "Session" }], // Renamed from 'appointments'
  },
  { timestamps: true }
);

export default mongoose.models.Mentor || mongoose.model("Mentor", MentorSchema);
