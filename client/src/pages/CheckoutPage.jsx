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
// import React, { useState } from "react";
// import { useApp } from "../context/AppContext";
// import { CreditCard, Truck } from "lucide-react";

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
//     if (Object.values(shipping).some((v) => !v)) return;
//     placeOrder(shipping);
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-12 animate-fade-in text-white">

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

//         {/* Shipping Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-gray-900 border border-gray-800 p-8 rounded-3xl shadow-xl space-y-6"
//         >
//           <h2 className="text-3xl font-black text-yellow-400 mb-4">
//             Shipping Details
//           </h2>

//           <input
//             required
//             placeholder="Full Name"
//             className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition"
//             value={shipping.name}
//             onChange={(e) =>
//               setShipping({ ...shipping, name: e.target.value })
//             }
//           />

//           <input
//             required
//             placeholder="Address"
//             className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition"
//             value={shipping.address}
//             onChange={(e) =>
//               setShipping({ ...shipping, address: e.target.value })
//             }
//           />

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <input
//               required
//               placeholder="City"
//               className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition"
//               value={shipping.city}
//               onChange={(e) =>
//                 setShipping({ ...shipping, city: e.target.value })
//               }
//             />

//             <input
//               required
//               placeholder="Zip Code"
//               className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition"
//               value={shipping.zip}
//               onChange={(e) =>
//                 setShipping({ ...shipping, zip: e.target.value })
//               }
//             />
//           </div>

//           <button
//             className="w-full bg-linear-to-r from-yellow-500 to-yellow-400 text-black py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition shadow-lg shadow-yellow-500/30"
//           >
//             Confirm & Pay (${cartTotal.toFixed(2)})
//           </button>
//         </form>

//         {/* Order Summary Card */}
//         <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl shadow-xl space-y-6">

//           <h3 className="text-2xl font-bold text-yellow-400">
//             Order Summary
//           </h3>

//           <div className="flex justify-between text-gray-300">
//             <span>Subtotal</span>
//             <span>${cartTotal.toFixed(2)}</span>
//           </div>

//           <div className="flex justify-between text-gray-300">
//             <span>Shipping</span>
//             <span className="text-green-400 font-bold">Free</span>
//           </div>

//           <div className="border-t border-gray-700 pt-4 flex justify-between">
//             <span className="text-lg font-bold">Total</span>
//             <span className="text-3xl font-black text-white">
//               ${cartTotal.toFixed(2)}
//             </span>
//           </div>

//           <div className="bg-black border border-gray-700 p-4 rounded-xl flex items-center gap-4">
//             <Truck className="text-yellow-400" />
//             <p className="text-sm text-gray-400">
//               Orders delivered within 3–5 business days.
//             </p>
//           </div>

//           <div className="bg-black border border-gray-700 p-4 rounded-xl flex items-center gap-4">
//             <CreditCard className="text-yellow-400" />
//             <p className="text-sm text-gray-400">
//               Secure payment processing.
//             </p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { useApp } from "../context/AppContext";
// import { CreditCard, Truck, } from "lucide-react";

// export default function CheckoutPage() {
//   const { cartTotal, placeOrder } = useApp();

//   const [shipping, setShipping] = useState({
//     name: "",
//     address: "",
//     city: "",
//     zip: ""
//   });

//   // NEW: payment method state
//   const [paymentMethod, setPaymentMethod] = useState("COD");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (Object.values(shipping).some((v) => !v)) return;

//    await placeOrder({
//      // NEW: send shipping + payment method to backend
//       shipping,
//       paymentMethod
//     });
//     alert("Product added successfully");

//   };

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-12 animate-fade-in text-white">

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

//         {/* Shipping Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-gray-900 border border-gray-800 p-8 rounded-3xl shadow-xl space-y-6"
//         >
//           <h2 className="text-3xl font-black text-yellow-400 mb-4">
//             Shipping Details
//           </h2>

//           <input
//             required
//             placeholder="Full Name"
//             className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition"
//             value={shipping.name}
//             onChange={(e) =>
//               setShipping({ ...shipping, name: e.target.value })
//             }
//           />

//           <input
//             required
//             placeholder="Address"
//             className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition"
//             value={shipping.address}
//             onChange={(e) =>
//               setShipping({ ...shipping, address: e.target.value })
//             }
//           />

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <input
//               required
//               placeholder="City"
//               className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition"
//               value={shipping.city}
//               onChange={(e) =>
//                 setShipping({ ...shipping, city: e.target.value })
//               }
//             />

//             <input
//               required
//               placeholder="Zip Code"
//               className="w-full p-4 bg-black text-white border border-gray-700 rounded-xl focus:border-yellow-500 focus:outline-none transition"
//               value={shipping.zip}
//               onChange={(e) =>
//                 setShipping({ ...shipping, zip: e.target.value })
//               }
//             />
//           </div>

//           {/* NEW: Payment Method Selection */}
//           <div className="space-y-3">
//             <h3 className="text-lg font-bold text-yellow-400">
//               Select Payment Method
//             </h3>

//             <label className="flex items-center gap-3 bg-black border border-gray-700 p-3 rounded-xl cursor-pointer">
//               <input
//                 type="radio"
//                 value="COD"
//                 checked={paymentMethod === "COD"}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//               />
//               Cash On Delivery
//             </label>

//             <label className="flex items-center gap-3 bg-black border border-gray-700 p-3 rounded-xl cursor-pointer">
//               <input
//                 type="radio"
//                 value="ONLINE"
//                 checked={paymentMethod === "ONLINE"}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//               />
//               Online Payment
//             </label>
//           </div>

//           <button
//             className="w-full bg-linear-to-r from-yellow-500 to-yellow-400 text-black py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition shadow-lg shadow-yellow-500/30"
//           >
//             Confirm & Pay (₹{cartTotal.toFixed(2)})
//           </button>
//         </form>

//         {/* Order Summary Card */}
//         <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl shadow-xl space-y-6">

//           <h3 className="text-2xl font-bold text-yellow-400">
//             Order Summary
//           </h3>

//           <div className="flex justify-between text-gray-300">
//             <span>Subtotal</span>
//             <span>₹{cartTotal.toFixed(2)}</span>
//           </div>

//           <div className="flex justify-between text-gray-300">
//             <span>Shipping</span>
//             <span className="text-green-400 font-bold">Free</span>
//           </div>

//           <div className="border-t border-gray-700 pt-4 flex justify-between">
//             <span className="text-lg font-bold">Total</span>
//             <span className="text-3xl font-black text-white">
//               ₹{cartTotal.toFixed(2)}
//             </span>
//           </div>

//           <div className="bg-black border border-gray-700 p-4 rounded-xl flex items-center gap-4">
//             <Truck className="text-yellow-400" />
//             <p className="text-sm text-gray-400">
//               Orders delivered within 3–5 business days.
//             </p>
//           </div>

//           <div className="bg-black border border-gray-700 p-4 rounded-xl flex items-center gap-4">
//             <CreditCard className="text-yellow-400" />
//             <p className="text-sm text-gray-400">
//               Secure payment processing.
//             </p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import { useApp } from "../context/AppContext";
// import { CreditCard, Truck } from "lucide-react";
// import paymentQr from "../assets/paymentQr.jpeg"

// export default function CheckoutPage() {
//   const { cartTotal, placeOrder,cart } = useApp();

//   const [shipping, setShipping] = useState({
//     name: "",
//     phone: "", // ✅ NEW FIELD
//     address: "",
//     city: "",
//     zip: ""
//   });

//   const [paymentMethod, setPaymentMethod] = useState("COD");

//   // ✅ NEW: screenshot state
//   const [screenshot, setScreenshot] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.log("Submitting Cart:", cart);
//   //console.log("Submitting Total:", cartTotal);
//     if (Object.values(shipping).some((v) => !v)) return;

//     // ✅ if online payment → screenshot required
//     if (paymentMethod === "ONLINE" && !screenshot) {
//       alert("Please upload payment screenshot");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("shippingAddress", JSON.stringify(shipping));
//     formData.append("orderItems", JSON.stringify(cart)); // ✅ ADD THIS
//     formData.append("totalAmount", cartTotal);
//     formData.append("paymentMethod", paymentMethod);

//     if (screenshot) {
//       formData.append("screenshot", screenshot);
//     }
//    //  console.log("Cart:", cart);
//    //  console.log("CartTotal:", cartTotal);
//     await placeOrder(formData);

//     alert(
//       paymentMethod === "COD"
//         ? "Order placed successfully!"
//         : "Order placed successfully! Waiting for admin verification."
//     );
//   };

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-12 animate-fade-in text-white">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

//         {/* ================= LEFT: FORM ================= */}
//         <form
//           onSubmit={handleSubmit}
//           className="bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6"
//         >
//           <h2 className="text-2xl sm:text-3xl font-black text-yellow-400">
//             Shipping Details
//           </h2>

//           <input
//             required
//             placeholder="Full Name"
//             className="w-full p-4 bg-black border border-gray-700 rounded-xl focus:border-yellow-500 outline-none"
//             value={shipping.name}
//             onChange={(e) =>
//               setShipping({ ...shipping, name: e.target.value })
//             }
//           />

//           {/* ✅ NEW: PHONE FIELD */}
//           <input
//             required
//             type="tel"
//             placeholder="Mobile Number"
//             className="w-full p-4 bg-black border border-gray-700 rounded-xl focus:border-yellow-500 outline-none"
//             value={shipping.phone}
//             onChange={(e) =>
//               setShipping({ ...shipping, phone: e.target.value })
//             }
//           />

//           <input
//             required
//             placeholder="Address"
//             className="w-full p-4 bg-black border border-gray-700 rounded-xl focus:border-yellow-500 outline-none"
//             value={shipping.address}
//             onChange={(e) =>
//               setShipping({ ...shipping, address: e.target.value })
//             }
//           />

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <input
//               required
//               placeholder="City"
//               className="w-full p-4 bg-black border border-gray-700 rounded-xl focus:border-yellow-500 outline-none"
//               value={shipping.city}
//               onChange={(e) =>
//                 setShipping({ ...shipping, city: e.target.value })
//               }
//             />

//             <input
//               required
//               placeholder="Zip Code"
//               className="w-full p-4 bg-black border border-gray-700 rounded-xl focus:border-yellow-500 outline-none"
//               value={shipping.zip}
//               onChange={(e) =>
//                 setShipping({ ...shipping, zip: e.target.value })
//               }
//             />
//           </div>

//           {/* ================= PAYMENT ================= */}
//           <div className="space-y-3">
//             <h3 className="text-lg font-bold text-yellow-400">
//               Select Payment Method
//             </h3>

//             <label className="flex items-center gap-3 bg-black border border-gray-700 p-3 rounded-xl cursor-pointer">
//               <input
//                 type="radio"
//                 value="COD"
//                 checked={paymentMethod === "COD"}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//               />
//               Cash On Delivery
//             </label>

//             <label className="flex items-center gap-3 bg-black border border-gray-700 p-3 rounded-xl cursor-pointer">
//               <input
//                 type="radio"
//                 value="ONLINE"
//                 checked={paymentMethod === "ONLINE"}
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//               />
//               Online (UPI QR)
//             </label>
//           </div>

//           {/* ================= QR SECTION ================= */}
//           {paymentMethod === "ONLINE" && (
//             <div className="bg-black border border-gray-700 p-4 rounded-xl text-center space-y-4">

//               <p className="text-yellow-400 font-semibold">
//                 Scan & Pay ₹{cartTotal.toFixed(2)}
//               </p>

//               {/* 🔁 Replace with your QR image */}
//               <img
//                 src={paymentQr}
//                 alt="UPI QR"
//                 className="w-40 mx-auto rounded-lg"
//               />

//               {/* Upload Screenshot */}
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setScreenshot(e.target.files[0])}
//                 className="w-full text-sm"
//               />

//               {/* ✅ SMALL NOTE */}
//               <p className="text-xs text-gray-400">
//                 * Upload payment screenshot after completing payment.  
//                 Orders will be confirmed after verification.
//               </p>
//             </div>
//           )}

//           {/* ================= BUTTON ================= */}
//           <button
//             className="w-full bg-linear-to-r from-yellow-500 to-yellow-400 text-black py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition"
//           >
//             {paymentMethod === "COD"
//               ? "Book Your Order"
//               : `Confirm Payment ₹${cartTotal.toFixed(2)}`}
//           </button>
//         </form>

//         {/* ================= RIGHT: SUMMARY ================= */}
//         <div className="bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">

//           <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">
//             Order Summary
//           </h3>

//           <div className="flex justify-between text-gray-300">
//             <span>Subtotal</span>
//             <span>₹{cartTotal.toFixed(2)}</span>
//           </div>

//           <div className="flex justify-between text-gray-300">
//             <span>Shipping</span>
//             <span className="text-green-400 font-bold">Free</span>
//           </div>

//           <div className="border-t border-gray-700 pt-4 flex justify-between">
//             <span className="font-bold">Total</span>
//             <span className="text-2xl font-black">
//               ₹{cartTotal.toFixed(2)}
//             </span>
//           </div>

//           <div className="bg-black border border-gray-700 p-4 rounded-xl flex gap-3">
//             <Truck className="text-yellow-400" />
//             <p className="text-sm text-gray-400">
//               Delivery in 3–5 days
//             </p>
//           </div>

//           <div className="bg-black border border-gray-700 p-4 rounded-xl flex gap-3">
//             <CreditCard className="text-yellow-400" />
//             <p className="text-sm text-gray-400">
//               Secure checkout
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { CreditCard, Truck } from "lucide-react";
import paymentQr from "../assets/paymentQr.jpeg";
import { downloadQr } from "../utils/downloadQr";
import { getEffectivePrice } from "../utils/helpers";
export default function CheckoutPage() {
  const {currentPage, cartTotal, placeOrder, cart,checkoutItems,selectedProduct} = useApp();
  const [shipping, setShipping] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    state: "",
    landmark: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [screenshot, setScreenshot] = useState(null);
  const [utr, setUtr] = useState("");
  const items = checkoutItems || [];
  const isValidPhone = (phone) => {
  return /^[6-9]\d{9}$/.test(phone); // Indian number
};

const selectedTotal = items.reduce((acc, item) => {
  const price = getEffectivePrice(item.price, item.discount);
  return acc + price * (item.quantity || 1);
}, 0);
  const handleSubmit = async (e) => {
    e.preventDefault();
     if (!isValidPhone(shipping.phone)) {
    alert("Enter valid 10-digit mobile number");
    return;
  }
    if (Object.values({ ...shipping, landmark: "ok" }).some((v) => !v)) return;

    if (paymentMethod === "ONLINE" && !screenshot) {
      alert("Please upload payment screenshot");
      return;
    }

    const formData = new FormData();
    formData.append("shippingAddress", JSON.stringify(shipping));
    formData.append(
      "orderItems",
      JSON.stringify(
        items.map((item) => ({
          title: item.title,
          image: Array.isArray(item.image) ? item.image[0] : item.image,
          price: item.price,
          quantity: item.quantity,
          product: item._id,
        }))
      )
    );
    //formData.append("orderItems", JSON.stringify(items));
    formData.append("totalAmount", selectedTotal);
    formData.append("paymentMethod", paymentMethod);
    formData.append("utr", utr);

    if (screenshot) formData.append("screenshot", screenshot);

    await placeOrder(formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* ================= LEFT: FORM ================= */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-2 bg-linear-to-br from-gray-900 to-black border border-gray-800 p-6 md:p-8 rounded-3xl shadow-xl space-y-6"
        >
          <h2 className="text-3xl font-black text-yellow-400">
            Checkout
          </h2>

          {/* SECTION */}
          <div className="space-y-4">
            <p className="text-gray-400 text-sm font-bold uppercase">
              Shipping Information
            </p>

            <input
              required
              placeholder="Full Name"
              className="input"
              value={shipping.name}
              onChange={(e) =>
                setShipping({ ...shipping, name: e.target.value })
              }
            />

            <input
              required
              type="tel"
              pattern="[6-9]{1}[0-9]{9}"
              maxLength="10"
              placeholder="Mobile Number"
              className="input"
              value={shipping.phone}
              onChange={(e) =>
                setShipping({ ...shipping, phone: e.target.value })
              }
            />

            <input
              required
              placeholder="Full Address"
              className="input"
              value={shipping.address}
              onChange={(e) =>
                setShipping({ ...shipping, address: e.target.value })
              }
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="State"
                className="input"
                value={shipping.state}
                onChange={(e) =>
                  setShipping({ ...shipping, state: e.target.value })
                }
              />

              <input
                placeholder="Landmark (Optional)"
                className="input"
                value={shipping.landmark}
                onChange={(e) =>
                  setShipping({ ...shipping, landmark: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                required
                placeholder="City"
                className="input"
                value={shipping.city}
                onChange={(e) =>
                  setShipping({ ...shipping, city: e.target.value })
                }
              />

              <input
                required
                placeholder="ZIP Code"
                className="input"
                value={shipping.zip}
                onChange={(e) =>
                  setShipping({ ...shipping, zip: e.target.value })
                }
              />
            </div>
          </div>

          {/* PAYMENT */}
          <div className="space-y-4">
            <p className="text-gray-400 text-sm font-bold uppercase">
              Payment Method
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="payment-card">
                <input
                  type="radio"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>Cash on Delivery</span>
              </label>

              <label className="payment-card">
                <input
                  type="radio"
                  value="ONLINE"
                  checked={paymentMethod === "ONLINE"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>UPI / QR Payment</span>
              </label>
            </div>
          </div>

          {/* QR */}
          {paymentMethod === "ONLINE" && (
            <div className="bg-black border border-gray-700 rounded-2xl p-5 text-center space-y-4">

              <p className="text-yellow-400 font-bold text-lg">
                Pay ₹{cartTotal.toFixed(2)}
              </p>

              <img
                src={paymentQr}
                className="w-44 mx-auto rounded-xl border border-gray-700"
              />

              <button
                type="button"
                onClick={() => downloadQr(paymentQr)}
                className="text-sm text-blue-400 underline"
              >
                Download QR
              </button>

              <input
                type="file"
                onChange={(e) => setScreenshot(e.target.files[0])}
                className="input"
              />

              <input
                placeholder="Enter UTR Number"
                className="input"
                value={utr}
                onChange={(e) => setUtr(e.target.value)}
              />

              <p className="text-xs text-gray-500">
                Upload screenshot & UTR after payment
              </p>
            </div>
          )}

          {/* BUTTON */}
          <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition">
            {paymentMethod === "COD"
              ? "Place Order"
              : `Confirm Payment ₹${cartTotal.toFixed(2)}`}
          </button>
        </form>

        {/* ================= RIGHT: SUMMARY ================= */}
        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-3xl shadow-xl space-y-6 sticky top-24 h-fit">

          <h3 className="text-xl font-bold text-yellow-400">
            Order Summary
          </h3>

          {/* ITEMS */}
          <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
            {items.map((item, i) => (
              <div key={i} className="flex gap-4 items-center">
                <img
                  //src={item.image[0]}
                  src={Array.isArray(item.image) ? item.image[0] : item.image}
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="text-xs text-gray-400">
                    Qty: {item.quantity}
                  </p>
                </div>
                <p className="font-bold">
                  ₹{selectedTotal.toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="border-t border-gray-700 pt-4 space-y-2">
            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span>₹{selectedTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-green-400 font-bold">
              <span>Shipping</span>
              <span>FREE</span>
            </div>

            <div className="flex justify-between text-lg font-black">
              <span>Total</span>
              <span>₹{selectedTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* INFO */}
          <div className="bg-black border border-gray-700 p-4 rounded-xl text-xs text-gray-400 space-y-1">
            <p>✔ Secure Payment</p>
            <p>✔ Fast Delivery</p>
            <p>✔ Easy Returns</p>
          </div>
        </div>
      </div>

      {/* REUSABLE INPUT STYLE */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 14px;
            background: black;
            border: 1px solid #374151;
            border-radius: 12px;
            outline: none;
            transition: 0.2s;
          }
          .input:focus {
            border-color: #facc15;
          }
          .payment-card {
            display: flex;
            gap: 10px;
            align-items: center;
            padding: 12px;
            border: 1px solid #374151;
            border-radius: 12px;
            background: black;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}