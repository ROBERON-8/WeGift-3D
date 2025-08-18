import React from 'react';
import { Heart, ShoppingCart, User, ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Index = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Navigation Arrows */}
          {/* <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <ArrowRight className="w-6 h-6" />
          </button> */}

          {/* Background Graphics */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
            <div className="absolute top-12 right-12 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute top-32 right-32 w-16 h-16 border border-white rounded-full"></div>
            <div className="absolute bottom-12 right-24 w-24 h-24 border border-white rounded-full"></div>
          </div>

          {/* Right Side Image */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
            <Image src="/wegift logo.png" alt="Featured Product" width={100} height={100} className="w-64 h-64 object-contain rounded-2xl shadow-xl" />
          </div>

          <div className="relative z-10">
            <p className="text-sm mb-2">≡ Best Gadget & Gear</p>
            <h1 className="text-6xl font-bold mb-6">
              WeGift 3D<br />
            </h1>
            <p className="text-gray-300 mb-8 max-w-md">
              There are many variations of passages of available majority 
              have suffered alteration in injected
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium">
              See All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;
