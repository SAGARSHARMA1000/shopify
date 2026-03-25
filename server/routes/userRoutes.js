// routes/userRoutes.js

import express from "express";
import { getAllCustomers } from "../controllers/userController.js";
import { getProfile,updateProfile,
    changePassword,deleteAccount
 } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/customers", getAllCustomers);

 router.get("/profile", protect, getProfile); // ✅ customer + admin
 router.put("/profile", protect, updateProfile);
 router.put("/password", protect, changePassword);
 router.delete("/delete", protect, deleteAccount);

export default router;