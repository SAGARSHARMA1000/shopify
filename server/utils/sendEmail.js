import nodemailer from "nodemailer";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");
const transporter = nodemailer.createTransport({
  //service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
   connectionTimeout: 5000, // ⏱️ prevent hanging
});

const sendEmail = async (email, subject, message) => {
  try {
    await transporter.sendMail({
      from: `"RMA Store" <${process.env.EMAIL_USER}>`,
      to: email,
      subject,
      html: message,
    });
    console.log("✅ Email sent to:", email);
  } catch (error) {
    console.log("❌ Email failed:", error.message);
  }
};

export default sendEmail;