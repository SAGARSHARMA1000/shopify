import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { User, Mail, Lock, Phone, Settings } from "lucide-react";
import { registerUser } from "../api/authApi";

export default function SignupPage({ role }) {
  const { register, setCurrentPage } = useApp();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     if (!agree) {
//       alert("Please accept the terms");
//       return;
//     }

//     // register({
//     //   name,
//     //   email,
//     //   phone,
//     //   password,
//     //   role,
//     // });

// //   const {data} = await registerUser({
// //     name,
// //     email,
// //     password
// //   });

// //   localStorage.setItem("userInfo", JSON.stringify(data));

//   try {
//     const res = await registerUser(formData);
//     console.log(res.data);
//   } catch (error) {
//     console.log(error.response.data);
//   }
//   };
const handleSubmit = async (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  if (!agree) {
    alert("Please accept the terms");
    return;
  }

  try {
    const res = await registerUser({
      name,
      email,
      password
    });

   // console.log(res.data);
   // console.log("Email from localStorage:", email);
   // localStorage.setItem("userInfo", JSON.stringify(res.data));
    localStorage.setItem("verifyEmail", email);
    alert("OTP sent to your email"); 
    setCurrentPage("otp");
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10 bg-linear-to-br from-black via-gray-900 to-black">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900/90 backdrop-blur-lg border border-yellow-500/20 p-8 md:p-10 rounded-3xl shadow-2xl shadow-yellow-500/10 animate-fade-in"
      >

        {/* Header */}
        <div className="text-center mb-8 md:mb-10">

          <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-2xl bg-linear-to-r from-yellow-500 to-yellow-400 shadow-lg">
            {role === "admin" ? (
              <Settings className="text-black w-8 h-8" />
            ) : (
              <User className="text-black w-8 h-8" />
            )}
          </div>

          <h2 className="text-3xl font-black text-yellow-400">
            {role === "admin" ? "Admin Signup" : "Customer Signup"}
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Create your RMA account
          </p>
        </div>

        {/* Name */}
        <div className="relative mb-5">
          <User className="absolute left-4 top-4 w-5 h-5 text-yellow-500" />
          <input
            type="text"
            required
            placeholder="Full Name"
            className="w-full pl-12 pr-4 py-4 bg-black text-white rounded-2xl border border-gray-700 focus:border-yellow-500 focus:outline-none transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="relative mb-5">
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

        {/* Phone */}
        {/* <div className="relative mb-5">
          <Phone className="absolute left-4 top-4 w-5 h-5 text-yellow-500" />
          <input
            type="tel"
            required
            placeholder="Phone Number"
            className="w-full pl-12 pr-4 py-4 bg-black text-white rounded-2xl border border-gray-700 focus:border-yellow-500 focus:outline-none transition"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div> */}

        {/* Password */}
        <div className="relative mb-5">
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

        {/* Confirm Password */}
        <div className="relative mb-6">
          <Lock className="absolute left-4 top-4 w-5 h-5 text-yellow-500" />
          <input
            type="password"
            required
            placeholder="Confirm Password"
            className="w-full pl-12 pr-4 py-4 bg-black text-white rounded-2xl border border-gray-700 focus:border-yellow-500 focus:outline-none transition"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Terms */}
        <div className="flex items-center gap-2 mb-6 text-sm text-gray-400">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="accent-yellow-500"
          />
          <span>
            I agree to the <span className="text-yellow-400">Terms & Conditions</span>
          </span>
        </div>

        {/* Button */}
        <button
          className="w-full bg-linear-to-r from-yellow-500 to-yellow-400 text-black py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] transition shadow-lg shadow-yellow-500/30"
        >
          Create Account
        </button>

        {/* Switch to Login */}
        <div className="text-center mt-8 text-sm text-gray-400">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() =>
              setCurrentPage(role === "admin" ? "admin-login" : "login")
            }
            className="text-yellow-400 font-semibold hover:underline"
          >
            Login
          </button>
        </div>

        {/* Switch Role */}
        <div className="text-center mt-4">
          <button
            type="button"
            onClick={() =>
              setCurrentPage(role === "admin" ? "signup" : "admin-signup")
            }
            className="text-yellow-400 text-sm hover:underline"
          >
            Switch to {role === "admin" ? "Customer" : "Admin"}
          </button>
        </div>

      </form>
    </div>
  );
}