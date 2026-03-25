// import React from "react";
// import { useApp } from "../../context/AppContext";
// import { Package, CreditCard, Truck, CheckCircle } from "lucide-react";

// export default function AdminOrdersPage() {
//   const { orders, updateOrderStatus } = useApp();

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "Booked":
//         return <Package className="w-4 h-4" />;
//       case "Paid":
//         return <CreditCard className="w-4 h-4" />;
//       case "Shipped":
//         return <Truck className="w-4 h-4" />;
//       case "Delivered":
//         return <CheckCircle className="w-4 h-4" />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="animate-fade-in">

//       <div className="mb-10">
//         <h2 className="text-3xl font-black">Order Management</h2>
//         <p className="text-gray-500">Manage fulfillment statuses</p>
//       </div>

//       <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-x-auto">
//         <table className="w-full text-left min-w-[800px]">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Order ID</th>
//               <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Customer</th>
//               <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Total</th>
//               <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500">Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {orders.map(order => (
//               <tr key={order.id} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 font-bold text-indigo-600">
//                   {order.id}
//                 </td>

//                 <td className="px-6 py-4">
//                   {order.shipping.name}
//                 </td>

//                 <td className="px-6 py-4 font-black">
//                   ${order.total.toFixed(2)}
//                 </td>

//                 <td className="px-6 py-4">
//                   <div className="flex items-center gap-2 mb-2">
//                     {getStatusIcon(order.status)}
//                     <span className="font-bold">{order.status}</span>
//                   </div>

//                   <select
//                     value={order.status}
//                     onChange={(e) =>
//                       updateOrderStatus(order.id, e.target.value)
//                     }
//                     className="p-2 bg-gray-50 rounded-xl text-sm font-bold"
//                   >
//                     <option value="Booked">Booked</option>
//                     <option value="Paid">Payment Done</option>
//                     <option value="Shipped">Dispatched</option>
//                     <option value="Delivered">Delivered</option>
//                   </select>
//                 </td>
//               </tr>
//             ))}

//             {orders.length === 0 && (
//               <tr>
//                 <td colSpan="4" className="py-20 text-center text-gray-400 font-bold">
//                   No orders found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
//19/3
// import React,{useEffect} from "react";
// import { useApp } from "../../context/AppContext";
// import { Package, CreditCard, Truck, CheckCircle } from "lucide-react";

// export default function AdminOrdersPage() {
//   const { orders,fetchAllOrders, updateOrderStatus ,products, setCurrentPage} = useApp();


//   const getStatusIcon = (status) => {
//     switch (status) {
//       case "Booked":
//         return <Package className="w-4 h-4" />;
//       case "Paid":
//         return <CreditCard className="w-4 h-4" />;
//       case "Shipped":
//         return <Truck className="w-4 h-4" />;
//       case "Delivered":
//         return <CheckCircle className="w-4 h-4" />;
//       default:
//         return null;
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Booked":
//         return "text-yellow-400";
//       case "Paid":
//         return "text-blue-400";
//       case "Shipped":
//         return "text-indigo-400";
//       case "Delivered":
//         return "text-green-400";
//       default:
//         return "text-gray-400";
//     }
//   };
//    useEffect(() => {
//     fetchAllOrders();
//   }, []);

//   return (
//     <div className="animate-fade-in text-white">

//       {/* Header */}
//       <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">
//         <h2 className="text-3xl md:text-4xl font-black text-yellow-400">
//           Order Management
//         </h2>
//         <p className="text-gray-400 mt-2">
//           Manage customer fulfillment statuses
//         </p>
//          <div className="bg-gray-900 border border-yellow-500/20 p-1 rounded-xl flex flex-wrap gap-1">
//           <button 
//           onClick={() => setCurrentPage("admin-dashboard")}
//           className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold shadow-md">
//             Overview
//           </button>

//           <button
//             onClick={() => setCurrentPage("admin-products")}
//             className="bg-yellow-500 px-4 py-2 text-gray-400 hover:text-yellow-400 font-bold transition"
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

//       {/* Table Container */}
//       <div className="bg-gray-900 border border-gray-800 rounded-3xl shadow-xl overflow-x-auto">

//         <table className="w-full text-left min-w-200">

//           {/* Table Head */}
//           {/* <thead className="bg-black border-b border-gray-800">
//             <tr>
//               <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
//                 Order ID
//               </th>
//               <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
//                 Customer
//               </th>
//               <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
//                 Total
//               </th>
//               <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
//                 Status
//               </th>
//             </tr>
//           </thead> */}
//           <thead className="bg-black border-b border-gray-800">
// <tr>
// <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400">
// Order ID
// </th>

// <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400">
// Customer
// </th>

// <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400">
// Products
// </th>

// <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400">
// Payment
// </th>

// <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400">
// Status
// </th>
// </tr>
// </thead>

//           {/* Table Body */}
//           {/* <tbody className="divide-y divide-gray-800">

//             {orders.map((order) => (
//               <tr
//                 key={order._id}
//                 className="hover:bg-gray-800/60 transition duration-200"
//               >
//                 {/* Order ID *
//                 <td className="px-6 py-4 font-bold text-yellow-400">
//                   {order._id}
//                 </td>

//                 {/* Customer *
//                 <td className="px-6 py-4 text-gray-300">
//                   {order.shippingAddress?.name}
//                 </td>

//                 {/* Total *
//                 <td className="px-6 py-4 font-black text-white">
//                   ${order.totalAmount}
//                 </td>

//                 {/* Status *
//                 <td className="px-6 py-4">

//                   {/* Status Display *
//                   <div
//                     className={`flex items-center gap-2 mb-2 font-bold ${getStatusColor(
//                       order.status
//                     )}`}
//                   >
//                     {getStatusIcon(order.status)}
//                     {order.orderStatus}
//                   </div>

//                   {/* Dropdown *
//                   <select
//                     value={order.orderStatus}
//                     onChange={(e) =>
//                       updateOrderStatus(order.id, e.target.value)
//                     }
//                     className="p-2 bg-black border border-gray-700 rounded-xl text-sm font-bold text-white focus:border-yellow-500 focus:outline-none transition"
//                   >
//                     <option value="Booked">Booked</option>
//                     <option value="Paid">Payment Done</option>
//                     <option value="Shipped">Dispatched</option>
//                     <option value="Delivered">Delivered</option>
//                   </select>

//                 </td>
//               </tr>
//             ))}

//             {orders.length === 0 && (
//               <tr>
//                 <td
//                   colSpan="4"
//                   className="py-20 text-center text-gray-500 font-bold"
//                 >
//                   No orders found.
//                 </td>
//               </tr>
//             )}

//           </tbody> */}
//           <tbody className="divide-y divide-gray-800">

// {orders.map((order) => (
// <tr
// key={order._id}
// className="hover:bg-gray-800/60 transition duration-200"
// >

// {/* Order ID */}
// <td className="px-6 py-4 text-xs text-yellow-400 font-semibold break-all">
// {order._id}
// </td>


// {/* Customer + Address */}
// <td className="px-6 py-4 text-gray-300">

// <p className="font-bold text-white">
// {order.shippingAddress?.name}
// </p>

// <p className="text-sm text-gray-400">
// {order.shippingAddress?.phone || "No phone"}
// </p>

// <p className="text-xs text-gray-500 mt-1">
// {order.shippingAddress?.address}, {order.shippingAddress?.city} - {order.shippingAddress?.zip}
// </p>

// </td>


// {/* Product Info */}
// <td className="px-6 py-4">

// {order.orderItems?.map((item, index) => (

// <div key={index} className="flex items-center gap-3 mb-2">

// <img
// src={item.image}
// alt={item.name}
// className="w-10 h-10 rounded-md object-cover border border-gray-700"
// />

// <div>

// <p className="text-sm font-bold text-white">
// {item.name}
// </p>

// <p className="text-xs text-gray-400">
// Qty: {item.quantity} • ₹{item.price}
// </p>

// </div>

// </div>

// ))}

// </td>


// {/* Payment */}
// <td className="px-6 py-4">

// <p className="text-sm font-bold text-white">
// ₹{order.totalAmount}
// </p>

// <p className="text-xs text-gray-400 mt-1">
// {order.paymentMethod}
// </p>

// <p className={`text-xs font-bold mt-1 ${
// order.paymentStatus === "Paid"
// ? "text-green-400"
// : "text-yellow-400"
// }`}>
// {order.paymentStatus}
// </p>

// </td>


// {/* Status */}
// <td className="px-6 py-4">

// <div
// className={`flex items-center gap-2 mb-2 font-bold ${getStatusColor(
// order.orderStatus
// )}`}
// >
// {getStatusIcon(order.orderStatus)}
// {order.orderStatus}
// </div>

// <select
// value={order.orderStatus}
// onChange={(e) =>
// updateOrderStatus(order._id, e.target.value)
// }
// className="p-2 bg-black border border-gray-700 rounded-xl text-sm font-bold text-white focus:border-yellow-500 focus:outline-none transition"
// >
// <option value="Booked">Booked</option>
// <option value="Paid">Payment Done</option>
// <option value="Shipped">Dispatched</option>
// <option value="Delivered">Delivered</option>
// </select>

// </td>

// </tr>
// ))}

// </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useApp } from "../../context/AppContext";
import {
  Package,
  CreditCard,
  Truck,
  CheckCircle
} from "lucide-react";

export default function AdminOrdersPage() {
  const { orders, fetchAllOrders, updateOrderStatus, products, setCurrentPage, currentPage } = useApp();

  // ✅ NEW STATES
  const [filter, setFilter] = useState("ALL");
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ FILTER LOGIC
  const filteredOrders = orders.filter((order) => {
    const today = new Date().toDateString();
    const orderDate = new Date(order.createdAt).toDateString();

    if (filter === "PAID") return order.paymentStatus === "Paid";
    if (filter === "PENDING") return order.paymentStatus !== "Paid";
    if (filter === "TODAY") return orderDate === today;
    if (filter === "COD") return order.paymentMethod === "COD";
    if (filter === "ONLINE") return order.paymentMethod === "ONLINE";

    return true;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case "Booked":
        return <Package className="w-4 h-4" />;
      case "Paid":
        return <CreditCard className="w-4 h-4" />;
      case "Shipped":
        return <Truck className="w-4 h-4" />;
      case "Delivered":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Booked":
        return "text-yellow-400";
      case "Paid":
        return "text-blue-400";
      case "Shipped":
        return "text-indigo-400";
      case "Delivered":
        return "text-green-400";
      default:
        return "text-gray-400";
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="animate-fade-in text-white">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-yellow-400">
          Order Management
        </h2>
        <p className="text-gray-400 mt-2">
          Manage customer fulfillment statuses
        </p>

        <div className="bg-gray-900 border border-yellow-500/20 p-1 rounded-xl flex flex-wrap gap-1">
          <button
            onClick={() => setCurrentPage("admin-dashboard")}
          
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
           // className="px-4 py-2 text-gray-400 hover:text-yellow-400 font-bold transition"
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

      {/* ✅ FILTER BUTTONS */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["ALL", "PAID", "PENDING", "TODAY", "COD", "ONLINE"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-xl text-sm font-bold border transition ${
              filter === f
                ? "bg-yellow-500 text-black"
                : "bg-black border-gray-700 text-gray-400 hover:text-yellow-400"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl shadow-xl overflow-x-auto">

        <table className="w-full text-left min-w-225">

          <thead className="bg-black border-b border-gray-800">
            <tr>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400">
                Order ID
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400">
                Customer
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400">
                Products
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400">
                Payment
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase text-gray-400">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800">

            {/* ✅ USE FILTERED ORDERS */}
            {filteredOrders.map((order) => (
              <tr
                key={order._id}
                className="hover:bg-gray-800/60 transition duration-200"
              >

                <td className="px-6 py-4 text-xs text-yellow-400 font-semibold break-all">
                  {order._id}
                </td>

                <td className="px-6 py-4 text-gray-300">
                  <p className="font-bold text-white">
                    {order.shippingAddress?.name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {order.shippingAddress?.phone || "No phone"}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {order.shippingAddress?.address}, {order.shippingAddress?.city} - {order.shippingAddress?.zip}
                  </p>
                </td>

                <td className="px-6 py-4">
                  {order.orderItems?.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 mb-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-md object-cover border border-gray-700"
                      />
                      <div>
                        <p className="text-sm font-bold text-white">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          Qty: {item.quantity} • ₹{item.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </td>

                <td className="px-6 py-4">
                  <p className="text-sm font-bold text-white">
                    ₹{order.totalAmount}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    {order.paymentMethod}
                  </p>

                  <p className={`text-xs font-bold mt-1 ${
                    order.paymentStatus === "Paid"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}>
                    {order.paymentStatus}
                  </p>

                  {/* ✅ VIEW SCREENSHOT */}
                  {order.screenshot && (
                    <button
                      onClick={() => setSelectedImage(order.screenshot)}
                      className="mt-2 text-xs text-blue-400 underline hover:text-blue-300"
                    >
                      View Screenshot
                    </button>
                  )}
                </td>

                <td className="px-6 py-4">
                  <div
                    className={`flex items-center gap-2 mb-2 font-bold ${getStatusColor(
                      order.orderStatus
                    )}`}
                  >
                    {getStatusIcon(order.orderStatus)}
                    {order.orderStatus}
                  </div>

                  <select
                    value={order.orderStatus}
                    onChange={(e) =>
                      updateOrderStatus(order._id, e.target.value)
                    }
                    className="p-2 bg-black border border-gray-700 rounded-xl text-sm font-bold text-white focus:border-yellow-500 focus:outline-none transition"
                  >
                    <option value="Booked">Booked</option>
                    <option value="Paid">Payment Done</option>
                    <option value="Shipped">Dispatched</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {/* ✅ IMAGE MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 p-4 rounded-2xl border border-gray-700 max-w-lg w-full">
            <img
              src={selectedImage}
              alt="Payment Screenshot"
              className="w-full rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="mt-4 w-full bg-yellow-500 text-black py-2 rounded-xl font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}