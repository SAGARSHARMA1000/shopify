// export const addProduct = async (req, res) => {
//   const product = await Product.create(req.body);
//   res.json(product);
// };

// export const getProducts = async (req, res) => {
//   const { keyword, min, max, category } = req.query;

//   let query = {};

//   if (keyword) {
//     query.title = { $regex: keyword, $options: "i" };
//   }

//   if (category) {
//     query.category = category;
//   }

//   if (min || max) {
//     query.price = {};
//     if (min) query.price.$gte = Number(min);
//     if (max) query.price.$lte = Number(max);
//   }

//   const products = await Product.find(query);
//   res.json(products);
// };
import Product from "../models/Product.js";
import cloudinary from "../config/cloudinary.js";


// =============================
// @desc    Get all products
// @route   GET /api/products
// =============================
export const getProducts = async (req, res) => {
  try {
    const { keyword, min, max, category } = req.query;

    let filter = {};

    // Search by title
    if (keyword) {
      filter.title = { $regex: keyword, $options: "i" };
    }

    // Filter by category
    if (category && category !== "All") {
      filter.category = category;
    }

    // Filter by price range
    if (min || max) {
      filter.price = {};
      if (min) filter.price.$gte = Number(min);
      if (max) filter.price.$lte = Number(max);
    }

    const products = await Product.find(filter).sort({ createdAt: -1 });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// =============================
// @desc    Get single product
// @route   GET /api/products/:id
// =============================
export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// =============================
// @desc    Add new product (Admin)
// @route   POST /api/products
// =============================
export const addProduct = async (req, res) => {
  try {
    const { title, price, discount, category, description, image } = req.body;

    let imageUrl = "";

    // Upload to Cloudinary if image provided
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image, {
        folder: "rma-products",
      });

      imageUrl = uploadResponse.secure_url;
    }

    const product = new Product({
      title,
      price,
      discount,
      category,
      description,
      image: imageUrl,
      createdBy: req.user._id,
    });

    const createdProduct = await product.save();

    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// =============================
// @desc    Update product (Admin)
// @route   PUT /api/products/:id
// =============================
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const { title, price, discount, category, description, image } = req.body;

    product.title = title || product.title;
    product.price = price || product.price;
    product.discount = discount ?? product.discount;
    product.category = category || product.category;
    product.description = description || product.description;

    // If new image uploaded
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image, {
        folder: "rma-products",
      });

      product.image = uploadResponse.secure_url;
    }

    const updatedProduct = await product.save();

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// =============================
// @desc    Delete product (Admin)
// @route   DELETE /api/products/:id
// =============================
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();

    res.json({ message: "Product removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};