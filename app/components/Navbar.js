import React from 'react';
import Link from 'next/link';
import { Search, Heart, ShoppingCart, User, ChevronDown } from 'lucide-react';

const Navbar = () => (
  <>
    {/* Header */}
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl text-gray-800 font-bold">
              We<span className="text-red-500">Gift 3D</span>
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search all Product"
                className="w-full pl-4 pr-12 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded text-sm">
                Search
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <Heart className="w-6 h-6 text-gray-600 cursor-pointer" />
            <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer" />
            <div className="flex items-center space-x-2 cursor-pointer">
              {/* <User className="w-6 h-6 text-gray-600" />
              <span className="text-sm text-gray-700">Login/Sign Up</span> */}
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Navigation */}
    {/* <nav className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-8 h-12">
          <div className="bg-red-500 text-white px-4 py-2 rounded flex items-center space-x-2">
            <span className="text-sm">≡ Browse Categories</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <Link href="/" className="text-gray-700 hover:text-red-500">Home</Link>
          <Link href="/products" className="text-gray-700 hover:text-red-500">Products</Link>
          <Link href="/about" className="text-gray-700 hover:text-red-500">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-red-500">Contact</Link>
          <a href="#" className="text-gray-700 hover:text-red-500">Shop</a>
          <a href="#" className="text-gray-700 hover:text-red-500">Brands</a>
          <a href="#" className="text-gray-700 hover:text-red-500">Our Vendor</a>
          <a href="#" className="text-gray-700 hover:text-red-500">Pages</a>
          <a href="#" className="text-gray-700 hover:text-red-500">Customer</a>
          <a href="#" className="text-gray-700 hover:text-red-500">Page</a>
          <a href="#" className="text-red-500">Special Offers</a>
        </div>
      </div>
    </nav> */}
  </>
);

export default Navbar;
