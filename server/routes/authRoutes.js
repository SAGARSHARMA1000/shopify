import express from "express";
const router = express.Router();
import{register,verifyEmailOTP,resendOTP,login,forgotPassword,resetPassword,resendResetOTP} from "../controllers/authController.js";

// POST /api/auth/register
router.post("/register", register);

router.post("/verify-otp", verifyEmailOTP);
router.post("/resend-otp", resendOTP);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/resendResetotp", resendResetOTP);
// POST /api/auth/login
router.post("/login", login);


export default router;