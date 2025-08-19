"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl text-gray-800 font-bold">
                We<span className="text-red-500">Gift 3D</span>
              </span>
            </div>

            {/* Search Bar (hidden on small screens) */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
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
            <div className="flex items-center space-x-4 md:space-x-6">
              <Heart className="w-6 h-6 text-gray-600 cursor-pointer" />
              <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer" />

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-gray-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md border-t">
            <div className="px-4 py-3 space-y-3">
              {/* Mobile Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search all Product"
                  className="w-full pl-4 pr-12 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded text-sm">
                  Go
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col space-y-2">
                <Link href="/" className="text-gray-700 hover:text-red-500">Home</Link>
                <Link href="/products" className="text-gray-700 hover:text-red-500">Products</Link>
                <Link href="/about" className="text-gray-700 hover:text-red-500">About</Link>
                <Link href="/contact" className="text-gray-700 hover:text-red-500">Contact</Link>
                <Link href="/offers" className="text-red-500 font-semibold">Special Offers</Link>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
