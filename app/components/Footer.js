import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <footer className="w-full bg-slate-900 text-white py-8 mt-12">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-4 md:mb-0 text-center md:text-left">
        <span className="font-bold text-lg">WeGift 3D</span> &copy; {new Date().getFullYear()} All rights reserved.
      </div>
      <div className="flex gap-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/products" className="hover:underline">Products</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
