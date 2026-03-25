import React, { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import {
  User,
  MapPin,
  Lock,
  Package,
  Trash2,
  CheckCircle,
  Truck,
  CreditCard
} from "lucide-react";

export default function UserDashboard() {
  const {
    user,
    orders,
    fetchMyOrders,
    fetchProfile,
    updateProfile,
    updatePassword,
    deleteAccount,
    setSearchQuery

  } = useApp();

  const [activeTab, setActiveTab] = useState("profile");

  const [form, setForm] = useState({
    name:"",
    email:"",
    phone:"",
    address:"",
    city: ""
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: ""
  });

  useEffect(() => {
  if (user) {
    setForm({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      address: user.address || "",
      city: user.city || ""
    });
  }
}, [user]);

  useEffect(() => {
    fetchProfile();
    fetchMyOrders();
  }, []);
useEffect(() => {
  setSearchQuery("");
}, [activeTab]);
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
    <div className="min-h-screen bg-black text-white px-4 md:px-10 py-10">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-black text-yellow-400 mb-8">
        Welcome Back, {user?.name}
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {/* Sidebar */}
        <div className="bg-gray-900 p-4 rounded-2xl border border-yellow-500/20 space-y-2">

          {[
            { key: "profile", label: "Profile", icon: User },
            { key: "address", label: "Address", icon: MapPin },
            { key: "pass", label: "Password", icon: Lock },
            { key: "orders", label: "Orders", icon: Package },
            { key: "delete", label: "Delete Account", icon: Trash2 }
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`w-full flex items-center gap-2 px-4 py-3 rounded-xl transition ${
                activeTab === item.key
                  ? "bg-yellow-500 text-black font-bold"
                  : "hover:bg-gray-800"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="md:col-span-3 bg-gray-900 p-6 rounded-2xl border border-gray-800">

          {/* PROFILE */}
          {activeTab === "profile" && (
            <div>
              <h3 className="text-xl font-bold mb-6 text-yellow-400">
                Update Profile
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {["name", "email", "phone"].map((field) => (
                  <input
                    key={field}
                    placeholder={field}
                    value={form[field]}
                    onChange={(e) =>
                      setForm({ ...form, [field]: e.target.value })
                    }
                    className="p-3 rounded-lg bg-black border border-gray-700"
                  />
                ))}
              </div>

              <button
                onClick={() => updateProfile(form)}
                className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold"
              >
                Save Changes
              </button>
            </div>
          )}

          {/* ADDRESS */}
          {activeTab === "address" && (
            <div>
              <h3 className="text-xl font-bold mb-6 text-yellow-400">
                Address Details
              </h3>

              <input
                placeholder="Address"
                value={form.address}
                onChange={(e) =>
                  setForm({ ...form, address: e.target.value })
                }
                className="w-full mb-4 p-3 rounded-lg bg-black border border-gray-700"
              />

              <input
                placeholder="City"
                value={form.city}
                onChange={(e) =>
                  setForm({ ...form, city: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-black border border-gray-700"
              />

              <button
                onClick={() => updateProfile(form)}
                className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold"
              >
                Save Address
              </button>
            </div>
          )}

          {/* PASSWORD */}
          {activeTab === "pass" && (
            <div>
              <h3 className="text-xl font-bold mb-6 text-yellow-400">
                Change Password
              </h3>

              <input
                type="password"
                placeholder="Old Password"
                className="w-full mb-4 p-3 rounded-lg bg-black border border-gray-700"
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    oldPassword: e.target.value
                  })
                }
              />

              <input
                type="password"
                placeholder="New Password"
                className="w-full p-3 rounded-lg bg-black border border-gray-700"
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    newPassword: e.target.value
                  })
                }
              />

              <button
                onClick={() => updatePassword(passwordData)}
                className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold"
              >
                Update Password
              </button>
            </div>
          )}

          {/* ORDERS */}
          {activeTab === "orders" && (
            <div>
              <h3 className="text-xl font-bold mb-6 text-yellow-400">
                My Orders
              </h3>

              {orders.length === 0 ? (
                <p className="text-gray-400">No orders yet</p>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order._id}
                      className="p-4 bg-black rounded-xl border border-gray-800 flex justify-between items-center"
                    >
                      <div>
                        <p className="text-sm text-gray-400">Order ID</p>
                        <p className="font-bold">{order._id}</p>
                        <p className="text-yellow-400">
                          ₹{order.totalAmount}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-yellow-400">
                        {getStatusIcon(order.orderStatus)}
                        {order.orderStatus}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* DELETE */}
          {activeTab === "delete" && (
            <div className="text-center">
              <h3 className="text-xl font-bold mb-6 text-red-500">
                Delete Account
              </h3>

              <p className="text-gray-400 mb-6">
                This action cannot be undone.
              </p>

              <button
                onClick={deleteAccount}
                className="bg-red-600 px-6 py-3 rounded-lg font-bold"
              >
                Delete My Account
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}