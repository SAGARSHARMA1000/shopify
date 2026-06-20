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
// import React, { useEffect } from "react";
// import { useApp } from "../../context/AppContext";

// export default function HotDealsPage() {

//   const {
//     hotDeals,
//     getHotDealsProducts,
//     setSelectedProductId,
//     setCurrentPage,
//     hotDealBanner,
//     fetchHotDealBanner
//   } = useApp();

//   useEffect(() => {
//     getHotDealsProducts();
//     fetchHotDealBanner();
//   }, []);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10 text-white">

//       {/* 🔥 Banner Section */}
//       {hotDealBanner?.bannerImage && (
//         <div className="relative mb-6 rounded-2xl overflow-hidden">

//           <img
//             src={hotDealBanner.bannerImage}
//             className="w-full h-48 sm:h-64 object-cover"
//           />

//           <div className="absolute inset-0 bg-black/40"></div>

//           <h1 className="absolute bottom-4 left-4 text-2xl sm:text-4xl font-black text-yellow-400">
//             🔥 Hot Deals
//           </h1>

//         </div>
//       )}

//       {/* 🔥 Running Ticker */}
//       {hotDealBanner?.tickerText && (
//         <div className="bg-yellow-500 text-black font-bold py-2 mb-6 overflow-hidden whitespace-nowrap">
//           <div className="animate-marquee">
//             {hotDealBanner.tickerText} 🚀 {hotDealBanner.tickerText}
//           </div>
//         </div>
//       )}

//       {/* 🔥 Products Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

//         {hotDeals.map((product) => (

//           <div
//             key={product._id}
//             className="bg-gray-900 border border-gray-800 rounded-2xl p-4 
//             hover:border-yellow-500 hover:scale-105 transition duration-300 shadow-lg hover:shadow-yellow-500/20"
//           >

//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-40 object-cover rounded-xl mb-3"
//             />

//             <h3 className="font-bold text-white mb-1 line-clamp-1">
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
//               className="mt-3 w-full bg-yellow-500 text-black py-2 rounded-xl font-bold hover:bg-yellow-400 transition"
//             >
//               View Deal
//             </button>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// }
// import React, { useEffect } from "react";
// import { useApp } from "../../context/AppContext";

// export default function HotDealsPage() {
//   const {
//     hotDeals,
//     getHotDealsProducts,
//     setSelectedProduct,
//     setCurrentPage,
//     hotDealBanner,
//     fetchHotDealBanner
//   } = useApp();

//  useEffect(() => {
//   getHotDealsProducts();
//   fetchHotDealBanner();
// }, [getHotDealsProducts, fetchHotDealBanner]);

//   return (
//     <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-10 text-white">

//       {/* 🔥 Banner Section */}
//       {hotDealBanner?.bannerImage && (
//         <div className="relative mb-6 sm:mb-10 rounded-2xl overflow-hidden">

//           {/* Image */}
//           <img
//             src={hotDealBanner.bannerImage}
//             alt="Hot Deals Banner"
//             className="w-full h-36 sm:h-56 md:h-72 lg:h-80 object-cover"
//           />

//           {/* Gradient Overlay (better than plain black) */}
//           <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

//           {/* Text */}
//           <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6">
//             <h1 className="text-lg sm:text-3xl md:text-4xl font-black text-yellow-400">
//               🔥 Hot Deals
//             </h1>
//             <p className="text-xs sm:text-sm text-gray-300 mt-1">
//               Limited time offers on top gadgets
//             </p>
//           </div>

//         </div>
//       )}

//       {/* 🔥 Running Ticker */}
//       {hotDealBanner?.tickerText && (
//         <div className="bg-yellow-500 text-black font-bold py-2 sm:py-3 mb-6 rounded-lg overflow-hidden whitespace-nowrap text-sm sm:text-base">
//           <div className="animate-marquee px-2">
//             {hotDealBanner.tickerText} 🚀 {hotDealBanner.tickerText}
//           </div>
//         </div>
//       )}

//       {/* 🔥 Products Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

//         {hotDeals.map((product) => (
//           <div
//             key={product._id}
//             className="bg-gray-900 border border-gray-800 rounded-2xl p-3 sm:p-4 
//             hover:border-yellow-500 hover:scale-[1.02] transition duration-300 shadow-lg hover:shadow-yellow-500/20"
//           >

//             {/* Product Image */}
//             <img
//               src={product.image[0]}
//               alt={product.title}
//               className="w-full h-28 sm:h-40 object-cover rounded-xl mb-2 sm:mb-3"
//             />

//             {/* Title */}
//             <h3 className="font-semibold sm:font-bold text-white text-sm sm:text-base mb-1 line-clamp-1">
//               {product.title}
//             </h3>

//             {/* Price */}
//             <p className="text-yellow-400 font-black text-sm sm:text-lg">
//               ₹{product.price}
//             </p>

//             {/* Button */}
//             <button
//               onClick={() => {
//                 setSelectedProductId(product._id);
//                 setCurrentPage("product-details");
//               }}
//               className="mt-2 sm:mt-3 w-full bg-yellow-500 text-black py-2 rounded-xl text-sm sm:text-base font-bold hover:bg-yellow-400 transition"
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
    setSelectedProduct,
    setCurrentPage,
    hotDealBanner,
    fetchHotDealBanner,
  } = useApp();

  useEffect(() => {
    getHotDealsProducts();
    fetchHotDealBanner();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 text-white">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-black text-yellow-400">
          🔥 Flash Deals
        </h1>

        <p className="text-gray-400 mt-2">
          Limited time offers on trending products
        </p>
      </div>

      {/* Banner */}
      {hotDealBanner?.bannerImage && (
        <div className="relative mb-8 rounded-3xl overflow-hidden shadow-xl">

          <img
            src={hotDealBanner.bannerImage}
            alt="Hot Deals Banner"
            className="w-full h-40 sm:h-60 md:h-72 lg:h-80 object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>

          {/* <div className="absolute bottom-5 left-5">
            <h2 className="text-2xl md:text-5xl font-black text-yellow-400">
              🔥 Hot Deals
            </h2>

            <p className="text-gray-300 mt-2">
              Grab your favourite products before they're gone
            </p>
          </div> */}

        </div>
      )}

      {/* Ticker */}
      {hotDealBanner?.tickerText && (
        <div className="bg-yellow-500 text-black font-bold py-3 rounded-xl mb-10 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee">
            {hotDealBanner.tickerText} 🚀 {hotDealBanner.tickerText} 🚀{" "}
            {hotDealBanner.tickerText}
          </div>
        </div>
      )}

      {/* Empty State */}
      {hotDeals.length === 0 && (
        <div className="py-28 text-center">

          <div className="text-8xl mb-5">
            🔥
          </div>

          <h2 className="text-3xl font-bold text-gray-300">
            No Hot Deals Available
          </h2>

          <p className="text-gray-500 mt-3">
            New offers will appear soon.
          </p>

        </div>
      )}

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {hotDeals.map((product) => {

          const originalPrice =
            product.discount > 0
              ? Math.round(product.price / (1 - product.discount / 100))
              : product.price;

          return (
            <div
              key={product._id}
              onClick={() => {
                setSelectedProduct(product);
                setCurrentPage("product-details");
              }}
              className="
              cursor-pointer
              group
              bg-gray-900
              border
              border-gray-800
              rounded-3xl
              overflow-hidden
              shadow-xl
              hover:border-yellow-500
              hover:-translate-y-2
              hover:shadow-yellow-500/20
              duration-300
              "
            >
              {/* Badge */}
              <div className="absolute z-10 m-3">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  🔥 HOT DEAL
                </span>
              </div>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={product.images?.[0] || product.image?.[0]}
                  alt={product.title}
                  className="w-full h-40 sm:h-52 object-cover group-hover:scale-110 duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">

                <h3 className="font-bold text-white line-clamp-2 min-h-[50px]">
                  {product.title}
                </h3>

                {/* Price */}
                <div className="flex flex-wrap items-center gap-2 mt-3">

                  {product.discount > 0 && (
                    <span className="text-gray-500 line-through text-sm">
                      ₹{originalPrice}
                    </span>
                  )}

                  <span className="text-yellow-400 text-2xl font-black">
                    ₹{product.price}
                  </span>

                  {product.discount > 0 && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>

                {/* Button */}
                <button
                  className="
                  pointer-events-none
                  mt-5
                  w-full
                  py-3
                  rounded-2xl
                  font-bold
                  text-black
                  bg-gradient-to-r
                  from-yellow-500
                  to-yellow-400
                  "
                >
                  View Deal →
                </button>

              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}