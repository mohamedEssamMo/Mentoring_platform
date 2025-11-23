import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendEmail = async (req, res) => {
  const { subject, email, message } = req.body;

  if (!subject || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Subject, email, and message are required",
    });
  }

  const EMAIL = process.env.EMAIL;
  const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
  if (!EMAIL || !EMAIL_PASSWORD) {
    console.error("Missing email environment variables", {
      EMAIL_set: !!EMAIL,
      EMAIL_PASSWORD_set: !!EMAIL_PASSWORD,
    });
    return res.status(500).json({
      success: false,
      message: "Server configuration error: missing email credentials",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL,
        pass: EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    try {
      await transporter.verify();
      console.log("SMTP verify OK");
    } catch (verifyError) {
      console.error("SMTP verify failed:", {
        message: verifyError.message,
        code: verifyError.code,
        stack: verifyError.stack,
      });
      return res.status(500).json({
        success: false,
        message: "Failed to connect to email server. Check server logs.",
      });
    }

    const mailOptions = {
      from: `"Website Contact" <${EMAIL}>`,
      replyTo: email,
      to: EMAIL,
      subject: `📬 New message — ${subject}`,
      text: `From: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family: Arial; padding: 15px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #333;">📬 New Message</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email error full:", {
      message: error?.message,
      code: error?.code,
      response: error?.response || null,
      stack: error?.stack,
    });

    return res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
