// controllers/hotDealController.js

import HotDeal from "../models/hotDealModel.js";

// export const saveHotDealBanner = async (req, res) => {
//   try {
//     const bannerImage = req.file.path; // cloud url
//     const { tickerText } = req.body;

//     const data = await HotDeal.findOneAndUpdate(
//       {},
//       { bannerImage, tickerText },
//       { new: true, upsert: true }
//     );

//     res.json({ success: true, data });

//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

import cloudinary from "../config/cloudinary.js";

export const saveHotDealBanner = async (req, res) => {
  try {

    const { tickerText } = req.body;

    let bannerImage = "";

    // Upload to Cloudinary
    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            folder: "rma-products/banner", // ✅ your folder
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        ).end(req.file.buffer);
      });

      bannerImage = result.secure_url; // ✅ final URL
    }

    const data = await HotDeal.findOneAndUpdate(
      {},
      {
        bannerImage,
        tickerText
      },
      {
        new: true,
        upsert: true
      }
    );

    res.json({
      success: true,
      data
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
export const getHotDealBanner = async (req, res) => {
  try {
    const data = await HotDeal.findOne();
    res.json({ success: true, data });
  } catch (error) {
    res.json({ success: false });
  }
};

export const deleteHotDealBanner = async (req, res) => {
  try {

    // Find existing banner
    const existing = await HotDeal.findOne();

    if (!existing) {
      return res.json({
        success: false,
        message: "No banner found"
      });
    }

    // 🔥 Delete image from Cloudinary
    if (existing.bannerImage) {
      const publicId = existing.bannerImage
        .split("/")
        .slice(-2)
        .join("/")
        .split(".")[0];

      await cloudinary.uploader.destroy(publicId);
    }

    // 🔥 Remove banner + text from DB
    await HotDeal.deleteMany(); // since only 1 banner system

    res.json({
      success: true,
      message: "Hot Deal banner deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};