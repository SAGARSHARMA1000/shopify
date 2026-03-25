// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   items: [
//     {
//       product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
//       quantity: Number
//     }
//   ],
//   totalAmount: Number,
//   paymentMethod: {
//     type: String,
//     enum: ["COD", "ONLINE"]
//   },
//   paymentStatus: {
//     type: String,
//     enum: ["Pending", "Paid"],
//     default: "Pending"
//   },
//   orderStatus: {
//     type: String,
//     enum: ["Booked", "Shipped", "Delivered"],
//     default: "Booked"
//   }
// }, { timestamps: true });

// export default mongoose.model("Order", orderSchema);
import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    orderItems: [
      {
        name: String,
        image: String,
        price: Number,
        quantity: Number,
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      },
    ],

    shippingAddress: {
      name: String,
      phone:String,
      address: String,
      city: String,
      zip: String,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: ["COD", "ONLINE"],
    },

    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid"],
      default: "Pending",
    },
    screenshot:String,

    orderStatus: {
      type: String,
      enum: ["Booked", "Paid", "Shipped", "Delivered"],
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