// import nodemailer from "nodemailer";
// import dns from "dns";

// dns.setDefaultResultOrder("ipv4first");
// const transporter = nodemailer.createTransport({
//   //service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS
//   },
//    connectionTimeout: 5000, // ⏱️ prevent hanging
// });

// const sendEmail = async (email, subject, message) => {
//   try {
//     await transporter.sendMail({
//       from: `"RMA Store" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject,
//       html: message,
//     });
//     console.log("✅ Email sent to:", email);
//   } catch (error) {
//     console.log("❌ Email failed:", error.message);
//   }
// };

// export default sendEmail;
import nodemailer from "nodemailer";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

// ✅ create transporter once
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  family: 4, // ✅ force IPv4 (extra safety)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10000, // ⏱️ increased (5s sometimes too low)
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

// ✅ verify transporter once (optional but useful)
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ SMTP connection failed:", error.message);
  } else {
    console.log("✅ SMTP server ready");
  }
});

const sendEmail = async (email, subject, message) => {
  try {
    console.log("📨 Sending email to:", email);

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