import React, { useState } from "react";

const Products = () => {
  const products = [
    { id: 1, name: "Amazon GT2 Smart Watch", originalPrice: "$160.00", salePrice: "$130.00", rating: 5, reviews: "(5.6k Reviews)", color: "bg-blue-100" },
    { id: 2, name: "Apple Smart Watch", originalPrice: "$160.00", salePrice: "$130.00", rating: 5, reviews: "(7.3k Reviews)", color: "bg-yellow-100" },
    { id: 3, name: "Kieslect Ks Pro Smart Watch", originalPrice: "$160.00", salePrice: "$130.00", rating: 5, reviews: "(1.3k Reviews)", color: "bg-pink-100" },
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
      timestamp: new Date().toISOString(),
      orderDate: new Date().toLocaleDateString(),
      orderTime: new Date().toLocaleTimeString()
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

      if (responseData) {
        setSubmitted(true);
        setIsSubmitting(false); 
        setStatus("Order submitted successfully!");
        // ✅ stop spinner immediately

        // Close modal automatically after 2s
        setTimeout(() => {
          setSelectedProduct(null);  // closes modal
          setSubmitted(false);
          setEmail("");
          setStatus("");
        }, 4000);
      } else {
        setStatus(responseData.message || "Failed to submit order. Please try again.");
        setIsSubmitting(false); // ✅ stop spinner on failure
      }
    } catch (error) {
      setStatus("Network error. Please check your connection and try again.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h2 className="text-xl sm:text-2xl text-slate-900 font-bold mb-8">
        Best Deals for You 🔥
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition"
          >
            <div className={`w-28 h-28 sm:w-32 sm:h-32 ${product.color} rounded-xl flex items-center justify-center mb-4`}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-300 rounded-lg"></div>
            </div>

            <h3 className="font-semibold text-slate-600 text-base sm:text-lg text-center">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-gray-500 text-sm line-through">{product.originalPrice}</p>
              <p className="text-red-500 font-bold">{product.salePrice}</p>
            </div>
            <button
              className="mt-4 px-4 py-2 w-full sm:w-auto bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => setSelectedProduct(product)}
            >
              Order Now
            </button>
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
                  <span className="text-red-500 font-bold">{selectedProduct.salePrice}</span>
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