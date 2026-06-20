// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin } from "lucide-react";

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-8 lg:px-16 py-10">
      
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-12"
//       >
//         <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400">
//           Contact Us
//         </h1>
//         <p className="text-gray-400 mt-3 text-sm sm:text-base">
//           We’d love to hear from you. Fill out the form and we’ll get back to you.
//         </p>
//       </motion.div>

//       {/* Main Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
//         {/* LEFT - CONTACT FORM */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="bg-gray-800 border border-yellow-500/20 rounded-xl p-6 shadow-lg"
//         >
//           <h2 className="text-xl font-semibold mb-6 text-yellow-400">
//             Send a Message
//           </h2>

//           <form className="space-y-5">
            
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 outline-none"
//             />

//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 outline-none"
//             />

//             <textarea
//               rows="5"
//               placeholder="Your Message"
//               className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 outline-none"
//             ></textarea>

//             <button
//               type="submit"
//               className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition duration-300 shadow-md"
//             >
//               Send Message
//             </button>
//           </form>
//         </motion.div>

//         {/* RIGHT - CONTACT INFO */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="space-y-6"
//         >
          
//           {/* Card 1 */}
//           <div className="bg-gray-800 border border-yellow-500/20 rounded-xl p-5 flex items-center gap-4 hover:scale-105 transition">
//             <Mail className="text-yellow-400" />
//             <div>
//               <p className="font-semibold">Email</p>
//               <p className="text-gray-400 text-sm">support@yourstore.com</p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-gray-800 border border-yellow-500/20 rounded-xl p-5 flex items-center gap-4 hover:scale-105 transition">
//             <Phone className="text-yellow-400" />
//             <div>
//               <p className="font-semibold">Phone</p>
//               <p className="text-gray-400 text-sm">+91 9876543210</p>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-gray-800 border border-yellow-500/20 rounded-xl p-5 flex items-center gap-4 hover:scale-105 transition">
//             <MapPin className="text-yellow-400" />
//             <div>
//               <p className="font-semibold">Location</p>
//               <p className="text-gray-400 text-sm">
//                 Bhopal, Madhya Pradesh, India
//               </p>
//             </div>
//           </div>

//           {/* MAP */}
//           <div className="rounded-xl overflow-hidden border border-yellow-500/20">
//             <iframe
//               title="map"
//               src="https://www.google.com/maps?q=Bhopal&output=embed"
//               className="w-full h-48 sm:h-60 border-0"
//               loading="lazy"
//             ></iframe>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
// import { motion } from "framer-motion";
// import { Mail, Phone, MapPin } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-8 lg:px-16 py-10">

//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center mb-14"
//       >
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400">
//           Contact Us
//         </h1>

//         <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
//           We'd love to hear from you. Chat instantly on WhatsApp or send us a message.
//         </p>
//       </motion.div>

//       {/* Main Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

//         {/* LEFT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="bg-gray-800 border border-yellow-500/20 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center"
//         >

//           {/* Character */}
//           <motion.div
//             animate={{
//               y: [0, -15, 0]
//             }}
//             transition={{
//               repeat: Infinity,
//               duration: 2
//             }}
//             className="text-[100px] sm:text-[140px]"
//           >
//             🙋‍♂️
//           </motion.div>

//           <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mt-4">
//             Need Help?
//           </h2>

//           <p className="text-gray-400 mt-5 leading-relaxed max-w-md">
//             Questions about products, shipping or orders?
//             Get a faster response by chatting with us directly on WhatsApp.
//           </p>

//           <motion.a
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             href="https://wa.me/message/SDHRV56OUTECH1"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-8 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-lg"
//           >
//             <FaWhatsapp className="text-2xl" />
//             Chat on WhatsApp
//           </motion.a>

//           <p className="text-sm text-gray-500 mt-6">
//             Usually replies within a few minutes ⚡
//           </p>
//         </motion.div>

//         {/* RIGHT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="space-y-6"
//         >

  

//           {/* Contact Cards */}
//           <div className="grid gap-4">

//             <div className="bg-gray-800 border border-yellow-500/20 rounded-2xl p-5 flex items-center gap-4 hover:border-yellow-400 transition duration-300">
//               <Mail className="text-yellow-400" />
//               <div>
//                 <p className="font-semibold">Email</p>
//                 <p className="text-gray-400 text-sm">
//                   support@rma.com
//                 </p>
//               </div>
//             </div>

//             <div className="bg-gray-800 border border-yellow-500/20 rounded-2xl p-5 flex items-center gap-4 hover:border-yellow-400 transition duration-300">
//               <Phone className="text-yellow-400" />
//               <div>
//                 <p className="font-semibold">Phone</p>
//                 <p className="text-gray-400 text-sm">
//                   +91 9876543210
//                 </p>
//               </div>
//             </div>

//             <div className="bg-gray-800 border border-yellow-500/20 rounded-2xl p-5 flex items-center gap-4 hover:border-yellow-400 transition duration-300">
//               <MapPin className="text-yellow-400" />
//               <div>
//                 <p className="font-semibold">Location</p>
//                 <p className="text-gray-400 text-sm">
//                   Bhopal, Madhya Pradesh, India
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* Map */}
//           <div className="rounded-2xl overflow-hidden border border-yellow-500/20 shadow-xl">
//             <iframe
//               title="map"
//               src="https://www.google.com/maps?q=Bhopal&output=embed"
//               className="w-full h-52 sm:h-64 lg:h-72 border-0"
//               loading="lazy"
//             />
//           </div>

//         </motion.div>

//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white px-4 sm:px-8 lg:px-16 py-12">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400">
          Contact Us
        </h1>

        <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          We'd love to hear from you. Chat instantly on WhatsApp or reach us through the details below.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          className="h-full bg-gray-900/70 backdrop-blur-lg border border-yellow-500/20 rounded-3xl p-8 shadow-xl flex flex-col items-center justify-center text-center"
        >

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[110px] sm:text-[150px]"
          >
            🙋‍♂️
          </motion.div>

          <h2 className="text-3xl font-bold text-yellow-400 mt-5">
            Need Help?
          </h2>

          <p className="text-gray-400 mt-5 max-w-md leading-relaxed">
            Questions about products, shipping or orders?
            Get a faster response by chatting directly with us on WhatsApp.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/message/SDHRV56OUTECH1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-lg"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </motion.a>

          <p className="text-gray-500 text-sm mt-6">
            Usually replies within a few minutes ⚡
          </p>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="h-full bg-gray-900/70 backdrop-blur-lg border border-yellow-500/20 rounded-3xl p-8 shadow-xl flex flex-col gap-5"
        >

          <h2 className="text-2xl font-bold text-yellow-400">
            Contact Information
          </h2>

          {/* Email */}
          <div className="bg-black/40 border border-yellow-500/10 rounded-2xl p-5 flex items-center gap-4 hover:border-yellow-400 transition">
            <Mail className="text-yellow-400" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-400 text-sm">
                support@rma.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-black/40 border border-yellow-500/10 rounded-2xl p-5 flex items-center gap-4 hover:border-yellow-400 transition">
            <Phone className="text-yellow-400" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-400 text-sm">
                +91  8109352129
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-black/40 border border-yellow-500/10 rounded-2xl p-5 flex items-center gap-4 hover:border-yellow-400 transition">
            <MapPin className="text-yellow-400" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-400 text-sm">
                Bhopal, Madhya Pradesh, India
              </p>
            </div>
          </div>

          {/* Map */}
          {/* <div className="mt-auto rounded-2xl overflow-hidden border border-yellow-500/20 shadow-xl">
            <iframe
              title="map"
              src="https://maps.app.goo.gl/NHu5xkN7X9irvPnXA"
              className="w-full h-72 border-0"
              loading="lazy"
            />

          </div> */}
           <div className="bg-black/40 border border-yellow-500/20 rounded-2xl p-6 text-center">
  <MapPin className="mx-auto text-yellow-400 mb-3" size={30} />

  <h3 className="font-bold text-lg">Visit Us</h3>

  <p className="text-gray-400 mt-2">
    Bhopal, Madhya Pradesh, India
  </p>

  <a
    href="https://maps.app.goo.gl/NHu5xkN7X9irvPnXA"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-5 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-full transition"
  >
    Open in Google Maps
  </a>
</div>
        </motion.div>

      </div>
    </div>
  );
}

