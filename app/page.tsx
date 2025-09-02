'use client';
import React, { useState } from 'react';
import Products from './components/Products';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Index from './components/Index'
import About from './components/About';

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />
      <Index />
      <section id="about" >
        <About />
      </section>
      <section id="products" >
        <Products />
      </section>
      <section id="contact">
        <Footer />
      </section>
      </div>
  );
}