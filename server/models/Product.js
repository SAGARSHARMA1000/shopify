import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: [{
      type: String,
    },],
    video:{type:String,},
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    hotdeal: {
      type: Boolean,
      default: false
},
isCombo: {
  type: Boolean,
  default: false
},

comboProducts: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }
]
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;