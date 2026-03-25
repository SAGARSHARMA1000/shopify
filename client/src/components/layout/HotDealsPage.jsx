// import React, { useEffect } from "react";
// import { useApp } from "../../context/AppContext";

// export default function HotDealsPage() {

//   const {
//     hotDeals,
//     getHotDealsProducts,
//     setSelectedProductId,
//     setCurrentPage
//   } = useApp();

//   useEffect(() => {
//     getHotDealsProducts();
//   }, []);

//   return (

//     <div className="max-w-7xl mx-auto px-4 py-12 text-white">

//       <h1 className="text-4xl font-black text-yellow-400 mb-10">
//         🔥 Hot Deals
//       </h1>

//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

//         {hotDeals.map((product) => (

//           <div
//             key={product._id}
//             className="bg-gray-900 border border-gray-800 rounded-2xl p-4 hover:border-yellow-500/40 transition"
//           >

//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-40 object-cover rounded-xl mb-3"
//             />

//             <h3 className="font-bold text-white mb-2">
//               {product.title}
//             </h3>

//             <p className="text-yellow-400 font-black text-lg">
//               ₹{product.price}
//             </p>

//             <button
//               onClick={() => {
//                 setSelectedProductId(product._id);
//                 setCurrentPage("product-details");
//               }}
//               className="mt-3 w-full bg-yellow-500 text-black py-2 rounded-xl font-bold hover:bg-yellow-400"
//             >
//               View Deal
//             </button>

//           </div>

//         ))}

//       </div>

//     </div>

//   );
// }
import React, { useEffect } from "react";
import { useApp } from "../../context/AppContext";

export default function HotDealsPage() {

  const {
    hotDeals,
    getHotDealsProducts,
    setSelectedProductId,
    setCurrentPage,
    hotDealBanner,
    fetchHotDealBanner
  } = useApp();

  useEffect(() => {
    getHotDealsProducts();
    fetchHotDealBanner();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-white">

      {/* 🔥 Banner Section */}
      {hotDealBanner?.bannerImage && (
        <div className="relative mb-6 rounded-2xl overflow-hidden">

          <img
            src={hotDealBanner.bannerImage}
            className="w-full h-48 sm:h-64 object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <h1 className="absolute bottom-4 left-4 text-2xl sm:text-4xl font-black text-yellow-400">
            🔥 Hot Deals
          </h1>

        </div>
      )}

      {/* 🔥 Running Ticker */}
      {hotDealBanner?.tickerText && (
        <div className="bg-yellow-500 text-black font-bold py-2 mb-6 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee">
            {hotDealBanner.tickerText} 🚀 {hotDealBanner.tickerText}
          </div>
        </div>
      )}

      {/* 🔥 Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

        {hotDeals.map((product) => (

          <div
            key={product._id}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-4 
            hover:border-yellow-500 hover:scale-105 transition duration-300 shadow-lg hover:shadow-yellow-500/20"
          >

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded-xl mb-3"
            />

            <h3 className="font-bold text-white mb-1 line-clamp-1">
              {product.title}
            </h3>

            <p className="text-yellow-400 font-black text-lg">
              ₹{product.price}
            </p>

            <button
              onClick={() => {
                setSelectedProductId(product._id);
                setCurrentPage("product-details");
              }}
              className="mt-3 w-full bg-yellow-500 text-black py-2 rounded-xl font-bold hover:bg-yellow-400 transition"
            >
              View Deal
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}