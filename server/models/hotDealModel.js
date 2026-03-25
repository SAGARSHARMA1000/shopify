// models/hotDealModel.js

import mongoose from "mongoose";

const hotDealSchema = new mongoose.Schema({
  bannerImage: String,
  tickerText: String
}, { timestamps: true });

export default mongoose.model("HotDeal", hotDealSchema);