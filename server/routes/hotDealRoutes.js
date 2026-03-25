// routes/hotDealRoutes.js

import express from "express";
import { saveHotDealBanner, getHotDealBanner,deleteHotDealBanner } from "../controllers/hotDealController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/banner", upload.single("image"), saveHotDealBanner);
router.get("/banner", getHotDealBanner);
router.delete("/banner", deleteHotDealBanner);

export default router;