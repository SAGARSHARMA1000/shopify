import { useState } from "react";
import API from "../../api/axios";
import { useApp } from "../../context/AppContext";



export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
    const { setCurrentPage } = useApp();
  const handleForgot = async () => {
    if (!email) return alert("Enter your email");

    try {
      setLoading(true);

      const { data } = await API.post("/auth/forgot-password", { email });

      localStorage.setItem("resetEmail", email);

      alert(data.message || "OTP sent to email");

      setCurrentPage("reset-password");

    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black to-gray-900 text-white px-4">

      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg animate-fadeIn">

        <h2 className="text-2xl font-bold text-yellow-400 text-center mb-2">
          Forgot Password
        </h2>

        <p className="text-gray-400 text-center mb-6 text-sm">
          Enter your email to receive OTP
        </p>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none transition"
        />

        <button
          onClick={handleForgot}
          disabled={loading}
          className="w-full mt-5 bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition transform hover:scale-105"
        >
          {loading ? "Sending..." : "Send OTP"}
        </button>

        <p
          onClick={() => setCurrentPage("login")}
          className="text-center text-sm text-gray-400 mt-4 cursor-pointer hover:text-yellow-400"
        >
          Back to Login
        </p>
      </div>
    </div>
  );
}