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
// import nodemailer from "nodemailer";
// import dns from "dns";

// dns.setDefaultResultOrder("ipv4first");

// // ✅ create transporter once
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   family: 4, // ✅ force IPv4 (extra safety)
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//   connectionTimeout: 10000, // ⏱️ increased (5s sometimes too low)
//   greetingTimeout: 10000,
//   socketTimeout: 15000,
// });

// // ✅ verify transporter once (optional but useful)
// transporter.verify((error, success) => {
//   if (error) {
//     console.log("❌ SMTP connection failed:", error.message);
//   } else {
//     console.log("✅ SMTP server ready");
//   }
// });

// const sendEmail = async (email, subject, message) => {
//   try {
//     console.log("📨 Sending email to:", email);

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
// import sgMail from "@sendgrid/mail";

// // set API key
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const sendEmail = async (email, subject, message) => {
//   try {
//     console.log("📨 Sending email to:", email);

//     const msg = {
//       to: email,
//       from: process.env.EMAIL_FROM, // must be verified
//       subject: "Your OTP Code - RMA Store", // ✅ better subject
//       text: `Your OTP is . It is valid for 10 minutes.`,
//       html: message,
//     };

//     await sgMail.send(msg);

//     console.log("✅ Email sent to:", email);
//   } catch (error) {
//     console.log("❌ SendGrid error:", error.response?.body || error.message);
//   }
// };

// export default sendEmail;
// utils/sendEmail.js
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL;

if (!BREVO_API_KEY) {
  console.error("❌ BREVO_API_KEY is missing in environment variables");
}

if (!BREVO_SENDER_EMAIL) {
  console.error("❌ BREVO_SENDER_EMAIL is missing in environment variables");
}

/**
 * Send email using Brevo API (clean & reliable on Render)
 * @param {string} toEmail - Recipient email
 * @param {string} subject - Email subject
 * @param {string} htmlContent - HTML body of the email
 */
const sendEmail = async (toEmail, subject, htmlContent) => {
  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "RMA Store",                    // Change if you want
          email: BREVO_SENDER_EMAIL,            // Must be verified in Brevo
        },
        to: [
          {
            email: toEmail,
          },
        ],
        subject: subject,
        htmlContent: htmlContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Brevo API Error Response:", errorData);
      throw new Error(`Brevo API failed: ${response.status} - ${errorData.message || "Unknown error"}`);
    }

    console.log(`✅ Email sent successfully to: ${toEmail}`);
    return true;
  } catch (error) {
    console.error("❌ Failed to send email:", error.message);
    throw error; // Let the controller handle the error
  }
};

export default sendEmail;