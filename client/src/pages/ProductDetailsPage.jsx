
// import React from "react";
// import { useApp } from "../context/AppContext";
// import { getEffectivePrice } from "../utils/helpers";
// import {
//   X,
//   CheckCircle,
//   ShoppingCart,
//   Package,
//   ChevronRight
// } from "lucide-react";

// export default function ProductDetailsPage() {
//   const { products, selectedProductId, addToCart, setCurrentPage } =
//     useApp();

//   const product = products.find(
//     (p) => p._id === selectedProductId
//   );

//   if (!product) {
//     setCurrentPage("home");
//     return null;
//   }

//   const effectivePrice = getEffectivePrice(
//     product.price,
//     product.discount
//   );

//   return (
//     <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl animate-fade-in text-white">

//       <div className="grid grid-cols-1 md:grid-cols-2">

//         {/* Image Section */}
//         <div className="h-100 md:h-150 bg-black relative">

//           <img
//             src={product.image}
//             className="w-full h-full object-cover"
//             alt={product.title}
//           />

//           {/* Back Button */}
//           <button
//             onClick={() => setCurrentPage("home")}
//             className="absolute top-4 left-4 bg-black/60 backdrop-blur-md p-2 rounded-full border border-gray-700 hover:border-yellow-500 transition"
//           >
//             <X className="w-6 h-6 text-yellow-400" />
//           </button>

//           {/* Discount Badge */}
//           {product.discount > 0 && (
//             <div className="absolute top-4 right-4 bg-linear-to-r from-yellow-500 to-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg">
//               -{product.discount}% OFF
//             </div>
//           )}
//         </div>

//         {/* Details Section */}
//         <div className="p-8 md:p-16 flex flex-col justify-center">

//           {/* Category */}
//           <div className="flex items-center gap-2 text-yellow-400 mb-4 text-sm font-bold uppercase tracking-wider">
//             <Package className="w-4 h-4" />
//             {product.category}
//           </div>

//           {/* Title */}
//           <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
//             {product.title}
//           </h1>

//           {/* Description */}
//           <p className="text-gray-400 text-lg mb-10 leading-relaxed">
//             {product.description}
//           </p>

//           {/* Price Box */}
//           <div className="bg-black border border-gray-700 p-6 rounded-2xl mb-10 flex items-center justify-between">

//             <div>
//               {product.discount > 0 && (
//                 <span className="text-gray-500 line-through text-lg mr-3">
//                   ₹{product.price}
//                 </span>
//               )}

//               <span className="text-4xl font-black text-yellow-400">
//                 ₹{effectivePrice}
//               </span>
//             </div>

//             <div className="flex items-center gap-2 text-green-400 font-bold">
//               <CheckCircle className="w-5 h-5" />
//               In Stock
//             </div>
//           </div>

//           {/* Add to Cart Button */}
//           <button
//             onClick={() => addToCart(product)}
//             className="w-full bg-linear-to-r from-yellow-500 to-yellow-400 text-black py-4 rounded-2xl font-bold text-xl hover:scale-[1.02] transition shadow-lg shadow-yellow-500/30"
//           >
//             <ShoppingCart className="inline mr-2" />
//             Add to Cart
//           </button>

//           {/* Extra Info */}
//           <div className="mt-8 flex items-center gap-3 text-gray-400 text-sm">
//             <ChevronRight className="w-4 h-4 text-yellow-400" />
//             Fast Shipping & Secure Checkout
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }
// import React,{useEffect} from "react";
// import { useApp } from "../context/AppContext";
// import { getEffectivePrice } from "../utils/helpers";
// import {
//   X,
//   CheckCircle,
//   ShoppingCart,
//   Package,
//   ChevronRight,
//   Flame,
//   Layers
// } from "lucide-react";

// export default function ProductDetailsPage() {

//   const { products, selectedProductId,  selectedProduct,
//     getProductById, addToCart, setCurrentPage } =
//     useApp();
//   useEffect(() => {
//   //console.log("Selected Product:", selectedProduct);
// }, [selectedProduct]);
//    useEffect(() => {
//     if (selectedProductId) {
//       getProductById(selectedProductId);
//     }
//   }, [selectedProductId]);

//   const product = selectedProduct;
//    // console.log(product);
//   // if (!product) {
//   //   setCurrentPage("home");
//   //   return null;
//   // }
// if (!product) {
//   return (
//     <div className="text-white text-center py-20">
//       Loading product...
//     </div>
//   );
// }
//   const effectivePrice = getEffectivePrice(
//     product.price,
//     product.discount
//   );

//   // Combo calculations
//   const comboItems = product.comboProducts || [];
//   const totalOriginal = comboItems.reduce(
//     (sum, item) => sum + (item?.price || 0),
//     0
//   );

//   const savings = totalOriginal - product.price;

//   return (
//     <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl text-white">

//       <div className="grid grid-cols-1 lg:grid-cols-2">

//         {/* IMAGE SECTION */}
//         <div className="relative h-75 sm:h-100 lg:h-137.5 bg-black">

//           <img
//             src={product.image}
//             className="w-full h-full object-cover"
//             alt={product.title}
//           />

//           {/* Back */}
//           <button
//             onClick={() => setCurrentPage("home")}
//             className="absolute top-4 left-4 bg-black/60 p-2 rounded-full border border-gray-700 hover:border-yellow-500"
//           >
//             <X className="w-5 h-5 text-yellow-400" />
//           </button>

//           {/* Badges */}
//           <div className="absolute top-4 right-4 flex flex-col gap-2">

//             {product.discount > 0 && (
//               <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
//                 -{product.discount}% OFF
//               </span>
//             )}

//             {product.hotdeal && (
//               <span className="bg-red-500 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
//                 <Flame className="w-4 h-4" /> Hot Deal
//               </span>
//             )}

//             {product.isCombo && (
//               <span className="bg-purple-500 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
//                 <Layers className="w-4 h-4" /> Combo
//               </span>
//             )}

//           </div>
//         </div>

//         {/* DETAILS SECTION */}
//         <div className="p-6 sm:p-10 lg:p-14 flex flex-col">

//           {/* Category */}
//           <div className="flex items-center gap-2 text-yellow-400 text-xs sm:text-sm font-bold uppercase mb-3">
//             <Package className="w-4 h-4" />
//             {product.category}
//           </div>

//           {/* Title */}
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
//             {product.title}
//           </h1>

//           {/* Description */}
//           <p className="text-gray-400 text-sm sm:text-base mb-6">
//             {product.description}
//           </p>

//           {/* COMBO SECTION */}
//           {product.isCombo && comboItems.length > 0 && (
//             <div className="mb-8">

//               <h3 className="text-lg font-bold text-yellow-400 mb-3">
//                 Combo Includes ({comboItems.length} items)
//               </h3>

//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

//                 {comboItems.map((item) => (
//                   <div
//                     key={item._id}
//                     className="bg-black border border-gray-700 rounded-xl p-2 text-center"
//                   >
//                     <img
//                       src={item.image}
//                       className="w-full h-20 object-cover rounded-md mb-2"
//                     />

//                     <p className="text-xs font-semibold line-clamp-1">
//                       {item.title}
//                     </p>

//                     <p className="text-yellow-400 text-xs font-bold">
//                       ₹{item.price}
//                     </p>
//                   </div>
//                 ))}

//               </div>

//               {/* Savings */}
//               <div className="mt-3 text-green-400 font-bold text-sm">
//                 You Save ₹{savings}
//               </div>

//             </div>
//           )}

//           {/* PRICE BOX */}
//           <div className="bg-black border border-gray-700 p-5 rounded-2xl mb-6 flex justify-between items-center">

//             <div>
//               {product.discount > 0 && (
//                 <span className="text-gray-500 line-through mr-2">
//                   ₹{product.price}
//                 </span>
//               )}

//               <span className="text-3xl font-black text-yellow-400">
//                 ₹{effectivePrice}
//               </span>
//             </div>

//             <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
//               <CheckCircle className="w-4 h-4" />
//               In Stock
//             </div>

//           </div>

//           {/* BUTTON */}
//           <button
//             onClick={() => addToCart(product)}
//             className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold text-lg hover:bg-yellow-400 transition"
//           >
//             <ShoppingCart className="inline mr-2" />
//             Add to Cart
//           </button>

//           {/* INFO */}
//           <div className="mt-5 text-gray-400 text-xs flex items-center gap-2">
//             <ChevronRight className="w-4 h-4 text-yellow-400" />
//             Fast Delivery | Secure Checkout
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import { getEffectivePrice } from "../utils/helpers";
import {
  X,
  CheckCircle,
  ShoppingCart,
  Package,
  ChevronRight,
  Flame,
  Layers
} from "lucide-react";

export default function ProductDetailsPage() {

  const { user,showToast,
    selectedProductId, setSelectedProductId,
    selectedProduct,
    getProductById,
    addToCart,startCheckout,
    setCurrentPage
  } = useApp();

  const [activeIndex, setActiveIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    if (selectedProductId) {
      getProductById(selectedProductId);
    }
  }, [selectedProductId]);

  const product = selectedProduct;

  if (!product) {
    return (
      <div className="text-white text-center py-20">
        Loading product...
      </div>
    );
  }

  const effectivePrice = getEffectivePrice(
    product.price,
    product.discount
  );

  const comboItems = product.comboProducts || [];
  const totalOriginal = comboItems.reduce(
    (sum, item) => sum + (item?.price || 0),
    0
  );
  const savings = totalOriginal - product.price;

  // 🔥 NEW: images array fallback
  // const mediaImages = product.images?.length
  //   ? product.images
  //   : [product.image];
  const imagesArray = Array.isArray(product.image)
  ? product.image
  : product.image
  ? [product.image]
  : [];
     const media = [];

// ✅ add video first
if (product.video) {
  media.push({ type: "video", src: product.video });
}

// ✅ add images
// if (product.images?.length) {
//   product.images.forEach((img) =>
//     media.push({ type: "image", src: img })
//   );
// } else if (product.image) {
//   media.push({ type: "image", src: product.image });
// }
imagesArray.forEach((img) => {
  media.push({ type: "image", src: img });
});
  const activeMedia = media[activeIndex];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl text-white">

      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* ================= IMAGE + VIDEO SECTION ================= */}
        <div className="relative bg-black p-3 sm:p-5">

          {/* 🔥 MAIN IMAGE / VIDEO */}
          <div
            className="relative w-full h-75 sm:h-100 lg:h-137.5 overflow-hidden rounded-xl"
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
          >
            {/* VIDEO */}
            {activeMedia?.type === "video" ? (
              <video
                src={product.video}
                autoPlay
                muted
                loop
                controls
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={activeMedia?.src}
                alt="product"
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  zoom ? "scale-125" : "scale-100"
                }`}
              />
            )}
          </div>

          {/* 🔥 THUMBNAILS */}
          {/* <div className="flex gap-2 mt-4 overflow-x-auto">

            {/* VIDEO THUMB */}
            {/* {product.video && (
              <div
                onClick={() => setActiveIndex(0)}
                className={`w-16 h-16 border rounded-lg cursor-pointer ${
                  activeIndex === 0
                    ? "border-yellow-400"
                    : "border-gray-700"
                }`}
              >
                <video
                  src={product.video}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}

            {mediaImages.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveIndex(i)}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border ${
                  activeIndex === i
                    ? "border-yellow-400"
                    : "border-gray-700"
                }`}
              />
            ))}
          </div> */} 
            <div className="flex gap-2 mt-4 overflow-x-auto">

  {media.map((item, index) => (
    <div
      key={index}
      onClick={() => setActiveIndex(index)}
      className={`w-16 h-16 border rounded-lg cursor-pointer ${
        activeIndex === index
          ? "border-yellow-400"
          : "border-gray-700"
      }`}
    >
      {item.type === "video" ? (
        <video
          src={item.src}
          className="w-full h-full object-cover rounded-lg"
        />
      ) : (
        <img
          src={item.src}
          className="w-full h-full object-cover rounded-lg"
        />
      )}
    </div>
  ))}
</div>

          {/* Back Button */}
          <button
            onClick={() => setCurrentPage("home")}
            className="absolute top-4 left-4 bg-black/60 p-2 rounded-full border border-gray-700 hover:border-yellow-500"
          >
            <X className="w-5 h-5 text-yellow-400" />
          </button>

          {/* Badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {product.discount > 0 && (
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                -{product.discount}% OFF
              </span>
            )}

            {product.hotdeal && (
              <span className="bg-red-500 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                <Flame className="w-4 h-4" /> Hot Deal
              </span>
            )}

            {product.isCombo && (
              <span className="bg-purple-500 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                <Layers className="w-4 h-4" /> Combo
              </span>
            )}
          </div>
        </div>

        {/* ================= DETAILS ================= */}
        <div className="p-5 sm:p-8 lg:p-12 flex flex-col">

          <div className="flex items-center gap-2 text-yellow-400 text-xs sm:text-sm font-bold uppercase mb-3">
            <Package className="w-4 h-4" />
            {product.category}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-400 text-sm sm:text-base mb-6">
            {product.description}
          </p>

          {/* COMBO */}
          {product.isCombo && comboItems.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">
                Combo Includes ({comboItems.length} items)
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {comboItems.map((item) => (
                  <div
                    key={item._id}
                    className="bg-black border border-gray-700 rounded-xl p-2 text-center"
                  >
                    <img
                      src={item.image}
                      className="w-full h-20 object-cover rounded-md mb-2"
                    />
                    <p className="text-xs font-semibold line-clamp-1">
                      {item.title}
                    </p>
                    <p className="text-yellow-400 text-xs font-bold">
                      ₹{item.price}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-3 text-green-400 font-bold text-sm">
                You Save ₹{savings}
              </div>
            </div>
          )}

          {/* PRICE */}
          <div className="bg-black border border-gray-700 p-5 rounded-2xl mb-6 flex justify-between items-center">
            <div>
              {product.discount > 0 && (
                <span className="text-gray-500 line-through mr-2">
                  ₹{product.price}
                </span>
              )}
              <span className="text-3xl font-black text-yellow-400">
                ₹{effectivePrice}
              </span>
            </div>

            <div className="flex items-center gap-2 text-green-400 text-sm font-bold">
              <CheckCircle className="w-4 h-4" />
              In Stock
            </div>
          </div>

          {/* 🔥 BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3">

            {/* Add to Cart */}
            <button
              onClick={() => addToCart(product)}
              className="flex-1 bg-yellow-500 text-black py-3 rounded-xl font-bold text-lg hover:bg-yellow-400 transition"
            >
              <ShoppingCart className="inline mr-2" />
              Add to Cart
            </button>

            {/* 🔥 BUY NOW */}
            <button
                   onClick={() => {
          if (!user) {
       showToast("Please login to continue", "error");
        setCurrentPage("login");
      return;
       }
        startCheckout([
      {
        ...product,
        quantity: 1,
      },
    ]);
  }}
              className="flex-1 bg-white text-black py-3 rounded-xl font-bold text-lg hover:bg-white-900 transition"
            >
              Buy Now
            </button>
          </div>

          <div className="mt-5 text-gray-400 text-xs flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-yellow-400" />
            Fast Delivery | Secure Checkout
          </div>
        </div>
      </div>
    </div>
  );
}