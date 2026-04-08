
// import React from "react";
// import { useApp } from "../context/AppContext";
// import { getEffectivePrice } from "../utils/helpers";
// import {
//   MinusCircle,
//   PlusCircle,
//   Trash2,
//   ChevronRight,
//   ShoppingCart
// } from "lucide-react";

// export default function CartPage() {
//   const {
//     cart,
//     removeFromCart,
//     updateCartQuantity,
//     cartTotal,
//     setCurrentPage
//   } = useApp();

//   if (cart.length === 0) {
//     return (
//       <div className="text-center py-24 bg-gray-900 border border-gray-800 rounded-3xl shadow-xl animate-fade-in">
//         <ShoppingCart className="w-14 h-14 text-yellow-500 mx-auto mb-6" />
//         <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
//           Your cart is empty
//         </h2>
//         <button
//           onClick={() => setCurrentPage("home")}
//           className="bg-linear-to-r from-yellow-500 to-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg shadow-yellow-500/30"
//         >
//           Start Shopping
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-fade-in text-white">

//       {/* Cart Items */}
//       <div className="lg:col-span-2 space-y-6">
//         {cart.map((item) => {
//           const effectivePrice = getEffectivePrice(
//             item.price,
//             item.discount
//           );

//           return (
//             <div
//               key={item._id}
//               className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center gap-6 hover:border-yellow-500/30 transition"
//             >
//               <img
//                 src={item.image}
//                 className="w-24 h-24 rounded-xl object-cover"
//                 alt=""
//               />

//               <div className="grow text-center sm:text-left">
//                 <h4 className="text-lg font-bold text-white">
//                   {item.title}
//                 </h4>
//                 <p className="text-yellow-400 font-black text-xl mt-2">
//                   ₹{effectivePrice}
//                 </p>
//               </div>

//               {/* Quantity Controls */}
//               <div className="flex items-center gap-3 bg-black border border-gray-700 px-4 py-2 rounded-xl">
//                 <button
//                   onClick={() => updateCartQuantity(item._id, -1)}
//                   className="text-yellow-400 hover:scale-110 transition"
//                 >
//                   <MinusCircle />
//                 </button>

//                 <span className="font-bold text-lg">
//                   {item.quantity}
//                 </span>

//                 <button
//                   onClick={() => updateCartQuantity(item._id, 1)}
//                   className="text-yellow-400 hover:scale-110 transition"
//                 >
//                   <PlusCircle />
//                 </button>
//               </div>

//               {/* Remove Button */}
//               <button
//                 onClick={() => removeFromCart(item._id)}
//                 className="text-red-500 hover:text-red-400 transition"
//               >
//                 <Trash2 />
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       {/* Order Summary */}
//       <div>
//         <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl shadow-xl sticky top-24">

//           <h3 className="text-xl font-bold mb-8 text-yellow-400">
//             Order Summary
//           </h3>

//           <div className="flex justify-between mb-8 text-gray-300">
//             <span>Total</span>
//             <span className="text-3xl font-black text-white">
//               ₹{cartTotal.toFixed(2)}
//             </span>
//           </div>

//           <button
//             onClick={() => setCurrentPage("checkout")}
//             className="w-full bg-linear-to-r from-yellow-500 to-yellow-400 text-black py-4 rounded-2xl font-bold hover:scale-[1.02] transition shadow-lg shadow-yellow-500/30"
//           >
//             Go to Checkout <ChevronRight className="inline ml-1" />
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { useApp } from "../context/AppContext";
// import { getEffectivePrice } from "../utils/helpers";
// import {
//   Minus,
//   Plus,
//   Trash2,
//   ChevronRight,
//   ShoppingCart
// } from "lucide-react";

// export default function CartPage() {
//   const {
//     cart,
//     removeFromCart,
//     updateCartQuantity,
//     cartTotal,
//     setCurrentPage
//   } = useApp();

//   // EMPTY CART UI
//   if (cart.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center py-24 bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-3xl shadow-xl animate-fade-in">
//         <ShoppingCart className="w-16 h-16 text-yellow-500 mb-6 animate-bounce" />
//         <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
//           Your cart is empty
//         </h2>
//         <p className="text-gray-400 mb-6">
//           Looks like you haven’t added anything yet
//         </p>
//         <button
//           onClick={() => setCurrentPage("home")}
//           className="bg-linear-to-r from-yellow-500 to-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/30"
//         >
//           Start Shopping
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-white animate-fade-in">

//       {/* CART ITEMS */}
//       <div className="lg:col-span-2 space-y-5">
//         {cart.map((item) => {
//           const effectivePrice = getEffectivePrice(
//             item.price,
//             item.discount
//           );

//           return (
//             <div
//               key={item._id}
//               className="group flex flex-col sm:flex-row items-center gap-5 bg-linear-to-br from-gray-900 to-black border border-gray-800 p-5 rounded-2xl shadow-md hover:shadow-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300"
//             >
//               {/* PRODUCT IMAGE */}
//               <div className="overflow-hidden rounded-xl">
//                 <img
//                   src={item.image}
//                   alt=""
//                   className="w-24 h-24 object-cover rounded-xl group-hover:scale-105 transition duration-300"
//                 />
//               </div>

//               {/* DETAILS */}
//               <div className="flex-1 text-center sm:text-left">
//                 <h4 className="text-lg font-semibold text-white line-clamp-2">
//                   {item.title}
//                 </h4>

//                 <p className="text-yellow-400 font-bold text-xl mt-2">
//                   ₹{effectivePrice}
//                 </p>
//               </div>

//               {/* QUANTITY CONTROLS */}
//               <div className="flex items-center gap-3 bg-black/60 border border-gray-700 px-3 py-2 rounded-xl backdrop-blur-md">
//                 <button
//                   onClick={() => updateCartQuantity(item._id, -1)}
//                   className="p-1 rounded-full hover:bg-gray-800 transition"
//                 >
//                   <Minus className="text-yellow-400 w-4 h-4" />
//                 </button>

//                 <span className="font-semibold text-lg w-6 text-center">
//                   {item.quantity}
//                 </span>

//                 <button
//                   onClick={() => updateCartQuantity(item._id, 1)}
//                   className="p-1 rounded-full hover:bg-gray-800 transition"
//                 >
//                   <Plus className="text-yellow-400 w-4 h-4" />
//                 </button>
//               </div>

//               {/* REMOVE BUTTON */}
//               <button
//                 onClick={() => removeFromCart(item._id)}
//                 className="flex items-center gap-1 text-sm text-gray-400 hover:text-red-400 transition"
//               >
//                 <Trash2 className="w-4 h-4" />
//                 Remove
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       {/* ORDER SUMMARY */}
//       <div>
//         <div className="bg-linear-to-br from-gray-900 to-black border border-gray-800 p-6 md:p-8 rounded-3xl shadow-xl sticky top-24 backdrop-blur-md">

//           <h3 className="text-xl font-semibold mb-6 text-yellow-400">
//             Order Summary
//           </h3>

//           {/* TOTAL */}
//           <div className="flex justify-between items-center mb-6 text-gray-300 border-b border-gray-800 pb-4">
//             <span>Total Amount</span>
//             <span className="text-3xl font-bold text-white">
//               ₹{cartTotal.toFixed(2)}
//             </span>
//           </div>

//           {/* CHECKOUT BUTTON */}
//           <button
//             onClick={() => setCurrentPage("checkout")}
//             className="w-full bg-linear-to-r from-yellow-500 to-yellow-400 text-black py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-yellow-500/30"
//           >
//             Proceed to Checkout
//             <ChevronRight />
//           </button>

//           {/* SMALL NOTE */}
//           <p className="text-xs text-gray-500 mt-4 text-center">
//             Taxes & shipping calculated at checkout
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { getEffectivePrice } from "../utils/helpers";
import {
  Minus,
  Plus,
  Trash2,
  ChevronRight,
  ShoppingCart
} from "lucide-react";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateCartQuantity,
    setCurrentPage
  } = useApp();

  const [selectedItems, setSelectedItems] = useState([]);

  // Select all items by default
  useEffect(() => {
    setSelectedItems(cart.map((item) => item._id));
  }, [cart]);

  // Toggle single item
  const toggleItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // Toggle all
  const toggleAll = () => {
    if (selectedItems.length === cart.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cart.map((item) => item._id));
    }
  };

  // Calculate total for selected items only
  const selectedTotal = cart.reduce((total, item) => {
    if (selectedItems.includes(item._id)) {
      const price = getEffectivePrice(item.price, item.discount);
      return total + price * item.quantity;
    }
    return total;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-3xl shadow-xl">
        <ShoppingCart className="w-16 h-16 text-yellow-500 mb-6 animate-bounce" />
        <h2 className="text-2xl font-bold text-white mb-4">
          Your cart is empty
        </h2>
        <button
          onClick={() => setCurrentPage("home")}
          className="bg-linear-to-r from-yellow-500 to-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-white">

      {/* LEFT SIDE */}
      <div className="lg:col-span-2 space-y-5">

        {/* SELECT ALL */}
        <div className="flex items-center gap-3 px-2">
          <input
            type="checkbox"
            checked={selectedItems.length === cart.length}
            onChange={toggleAll}
            className="w-4 h-4 accent-yellow-500"
          />
          <span className="text-gray-300 font-medium">
            Select All ({cart.length} items)
          </span>
        </div>

        {/* CART ITEMS */}
        {cart.map((item) => {
          const effectivePrice = getEffectivePrice(
            item.price,
            item.discount
          );

          const isSelected = selectedItems.includes(item._id);

          return (
            <div
              key={item._id}
              className={`group flex flex-col sm:flex-row items-center gap-5 p-5 rounded-2xl border transition-all duration-300 ${
                isSelected
                  ? "border-yellow-500/40 bg-linear-to-br from-gray-900 to-black"
                  : "border-gray-800 bg-gray-900/60 opacity-70"
              }`}
            >
              {/* CHECKBOX */}
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => toggleItem(item._id)}
                className="w-5 h-5 accent-yellow-500"
              />

              {/* IMAGE */}
              <img
                src={item.image}
                alt=""
                className="w-24 h-24 object-cover rounded-xl"
              />

              {/* DETAILS */}
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-lg font-semibold">
                  {item.title}
                </h4>
                <p className="text-yellow-400 font-bold text-xl mt-1">
                  ₹{effectivePrice}
                </p>
              </div>

              {/* QUANTITY */}
              <div className="flex items-center gap-3 bg-black/60 border border-gray-700 px-3 py-2 rounded-xl">
                <button
                  onClick={() => updateCartQuantity(item._id, -1)}
                >
                  <Minus className="w-4 h-4 text-yellow-400" />
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => updateCartQuantity(item._id, 1)}
                >
                  <Plus className="w-4 h-4 text-yellow-400" />
                </button>
              </div>

              {/* REMOVE */}
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-gray-400 hover:text-red-400 transition"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          );
        })}
      </div>

      {/* RIGHT SIDE */}
      <div>
        <div className="bg-linear-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-3xl sticky top-24">

          <h3 className="text-xl font-semibold mb-6 text-yellow-400">
            Order Summary
          </h3>

          <div className="flex justify-between mb-4 text-gray-400">
            <span>Selected Items</span>
            <span>{selectedItems.length}</span>
          </div>

          <div className="flex justify-between mb-6 text-gray-300 border-b border-gray-800 pb-4">
            <span>Total</span>
            <span className="text-2xl font-bold text-white">
              ₹{selectedTotal.toFixed(2)}
            </span>
          </div>

          <button
            disabled={selectedItems.length === 0}
            onClick={() => setCurrentPage("checkout")}
            className={`w-full py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 transition ${
              selectedItems.length === 0
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-linear-to-r from-yellow-500 to-yellow-400 text-black hover:scale-[1.02]"
            }`}
          >
            Checkout
            <ChevronRight />
          </button>

        </div>
      </div>
    </div>
  );
}