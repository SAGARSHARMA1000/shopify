// import React, { useState } from "react";
// import { useApp } from "../context/AppContext";

// export default function CheckoutPage() {
//   const { cartTotal, placeOrder } = useApp();
//   const [shipping, setShipping] = useState({
//     name: "",
//     address: "",
//     city: "",
//     zip: ""
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (Object.values(shipping).some(v => !v)) return;
//     placeOrder(shipping);
//   };

//   return (
//     <div className="max-w-4xl mx-auto animate-fade-in">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm space-y-6">
//         <input required placeholder="Full Name"
//           className="w-full p-3 bg-gray-50 rounded-xl"
//           value={shipping.name}
//           onChange={e => setShipping({...shipping, name: e.target.value})}
//         />

//         <input required placeholder="Address"
//           className="w-full p-3 bg-gray-50 rounded-xl"
//           value={shipping.address}
//           onChange={e => setShipping({...shipping, address: e.target.value})}
//         />

//         <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold">
//           Confirm & Pay (${cartTotal.toFixed(2)})
//         </button>
//       </form>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { CreditCard, Truck } from "lucide-react";

export default function CheckoutPage() {
  const { cartTotal, placeOrder } = useApp();

  const [shipping, setShipping] = useState({
    name: "",
    address: "",
    city: "",
    zip: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(shipping).some((v) => !v)) return;
    placeOrder(shipping);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 animate-fade-in text-white">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Shipping Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-gray-800 p-8 rounded-3xl shadow-xl space-y-6"
        >
          <h2 className="text-3xl font-black text-yellow-400 mb-4">
            Shipping Details
          </h2>

          <input
            required
            placeholder="Full Name"
            className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition"
            value={shipping.name}
            onChange={(e) =>
              setShipping({ ...shipping, name: e.target.value })
            }
          />

          <input
            required
            placeholder="Address"
            className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition"
            value={shipping.address}
            onChange={(e) =>
              setShipping({ ...shipping, address: e.target.value })
            }
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              required
              placeholder="City"
              className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition"
              value={shipping.city}
              onChange={(e) =>
                setShipping({ ...shipping, city: e.target.value })
              }
            />

            <input
              required
              placeholder="Zip Code"
              className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition"
              value={shipping.zip}
              onChange={(e) =>
                setShipping({ ...shipping, zip: e.target.value })
              }
            />
          </div>

          <button
            className="w-full bg-linear-to-r from-yellow-500 to-yellow-400 text-black py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition shadow-lg shadow-yellow-500/30"
          >
            Confirm & Pay (${cartTotal.toFixed(2)})
          </button>
        </form>

        {/* Order Summary Card */}
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl shadow-xl space-y-6">

          <h3 className="text-2xl font-bold text-yellow-400">
            Order Summary
          </h3>

          <div className="flex justify-between text-gray-300">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-gray-300">
            <span>Shipping</span>
            <span className="text-green-400 font-bold">Free</span>
          </div>

          <div className="border-t border-gray-700 pt-4 flex justify-between">
            <span className="text-lg font-bold">Total</span>
            <span className="text-3xl font-black text-white">
              ${cartTotal.toFixed(2)}
            </span>
          </div>

          <div className="bg-black border border-gray-700 p-4 rounded-xl flex items-center gap-4">
            <Truck className="text-yellow-400" />
            <p className="text-sm text-gray-400">
              Orders delivered within 3–5 business days.
            </p>
          </div>

          <div className="bg-black border border-gray-700 p-4 rounded-xl flex items-center gap-4">
            <CreditCard className="text-yellow-400" />
            <p className="text-sm text-gray-400">
              Secure payment processing.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}