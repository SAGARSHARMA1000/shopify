// import React from "react";
// import { useApp } from "../context/AppContext";
// import { getEffectivePrice } from "../utils/helpers";
// import { X, CheckCircle, ShoppingCart, Package, ChevronRight } from "lucide-react";

// export default function ProductDetailsPage() {
//   const { products, selectedProductId, addToCart, setCurrentPage } = useApp();
//   const product = products.find(p => p.id === selectedProductId);

//   if (!product) {
//     setCurrentPage("home");
//     return null;
//   }

//   const effectivePrice = getEffectivePrice(product.price, product.discount);

//   return (
//     <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 animate-fade-in">
//       <div className="grid grid-cols-1 md:grid-cols-2">

//         <div className="h-[400px] md:h-[600px] bg-gray-100 relative">
//           <img src={product.image} className="w-full h-full object-cover" alt={product.title} />

//           <button
//             onClick={() => setCurrentPage("home")}
//             className="absolute top-4 left-4 bg-white/80 p-2 rounded-full shadow-md"
//           >
//             <X className="w-6 h-6 text-gray-700" />
//           </button>
//         </div>

//         <div className="p-8 md:p-16 flex flex-col">
//           <h1 className="text-4xl font-extrabold mb-6">{product.title}</h1>
//           <p className="text-gray-600 text-lg mb-8">{product.description}</p>

//           <div className="bg-gray-50 p-6 rounded-2xl mb-8 flex justify-between">
//             <span className="text-4xl font-black text-indigo-600">${effectivePrice}</span>
//           </div>

//           <button
//             onClick={() => addToCart(product)}
//             className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all shadow-xl"
//           >
//             <ShoppingCart className="inline mr-2" /> Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { useApp } from "../context/AppContext";
import { getEffectivePrice } from "../utils/helpers";
import {
  X,
  CheckCircle,
  ShoppingCart,
  Package,
  ChevronRight
} from "lucide-react";

export default function ProductDetailsPage() {
  const { products, selectedProductId, addToCart, setCurrentPage } =
    useApp();

  const product = products.find(
    (p) => p.id === selectedProductId
  );

  if (!product) {
    setCurrentPage("home");
    return null;
  }

  const effectivePrice = getEffectivePrice(
    product.price,
    product.discount
  );

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl animate-fade-in text-white">

      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Image Section */}
        <div className="h-100 md:h-150 bg-black relative">

          <img
            src={product.image}
            className="w-full h-full object-cover"
            alt={product.title}
          />

          {/* Back Button */}
          <button
            onClick={() => setCurrentPage("home")}
            className="absolute top-4 left-4 bg-black/60 backdrop-blur-md p-2 rounded-full border border-gray-700 hover:border-yellow-500 transition"
          >
            <X className="w-6 h-6 text-yellow-400" />
          </button>

          {/* Discount Badge */}
          {product.discount > 0 && (
            <div className="absolute top-4 right-4 bg-linear-to-r from-yellow-500 to-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg">
              -{product.discount}% OFF
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="p-8 md:p-16 flex flex-col justify-center">

          {/* Category */}
          <div className="flex items-center gap-2 text-yellow-400 mb-4 text-sm font-bold uppercase tracking-wider">
            <Package className="w-4 h-4" />
            {product.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
            {product.title}
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            {product.description}
          </p>

          {/* Price Box */}
          <div className="bg-black border border-gray-700 p-6 rounded-2xl mb-10 flex items-center justify-between">

            <div>
              {product.discount > 0 && (
                <span className="text-gray-500 line-through text-lg mr-3">
                  ${product.price}
                </span>
              )}

              <span className="text-4xl font-black text-yellow-400">
                ${effectivePrice}
              </span>
            </div>

            <div className="flex items-center gap-2 text-green-400 font-bold">
              <CheckCircle className="w-5 h-5" />
              In Stock
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-linear-to-r from-yellow-500 to-yellow-400 text-black py-4 rounded-2xl font-bold text-xl hover:scale-[1.02] transition shadow-lg shadow-yellow-500/30"
          >
            <ShoppingCart className="inline mr-2" />
            Add to Cart
          </button>

          {/* Extra Info */}
          <div className="mt-8 flex items-center gap-3 text-gray-400 text-sm">
            <ChevronRight className="w-4 h-4 text-yellow-400" />
            Fast Shipping & Secure Checkout
          </div>

        </div>
      </div>
    </div>
  );
}