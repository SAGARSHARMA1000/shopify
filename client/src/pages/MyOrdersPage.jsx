
// import React ,{useEffect}from "react";
// import { useApp } from "../context/AppContext";
// import { Package, CheckCircle, Truck, CreditCard } from "lucide-react";

// export default function MyOrdersPage() {
//   const { orders, user,fetchMyOrders } = useApp();

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
//   useEffect(() => {
//   fetchMyOrders();
// }, [user]);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12 animate-fade-in text-white">

//       <h2 className="text-3xl md:text-4xl font-black text-yellow-400 mb-12">
//         My Orders
//       </h2>

//       {orders.length === 0 ? (
//         <div className="bg-gray-900 border border-gray-800 p-16 rounded-3xl text-center shadow-xl">
//           <Package className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
//           <p className="text-gray-400 text-lg">
//             You haven’t placed any orders yet.
//           </p>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           {orders.map((order) => (
//             <div
//               key={order._id}
//               className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-lg hover:border-yellow-500/40 transition"
//             >
//               <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

//                 {/* Left Section */}
//                 <div>
//                   <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
//                     Order ID
//                   </p>
//                   <p className="text-lg font-bold text-white mb-2">
//                     {order._id}
//                   </p>

//                   <p className="text-gray-400 text-sm">
//                     Total Amount
//                   </p>
//                   <p className="text-2xl font-black text-white">
//                  ₹{order.totalAmount?.toFixed(2)}
//                   </p>
//                 </div>

//                 {/* Status */}
//                 <div className="flex items-center gap-3 text-yellow-400 font-bold text-lg">
//                   {getStatusIcon(order.orderStatus)}
//                   {order.orderStatus}
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// import React ,{useEffect}from "react";
// import { useApp } from "../context/AppContext";
// import { Package, CheckCircle, Truck, CreditCard } from "lucide-react";

// export default function MyOrdersPage() {
//   const { orders, user,fetchMyOrders } = useApp();

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
//   useEffect(() => {
//   fetchMyOrders();
// }, [user]);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12 animate-fade-in text-white">

//       <h2 className="text-3xl md:text-4xl font-black text-yellow-400 mb-12">
//         My Orders
//       </h2>

//       {orders.length === 0 ? (
//         <div className="bg-gray-900 border border-gray-800 p-16 rounded-3xl text-center shadow-xl">
//           <Package className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
//           <p className="text-gray-400 text-lg">
//             You haven’t placed any orders yet.
//           </p>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           {orders.map((order) => (
//             <div
//               key={order._id}
//               className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-lg hover:border-yellow-500/40 transition"
//             >
//               <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

//                 {/* Left Section */}
//                 <div>
//                   <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
//                     Order ID
//                   </p>
//                   <p className="text-lg font-bold text-white mb-2">
//                     {order._id}
//                   </p>

//                   <p className="text-gray-400 text-sm">
//                     Total Amount
//                   </p>
//                   <p className="text-2xl font-black text-white">
//                  ₹{order.totalAmount?.toFixed(2)}
//                   </p>
//                 </div>

//                 {/* Status */}
//                 <div className="flex items-center gap-3 text-yellow-400 font-bold text-lg">
//                   {getStatusIcon(order.orderStatus)}
//                   {order.orderStatus}
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useEffect } from "react";
import { useApp } from "../context/AppContext";
import { Package, CheckCircle, Truck, CreditCard } from "lucide-react";

export default function MyOrdersPage() {
  const { orders, user, fetchMyOrders } = useApp();

  useEffect(() => {
    fetchMyOrders();
  }, [user]);

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

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-12 text-white">

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-yellow-400 mb-8 sm:mb-10">
        My Orders
      </h2>

      {/* Empty State */}
      {orders.length === 0 ? (
        <div className="bg-gray-900 border border-gray-800 p-10 sm:p-16 rounded-3xl text-center shadow-xl">
          <Package className="w-14 h-14 sm:w-16 sm:h-16 text-yellow-500 mx-auto mb-5" />
          <p className="text-gray-400 text-base sm:text-lg">
            You haven’t placed any orders yet.
          </p>
        </div>
      ) : (

        <div className="space-y-6 sm:space-y-8">

          {orders.map((order) => (

            <div
              key={order._id}
              className="bg-gray-900 border border-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg hover:border-yellow-500/30 transition"
            >

              {/* HEADER */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-5">

                {/* Left */}
                <div>
                  <p className="text-xs text-gray-400 uppercase">
                    Order ID
                  </p>

                  <p className="text-xs sm:text-sm text-gray-300 break-all">
                    {order._id}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                {/* Right */}
                <div className="flex flex-col sm:items-end gap-1">

                  <p className="text-lg sm:text-xl font-bold">
                    ₹{order.totalAmount?.toFixed(2)}
                  </p>

                  <p className="text-xs text-gray-400">
                    {order.paymentMethod}
                  </p>

                  <p className={`text-xs font-bold ${
                    order.paymentStatus === "Paid"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }`}>
                    {order.paymentStatus}
                  </p>
                </div>

                {/* Status */}
                <div className={`flex items-center gap-2 font-bold text-sm ${getStatusColor(order.orderStatus)}`}>
                  {getStatusIcon(order.orderStatus)}
                  {order.orderStatus}
                </div>

              </div>

              {/* PRODUCTS */}
              <div className="space-y-3 sm:space-y-4 mb-5">

                {order.orderItems.map((item) => (

                  <div
                    key={item._id}
                    className="flex gap-3 sm:gap-4 bg-black border border-gray-800 p-3 sm:p-4 rounded-xl"
                  >

                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg border border-gray-700"
                    />

                    {/* Info */}
                    <div className="flex-1">

                      <p className="font-semibold text-sm sm:text-base">
                        {item.name}
                      </p>

                      <p className="text-xs sm:text-sm text-gray-400">
                        Qty: {item.quantity}
                      </p>

                    </div>

                    {/* Price */}
                    <div className="text-right">

                      <p className="text-yellow-400 font-bold text-sm sm:text-base">
                        ₹{item.price}
                      </p>

                      <p className="text-gray-400 text-xs">
                        ₹{item.price * item.quantity}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

              {/* SHIPPING */}
              <div className="bg-black border border-gray-800 p-3 sm:p-4 rounded-xl text-xs sm:text-sm">

                <p className="text-gray-400 mb-1">
                  Shipping Address
                </p>

                <p className="font-semibold">
                  {order.shippingAddress?.name}
                </p>

                <p className="text-gray-400">
                  {order.shippingAddress?.address}
                </p>

                <p className="text-gray-400">
                  {order.shippingAddress?.city} - {order.shippingAddress?.zip}
                </p>

              </div>

            </div>

          ))}

        </div>
      )}
    </div>
  );
}