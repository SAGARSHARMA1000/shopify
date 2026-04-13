import React from "react";
import { X } from "lucide-react";
import { useApp } from "../../context/AppContext";

export default function HotDealAdModal() {

  const {
    latestHotDeal,
    showHotDealAd,
    setShowHotDealAd,
    setSelectedProductId,
    setCurrentPage
  } = useApp();

  if (!showHotDealAd || !latestHotDeal) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4">

      <div className="relative max-w-xl w-full bg-gray-900 rounded-3xl border border-yellow-500/30 overflow-hidden shadow-2xl">

        {/* Close Button */}
        <button
          onClick={() => {
            setShowHotDealAd(false);
            setCurrentPage("hotdeals");
          }}
          className="absolute top-4 right-4 text-white hover:text-yellow-400"
        >
          <X />
        </button>

        {/* Image */}
        <img
          src={latestHotDeal.image[0]}
          alt={latestHotDeal.title}
          className="w-full h-72 object-cover"
        />

        {/* Info */}
        <div className="p-6 text-center">

          <h2 className="text-2xl font-black text-yellow-400 mb-2">
            🔥 Hot Deal
          </h2>

          <p className="text-white font-bold mb-4">
            {latestHotDeal.title}
          </p>

          <p className="text-3xl font-black text-yellow-400 mb-6">
            ₹{latestHotDeal.price}
          </p>

          <button
            onClick={() => {
              setSelectedProductId(latestHotDeal._id);
              setShowHotDealAd(false);
              setCurrentPage("product-details");
            }}
            className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition"
          >
            View Deal
          </button>

        </div>

      </div>

    </div>
  );
}