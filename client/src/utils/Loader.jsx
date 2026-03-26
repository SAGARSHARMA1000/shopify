// components/Loader.jsx
import React from "react";

const Loader = () => {
  const letters = ["R", "m", "a"];

  return (
    <div className="fixed inset-0 bg-[#09090b] flex flex-col items-center justify-center z-50 overflow-hidden font-sans">
      
      {/* Animation Styles */}
      <style>
        {`
          @keyframes waveGlow {
            0%, 100% { 
              transform: translateY(0px) scale(1); 
              color: #3f3f46;
              text-shadow: 0 0 0px rgba(129, 140, 248, 0);
            }
            50% { 
              transform: translateY(-24px) scale(1.1); 
              color: #ffffff; 
              text-shadow: 0 10px 25px rgba(129, 140, 248, 0.8), 0 0 10px rgba(129, 140, 248, 0.5);
            }
          }

          .animate-wave-glow {
            display: inline-block;
            animation: waveGlow 1.5s infinite ease-in-out;
          }
        `}
      </style>

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse duration-3000" />

      {/* Text */}
      <div className="relative z-10 flex items-center gap-2 sm:gap-4 select-none">
        {letters.map((letter, index) => (
          <span
            key={index}
            className="animate-wave-glow text-7xl sm:text-9xl font-black tracking-tight"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Bottom Loader */}
      <div className="absolute bottom-1/4 flex flex-col items-center gap-4 opacity-70">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" />
          <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce delay-150" />
          <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce delay-300" />
        </div>

        <span className="text-zinc-500 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
          Loading System
        </span>
      </div>
    </div>
  );
};

export default Loader;