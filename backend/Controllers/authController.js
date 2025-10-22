import User from "../Models/UserSchema.js";
import Doctor from "../Models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: role }, process.env.JWT_SECRET_Key, {
    expiresIn: "7d",
  });
};
export const register = async (req, res) => {
  const { email, password, name, gender, role } = req.body;

  try {
    let user = null;
    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email });
    }
    if (user) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, hashedPassword);
    let newUser = null;
    if (role === "patient") {
      newUser = new User({
        name,
        email,
        password: hashedPassword,
        gender,
      });
    }
    if (role === "doctor") {
      newUser = new Doctor({
        name,
        email,
        password: hashedPassword,
        gender,
      });
    }

    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = null;
    const patient = await User.findOne({ email });
    const doctor = await Doctor.findOne({ email });
    if (patient) {
      user = patient;
    }
    if (doctor) {
      user = doctor;
    }
    // check if user exists
    if (!user) {
      return res
        .status(400)
        .json({ message: "User with this email does not exist" });
    }
    const isPasswordMatch = bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid credentials" });
    }
    // get token
    const token = generateToken(user);
    const { password: ABC, role, appointments, ...rest } = user.doc;
    res.status(200).json({
      success: true,
      message: "Sucessful Login",
      data: { ...rest, role, token },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};
