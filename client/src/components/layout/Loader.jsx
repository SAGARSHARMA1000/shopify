import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
    </div>
  );
}