import React from "react";
import Image from "next/image";

const Index = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center md:items-start">
          
          {/* Left Content */}
          <div className="relative z-10 text-center md:text-left flex-1">
            <p className="text-xs sm:text-sm mb-2">≡ Best Gadget & Gear</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              WeGift 3D
            </h1>
            <p className="text-gray-300 mb-6 md:mb-8 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
              There are many variations of passages of available majority 
              have suffered alteration in injected
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base">
              See All Products
            </button>
          </div>

          {/* Right Image */}
          <div className="relative flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
            <Image
              src="/wegift logo.png"
              alt="Featured Product"
              width={250}
              height={250}
              className="w-40 sm:w-56 md:w-64 h-auto object-contain rounded-2xl shadow-xl"
            />
          </div>

          {/* Background Graphics (hidden on mobile) */}
          <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full opacity-10">
            <div className="absolute top-12 right-12 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute top-32 right-32 w-16 h-16 border border-white rounded-full"></div>
            <div className="absolute bottom-12 right-24 w-24 h-24 border border-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
