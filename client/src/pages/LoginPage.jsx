
import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { Settings, User, Mail, Lock } from "lucide-react";
import { loginUser } from "../api/authApi";
import Loader from "../utils/Loader";

export default function LoginPage({ role }) {
  const { login, setCurrentPage,loading} = useApp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 // const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
  e.preventDefault();
  await login(email, password, role); // ✅ only call this
};
//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   try{
//   setLoading(true);
//   await login(email, password, role);
//   setTimeout(() => {
//   setLoading(false);
// }, 80000);
//   }
//   catch (err) {
//     console.log(err);
//   } finally {
//     //setLoading(false); // 🔥 stop loader
//   }
// };
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const { data } = await loginUser({
//       email,
//       password,
//       role
//     });

//     localStorage.setItem("userInfo", JSON.stringify(data));
//     alert("Login successful");
//      // ✅ set user from backend response
//     setUser(data);
//     setCurrentPage("home");
    
//   } catch (error) {
//     alert(error.response?.data?.message || "Login failed");
//   }
// };
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-linear-to-br from-black via-gray-900 to-black">
       {loading && <Loader />} {/* ✅ FULL SCREEN */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900/90 backdrop-blur-lg border border-yellow-500/20 p-10 rounded-3xl shadow-2xl shadow-yellow-500/10 animate-fade-in"
      >
        {/* Header */}
        <div className="text-center mb-10">

          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-2xl bg-linear-to-r from-yellow-500 to-yellow-400 shadow-lg">
            {role === "admin" ? (
              <Settings className="text-black w-8 h-8" />
            ) : (
              <User className="text-black w-8 h-8" />
            )}
          </div>

          <h2 className="text-3xl font-black text-yellow-400">
            {role === "admin" ? "Admin Login" : "Customer Login"}
          </h2>

          <p className="text-gray-400 mt-2 text-sm">
            Access your RMA account securely
          </p>
        </div>

        {/* Email Field */}
        <div className="relative mb-6">
          <Mail className="absolute left-4 top-4 w-5 h-5 text-yellow-500" />
          <input
            type="email"
            required
            placeholder="Email Address"
            className="w-full pl-12 pr-4 py-4 bg-black text-white rounded-2xl border border-gray-700 focus:border-yellow-500 focus:outline-none transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Field */}
        <div className="relative mb-8">
          <Lock className="absolute left-4 top-4 w-5 h-5 text-yellow-500" />
          <input
            type="password"
            required
            placeholder="Password"
            className="w-full pl-12 pr-4 py-4 bg-black text-white rounded-2xl border border-gray-700 focus:border-yellow-500 focus:outline-none transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          className="w-full bg-linear-to-r from-yellow-500 to-yellow-400 text-black py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition shadow-lg shadow-yellow-500/30"
        >
          Sign In
        </button>

        {/* Switch Role */}
        <div className="text-center mt-8">
          <button
            type="button"
            onClick={() =>
              setCurrentPage(role === "admin" ? "login" : "admin-login")
            }
            className="text-yellow-400 font-semibold hover:underline"
          >
            Switch to {role === "admin" ? "Customer" : "Admin"}
          </button>
        </div>
        <p className="text-center text-sm text-gray-400 mt-6">
  Don't have an account?
  <button
    onClick={() => setCurrentPage("signup")}
    className="text-yellow-400 ml-1 hover:underline"
  >
    Sign Up
  </button>
</p>
      </form>
      
    </div>
  );
}