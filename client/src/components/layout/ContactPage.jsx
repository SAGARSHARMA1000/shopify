import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-8 lg:px-16 py-10">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400">
          Contact Us
        </h1>
        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          We’d love to hear from you. Fill out the form and we’ll get back to you.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* LEFT - CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800 border border-yellow-500/20 rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-6 text-yellow-400">
            Send a Message
          </h2>

          <form className="space-y-5">
            
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-yellow-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* RIGHT - CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          
          {/* Card 1 */}
          <div className="bg-gray-800 border border-yellow-500/20 rounded-xl p-5 flex items-center gap-4 hover:scale-105 transition">
            <Mail className="text-yellow-400" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-400 text-sm">support@yourstore.com</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 border border-yellow-500/20 rounded-xl p-5 flex items-center gap-4 hover:scale-105 transition">
            <Phone className="text-yellow-400" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-400 text-sm">+91 9876543210</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 border border-yellow-500/20 rounded-xl p-5 flex items-center gap-4 hover:scale-105 transition">
            <MapPin className="text-yellow-400" />
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-400 text-sm">
                Bhopal, Madhya Pradesh, India
              </p>
            </div>
          </div>

          {/* MAP */}
          <div className="rounded-xl overflow-hidden border border-yellow-500/20">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Bhopal&output=embed"
              className="w-full h-48 sm:h-60 border-0"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}