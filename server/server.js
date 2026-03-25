import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import cloudinary from "./config/cloudinary.js";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import hotDealRoutes from "./routes/hotDealRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
// Connect Database
connectDB();
const app = express();

// app.use(cors());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());


// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/hotdeal", hotDealRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Welcome To RMA STORE",
	});
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
