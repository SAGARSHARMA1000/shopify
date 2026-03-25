// import React from "react";
// import { useApp } from "../../context/AppContext";
// import { ShoppingBag, Package, ShoppingCart, User } from "lucide-react";

// export default function AdminDashboard() {
//   const { products, orders, setCurrentPage } = useApp();

//   const stats = [
//     {
//       label: "Total Revenue",
//       value: `$${orders.reduce((acc, o) => acc + o.total, 0).toFixed(2)}`,
//       icon: <ShoppingBag className="w-6 h-6" />,
//       color: "bg-blue-500"
//     },
//     {
//       label: "Products",
//       value: products.length,
//       icon: <Package className="w-6 h-6" />,
//       color: "bg-indigo-500"
//     },
//     {
//       label: "Orders",
//       value: orders.length,
//       icon: <ShoppingCart className="w-6 h-6" />,
//       color: "bg-green-500"
//     },
//     {
//       label: "Customers",
//       value: "1.2k",
//       icon: <User className="w-6 h-6" />,
//       color: "bg-orange-500"
//     }
//   ];

//   return (
//     <div className="space-y-10 animate-fade-in">

//       <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
//         <h1 className="text-4xl font-black">Management Dashboard</h1>

//         <div className="bg-indigo-50 p-1 rounded-xl flex flex-wrap">
//           <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-bold shadow-sm">
//             Overview
//           </button>
//           <button
//             onClick={() => setCurrentPage("admin-products")}
//             className="px-4 py-2 text-gray-500 font-bold"
//           >
//             Inventory
//           </button>
//           <button
//             onClick={() => setCurrentPage("admin-orders")}
//             className="px-4 py-2 text-gray-500 font-bold"
//           >
//             Orders
//           </button>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, i) => (
//           <div
//             key={i}
//             className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4"
//           >
//             <div className={`${stat.color} p-4 rounded-2xl text-white shadow-lg`}>
//               {stat.icon}
//             </div>
//             <div>
//               <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">
//                 {stat.label}
//               </p>
//               <p className="text-2xl font-black">{stat.value}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import React from "react";
// import { useApp } from "../../context/AppContext";
// import { ShoppingBag, Package, ShoppingCart, User } from "lucide-react";

// export default function AdminDashboard() {
//   const { products, orders, setCurrentPage } = useApp();

//   const stats = [
//     {
//       label: "Total Revenue",
//       value: `$${orders.reduce((acc, o) => acc + o.total, 0).toFixed(2)}`,
//       icon: <ShoppingBag className="w-6 h-6" />,
//     },
//     {
//       label: "Products",
//       value: products.length,
//       icon: <Package className="w-6 h-6" />,
//     },
//     {
//       label: "Orders",
//       value: orders.length,
//       icon: <ShoppingCart className="w-6 h-6" />,
//     },
//     {
//       label: "Customers",
//       value: "1.2k",
//       icon: <User className="w-6 h-6" />,
//     }
//   ];

//   return (
//     <div className="space-y-12 animate-fade-in text-white">

//       {/* Header */}
//       <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
//         <div>
//           <h1 className="text-4xl font-black text-yellow-400">
//             RMA Management Dashboard
//           </h1>
//           <p className="text-gray-400 mt-2">
//             Monitor performance, orders and inventory in real-time.
//           </p>
//         </div>

//         {/* Navigation Tabs */}
//         <div className="bg-gray-900 border border-yellow-500/20 p-1 rounded-xl flex flex-wrap gap-1">
//           <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold shadow-md">
//             Overview
//           </button>

//           <button
//             onClick={() => setCurrentPage("admin-products")}
//             className="px-4 py-2 text-gray-400 hover:text-yellow-400 font-bold transition"
//           >
//             Inventory
//           </button>

//           <button
//             onClick={() => setCurrentPage("admin-orders")}
//             className="px-4 py-2 text-gray-400 hover:text-yellow-400 font-bold transition"
//           >
//             Orders
//           </button>
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//         {stats.map((stat, i) => (
//           <div
//             key={i}
//             className="bg-gray-900 border border-gray-800 hover:border-yellow-500/40 p-6 rounded-3xl shadow-lg transition-all duration-300 flex items-center gap-5"
//           >
//             <div className="bg-linear-to-br from-yellow-500 to-yellow-400 p-4 rounded-2xl text-black shadow-md">
//               {stat.icon}
//             </div>

//             <div>
//               <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">
//                 {stat.label}
//               </p>
//               <p className="text-2xl font-black text-white mt-1">
//                 {stat.value}
//               </p>
//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }
import React, { useMemo,useEffect } from "react";
import { useApp } from "../../context/AppContext";
import { ShoppingBag, Package, ShoppingCart, User } from "lucide-react";

export default function AdminDashboard() {
  const { products, orders, setCurrentPage,currentPage,fetchAllOrders} = useApp();


 
  // ✅ FIX TOTAL REVENUE (your old code used wrong field)
  const totalRevenue = useMemo(() => {
    return orders.reduce((acc, o) => acc + (o.totalAmount || 0), 0);
  }, [orders]);

  // ✅ UNIQUE CUSTOMERS COUNT
  const totalCustomers = useMemo(() => {
    const users = new Set(
      orders.map((o) => o.user?._id || o.shippingAddress?.phone)
    );
    return users.size;
  }, [orders]);

  const stats = [
    {
      label: "Total Revenue",
      value: `₹${totalRevenue.toFixed(2)}`,
      icon: <ShoppingBag className="w-6 h-6" />,
    },
    {
      label: "Products",
      value: products.length,
      icon: <Package className="w-6 h-6" />,
    },
    {
      label: "Orders",
      value: orders.length,
      icon: <ShoppingCart className="w-6 h-6" />,
    },
    {
      label: "Customers",
      value: totalCustomers,
      icon: <User className="w-6 h-6" />,
      action: () => setCurrentPage("admin-customers"),
    }
  ];
//    useEffect(() => {
//  // fetchData();
// }, [currentPage]);
  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="space-y-12 animate-fade-in text-white">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black text-yellow-400">
            RMA Management Dashboard
          </h1>
          <p className="text-gray-400 mt-2">
            Monitor performance, orders and inventory in real-time.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-gray-900 border border-yellow-500/20 p-1 rounded-xl flex flex-wrap gap-1">
          <button 
         
             className={`px-4 py-2 rounded-lg font-bold transition ${
      currentPage === "admin-dashboard"
        ? "bg-yellow-500 text-black shadow-md"
        : "text-gray-400 hover:text-yellow-400"
    }`}
          >
            Overview
          </button>

          <button
            onClick={() => setCurrentPage("admin-products")}
          
             className={`px-4 py-2 rounded-lg font-bold transition ${
      currentPage === "admin-products"
        ? "bg-yellow-500 text-black shadow-md"
        : "text-gray-400 hover:text-yellow-400"
    }`}
          >
            Inventory
          </button>

          <button
            onClick={() => setCurrentPage("admin-orders")}
         
               className={`px-4 py-2 rounded-lg font-bold transition ${
      currentPage === "admin-orders"
        ? "bg-yellow-500 text-black shadow-md"
        : "text-gray-400 hover:text-yellow-400"
    }`}
          >
            Orders
          </button>
          
          <button
            onClick={() => setCurrentPage("edit-banner")}
          
               className={`px-4 py-2 rounded-lg font-bold transition ${
      currentPage === "edit-banner"
        ? "bg-yellow-500 text-black shadow-md"
        : "text-gray-400 hover:text-yellow-400"
    }`}
          >
            Edit Banner
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((stat, i) => (
          <div
            key={i}
            onClick={stat.action}
            className={`bg-gray-900 border border-gray-800 hover:border-yellow-500/40 p-6 rounded-3xl shadow-lg transition-all duration-300 flex items-center gap-5
             ${stat.action ? "cursor-pointer hover:scale-105" : ""} `}
          >
            <div className="bg-linear-to-br from-yellow-500 to-yellow-400 p-4 rounded-2xl text-black shadow-md">
              {stat.icon}
            </div>

            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-2xl font-black text-white mt-1">
                {stat.value}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}