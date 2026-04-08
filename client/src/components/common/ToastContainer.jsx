// import React from "react";
// import { useApp } from "../../context/AppContext";

// export default function ToastContainer() {
//   const { toasts } = useApp();

//   return (
//     <div className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0 z-50 flex flex-col gap-3 w-[90%] sm:w-auto max-w-sm">
//       {toasts.map((toast) => (
//         <div
//           key={toast.id}
//           className={`px-4 sm:px-6 py-3 rounded-xl shadow-xl border-l-4 text-sm sm:text-base font-medium animate-slide-in
//           ${
//             toast.type === "success"
//               ? "bg-green-100 border-green-500 text-green-800"
//               : "bg-red-100 border-red-500 text-red-800"
//           }`}
//         >
//           {toast.message}
//         </div>
//       ))}
//     </div>
//   );
// }
import React from "react";
import { useApp } from "../../context/AppContext";

export default function ToastContainer() {
  const { toasts } = useApp();

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-9999 flex flex-col gap-3 w-[90%] sm:w-auto max-w-sm items-center">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`px-4 sm:px-6 py-3 rounded-xl shadow-xl border-l-4 text-sm sm:text-base font-medium animate-toast
          ${
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