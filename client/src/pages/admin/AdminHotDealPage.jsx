import React, { useEffect, useState } from "react";
import { useApp } from "../../context/AppContext";
import { saveHotDealBanner, getHotDealBanner,deleteHotDealBanner } from "../../api/hotDealApi";
import { Trash2, Upload,ArrowLeft } from "lucide-react";

export default function AdminHotDealPage() {
     const { setCurrentPage} = useApp();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [ticker, setTicker] = useState("");
  const [existing, setExisting] = useState(null);
  const [loading, setLoading] = useState(false);
   const presetTexts = [
  "🔥 Mega Sale! Up to 70% OFF | Limited Time 🚀",
  "⚡ Flash Sale Live Now | Free Delivery on All Orders",
  "🎉 Buy 2 Get 1 Free | Hurry Up!",
  "💥 Combo Deals Starting @ ₹499 Only",
  "🚚 Free Shipping + Extra 10% OFF on First Order"
];
  // Fetch existing data
  const fetchData = async () => {
    try {
      const { data } = await getHotDealBanner();
      setExisting(data);
      setPreview(data?.bannerImage);
      setTicker(data?.tickerText || "");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Upload / Update
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const form = new FormData();
      if (image) form.append("image", image);
      form.append("tickerText", ticker);

      await saveHotDealBanner(form);

      fetchData();

      alert("Hot Deal Updated 🔥");

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // Delete banner
const handleDelete = async () => {
  try {

    const { data } = await deleteHotDealBanner();

    if (data.success) {
      setExisting(null);
      setPreview("");
      setTicker("");
    }

  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">

      {/* Glow */}
      <div className="absolute w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full top-10 left-10"></div>

      <div className="max-w-4xl mx-auto">
               <button
            onClick={() => setCurrentPage("admin-dashboard")}
            className="flex items-center gap-2 bg-gray-800 hover:bg-yellow-500 hover:text-black px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-bold transition"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Back</span>
          </button>
        <h1 className="text-3xl sm:text-4xl font-black text-yellow-400 mb-8">
          🔥 Hot Deal Manager
        </h1>

        {/* Banner Preview */}
        {preview && (
          <div className="mb-6 rounded-xl overflow-hidden border border-gray-800">
            <img
              src={preview}
              className="w-full h-40 sm:h-60 object-cover"
              alt="banner"
            />
          </div>
        )}

        {/* Upload Section */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-5">

          {/* Upload */}
          <div>
            <label className="block mb-2 font-semibold">
              Upload Banner
            </label>

            <input
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
                setPreview(URL.createObjectURL(e.target.files[0]));
              }}
              className="w-full text-sm bg-black border border-gray-700 rounded-lg p-2"
            />
          </div>

          {/* Ticker */}
          <div>
            <label className="block mb-2 font-semibold">
              Running Text (Ticker)
            </label>

            <input
              type="text"
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
              placeholder="🔥 Big Sale! 50% OFF..."
              className="w-full bg-black border border-gray-700 rounded-lg p-3 focus:border-yellow-500 outline-none"
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">

  {presetTexts.map((text, index) => (
    <button
      key={index}
      onClick={() => setTicker(text)}
      className="text-xs sm:text-sm px-3 py-2 rounded-full border border-yellow-500/40 text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
    >
      {text.slice(0, 25)}...
    </button>
  ))}

</div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex-1 bg-yellow-500 text-black py-3 rounded-xl font-bold hover:bg-yellow-400 transition flex items-center justify-center gap-2"
            >
              <Upload className="w-5 h-5" />
              {loading ? "Saving..." : "Save / Update"}
            </button>

            {existing && (
              <button
                onClick={handleDelete}
                className="flex-1 bg-red-500 py-3 rounded-xl font-bold hover:bg-red-400 transition flex items-center justify-center gap-2"
              >
                <Trash2 className="w-5 h-5" />
                Delete
              </button>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}