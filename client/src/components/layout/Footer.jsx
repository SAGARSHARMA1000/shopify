
// import React from "react";
// import {
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
//   ShoppingBag
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-linear-to-b from-black via-gray-900 to-black text-gray-300 mt-auto border-t border-yellow-500/20">

//       {/* ================= TOP GRID SECTION ================= */}
//       <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

//         {/* Brand Column */}
//         <div>
//           <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-2 mb-6">
//             <ShoppingBag className="w-6 h-6" />
//             RMA
//           </h3>
//           <p className="text-gray-400 leading-relaxed">
//             Premium mobile accessories & gadgets crafted for performance,
//             elegance, and durability. Elevate your digital lifestyle with RMA.
//           </p>
//         </div>

//         {/* Links Column 1 */}
//         <div>
//           <h4 className="text-white font-semibold text-lg mb-6">Products</h4>
//           <ul className="space-y-3">
//             <li className="hover:text-yellow-400 cursor-pointer transition">Headphones</li>
//             <li className="hover:text-yellow-400 cursor-pointer transition">Smart Watches</li>
//             <li className="hover:text-yellow-400 cursor-pointer transition">Chargers</li>
//             <li className="hover:text-yellow-400 cursor-pointer transition">Accessories</li>
//           </ul>
//         </div>

//         {/* Links Column 2 */}
//         <div>
//           <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
//           <ul className="space-y-3">
//             <li className="hover:text-yellow-400 cursor-pointer transition">About Us</li>
//             <li className="hover:text-yellow-400 cursor-pointer transition">Careers</li>
//             <li className="hover:text-yellow-400 cursor-pointer transition">Privacy Policy</li>
//             <li className="hover:text-yellow-400 cursor-pointer transition">Terms & Conditions</li>
//           </ul>
//         </div>

//         {/* Links Column 3 */}
//         <div>
//           <h4 className="text-white font-semibold text-lg mb-6">Support</h4>
//           <ul className="space-y-3">
//             <li className="hover:text-yellow-400 cursor-pointer transition">Help Center</li>
//             <li className="hover:text-yellow-400 cursor-pointer transition">Track Order</li>
//             <li className="hover:text-yellow-400 cursor-pointer transition">Shipping Info</li>
//             <li className="hover:text-yellow-400 cursor-pointer transition">Returns</li>
//           </ul>
//         </div>

//       </div>

//       {/* ================= REGISTER CTA ================= */}
//       <div className="border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

//           <h3 className="text-xl md:text-2xl font-semibold text-white">
//             Register for free & get exclusive offers
//           </h3>

//           <button   onClick={() => setCurrentPage("signup")}
//            className="bg-linear-to-r from-yellow-500 to-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg shadow-yellow-500/30">
//             SIGN UP
//           </button>

//         </div>
//       </div>

//       {/* ================= SOCIAL ICONS ================= */}
//       <div className="border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-6 py-8 flex justify-center gap-6">

//           <div className="bg-gray-800 p-4 rounded-full hover:bg-yellow-500 hover:text-black transition cursor-pointer">
//             <Facebook />
//           </div>

//           <div className="bg-gray-800 p-4 rounded-full hover:bg-yellow-500 hover:text-black transition cursor-pointer">
//             <Twitter />
//           </div>

//           <div className="bg-gray-800 p-4 rounded-full hover:bg-yellow-500 hover:text-black transition cursor-pointer">
//             <Linkedin />
//           </div>

//           <div className="bg-gray-800 p-4 rounded-full hover:bg-yellow-500 hover:text-black transition cursor-pointer">
//             <Instagram />
//           </div>

//         </div>
//       </div>

//       {/* ================= COPYRIGHT ================= */}
//       <div className="border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
//           © {new Date().getFullYear()} RMA Mobile Accessories & Gadgets. All Rights Reserved.
//         </div>
//       </div>

//     </footer>
//   );
// }
import React from "react";
import { useApp } from "../../context/AppContext";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ShoppingBag,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

export default function Footer() {
  const { setCurrentPage } = useApp();

  return (
    <footer className="bg-linear-to-b from-black via-gray-900 to-black text-gray-300 mt-auto border-t border-yellow-500/20">

      {/* ================= TOP GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-2 mb-6">
            <ShoppingBag className="w-6 h-6" />
            RMA
          </h3>

          <p className="text-gray-400 leading-relaxed mb-6">
            Your one-stop destination for premium gadgets, accessories, and smart tech.
            Built for performance, style, and reliability.
          </p>

          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-yellow-500" />
              support@rma.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-yellow-500" />
              +91 98765 43210
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-yellow-500" />
              India
            </div>
          </div>
        </div>

        {/* SHOP */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Shop</h4>
          <ul className="space-y-3">
            <li onClick={() => setCurrentPage("home")} className="hover:text-yellow-400 cursor-pointer transition">
              All Products
            </li>
            <li onClick={() => setCurrentPage("home")} className="hover:text-yellow-400 cursor-pointer transition">
              Hot Deals
            </li>
            <li onClick={() => setCurrentPage("cart")} className="hover:text-yellow-400 cursor-pointer transition">
              Cart
            </li>
            <li onClick={() => setCurrentPage("contact")} className="hover:text-yellow-400 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* ACCOUNT */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Account</h4>
          <ul className="space-y-3">
            <li onClick={() => setCurrentPage("login")} className="hover:text-yellow-400 cursor-pointer transition">
              Login
            </li>
            <li onClick={() => setCurrentPage("signup")} className="hover:text-yellow-400 cursor-pointer transition">
              Sign Up
            </li>
            <li onClick={() => setCurrentPage("userDashboard")} className="hover:text-yellow-400 cursor-pointer transition">
              My Dashboard
            </li>
            <li onClick={() => setCurrentPage("cart")} className="hover:text-yellow-400 cursor-pointer transition">
              My Cart
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-6">Stay Updated</h4>

          <p className="text-gray-400 text-sm mb-4">
            Subscribe to get latest offers, deals and updates.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 px-4 py-2 rounded-full bg-black border border-gray-700 text-white focus:outline-none focus:border-yellow-500"
            />
            <button className="bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* ================= CTA ================= */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Join RMA & unlock exclusive deals 🚀
          </h3>

          <button
            onClick={() => setCurrentPage("signup")}
            className="bg-linear-to-r from-yellow-500 to-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg shadow-yellow-500/30"
          >
            SIGN UP
          </button>

        </div>
      </div>

      {/* ================= SOCIAL ================= */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-center gap-6">

          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <div
              key={i}
              className="bg-gray-800 p-4 rounded-full hover:bg-yellow-500 hover:text-black transition cursor-pointer"
            >
              <Icon />
            </div>
          ))}

        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} RMA. All rights reserved. Built for modern e-commerce experience.
        </div>
      </div>

    </footer>
  );
}