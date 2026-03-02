import React from "react";
import { useApp } from "../../context/AppContext";

export default function ToastContainer() {
  const { toasts } = useApp();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`px-6 py-3 rounded-lg shadow-lg border-l-4 ${
            toast.type === "success"
              ? "bg-green-100 border-green-500 text-green-800"
              : "bg-red-100 border-red-500 text-red-800"
          }`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}