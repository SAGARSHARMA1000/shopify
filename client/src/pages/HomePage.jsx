// import React, { useState } from "react";
// import { useApp } from "../context/AppContext";
// import { getEffectivePrice } from "../utils/helpers";
// import { Filter, Eye, Tag, Plus, Search } from "lucide-react";

// export default function HomePage() {
//   const { products, addToCart, setCurrentPage, setSelectedProductId, searchQuery } = useApp();
//   const [activeCategory, setActiveCategory] = useState("All");

//   const categories = ["All", ...new Set(products.map(p => p.category))];

//   const filteredProducts = products.filter(p => {
//     const matchesCategory = activeCategory === "All" || p.category === activeCategory;
//     const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="animate-fade-in">

//       {/* Hero */}
//       <div className="bg-indigo-600 rounded-3xl p-8 md:p-12 mb-12 text-white relative overflow-hidden shadow-2xl">
//         <div className="relative z-10 max-w-2xl">
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
//             Elevate Your Everyday Essentials
//           </h1>
//           <p className="text-indigo-100 text-lg md:text-xl mb-8 opacity-90">
//             Discover our curated collection of premium products designed for modern living.
//           </p>
//           <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl active:scale-95">
//             Shop Now
//           </button>
//         </div>
//         <div className="absolute right-0 top-0 h-full w-1/3 bg-white/10 -skew-x-12 transform translate-x-20 hidden lg:block"></div>
//       </div>

//       {/* Categories */}
//       <div className="flex flex-wrap gap-2 mb-8 items-center">
//         <span className="text-gray-500 font-medium mr-2 flex items-center gap-1">
//           <Filter className="w-4 h-4" /> Filter:
//         </span>

//         {categories.map(cat => (
//           <button
//             key={cat}
//             onClick={() => setActiveCategory(cat)}
//             className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border-2 ${
//               activeCategory === cat
//                 ? "bg-indigo-600 border-indigo-600 text-white shadow-md"
//                 : "bg-white border-gray-200 text-gray-600 hover:border-indigo-400"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {filteredProducts.map(product => {
//           const effectivePrice = getEffectivePrice(product.price, product.discount);

//           return (
//             <div
//               key={product.id}
//               className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100 flex flex-col h-full"
//             >
//               <div className="relative h-64 overflow-hidden bg-gray-200">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />

//                 <button
//                   onClick={() => {
//                     setSelectedProductId(product.id);
//                     setCurrentPage("product-details");
//                   }}
//                   className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
//                 >
//                   <div className="bg-white text-gray-900 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
//                     <Eye className="w-4 h-4" /> View Details
//                   </div>
//                 </button>

//                 <div className="absolute top-4 left-4 flex flex-col gap-2">
//                   <span className="bg-white/90 backdrop-blur-sm text-indigo-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
//                     {product.category}
//                   </span>
//                   {product.discount > 0 && (
//                     <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
//                       <Tag className="w-3 h-3" /> -{product.discount}%
//                     </span>
//                   )}
//                 </div>
//               </div>

//               <div className="p-6 flex flex-col flex-grow">
//                 <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1">
//                   {product.title}
//                 </h3>
//                 <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
//                   {product.description}
//                 </p>

//                 <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
//                   <div>
//                     {product.discount > 0 && (
//                       <span className="text-gray-400 text-sm line-through block">
//                         ${product.price}
//                       </span>
//                     )}
//                     <span className="text-2xl font-black text-gray-900">
//                       ${effectivePrice}
//                     </span>
//                   </div>

//                   <button
//                     onClick={() => addToCart(product)}
//                     className="bg-indigo-600 text-white p-2.5 rounded-xl hover:bg-indigo-700 transition-all shadow-md active:scale-90"
//                   >
//                     <Plus className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {filteredProducts.length === 0 && (
//         <div className="text-center py-20 bg-white rounded-3xl shadow-inner">
//           <Search className="w-10 h-10 text-gray-400 mx-auto mb-4" />
//           <h3 className="text-xl font-bold text-gray-800">No products found</h3>
//           <p className="text-gray-500">Try adjusting filters or search.</p>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useEffect,useState,map } from "react";
import { useApp } from "../context/AppContext";
import { getEffectivePrice } from "../utils/helpers";
import { Filter, Eye, Tag, Plus, Search, Sparkles } from "lucide-react";
import logo from "../assets/rma-logo.jpeg";
import rma from "../assets/rma.png"

import { fetchProducts } from "../api/productApi";



export default function HomePage() {
  const {
    products,
    addToCart,
    setCurrentPage,
    startCheckout,
    searchQuery,user,showToast,selectedProduct
  } = useApp();

  const [activeCategory, setActiveCategory] = useState("All");

  
const categories = [
  "All",
  ...new Set((products || []).map(p => p.category))
];

  const filteredProducts = products.filter(p => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="animate-fade-in bg-black text-white min-h-screen pb-20">

      {/* ================= HERO SECTION ================= */}
      <div className="relative overflow-hidden rounded-3xl mb-16 bg-linear-to-br from-black via-gray-900 to-black shadow-[0_0_60px_rgba(255,215,0,0.2)] border border-yellow-500/20">

        {/* Animated Glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-500/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full animate-pulse"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-10 md:p-16 gap-10">

          {/* Left Content */}
          <div className="max-w-xl space-y-6">

            <div className="flex items-center gap-3">
              <Sparkles className="text-yellow-400" />
              <span className="uppercase tracking-widest text-yellow-400 text-sm font-bold">
                Premium Collection
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Elevate Your <span className="text-yellow-400">Mobile Style</span>
            </h1>

            <p className="text-gray-300 text-lg">
              Discover high-quality mobile accessories & gadgets crafted with
              performance, elegance and innovation.
            </p>

            <button
              onClick={() => setCurrentPage("hotdeals")}
              className="bg-linear-to-r from-yellow-500 to-yellow-400 text-black px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-yellow-500/40"
            >
              Explore Collection
            </button>
          </div>

          {/* Right Logo */}
          <div className="relative">
            <img
              src={rma}
              alt="RMA Logo"
              className="w-72 md:w-96 drop-shadow-[0_0_25px_rgba(255,215,0,0.4)] hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>

      {/* ================= CATEGORY FILTER ================= */}
      <div className="flex flex-wrap gap-3 mb-12 items-center justify-center">
        <span className="text-yellow-400 font-semibold flex items-center gap-2">
          <Filter className="w-4 h-4" /> Filter:
        </span>

        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all border ${
              activeCategory === cat
                ? "bg-yellow-500 text-black border-yellow-400 shadow-lg shadow-yellow-400/40"
                : "bg-gray-900 text-gray-300 border-gray-700 hover:border-yellow-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ================= PRODUCTS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(product => {
          const effectivePrice = getEffectivePrice(
            product.price,
            product.discount
          );

          return (
      

            <div
  key={product.id}
  className="bg-linear-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition-all group shadow-lg hover:shadow-yellow-500/20 flex flex-col"
>
  {/* Image */}
  <div className="relative h-64 overflow-hidden">
    <img
      src={product.image[0]}
      alt={product.title}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />

    <button
      onClick={() => {
       // selectedProduct(product._id);
       // console.log("Clicked ID:", product._id);
        setCurrentPage("product-details");
      }}
      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center"
    >
      <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2">
        <Eye className="w-4 h-4" /> View Details
      </div>
    </button>

    {product.discount > 0 && (
      <span className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
        -{product.discount}%
      </span>
    )}
  </div>

  {/* Info */}
  <div className="p-6 flex flex-col grow">
    <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors">
      {product.title}
    </h3>

    <p className="text-gray-400 text-sm mb-4 grow">
      {product.description}
    </p>

    {/* Price */}
    <div className="flex items-center justify-between mt-auto mb-4">
      <div>
        {product.discount > 0 && (
          <span className="text-gray-500 line-through text-sm block">
            ₹{product.price}
          </span>
        )}
        <span className="text-2xl font-black text-yellow-400">
          ₹{effectivePrice}
        </span>
      </div>

      {/* Old Icon Button (kept) */}
      {/* <button
        onClick={() => addToCart(product)}
        className="bg-yellow-500 text-black p-3 rounded-xl hover:scale-110 transition-all shadow-lg shadow-yellow-500/40"
      >
        <Plus />
      </button> */}
    </div>

    {/* ✅ Flipkart Style Buttons */}
    <div className="flex flex-col sm:flex-row gap-3">
      
      {/* Add to Cart */}
      <button
        onClick={() => addToCart(product)}
        className="flex-1 bg-yellow-500 text-black py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-yellow-500/30"
      >
        Add to Cart
      </button>

      {/* Buy Now */}
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
        className="flex-1 bg-white text-black py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
      >
        Buy Now
      </button>
      
    </div>
  </div>
</div>
          );
        })}
      </div>

      {/* ================= EMPTY STATE ================= */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <Search className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-yellow-400">
            No Products Found
          </h3>
          <p className="text-gray-400">
            Try adjusting your filters or search keywords.
          </p>
        </div>
      )}
    </div>
  );
}