import express from "express";
const router = express.Router();
import{register,verifyEmailOTP,resendOTP,login} from "../controllers/authController.js";

// POST /api/auth/register
router.post("/register", register);

router.post("/verify-otp", verifyEmailOTP);
router.post("/resend-otp", resendOTP);

// POST /api/auth/login
router.post("/login", login);


export default router;