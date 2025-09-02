'use client'
import React, { useState } from "react";

const Products = () => {
  const products = [
    { 
      id: 1, 
      name: "Amazon GT2 Smart Watch", 
      originalPrice: "₹ 2,500.00", 
      salePrice: "₹ 1,750.00", 
      description: "Advanced fitness tracking",
      discount: "-30%",
      isNew: false,
      image: "bg-gradient-to-br from-blue-100 to-blue-200"
    },
    { 
      id: 2, 
      name: "Apple Smart Watch", 
      originalPrice: "₹ 5,000.00", 
      salePrice: "₹ 4,000.00", 
      description: "Premium smartwatch experience",
      discount: "-20%",
      isNew: false,
      image: "bg-gradient-to-br from-gray-700 to-gray-900"
    },
    { 
      id: 3, 
      name: "Kieslect Ks Smart Watch", 
      originalPrice: "₹ 1,800.00", 
      salePrice: "₹ 900.00", 
      description: "Professional fitness watch",
      discount: "-50%",
      isNew: false,
      image: "bg-gradient-to-br from-gray-200 to-gray-300"
    },
    { 
      id: 4, 
      name: "Samsung Galaxy Watch", 
      originalPrice: "₹ 3,200.00", 
      salePrice: "₹ 2,880.00", 
      description: "Smart health companion",
      discount: "-10%",
      isNew: true,
      image: "bg-gradient-to-br from-amber-100 to-amber-200"
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    
    setIsSubmitting(true);
    setStatus("");

    // Validate email
    if (!email.trim()) {
      setStatus("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    // Prepare form data
    const formData = {
      email: email.trim(),
      productName: selectedProduct.name,
      productPrice: selectedProduct.salePrice,
      originalPrice: selectedProduct.originalPrice,
      productId: selectedProduct.id,
    };

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await res.json();

      // Check for success using multiple conditions
      if (res.ok ) {
        
        setSubmitted(false);
        setStatus("Order submitted successfully!");
        
        // Close modal automatically after 4s
        setTimeout(() => {
          setSelectedProduct(null);
          setSubmitted(false);
          setEmail("");
          setStatus("");
        }, 4000);
      } else {
        const errorMessage = responseData.error || responseData.message || "Failed to submit order";
        setStatus(errorMessage);
      }
    } catch (error) {
      setStatus("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 bg-gray-50 min-h-screen">
      <h1 className="text-3xl sm:text-4xl text-gray-800 font-bold mb-12 text-center">
        Our Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            {/* Product Image Area */}
            <div className={`relative h-56 ${product.image} flex items-center justify-center`}>
              {/* New Badge */}
              {product.isNew && (
                <div className="absolute top-4 right-4 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  New
                </div>
              )}
              
              {/* Product Placeholder */}
              <div className="w-24 h-24 bg-white bg-opacity-30 rounded-2xl flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-400 rounded-xl opacity-60"></div>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                {product.description}
              </p>
              
              {/* Price */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-gray-800">{product.salePrice}</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Place an Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Form Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => !isSubmitting && setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl max-w-md w-full relative animate-[fadeIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 disabled:opacity-50"
              onClick={() => !isSubmitting && setSelectedProduct(null)}
              disabled={isSubmitting}
            >
              ✕
            </button>

            <h3 className="text-lg sm:text-xl font-bold text-slate-800 text-center mb-4">
              Order {selectedProduct.name}
            </h3>

            {/* Product Details */}
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Price:</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 line-through text-sm">{selectedProduct.originalPrice}</span>
                  <span className="text-blue-600 font-bold">{selectedProduct.salePrice}</span>
                </div>
              </div>
            </div>

            {!submitted ? (
              <div className="flex flex-col gap-4">
                <div className="text-sm text-gray-600">
                  Enter your email address and our team will connect with you:
                </div>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="text-black w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
                
                {/* Status Message */}
                {status && (
                  <p className={`text-sm text-center ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                    {status}
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !email.trim()}
                  className="w-full px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Order'
                  )}
                </button>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-green-600 font-semibold">
                  Thank you! Our team will connect with you ASAP.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Check your email for order confirmation.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;