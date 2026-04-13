// import { useState } from "react";
// import axios from "axios";
// import { useApp } from "../../context/AppContext";
// export default function VerifyOtpPage({ email }) {
// const { register, setCurrentPage } = useApp();
// const [otp, setOtp] = useState("");

// const verifyOTP = async () => {

// try {

// await axios.post(
// "http://localhost:5000/api/auth/verify-otp",
// { email, otp }
// );

// alert("Email Verified");
// setCurrentPage("login");

// } catch (error) {

// alert(error.response.data.message);

// }

// };

// return (
// <div>

// <h2>Enter OTP</h2>

// <input
// type="text"
// placeholder="Enter OTP"
// value={otp}
// onChange={(e)=>setOtp(e.target.value)}
// />

// <button onClick={verifyOTP}>
// Verify
// </button>

// </div>
// );

// }
import { useState, useRef,useEffect } from "react";
//import API from "axios";
import API from "../../api/axios";
import { useApp } from "../../context/AppContext";

export default function VerifyOtpPage({ email }) {

  const { setCurrentPage } = useApp();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
    const [timer, setTimer] = useState(40);
const [resending, setResending] = useState(false);


  const inputsRef = useRef([]);

  useEffect(() => {
  if (timer === 0) return;

  const interval = setInterval(() => {
    setTimer((prev) => prev - 1);
  }, 1000);

  return () => clearInterval(interval);
}, [timer]);

  // Handle input change
  const handleChange = (value, index) => {

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // const verifyOTP = async () => {
  //   const finalOtp = otp.join("");
  //   const email = localStorage.getItem("verifyEmail");
  //   if (finalOtp.length !== 6) {
  //     alert("Enter complete OTP");
  //     return;
  //   }

  //   try {
  //     setLoading(true);

  //     await axios.post(
  //       "http://localhost:5000/api/auth/verify-otp",
  //       { email, otp: finalOtp }
  //     );

  //     alert("✅ Email Verified");

  //     setCurrentPage("login");

  //   } catch (error) {
  //     alert(error.response?.data?.message || "Verification failed");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const verifyOTP = async () => {
  const finalOtp = otp.join("").trim();
  const email = localStorage.getItem("verifyEmail");

  if (!email) {
    alert("Session expired. Please register again.");
    return;
  }

  if (finalOtp.length !== 6) {
    alert("Enter complete 6-digit OTP");
    return;
  }

  try {
    setLoading(true);

    const { data } = await API.post("/auth/verify-otp", {
      email,
      otp: finalOtp
    });

    alert(data.message || "Email verified successfully");

    // ✅ cleanup
    localStorage.removeItem("verifyEmail");

    // ✅ navigate properly (better than setCurrentPage)
    setCurrentPage("login");

  } catch (error) {
    alert(error.response?.data?.message || "Verification failed");
  } finally {
    setLoading(false);
  }
};


const resendOTP = async () => {
  const email = localStorage.getItem("verifyEmail");

  if (!email) {
    alert("Session expired. Please register again.");
    return;
  }

  try {
    setResending(true);

    const { data } = await API.post("/auth/resend-otp", {
      email: email.toLowerCase().trim(),
    });

    alert(data.message || "OTP resent successfully");
    setTimer(40);

  } catch (error) {
    alert(error.response?.data?.message || "Failed to resend OTP");
  } finally {
    setResending(false);
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">

      {/* Glow Background */}
      <div className="absolute w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* Card */}
      <div className="relative z-10 bg-gray-900 border border-yellow-500/20 rounded-2xl p-8 w-full max-w-md shadow-xl">

        <h2 className="text-2xl font-bold text-yellow-400 text-center mb-2">
          Verify Your Email
        </h2>

        <p className="text-gray-400 text-center mb-6 text-sm">
          Enter the 6-digit OTP sent to <br />
          <span className="text-white font-semibold">{email}</span>
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-between gap-2 mb-6">

          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-lg font-bold bg-black border border-gray-700 rounded-lg focus:border-yellow-500 focus:outline-none transition"
            />
          ))}

        </div>

        {/* Verify Button */}
        <button
          onClick={verifyOTP}
          disabled={loading}
          className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold hover:bg-yellow-400 transition disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        {/* Resend */}
        {/* <p className="text-center text-gray-400 text-sm mt-4">
          Didn’t receive OTP?{" "}
          <button
            onClick={resendOTP}
             disabled={resending}
            className="text-yellow-400 font-semibold hover:underline"
          >
             {resending ? "Resending..." : "Resend OTP"}
          </button>
        </p>
         */}
           <p className="text-center text-gray-400 text-sm mt-4">
  Didn’t receive OTP?{" "}

  {timer > 0 ? (
    <span className="text-gray-500">
      Resend in {timer}s
    </span>
  ) : (
    <button
      onClick={resendOTP}
      disabled={resending}
      className="text-yellow-400 font-semibold hover:underline disabled:opacity-50"
    >
      {resending ? "Resending..." : "Resend OTP"}
    </button>
  )}
</p>
      </div>

    </div>
  );
}