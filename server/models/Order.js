
// import mongoose from "mongoose";

// const orderSchema = mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     orderItems: [
//       {
//         name: String,
//         image: String,
//         price: Number,
//         quantity: Number,
//         product: {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "Product",
//         },
//       },
//     ],

//     shippingAddress: {
//       name: String,
//       phone:String,
//       address: String,
//       state:String,
//       landmark:String,
//       city: String,
//       zip: String,
//     },

//     totalAmount: {
//       type: Number,
//       required: true,
//     },

//     paymentMethod: {
//       type: String,
//       enum: ["COD", "ONLINE"],
//     },

//     paymentStatus: {
//       type: String,
//       enum: ["Pending", "Paid"],
//       default: "Pending",
//     },
//     screenshot:String,
//     utr:Number,
//     orderStatus: {
//       type: String,
//       enum: ["Booked", "Paid", "Shipped", "Delivered"],
//       default: "Booked",
//     },

//     razorpayDetails: {
//       razorpay_order_id: String,
//       razorpay_payment_id: String,
//       razorpay_signature: String,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Order = mongoose.model("Order", orderSchema);

// export default Order;

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    orderItems: [
      {
        title: {
          type: String,
          required: true,
        },
        image: String,
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true, // ✅ important
        },
      },
    ],

    shippingAddress: {
      name: { type: String, required: true },
      phone: { type: String, required: true }, // ✅ string is correct
      address: { type: String, required: true },
      state: { type: String, required: true },
      landmark: { type: String }, // optional
      city: { type: String, required: true },
      zip: { type: String, required: true },
    },

    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    paymentMethod: {
      type: String,
      enum: ["COD", "ONLINE"],
      required: true,
      default: "COD",
    },

    paymentStatus: {
      type: String,
      enum: ["Pending", "Pending Verification", "Paid", "Failed"],
      default: "Pending",
    },

    screenshot: {
      type: String,
      default: "",
    },

    utr: {
      type: String, // ✅ FIXED (important)
      default: "",
    },

    orderStatus: {
      type: String,
      enum: ["Booked", "Paid", "Shipped", "Delivered", "Cancelled"],
      default: "Booked",
    },

    razorpayDetails: {
      razorpay_order_id: String,
      razorpay_payment_id: String,
      razorpay_signature: String,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;