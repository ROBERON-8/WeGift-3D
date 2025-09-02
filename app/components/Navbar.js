'use client'

import { useState } from 'react'
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

    const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const el=document.getElementById("contact");
    if(el) el.scrollIntoView({behavior:"smooth"});
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 lg:px-12 py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className='flex items-center'>
        <Image src='/wegift logo.png' alt='WEGIFT-3D Logo' width={80} height={100} className="h-8" />
        <div className="font-playfair text-xl lg:text-2xl font-semibold tracking-wider">
          WEGIFT-<span className="text-accent text-yellow-400">3D</span>
        </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          <button   className="text-sm lg:text-base font-medium hover:text-gray-300 hover:cursor-pointer transition-colors duration-300 tracking-wide" onClick={scrollToProducts}>
            COLLECTION
          </button>
          <button   className="text-sm lg:text-base font-medium hover:text-gray-300 hover:cursor-pointer transition-colors duration-300 tracking-wide" onClick={scrollToAbout}>
            ABOUT
          </button>
          {/* <button  ="stores" className="text-sm lg:text-base font-medium hover:text-gray-300 transition-colors duration-300 tracking-wide">
            STORES
          </button> */}
          <button   className="text-sm lg:text-base font-medium hover:text-gray-300 hover:cursor-pointer transition-colors duration-300 tracking-wide" onClick={scrollToContact}>
            CONTACT
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-6 py-6 border-t border-gray-700">
          <div className="flex flex-col space-y-4">
            <button  className="text-lg font-medium hover:text-gray-300 transition-colors tracking-wide" onClick={scrollToProducts}>
              COLLECTION
            </button>
            <button   className="text-lg font-medium hover:text-gray-300 transition-colors tracking-wide" onClick={scrollToAbout}>
              ABOUT
            </button>
            {/* <button  ="stores" className="text-lg font-medium hover:text-gray-300 transition-colors tracking-wide">
              STORES
            </button> */}
            <button   className="text-lg font-medium hover:text-gray-300 transition-colors tracking-wide" onClick={scrollToContact}>
              CONTACT
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}