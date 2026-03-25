import express from "express";
import {
  placeOrder,
  createOnlinePayment,
  verifyOnlinePayment,
  getMyOrders,
  getAllOrders
} from "../controllers/orderController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
const router = express.Router();

// Place COD Order
// POST /api/orders/cod
router.post("/", protect,upload.single("screenshot"), placeOrder);

// Create Razorpay Order
// POST /api/orders/online
router.post("/online", protect, createOnlinePayment);

// Verify Payment
// POST /api/orders/verify
router.post("/verify", protect, verifyOnlinePayment);

// Get logged-in user's orders
// GET /api/orders/my
router.get("/my", protect, getMyOrders);

// Admin: Get all orders
// GET /api/orders
router.get("/", protect, adminOnly, getAllOrders);

export default router;