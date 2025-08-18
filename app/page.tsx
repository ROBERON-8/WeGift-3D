'use client';
import React, { useState } from 'react';
import Products from './components/Products';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Index from './components/Index'

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />
      <Index />
      <Products />
      <Footer />
      </div>
  );
}