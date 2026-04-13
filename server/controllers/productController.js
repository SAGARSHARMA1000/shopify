
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
    const product = await Product.findById(req.params.id) .populate("comboProducts", "title price image");;

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
// export const addProduct = async (req, res) => {
//     console.log("Create product request body:", req.body);
//   console.log("Request user:", req.user);
//   try {
//     const { title, price, discount, category, description, image } = req.body;

//     let imageUrl = "";

//     // Upload to Cloudinary if image provided
//     if (image) {
//       const uploadResponse = await cloudinary.uploader.upload(image, {
//         folder: "rma-products",
//       });

//       imageUrl = uploadResponse.secure_url;
//     }

//     const product = new Product({
//       title,
//       price,
//       discount,
//       category,
//       description,
//       image: imageUrl,
//       createdBy: req.user._id,
//     });

//     const createdProduct = await product.save();

//     res.status(201).json(createdProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// export const addProduct = async (req, res) => {

//   console.log("BODY:", req.body);
//   console.log("FILE:", req.file);

//   try {

//     const { title, price, discount, category, description } = req.body;

//     let imageUrl = "";

//     if (req.file) {

//       const uploadResponse = await cloudinary.uploader.upload(
//         `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
//         { folder: "rma-products" }
//       );

//       imageUrl = uploadResponse.secure_url;
//     }

//     const product = new Product({
//       title,
//       price,
//       discount,
//       category,
//       description,
//       image: imageUrl,
//       createdBy: req.user._id
//     });

//     const createdProduct = await product.save();

//     res.status(201).json(createdProduct);

//   } catch (error) {

//     console.log("Product creation error:", error);

//     res.status(500).json({
//       message: error.message
//     });

//   }

// };


export const addProduct = async (req, res) => {
 // console.log("BODY:", req.body);
 // console.log("FILE:", req.file);

  try {
    const { title, price, discount, category, description,hotdeal,isCombo } = req.body;
     const comboProducts = req.body.comboProducts
  ? JSON.parse(req.body.comboProducts)
  : [];
    let imageUrls = [];

    if (req.files?.images) {
      for (const file of req.files.images) {
      const result = await new Promise((resolve, reject) => {

        const stream = cloudinary.uploader.upload_stream(
          { folder: "rma-products/product-images" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );

        stream.end(file.buffer);
      });

      imageUrls.push(result.secure_url);
    }
  }

      // ✅ VIDEO
    let videoUrl = "";

    if (req.files?.video) {
      const file = req.files.video[0];

      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { resource_type: "video", folder: "rma-products" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(file.buffer);
      });

      videoUrl = result.secure_url;
    }
    const product = new Product({
      title,
      price,
      discount,
      category,
      description,
      hotdeal:hotdeal==="true",
      isCombo:isCombo==="true",
      comboProducts,
      image: imageUrls,
      video: videoUrl,
      createdBy: req.user._id,
    });

    const createdProduct = await product.save();

    res.status(201).json(createdProduct);

  } catch (error) {
    console.log("Product creation error:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

// =============================
// @desc    Update product (Admin)
// @route   PUT /api/products/:id
// =============================
// export const updateProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     const { title, price, discount, category, description, image } = req.body;

//     product.title = title || product.title;
//     product.price = price || product.price;
//     product.discount = discount ?? product.discount;
//     product.category = category || product.category;
//     product.description = description || product.description;

//     // If new image uploaded
//     if (image) {
//       const uploadResponse = await cloudinary.uploader.upload(image, {
//         folder: "rma-products",
//       });

//       product.image = uploadResponse.secure_url;
//     }

//     const updatedProduct = await product.save();

//     res.json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const {
      title,
      price,
      discount,
      category,
      description,
      hotdeal,
      isCombo,
    } = req.body;

    const comboProducts = req.body.comboProducts
      ? JSON.parse(req.body.comboProducts)
      : product.comboProducts;

    // ✅ update fields
    product.title = title || product.title;
    product.price = price || product.price;
    product.discount = discount ?? product.discount;
    product.category = category || product.category;
    product.description = description || product.description;
    product.hotdeal = hotdeal === "true";
    product.isCombo = isCombo === "true";
    product.comboProducts = comboProducts;

    // ✅ FIX: handle image from multer
    if (req.files?.images) {
        let imageUrls = [];

  for (const file of req.files.images) {
      const result = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "rma-products" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );

       imageUrls.push(result.secure_url);
      });}

      product.image =imageUrls;
    }
    if (req.files?.video) {
  const file = req.files.video[0];

  const result = await cloudinary.uploader.upload_stream(
    { resource_type: "video", folder: "rma-products" },
    (error, result) => result
  );

  product.video = result.secure_url;
}

    const updatedProduct = await product.save();

    res.json(updatedProduct);

  } catch (error) {
    console.log("UPDATE ERROR:", error); // 🔥 debug
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




// GET ALL HOT DEAL PRODUCTS
export const getHotDeals = async (req, res) => {
  try {

    const products = await Product.find({ hotdeal: true })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      products
    });

  } catch (error) {
    
    console.error("Hot deals error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch hot deals"
    });

  }
};


// GET LATEST HOT DEAL (ADVERTISEMENT)
export const getLatestHotDeal = async (req, res) => {
  try {

    const product = await Product
      .findOne({ hotdeal: true })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      product
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Failed to fetch latest hot deal"
    });

  }
};