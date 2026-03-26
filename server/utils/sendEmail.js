import nodemailer from "nodemailer";



const transporter = nodemailer.createTransport({
  service: "gmail",
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