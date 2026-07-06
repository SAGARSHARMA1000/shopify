// // components/Loader.jsx
// import React from "react";

// const Loader = () => {
//   const letters = ["R", "m", "a"];

//   return (
//     <div className="fixed inset-0 bg-[#09090b] flex flex-col items-center justify-center z-50 overflow-hidden font-sans">
      
//       {/* Animation Styles */}
//       <style>
//         {`
//           @keyframes waveGlow {
//             0%, 100% { 
//               transform: translateY(0px) scale(1); 
//               color: #3f3f46;
//               text-shadow: 0 0 0px rgba(129, 140, 248, 0);
//             }
//             50% { 
//               transform: translateY(-24px) scale(1.1); 
//               color: #ffffff; 
//               text-shadow: 0 10px 25px rgba(129, 140, 248, 0.8), 0 0 10px rgba(129, 140, 248, 0.5);
//             }
//           }

//           .animate-wave-glow {
//             display: inline-block;
//             animation: waveGlow 1.5s infinite ease-in-out;
//           }
//         `}
//       </style>

//       {/* Background Glow */}
//       <div className="absolute w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse duration-3000" />

//       {/* Text */}
//       <div className="relative z-10 flex items-center gap-2 sm:gap-4 select-none">
//         {letters.map((letter, index) => (
//           <span
//             key={index}
//             className="animate-wave-glow text-7xl sm:text-9xl font-black tracking-tight"
//             style={{ animationDelay: `${index * 0.2}s` }}
//           >
//             {letter}
//           </span>
//         ))}
//       </div>

//       {/* Bottom Loader */}
//       <div className="absolute bottom-1/4 flex flex-col items-center gap-4 opacity-70">
//         <div className="flex gap-1.5">
//           <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" />
//           <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce delay-150" />
//           <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce delay-300" />
//         </div>

//         <span className="text-zinc-500 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
//           Loading System
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Loader;
import React, { useEffect, useState } from "react";

const Loader = ({ progress: externalProgress }) => {
  const letters = ["R", "m", "a"];

  const [progress, setProgress] = useState(0);

  // Fake progress (will automatically use real progress if passed)
  useEffect(() => {
    if (externalProgress !== undefined) {
      setProgress(externalProgress);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 4;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [externalProgress]);

  const loadingMessages = [
    "Starting...",
    "Loading Products...",
    "Fetching Collections...",
    "Preparing Experience...",
    "Optimizing Images...",
    "Almost Ready...",
    "Welcome...",
  ];

  const message =
    loadingMessages[
      Math.min(
        Math.floor(progress / (100 / loadingMessages.length)),
        loadingMessages.length - 1
      )
    ];

  return (
    <div className="fixed inset-0 z-9999 overflow-hidden bg-linear-to-br from-black via-zinc-950 to-black flex items-center justify-center">

      {/* ---------------- Background ---------------- */}

      <div className="absolute w-112.5 h-112.5 rounded-full bg-indigo-500/10 blur-[120px] animate-pulse" />

      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-indigo-400/10 blur-[90px] animate-pulse" />

      <div className="absolute bottom-20 right-20 w-56 h-56 rounded-full bg-cyan-400/10 blur-[110px] animate-pulse" />

      {/* Grid */}

      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* Animation */}

      <style>{`

        @keyframes waveGlow {
          0%,100%{
            transform:translateY(0px);
            color:#3f3f46;
            text-shadow:none;
          }

          50%{
            transform:translateY(-18px) scale(1.08);
            color:white;
            text-shadow:
            0 0 12px rgba(99,102,241,.7),
            0 0 40px rgba(99,102,241,.5);
          }
        }

        .wave{
          animation:waveGlow 1.6s ease-in-out infinite;
        }

        @keyframes shimmer{
          0%{transform:translateX(-100%)}
          100%{transform:translateX(250%)}
        }

        .shimmer{
          animation:shimmer 1.2s linear infinite;
        }

      `}</style>

      {/* Content */}

      <div className="relative z-10 flex flex-col items-center">

        {/* Logo */}

        <div className="flex gap-3 select-none">

          {letters.map((letter, index) => (
            <span
              key={index}
              className="wave text-7xl sm:text-8xl md:text-9xl font-black tracking-tight"
              style={{
                animationDelay: `${index * .18}s`,
              }}
            >
              {letter}
            </span>
          ))}

        </div>

        {/* Subtitle */}

        <p className="mt-6 text-zinc-500 uppercase tracking-[0.45em] text-xs font-semibold">
          {message}
        </p>

        {/* Progress Card */}

        <div className="mt-10 w-75 sm:w-95">

          <div className="flex justify-between text-xs text-zinc-400 mb-2">
            <span>Loading</span>
            <span>{Math.min(100, Math.floor(progress))}%</span>
          </div>

          <div className="relative h-2 rounded-full bg-zinc-800 overflow-hidden">

            <div
              className="h-full rounded-full bg-linear-to-r from-indigo-500 via-violet-400 to-cyan-400 transition-all duration-300"
              style={{
                width: `${Math.min(progress, 100)}%`,
              }}
            >

              <div className="absolute inset-0 shimmer">
                <div className="w-24 h-full bg-white/30 blur-md" />
              </div>

            </div>

          </div>

        </div>

        {/* Dots */}

        <div className="mt-8 flex gap-2">

          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" />

          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:200ms]" />

          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:400ms]" />

        </div>

      </div>

    </div>
  );
};

export default Loader;