// import React, { useState } from "react";
// import { useApp } from "../../context/AppContext";
// import {
//   ShoppingBag,
//   ShoppingCart,
//   User,
//   Settings,
//   LogOut,
//   Search,
//   Menu
// } from "lucide-react";

// export default function Navbar() {
//   const {
//     user,
//     cart,
//     setCurrentPage,
//     logout,
//     searchQuery,
//     setSearchQuery
//   } = useApp();

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-40">

//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">

//         {/* Logo */}
//         <div
//           className="flex items-center gap-2 cursor-pointer group"
//           onClick={() => setCurrentPage("home")}
//         >
//           <div className="bg-indigo-600 p-2 rounded-lg">
//             <ShoppingBag className="text-white w-6 h-6" />
//           </div>
//           <span className="text-xl font-bold">OmniShop</span>
//         </div>

//         {/* Search Desktop */}
//         <div className="hidden md:flex grow max-w-md mx-8 relative">
//           <input
//             type="text"
//             placeholder="Search products..."
//             className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4"
//             value={searchQuery}
//             onChange={(e) => {
//               setSearchQuery(e.target.value);
//               setCurrentPage("home");
//             }}
//           />
//           <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center gap-6">

//           <button
//             onClick={() => setCurrentPage("home")}
//             className="text-gray-600 hover:text-indigo-600 font-medium"
//           >
//             Shop
//           </button>

//           {user?.role === "admin" && (
//             <button
//               onClick={() => setCurrentPage("admin-dashboard")}
//               className="flex items-center gap-1 text-indigo-600 font-bold"
//             >
//               <Settings className="w-4 h-4" /> Admin
//             </button>
//           )}

//           {/* Cart */}
//           <div
//             className="relative cursor-pointer"
//             onClick={() => setCurrentPage("cart")}
//           >
//             <ShoppingCart className="w-6 h-6 text-gray-700" />
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </div>

//           {/* Auth */}
//           {user ? (
//             <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
//               <button onClick={() => setCurrentPage("my-orders")}>
//                 <User className="w-6 h-6" />
//               </button>
//               <button onClick={logout}>
//                 <LogOut className="w-5 h-5 text-red-500" />
//               </button>
//             </div>
//           ) : (
//             <button
//               onClick={() => setCurrentPage("login")}
//               className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium"
//             >
//               Login
//             </button>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <Menu className="w-6 h-6 text-gray-700" />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-xl">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full bg-gray-100 rounded-lg p-3"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />

//           <button
//             onClick={() => {
//               setCurrentPage("cart");
//               setIsMenuOpen(false);
//             }}
//             className="block w-full text-left"
//           >
//             Cart ({cartCount})
//           </button>

//           {user && (
//             <button
//               onClick={() => {
//                 setCurrentPage("my-orders");
//                 setIsMenuOpen(false);
//               }}
//               className="block w-full text-left"
//             >
//               My Orders
//             </button>
//           )}

//           {user?.role === "admin" && (
//             <button
//               onClick={() => {
//                 setCurrentPage("admin-dashboard");
//                 setIsMenuOpen(false);
//               }}
//               className="block w-full text-left text-indigo-600"
//             >
//               Admin Panel
//             </button>
//           )}

//           {user ? (
//             <button
//               onClick={() => {
//                 logout();
//                 setIsMenuOpen(false);
//               }}
//               className="text-red-500"
//             >
//               Logout
//             </button>
//           ) : (
//             <button
//               onClick={() => {
//                 setCurrentPage("login");
//                 setIsMenuOpen(false);
//               }}
//               className="text-indigo-600 font-bold"
//             >
//               Login
//             </button>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import {
  ShoppingBag,
  ShoppingCart,
  User,
  Settings,
  LogOut,
  Search,
  Menu,
  Phone,
  Tag
} from "lucide-react";
import logo from "../../assets/rma-logo.jpeg";

export default function Navbar() {
  const {
    user,
    cart,
    setCurrentPage,
    logout,
    searchQuery,
    setSearchQuery,openHotDealAd
  } = useApp();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
   const closeMenu = () => setIsMenuOpen(false);
  return (
    <nav className="bg-black text-gray-300 sticky top-0 z-40 border-b border-yellow-500/20 shadow-lg">

      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setCurrentPage("home")}
        >
          <div className=" p-2 rounded-lg shadow-md">
            
         {/* // <div className="bg-linear-to-r from-yellow-500 to-yellow-400 p-2 rounded-lg shadow-md"> */}
            <img
      src={logo}
      alt="RMA Logo"
      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-200"
    />
          </div>
          <span className="text-xl font-bold text-yellow-400 tracking-wide">
            RMA
          </span>
        </div>

        {/* Search Desktop */}
        <div className="hidden md:flex grow max-w-md mx-8 relative">
          <input
            type="text"
            placeholder="Search gadgets..."
            className="w-full bg-gray-900 text-white rounded-full py-2 pl-10 pr-4 border border-gray-700 focus:border-yellow-500 focus:outline-none"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              //setCurrentPage("home");
            }}
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-yellow-500" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">

          <button
            onClick={() => setCurrentPage("home")}
            className="hover:text-yellow-400 transition font-medium"
          >
            Shop
          </button>

          {/* <button
            onClick={() => setCurrentPage("home")}
            className="hover:text-yellow-400 transition font-medium"
          >
            Categories
          </button> */}

          <button
            onClick={openHotDealAd}
            className="flex items-center gap-1 text-yellow-500 font-semibold"
          >
            <Tag className="w-4 h-4" />
            Hot Deals
          </button>

          <button
            onClick={() => setCurrentPage("contact")}
            className="flex items-center gap-1 hover:text-yellow-400 transition"
          >
            <Phone className="w-4 h-4" />
            Contact
          </button>

          {user?.role === "admin" && (
            <button
              onClick={() => setCurrentPage("admin-dashboard")}
              className="flex items-center gap-1 text-yellow-400 font-bold"
            >
              <Settings className="w-4 h-4" /> Admin
            </button>
          )}

          {/* Cart */}
          <div
            className="relative cursor-pointer hover:text-yellow-400 transition"
            onClick={() => setCurrentPage("cart")}
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </div>

          {user ? (
  <div className="flex items-center gap-3 sm:gap-4 pl-2 sm:pl-4 border-l border-gray-700">
    <button
      onClick={() => setCurrentPage("userDashboard")}
      className="hover:text-yellow-400 transition"
    >
      <User className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>

    <button
      onClick={logout}
      className="text-red-500 hover:text-red-400"
    >
      <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  </div>
) : (
  <div className="flex items-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">

    {/* Login */}
    <button
      onClick={() => setCurrentPage("login")}
     className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base border border-yellow-500 text-yellow-400 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition whitespace-nowrap"
    
     // className="px-4 py-2 border border-yellow-500 text-yellow-400 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition"
    >
      Login
    </button>

    {/* Signup */}
    <button
      onClick={() => setCurrentPage("signup")}
     className="bg-linear-to-r from-yellow-500 to-yellow-400 text-black px-4 sm:px-5 py-1.5 sm:py-2 text-sm sm:text-base rounded-full font-bold hover:scale-105 transition shadow-lg whitespace-nowrap"
    
     // className="bg-linear-to-r from-yellow-500 to-yellow-400 text-black px-5 py-2 rounded-full font-bold hover:scale-105 transition shadow-lg"
    >
      Sign Up
    </button>

  </div>
)}

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {/* {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 p-4 space-y-4">

          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-900 text-white rounded-lg p-3 border border-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button onClick={() => setCurrentPage("home")} className="block w-full text-left hover:text-yellow-400">
            Shop
          </button>

          <button onClick={() => setCurrentPage("home")} className="block w-full text-left hover:text-yellow-400">
            Categories
          </button>

          <button onClick={() => setCurrentPage("home")} className="block w-full text-left text-yellow-500 font-semibold">
            Hot Deals
          </button>

          <button onClick={() => setCurrentPage("contact")} className="block w-full text-left hover:text-yellow-400">
            Contact
          </button>

          <button onClick={() => setCurrentPage("cart")} className="block w-full text-left">
            Cart ({cartCount})
          </button>

          {user && (
            <button onClick={() => setCurrentPage("userDashboard")} className="block w-full text-left">
              My Orders
            </button>
          )}

          {user?.role === "admin" && (
            <button
              onClick={() => setCurrentPage("admin-dashboard")}
              className="block w-full text-left text-yellow-400"
            >
              Admin Panel
            </button>
          )}

          {user ? (
            <button onClick={logout} className="text-red-500">
              Logout
            </button>
          ) : (
            <button
              onClick={() => setCurrentPage("login")}
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold"
            >
              Login
            </button>
            
          )}
        </div>
      )} */}
          {/* Mobile Menu */}
{/* {isMenuOpen && (
  <div className="md:hidden bg-black border-t border-gray-800 px-4 py-5 space-y-5 animate-fade-in">

    {/* 🔍 Search */}
    {/* <div className="relative">
      <input
        type="text"
        placeholder="Search gadgets..."
        className="w-full bg-gray-900 text-white rounded-full py-3 pl-10 pr-4 border border-gray-700 focus:border-yellow-500 focus:outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Search className="absolute left-3 top-3 w-5 h-5 text-yellow-500" />
    </div> */}

    {/* 🛒 Quick Actions */}
    {/* <div className="flex items-center justify-between gap-4">

      <button
        onClick={() => setCurrentPage("cart")}
        className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-full border border-gray-700"
      >
        <ShoppingCart className="w-5 h-5 text-yellow-400" />
        <span>Cart ({cartCount})</span>
      </button>

      {!user && (
        <button
          onClick={() => setCurrentPage("signup")}
          className="bg-linear-to-r from-yellow-500 to-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-md"
        >
          Sign Up
        </button>
      )}
    </div> */}

    {/* 📦 Navigation */}
    {/* <div className="space-y-3 text-base">

      <button
        onClick={() => setCurrentPage("home")}
        className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-900 transition"
      >
        🛍 Shop
      </button>

      <button
        onClick={() => setCurrentPage("home")}
        className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-900 transition"
      >
        📂 Categories
      </button>

      <button
        onClick={openHotDealAd}
        className="flex items-center gap-3 w-full p-3 rounded-lg text-yellow-500 font-semibold hover:bg-gray-900 transition"
      >
        🔥 Hot Deals
      </button>

      <button
        onClick={() => setCurrentPage("contact")}
        className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-900 transition"
      >
        📞 Contact
      </button>
    </div> */}

    {/* 👤 Account Section */}
    {/* <div className="border-t border-gray-800 pt-4 space-y-3">

      {user ? (
        <>
          <button
            onClick={() => setCurrentPage("userDashboard")}
            className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-900 transition"
          >
            👤 My Dashboard
          </button>

          {user?.role === "admin" && (
            <button
              onClick={() => setCurrentPage("admin-dashboard")}
              className="flex items-center gap-3 w-full p-3 rounded-lg text-yellow-400 hover:bg-gray-900 transition"
            >
              ⚙️ Admin Panel
            </button>
          )}

          <button
            onClick={logout}
            className="flex items-center gap-3 w-full p-3 rounded-lg text-red-500 hover:bg-gray-900 transition"
          >
            🚪 Logout
          </button>
        </>
      ) : (
        <div className="flex gap-3">

          <button
            onClick={() => setCurrentPage("login")}
            className="flex-1 border border-yellow-500 text-yellow-400 py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition"
          >
            Login
          </button>

          <button
            onClick={() => setCurrentPage("signup")}
            className="flex-1 bg-yellow-500 text-black py-3 rounded-full font-bold"
          >
            Sign Up
          </button>

        </div>
      )}
    </div>

  </div> */}
{/* )}  */} 

           {/* Overlay */}
<div
  className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
    isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
  onClick={closeMenu}
/>

{/* Slide Drawer */}
<div
  className={`fixed top-0 left-0 h-full w-[80%] max-w-xs bg-black border-r border-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
    isMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>

  <div className="p-5 space-y-6">

    {/* 🔥 Header */}
    <div className="flex items-center justify-between">
      <h2 className="text-yellow-400 font-bold text-lg">Menu</h2>
      <button onClick={closeMenu}>
        ✕
      </button>
    </div>

    {/* 🔍 Search */}
    <div className="relative">
      <input
        type="text"
        placeholder="Search gadgets..."
        className="w-full bg-gray-900 text-white rounded-full py-3 pl-10 pr-4 border border-gray-700 focus:border-yellow-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Search className="absolute left-3 top-3 w-5 h-5 text-yellow-500" />
    </div>

    {/* 🛒 Cart */}
    <button
      onClick={() => {
        setCurrentPage("cart");
        closeMenu();
      }}
      className="flex items-center justify-between w-full bg-gray-900 px-4 py-3 rounded-xl border border-gray-700"
    >
      <span className="flex items-center gap-2">
        <ShoppingCart className="w-5 h-5 text-yellow-400" />
        Cart
      </span>
      <span className="text-yellow-400 font-bold">{cartCount}</span>
    </button>

    {/* 📦 Navigation */}
    <div className="space-y-2">

      <button
        onClick={() => {
          setCurrentPage("home");
          closeMenu();
        }}
        className="w-full text-left p-3 rounded-lg hover:bg-gray-900"
      >
         Shop
      </button>

      {/* <button
        onClick={() => {
          setCurrentPage("home");
          closeMenu();
        }}
        className="w-full text-left p-3 rounded-lg hover:bg-gray-900"
      >
         Categories
      </button> */}

      <button
        onClick={() => {
          openHotDealAd();
          closeMenu();
        }}
        className="w-full text-left p-3 rounded-lg text-yellow-500 font-semibold hover:bg-gray-900"
      >
        🔥 Hot Deals
      </button>

      <button
        onClick={() => {
          setCurrentPage("contact");
          closeMenu();
        }}
        className="w-full text-left p-3 rounded-lg hover:bg-gray-900"
      >
         Contact
      </button>
    </div>

    {/* 👤 Account */}
    <div className="border-t border-gray-800 pt-4 space-y-3">

      {user ? (
        <>
          <button
            onClick={() => {
              setCurrentPage("userDashboard");
              closeMenu();
            }}
            className="w-full text-left p-3 rounded-lg hover:bg-gray-900"
          >
             My Dashboard
          </button>

          {user?.role === "admin" && (
            <button
              onClick={() => {
                setCurrentPage("admin-dashboard");
                closeMenu();
              }}
              className="w-full text-left p-3 rounded-lg text-yellow-400 hover:bg-gray-900"
            >
              ⚙️ Admin Panel
            </button>
          )}

          <button
            onClick={() => {
              logout();
              closeMenu();
            }}
            className="w-full text-left p-3 rounded-lg text-red-500 hover:bg-gray-900"
          >
             Logout
          </button>
        </>
      ) : (
        <div className="flex gap-3">
          <button
            onClick={() => {
              setCurrentPage("login");
              closeMenu();
            }}
            className="flex-1 border border-yellow-500 text-yellow-400 py-3 rounded-full"
          >
            Login
          </button>

          <button
            onClick={() => {
              setCurrentPage("signup");
              closeMenu();
            }}
            className="flex-1 bg-yellow-500 text-black py-3 rounded-full font-bold"
          >
            Sign Up
          </button>
        </div>
      )}
    </div>

  </div>
</div>


    </nav>
  );
}