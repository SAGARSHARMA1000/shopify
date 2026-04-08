import { useState, useEffect } from "react";
import API from "../../api/axios";
import { useApp } from "../../context/AppContext";
export default function ResetPassword() {

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const { setCurrentPage } = useApp();
  
  const email = localStorage.getItem("resetEmail");

  useEffect(() => {
    if (!email) {
      setCurrentPage("forgot");
    }
  }, []);

  // ⏱️ Timer
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // auto focus next
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleReset = async () => {
    const finalOtp = otp.join("");

    if (finalOtp.length !== 6) {
      return alert("Enter complete OTP");
    }

    if (newPassword.length < 6) {
      return alert("Password must be at least 6 characters");
    }

    try {
      setLoading(true);

      const { data } = await API.post("/auth/reset-password", {
        email,
        otp: finalOtp,
        newPassword
      });

      alert(data.message || "Password reset successful");

      localStorage.removeItem("resetEmail");

      setCurrentPage("login");

    } catch (err) {
      alert(err.response?.data?.message || "Failed");
    } finally {
      setLoading(false);
    }
  };

  const resendOTP = async () => {
    try {
      await API.post("/auth/resend-otp", { email });
      alert("OTP resent");
      setTimer(30);
    } catch {
      alert("Failed to resend OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black to-gray-900 text-white px-4">

      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg animate-fadeIn">

        <h2 className="text-2xl font-bold text-yellow-400 text-center mb-2">
          Reset Password
        </h2>

        <p className="text-gray-400 text-center mb-6 text-sm">
          Enter OTP & new password
        </p>

        {/* OTP INPUT */}
        <div className="flex justify-between mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              className="w-12 h-12 text-center text-lg bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-400 outline-none transition"
            />
          ))}
        </div>

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-yellow-400 outline-none mb-4"
        />

        {/* BUTTON */}
        <button
          onClick={handleReset}
          disabled={loading}
          className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition transform hover:scale-105"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>

        {/* RESEND */}
        <p
          onClick={() => {
            if (timer === 0) resendOTP();
          }}
          className="text-center text-sm mt-4 cursor-pointer text-gray-400 hover:text-yellow-400"
        >
          {timer > 0 ? `Resend in ${timer}s` : "Resend OTP"}
        </p>
      </div>
    </div>
  );
}