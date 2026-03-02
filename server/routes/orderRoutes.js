import express from "express";
import {
  placeOrderCOD,
  createOnlinePayment,
  verifyOnlinePayment,
  getMyOrders,
  getAllOrders
} from "../controllers/orderController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Place COD Order
// POST /api/orders/cod
router.post("/cod", protect, placeOrderCOD);

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