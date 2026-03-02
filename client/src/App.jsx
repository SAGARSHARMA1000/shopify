import React from "react";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/layout/Loader";
import Router from "./components/router/Router";
import ToastContainer from "./components/common/ToastContainer";
import { useApp } from "./context/AppContext";

function MainApp() {
  const { isLoading } = useApp();

  // return (
  //   <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
  //     <Navbar />
  //     <main className="grow container mx-auto px-4 py-8 max-w-7xl">
  //       {isLoading && <Loader />}
  //       <Router />
  //     </main>
  //     <Footer />
  //     <ToastContainer />
  //   </div>
 // );
 return (
  <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">

    {/* Global Gold Glow Background Effects */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 blur-3xl rounded-full pointer-events-none"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full pointer-events-none"></div>

    {/* Content Wrapper */}
    <div className="relative flex flex-col min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 transition-all duration-300">
        {isLoading && <Loader />}
        <Router />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast */}
      <ToastContainer />

    </div>
  </div>
);
}

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}