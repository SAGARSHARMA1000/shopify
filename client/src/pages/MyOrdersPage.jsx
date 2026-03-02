// import React from "react";
// import { useApp } from "../context/AppContext";
// import { Package } from "lucide-react";

// export default function MyOrdersPage() {
//   const { orders, user } = useApp();
//   const myOrders = orders.filter(o => o.userId === user?.id);

//   return (
//     <div className="max-w-5xl mx-auto animate-fade-in">
//       <h2 className="text-3xl font-black mb-8">My Orders</h2>

//       {myOrders.length === 0 ? (
//         <div className="bg-white p-20 rounded-3xl text-center border-2 border-dashed">
//           <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//           <p>No orders found.</p>
//         </div>
//       ) : (
//         myOrders.map(order => (
//           <div key={order.id} className="bg-white rounded-3xl p-6 mb-6 shadow-sm">
//             <p className="font-bold">{order.id}</p>
//             <p>${order.total.toFixed(2)}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
import React from "react";
import { useApp } from "../context/AppContext";
import { Package, CheckCircle, Truck, CreditCard } from "lucide-react";

export default function MyOrdersPage() {
  const { orders, user } = useApp();
  const myOrders = orders.filter((o) => o.userId === user?.id);

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

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 animate-fade-in text-white">

      <h2 className="text-3xl md:text-4xl font-black text-yellow-400 mb-12">
        My Orders
      </h2>

      {myOrders.length === 0 ? (
        <div className="bg-gray-900 border border-gray-800 p-16 rounded-3xl text-center shadow-xl">
          <Package className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg">
            You haven’t placed any orders yet.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {myOrders.map((order) => (
            <div
              key={order.id}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-6 shadow-lg hover:border-yellow-500/40 transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

                {/* Left Section */}
                <div>
                  <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider">
                    Order ID
                  </p>
                  <p className="text-lg font-bold text-white mb-2">
                    {order.id}
                  </p>

                  <p className="text-gray-400 text-sm">
                    Total Amount
                  </p>
                  <p className="text-2xl font-black text-white">
                    ${order.total.toFixed(2)}
                  </p>
                </div>

                {/* Status */}
                <div className="flex items-center gap-3 text-yellow-400 font-bold text-lg">
                  {getStatusIcon(order.status)}
                  {order.status}
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}