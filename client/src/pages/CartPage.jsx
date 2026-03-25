// import React from "react";
// import { useApp } from "../context/AppContext";
// import { getEffectivePrice } from "../utils/helpers";
// import { MinusCircle, PlusCircle, Trash2, ChevronRight, ShoppingCart } from "lucide-react";

// export default function CartPage() {
//   const { cart, removeFromCart, updateCartQuantity, cartTotal, setCurrentPage } = useApp();

//   if (cart.length === 0) {
//     return (
//       <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-dashed border-gray-300">
//         <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-6" />
//         <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
//         <button
//           onClick={() => setCurrentPage("home")}
//           className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold"
//         >
//           Start Shopping
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-fade-in">

//       <div className="lg:col-span-2 space-y-6">
//         {cart.map(item => {
//           const effectivePrice = getEffectivePrice(item.price, item.discount);

//           return (
//             <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-6">
//               <img src={item.image} className="w-24 h-24 rounded-xl object-cover" alt="" />

//               <div className="flex-grow">
//                 <h4 className="text-lg font-bold">{item.title}</h4>
//                 <p className="text-indigo-600 font-black text-xl">${effectivePrice}</p>
//               </div>

//               <div className="flex items-center gap-3">
//                 <button onClick={() => updateCartQuantity(item.id, -1)}>
//                   <MinusCircle />
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => updateCartQuantity(item.id, 1)}>
//                   <PlusCircle />
//                 </button>
//               </div>

//               <button onClick={() => removeFromCart(item.id)}>
//                 <Trash2 className="text-red-400" />
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       <div>
//         <div className="bg-white p-8 rounded-3xl shadow-lg sticky top-24">
//           <h3 className="text-xl font-bold mb-6">Order Summary</h3>
//           <div className="flex justify-between mb-6">
//             <span>Total</span>
//             <span className="text-3xl font-black text-indigo-600">
//               ${cartTotal.toFixed(2)}
//             </span>
//           </div>

//           <button
//             onClick={() => setCurrentPage("checkout")}
//             className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold"
//           >
//             Go to Checkout <ChevronRight className="inline" />
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
  MinusCircle,
  PlusCircle,
  Trash2,
  ChevronRight,
  ShoppingCart
} from "lucide-react";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateCartQuantity,
    cartTotal,
    setCurrentPage
  } = useApp();

  if (cart.length === 0) {
    return (
      <div className="text-center py-24 bg-gray-900 border border-gray-800 rounded-3xl shadow-xl animate-fade-in">
        <ShoppingCart className="w-14 h-14 text-yellow-500 mx-auto mb-6" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Your cart is empty
        </h2>
        <button
          onClick={() => setCurrentPage("home")}
          className="bg-linear-to-r from-yellow-500 to-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg shadow-yellow-500/30"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-fade-in text-white">

      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-6">
        {cart.map((item) => {
          const effectivePrice = getEffectivePrice(
            item.price,
            item.discount
          );

          return (
            <div
              key={item._id}
              className="bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center gap-6 hover:border-yellow-500/30 transition"
            >
              <img
                src={item.image}
                className="w-24 h-24 rounded-xl object-cover"
                alt=""
              />

              <div className="grow text-center sm:text-left">
                <h4 className="text-lg font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-yellow-400 font-black text-xl mt-2">
                  ₹{effectivePrice}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 bg-black border border-gray-700 px-4 py-2 rounded-xl">
                <button
                  onClick={() => updateCartQuantity(item._id, -1)}
                  className="text-yellow-400 hover:scale-110 transition"
                >
                  <MinusCircle />
                </button>

                <span className="font-bold text-lg">
                  {item.quantity}
                </span>

                <button
                  onClick={() => updateCartQuantity(item._id, 1)}
                  className="text-yellow-400 hover:scale-110 transition"
                >
                  <PlusCircle />
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 hover:text-red-400 transition"
              >
                <Trash2 />
              </button>
            </div>
          );
        })}
      </div>

      {/* Order Summary */}
      <div>
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl shadow-xl sticky top-24">

          <h3 className="text-xl font-bold mb-8 text-yellow-400">
            Order Summary
          </h3>

          <div className="flex justify-between mb-8 text-gray-300">
            <span>Total</span>
            <span className="text-3xl font-black text-white">
              ₹{cartTotal.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => setCurrentPage("checkout")}
            className="w-full bg-linear-to-r from-yellow-500 to-yellow-400 text-black py-4 rounded-2xl font-bold hover:scale-[1.02] transition shadow-lg shadow-yellow-500/30"
          >
            Go to Checkout <ChevronRight className="inline ml-1" />
          </button>

        </div>
      </div>
    </div>
  );
}