import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import generateToken from "../utils/generateToken.js";
import sendEmail from "../utils/sendEmail.js";

// =======================
// Register User
// =======================
export const register = async (req,res)=>{
  try{

    const {name,password} = req.body;
      // ✅ normalize email
    let email = req.body.email.toLowerCase().trim();
    const userExists = await User.findOne({email});

    if(userExists){
      return res.status(400).json({message:"User already exists"});
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const user = await User.create({
      name,
      email,
      password,
      emailOTP: otp,
      otpExpire: Date.now() + 10 * 60 * 1000
    });
   // console.log("User Saved:", user.email);

     
const message = `
<div style="font-family: Arial, sans-serif; background-color: #0f172a; padding: 20px; color: #ffffff;">
  
  <div style="max-width: 500px; margin: auto; background: #111827; padding: 20px; border-radius: 10px; border: 1px solid #facc15;">
    
    <h2 style="text-align: center; color: #facc15; margin-bottom: 10px;">
      RMA Store
    </h2>

    <p style="text-align: center; font-size: 14px; color: #d1d5db;">
      Secure Email Verification
    </p>

    <hr style="border: 0.5px solid #374151; margin: 20px 0;" />

    <p style="font-size: 16px;">
      Hello,
    </p>

    <p style="font-size: 14px; color: #d1d5db;">
      Thank you for signing up with <strong>RMA Store</strong>.  
      Please use the OTP below to verify your email address.
    </p>

    <div style="text-align: center; margin: 25px 0;">
      <span style="display: inline-block; background: #facc15; color: #000; font-size: 28px; font-weight: bold; letter-spacing: 6px; padding: 12px 20px; border-radius: 8px;">
        ${otp}
      </span>
    </div>

    <p style="font-size: 13px; color: #9ca3af; text-align: center;">
      This OTP is valid for <strong>10 minutes</strong>.
    </p>

    <hr style="border: 0.5px solid #374151; margin: 20px 0;" />

    <p style="font-size: 12px; color: #6b7280; text-align: center;">
      If you did not request this, please ignore this email.
    </p>

    <p style="font-size: 12px; color: #6b7280; text-align: center; margin-top: 10px;">
      © ${new Date().getFullYear()} RMA Store. All rights reserved.
    </p>

  </div>
</div>
`;

 await sendEmail(email, "Verify your email", message);
   res.status(201).json({
        email:user.email,
        message: "User registered. OTP sent to email",
      });
  }catch(error){
    res.status(500).json({message:error.message});
  }
};


export const verifyEmailOTP = async (req, res) => {

try {

let {  otp } = req.body;
   const email = req.body.email;
    otp=otp.toString().trim();
// console.log("incomingemail:", email); 
const user = await User.findOne({ email });
//console.log("User Found:", user); 
//console.log("DB OTP:", user?.emailOTP);
//console.log("Entered OTP:", otp);
if (!user) {
  return res.status(400).json({ message: "User not found" });
}

if (!user.emailOTP ||user.emailOTP.toString() !== otp) {
  return res.status(400).json({ message: "Invalid OTP" });
}

if (user.otpExpire < Date.now()) {
  return res.status(400).json({ message: "OTP expired" });
}

user.isVerified = true;
user.emailOTP = undefined;
user.otpExpire = undefined;

await user.save();

res.json({ message: "Email verified successfully" });

} catch (error) {

res.status(500).json({ message: error.message });

}

};

export const resendOTP = async (req, res) => {
  try {

    let { email } = req.body;
    email = email.toLowerCase().trim();

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    if (
      user.lastOtpSentAt &&
      Date.now() - user.lastOtpSentAt.getTime() < 30000
    ) {
      return res.status(400).json({
        message: "Please wait 30 seconds before requesting again"
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.emailOTP = otp;
    user.otpExpire = Date.now() + 10 * 60 * 1000;

    await user.save();

     sendEmail(email, "Resend OTP", `<h1>${otp}</h1>`);

    res.json({ message: "OTP resent successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const login = async (req, res) => {
//   try {

//     const { email, password } = req.body;

//     // Check if email exists
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid email or password"
//       });
//     }

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid email or password"
//       });
//     }
//         if (!user.isVerified) {
//   return res.status(401).json({
//     message: "Please verify your email first"
//   });
// }

//     // Generate token
//     const token = jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "30d" }
//     );
   
//     res.json({
//       success: true,
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       role: user.role,
//       token
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: error.message
//     });

//   }
// };
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Check user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // // ✅ ROLE CHECK (IMPORTANT)
    // if (user.role !== role) {
    //   return res.status(403).json({
    //     success: false,
    //     message: `Access denied for ${role}`
    //   });
    // }
     if (role === "admin" && data.role !== "admin") {
       alert("Not an admin");
       return;
}
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Email verification
    if (!user.isVerified) {
      return res.status(401).json({
        message: "Please verify your email first"
      });
    }

    // Generate token WITH ROLE
    const token = jwt.sign(
      { id: user._id, role: user.role }, // ✅ include role
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.json({
      success: true,
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


export const forgotPassword = async (req, res) => {
  try {
    let { email } = req.body;

    email = email.toLowerCase().trim();

    const user = await User.findOne({ email });

    // 🔒 do not reveal user existence
    if (!user) {
      return res.json({ message: "If account exists, OTP sent" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.resetOTP = otp;
    user.resetOTPExpire = Date.now() + 10 * 60 * 1000;

    await user.save();

    const message = `
      <h2>Reset Your Password</h2>
      <h1>${otp}</h1>
      <p>This OTP is valid for 10 minutes</p>
    `;

    await sendEmail(email, "Password Reset OTP", message);

    res.json({ message: "OTP sent to email" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const resetPassword = async (req, res) => {
  try {

    let { email, otp, newPassword } = req.body;

    email = email.toLowerCase().trim();

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid request" });
    }

    // ✅ check OTP exists
    if (!user.resetOTP) {
      return res.status(400).json({ message: "No OTP found" });
    }

    // ✅ check expiry
    if (!user.resetOTPExpire || user.resetOTPExpire < Date.now()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    // ✅ verify OTP
    if (String(user.resetOTP) !== String(otp)) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // ✅ update password
    user.password = newPassword;

    user.resetOTP = undefined;
    user.resetOTPExpire = undefined;

    await user.save(); // password will auto hash

    res.json({ message: "Password reset successful" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const resendResetOTP = async (req, res) => {
  try {

    let { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    email = email.toLowerCase().trim();

    const user = await User.findOne({ email });

    if (!user) {
      // 🔒 do not reveal user existence
      return res.json({ message: "If account exists, OTP sent" });
    }

    // ⛔ Rate limit (30 seconds)
    if (
      user.lastOtpSentAt &&
      Date.now() - user.lastOtpSentAt.getTime() < 30000
    ) {
      return res.status(400).json({
        message: "Please wait 30 seconds before requesting again"
      });
    }

    // 🔢 Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.resetOTP = otp;
    user.resetOTPExpire = Date.now() + 10 * 60 * 1000;
    user.lastOtpSentAt = new Date();

    await user.save();

    // 📩 Send Email
    const message = `
      <h2>Password Reset OTP</h2>
      <h1>${otp}</h1>
      <p>This OTP is valid for 10 minutes</p>
    `;

    await sendEmail(email, "Reset Password OTP", message);

    res.json({ message: "OTP resent successfully" });

  } catch (error) {
    console.log("RESEND RESET OTP ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};