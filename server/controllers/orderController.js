import Order from "../models/Order.js";
import Razorpay from "razorpay";
import crypto from "crypto";


// ==============================
// Razorpay Instance
// ==============================
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


// ===================================
// @desc    Place COD Order
// @route   POST /api/orders/cod
// ===================================
// export const placeOrderCOD = async (req, res) => {
//   try {
//     const { orderItems, shippingAddress, totalAmount } = req.body;

//     if (!orderItems || orderItems.length === 0) {
//       return res.status(400).json({ message: "No order items" });
//     }
//      if (!shippingAddress || !totalAmount) {
//       return res.status(400).json({
//         success: false,
//         message: "Missing order details"
//       });
//     }

//     const order = new Order({
//       user: req.user._id,
//       orderItems,
//       shippingAddress,
//       totalAmount,
//       paymentMethod: "COD",
//       paymentStatus: "Pending",
//       orderStatus: "Booked",
//     });

//     const createdOrder = await order.save();

//     // res.status(201).json(createdOrder);
//     res.status(201).json({
//   success: true,
//   data: createdOrder
// });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
import cloudinary from "../config/cloudinary.js";


export const placeOrder = async (req, res) => {
  try {
    // const { orderItems, shippingAddress, totalAmount, paymentMethod } = req.body;
const orderItems = JSON.parse(req.body.orderItems || "[]");
const shippingAddress = JSON.parse(req.body.shippingAddress || "{}");
const totalAmount = Number(req.body.totalAmount);
const paymentMethod = req.body.paymentMethod;
  // console.log("BODY:", req.body);
    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }

    if (!shippingAddress || !totalAmount || !paymentMethod) {
      return res.status(400).json({
        success: false,
        message: "Missing order details",
      });
    }
    
    // let screenshotUrl = "";

    // // ✅ Upload screenshot ONLY for ONLINE payment
    // if (paymentMethod === "ONLINE") {
    //   if (!req.file) {
    //     return res.status(400).json({
    //       success: false,
    //       message: "Payment screenshot required",
    //     });
    //   }

    //   // 🔥 Upload to Cloudinary
    //   const result = await cloudinary.uploader.upload_stream(
    //     {
    //       folder: "rma-products",
    //     },
    //     async (error, result) => {
    //       if (error) throw error;
    //       screenshotUrl = result.secure_url;
    //     }
    //   );

    //   // convert buffer → stream
    //   const streamifier = (await import("streamifier")).default;

    //   await new Promise((resolve, reject) => {
    //     const stream = cloudinary.uploader.upload_stream(
    //       { folder: "rma-products" },
    //       (error, result) => {
    //         if (error) reject(error);
    //         else {
    //           screenshotUrl = result.secure_url;
    //           resolve(result);
    //         }
    //       }
    //     );

    //     streamifier.createReadStream(req.file.buffer).pipe(stream);
    //   });
    // }
       let screenshotUrl = "";

if (paymentMethod === "ONLINE") {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "Payment screenshot required",
    });
  }

  const streamifier = (await import("streamifier")).default;

  try {
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "rma-products" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );

      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });

    screenshotUrl = result.secure_url;

  } catch (err) {
    console.error("Cloudinary Error:", err);
    return res.status(500).json({
      success: false,
      message: "Image upload failed",
    });
  }
}

    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      totalAmount,
      paymentMethod,

      // ✅ Dynamic payment status
       paymentStatus:
         paymentMethod === "ONLINE" ? "Paid" : "Pending",

      orderStatus: "Booked",

      // ✅ Save screenshot if exists
      screenshot: screenshotUrl,
    });

    const createdOrder = await order.save();

    res.status(201).json({
      success: true,
      message:
        paymentMethod === "ONLINE"
          ? "Payment submitted, waiting for verification"
          : "Order placed successfully",
      data: createdOrder,
    });
  } catch (error) {
    console.error("Order Error:", error);
    res.status(500).json({ message: error.message });
  }
};


// ===================================
// @desc    Create Razorpay Order
// @route   POST /api/orders/online
// ===================================
export const createOnlinePayment = async (req, res) => {
  try {
    const { orderItems, shippingAddress, totalAmount } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }

    const options = {
      amount: totalAmount * 100, // paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const razorpayOrder = await razorpay.orders.create(options);

    res.json({
      razorpayOrderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      orderItems,
      shippingAddress,
      totalAmount,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ===================================
// @desc    Verify Razorpay Payment
// @route   POST /api/orders/verify
// ===================================
export const verifyOnlinePayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      orderItems,
      shippingAddress,
      totalAmount,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ 
        success:false,
        message: "Payment verification failed" });
    }

    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      totalAmount,
      paymentMethod: "Online",
      paymentStatus: "Paid",
      orderStatus: "Paid",
      razorpayDetails: {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      },
    });

    const createdOrder = await order.save();

    res.status(201).json({
       success: true,
      message: "Payment verified & order created",
      dats:createdOrder});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ===================================
// @desc    Get Logged-in User Orders
// @route   GET /api/orders/my
// ===================================
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    //res.json(orders);
        res.json({
      success: true,
      orders
});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ===================================
// @desc    Admin: Get All Orders
// @route   GET /api/orders
// ===================================
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("user", "name email")
      .sort({ createdAt: -1 });

  //  res.json(orders);
    res.json({
  success: true,
  orders
});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};