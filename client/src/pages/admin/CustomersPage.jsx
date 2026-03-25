
// pages/CustomersPage.jsx

import React, { useEffect, useState } from "react";
import { fetchCustomers } from "../../api/userApi";
import { useApp } from "../../context/AppContext";
import { ArrowLeft } from "lucide-react";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const { setCurrentPage } = useApp();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCustomers();
        setCustomers(data?.users || []);
      } catch (error) {
        console.log(error);
        setCustomers([]);
      }
    };

    getData();
  }, []);

  return (
    <div className="p-4 sm:p-6 text-white min-h-screen">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentPage("admin-dashboard")}
            className="flex items-center gap-2 bg-gray-800 hover:bg-yellow-500 hover:text-black px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-bold transition"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Back</span>
          </button>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-400">
            Customers
          </h1>
        </div>

        <p className="text-gray-400 text-sm">
          Total: {customers.length}
        </p>
      </div>

      {/* ================= MOBILE VIEW (CARDS) ================= */}
      <div className="grid gap-4 sm:hidden">
        {customers.length > 0 ? (
          customers.map((user) => (
            <div
              key={user._id}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-md"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold">{user.name}</p>
                  <p className="text-sm text-gray-400">{user.email}</p>
                </div>
              </div>

              <p className="text-xs text-gray-500">
                Joined:{" "}
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">
            No customers found
          </p>
        )}
      </div>

      {/* ================= TABLE VIEW (DESKTOP) ================= */}
      <div className="hidden sm:block overflow-x-auto rounded-xl border border-gray-800">
        <table className="w-full text-sm md:text-base">
          <thead className="bg-gray-900 text-gray-400 uppercase text-xs md:text-sm">
            <tr>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Joined</th>
            </tr>
          </thead>

          <tbody>
            {customers.length > 0 ? (
              customers.map((user) => (
                <tr
                  key={user._id}
                  className="border-t border-gray-800 hover:bg-gray-900/60 transition"
                >
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                    {user.name}
                  </td>

                  <td className="p-4">{user.email}</td>

                  <td className="p-4 text-gray-400">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-6 text-gray-400">
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersPage;