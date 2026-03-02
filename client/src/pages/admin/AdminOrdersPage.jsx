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
import React from "react";
import { useApp } from "../../context/AppContext";
import { Package, CreditCard, Truck, CheckCircle } from "lucide-react";

export default function AdminOrdersPage() {
  const { orders, updateOrderStatus } = useApp();

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
    <div className="animate-fade-in text-white">

      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-yellow-400">
          Order Management
        </h2>
        <p className="text-gray-400 mt-2">
          Manage customer fulfillment statuses
        </p>
      </div>

      {/* Table Container */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl shadow-xl overflow-x-auto">

        <table className="w-full text-left min-w-200">

          {/* Table Head */}
          <thead className="bg-black border-b border-gray-800">
            <tr>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                Order ID
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                Customer
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                Total
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-400">
                Status
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-800">

            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-800/60 transition duration-200"
              >
                {/* Order ID */}
                <td className="px-6 py-4 font-bold text-yellow-400">
                  {order.id}
                </td>

                {/* Customer */}
                <td className="px-6 py-4 text-gray-300">
                  {order.shipping.name}
                </td>

                {/* Total */}
                <td className="px-6 py-4 font-black text-white">
                  ${order.total.toFixed(2)}
                </td>

                {/* Status */}
                <td className="px-6 py-4">

                  {/* Status Display */}
                  <div
                    className={`flex items-center gap-2 mb-2 font-bold ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {getStatusIcon(order.status)}
                    {order.status}
                  </div>

                  {/* Dropdown */}
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateOrderStatus(order.id, e.target.value)
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

            {orders.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="py-20 text-center text-gray-500 font-bold"
                >
                  No orders found.
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </div>
  );
}