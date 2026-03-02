import express from "express";
import {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";

const router = express.Router();

// GET /api/products?keyword=&min=&max=&category=
router.get("/", getProducts);

// GET /api/products/:id
router.get("/:id", getSingleProduct);

// POST /api/products  (Admin only)
router.post("/", protect, adminOnly, addProduct);

// PUT /api/products/:id  (Admin only)
router.put("/:id", protect, adminOnly, updateProduct);

// DELETE /api/products/:id  (Admin only)
router.delete("/:id", protect, adminOnly, deleteProduct);

export default router;