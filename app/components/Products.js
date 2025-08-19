import React, { useMemo, useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const ORG_EMAIL = "info@wegift3d.com"; // ← change this
const WHATSAPP_NUMBER = "916360146030"; // ← change this (countrycode + number, no +)

const Products = () => {
  const products = [
    { id: 1, name: "Amazon GT2 Smart Watch", originalPrice: "$160.00", salePrice: "$130.00", rating: 5, reviews: "(5.6k Reviews)", image: "/api/placeholder/60/60", color: "bg-blue-100" },
    { id: 2, name: "Apple Smart Watch", originalPrice: "$160.00", salePrice: "$130.00", rating: 5, reviews: "(7.3k Reviews)", image: "/api/placeholder/60/60", color: "bg-yellow-100" },
    { id: 3, name: "Kieslect Ks Pro Smart Watch", originalPrice: "$160.00", salePrice: "$130.00", rating: 5, reviews: "(1.3k Reviews)", image: "/api/placeholder/60/60", color: "bg-pink-100" },
    { id: 4, name: "Samsung Galaxy Watch 5", originalPrice: "$200.00", salePrice: "$170.00", rating: 4, reviews: "(4.9k Reviews)", image: "/api/placeholder/60/60", color: "bg-green-100" },
    { id: 5, name: "Garmin Venu 2", originalPrice: "$300.00", salePrice: "$250.00", rating: 4, reviews: "(3.2k Reviews)", image: "/api/placeholder/60/60", color: "bg-purple-100" },
    { id: 6, name: "Fitbit Versa 4", originalPrice: "$180.00", salePrice: "$150.00", rating: 4, reviews: "(6.1k Reviews)", image: "/api/placeholder/60/60", color: "bg-orange-100" }
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const emailHref = useMemo(() => {
    if (!selectedProduct) return "#";
    const subject = `Order Request: ${selectedProduct.name}`;
    const body =
      `Hi Team,\n\n` +
      `I’d like to place an order with the following details:\n\n` +
      `- Product: ${selectedProduct.name}\n` +
      `- Price (listed): ${selectedProduct.salePrice}\n` +
      `- Quantity: 1\n\n` +
      `Kindly share payment & delivery details.\n\n` +
      `Delivery Address: [Your Address Here]\n` +
      `Contact Number: [Your Phone Number Here]\n\n` +
      `Thanks & Regards,\n[Your Name]`;
      
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${ORG_EMAIL}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [selectedProduct]);

  const whatsappHref = useMemo(() => {
    if (!selectedProduct) return "#";
    const msg =
      `Hi Team,\n\n` +
      `I&apos;d like to place an order with the following details:\n\n` +
      `- Product: ${selectedProduct.name}\n` +
      `- Price (listed): ${selectedProduct.salePrice}\n` +
      `- Quantity: 1\n\n` +
      `Kindly share payment & delivery details.\n\n` +
      `Delivery Address: [Your Address Here]\n` +
      `Contact Number: [Your Phone Number Here]\n\n` +
      `Thanks & Regards,\n[Your Name]`;
      
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, [selectedProduct]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h2 className="text-xl sm:text-2xl text-slate-900 font-bold mb-8">Best Deals for You 🔥</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition"
          >
            {/* Image */}
            <div className={`w-28 h-28 sm:w-32 sm:h-32 ${product.color} rounded-xl flex items-center justify-center mb-4`}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-300 rounded-lg"></div>
            </div>

            {/* Info */}
            <h3 className="font-semibold text-slate-600 text-base sm:text-lg text-center">{product.name}</h3>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-gray-500 text-sm line-through">{product.originalPrice}</p>
              <p className="text-red-500 font-bold">{product.salePrice}</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-400">{'★'.repeat(product.rating)}</span>
              <span className="text-gray-400 text-xs">{product.reviews}</span>
            </div>
            <button
              className="mt-4 px-4 py-2 w-full sm:w-auto bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => setSelectedProduct(product)}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>

      {/* Order Modal */}
      {selectedProduct && (
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
        onClick={() => setSelectedProduct(null)} // clicking backdrop closes modal
      >
        <div
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl max-w-md w-full relative animate-[fadeIn_0.3s_ease-out] max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            onClick={() => setSelectedProduct(null)}
          >
            ✕
          </button>

                {/* Product Image */}
            <div className="flex flex-col items-center">
              <div className={`w-24 h-24 sm:w-28 sm:h-28 ${selectedProduct.color} rounded-2xl flex items-center justify-center shadow-md`}>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-300 rounded-lg"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mt-4 text-center">
                {selectedProduct.name}
              </h3>
              <p className="mt-2 text-gray-500 text-sm">{selectedProduct.reviews}</p>

              {/* Price */}
              <div className="flex items-center gap-2 mt-3">
                <p className="text-gray-400 text-sm line-through">
                  {selectedProduct.originalPrice}
                </p>
                <p className="text-red-500 font-bold text-base sm:text-lg">
                  {selectedProduct.salePrice}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a
                href={emailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow transition text-sm sm:text-base"
              >
                <IoIosMail size={24}/> <span className="text-center">Order via Email</span>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 shadow transition text-sm sm:text-base"
              >
                <FaWhatsapp size={24}/> <span className="text-center">Order via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
