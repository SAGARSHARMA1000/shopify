import express from "express";
import {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,getLatestHotDeal,getHotDeals
} from "../controllers/productController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/roleMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";


const router = express.Router();

// GET /api/products?keyword=&min=&max=&category=
router.get("/", getProducts);

// ALL HOT DEAL PRODUCTS
router.get("/hot-deals", getHotDeals);
router.get("/hot-deal/latest", getLatestHotDeal);

// GET /api/products/:id
router.get("/:id", getSingleProduct);

// POST /api/products  (Admin only)
// router.post("/", protect, adminOnly, addProduct);
router.post("/", protect, upload.single("image"), addProduct);

// PUT /api/products/:id  (Admin only)
router.put("/:id", protect, upload.single("image"), adminOnly, updateProduct);

// DELETE /api/products/:id  (Admin only)
router.delete("/:id", protect, adminOnly, deleteProduct);




export default router;