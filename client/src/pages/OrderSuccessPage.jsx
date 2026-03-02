// import React from "react";
// import { useApp } from "../context/AppContext";
// import { CheckCircle } from "lucide-react";

// export default function OrderSuccessPage() {
//   const { setCurrentPage } = useApp();

//   return (
//     <div className="max-w-2xl mx-auto py-20 text-center animate-bounce-in">
//       <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-6" />
//       <h1 className="text-4xl font-black mb-4">Order Placed!</h1>
//       <button
//         onClick={() => setCurrentPage("home")}
//         className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold"
//       >
//         Back to Shop
//       </button>
//     </div>
//   );
// }
import React from "react";
import { useApp } from "../context/AppContext";
import { CheckCircle, Package } from "lucide-react";

export default function OrderSuccessPage() {
  const { setCurrentPage } = useApp();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 animate-bounce-in">

      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-10 md:p-16 text-center shadow-2xl max-w-2xl w-full text-white">

        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-linear-to-r from-yellow-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-yellow-500/30">
          <CheckCircle className="w-10 h-10 text-black" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-black text-yellow-400 mb-4">
          Order Placed Successfully!
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 mb-10 leading-relaxed">
          Thank you for shopping with <span className="text-yellow-400 font-bold">RMA</span>.  
          Your order has been received and is now being processed.
        </p>

        {/* Info Box */}
        <div className="bg-black border border-gray-700 p-5 rounded-2xl mb-10 flex items-center justify-center gap-3 text-sm text-gray-400">
          <Package className="w-5 h-5 text-yellow-400" />
          You will receive a confirmation update soon.
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => setCurrentPage("home")}
            className="bg-linear-to-r from-yellow-500 to-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg shadow-yellow-500/30"
          >
            Continue Shopping
          </button>

          <button
            onClick={() => setCurrentPage("my-orders")}
            className="border border-yellow-500 text-yellow-400 px-8 py-3 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition"
          >
            View My Orders
          </button>

        </div>

      </div>
    </div>
  );
}