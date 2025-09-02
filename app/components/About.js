import React from 'react';
import { FiGift } from "react-icons/fi";
import { FaLightbulb, FaLeaf } from "react-icons/fa";

const About = () => {
  const stats = [
    { number: "25,356", label: "Happy Customers" },
    { number: "6,050", label: "Followers" },
    { number: "851", label: "Shops" },
    { number: "95%", label: "Happy Customers" }
  ];

  const features = [
    {
      icon: (
        <FiGift className="w-12 h-12 text-rose-900" />
      ),
      title: "Personalized",
      subtitle: "Natural extract",
      description: "Custom 3D-printed gifts that are unique and memorable"
    },
    {
      icon: (
        <FaLightbulb className="w-12 h-12 text-rose-900" />
      ),
      title: "Innovative",
      subtitle: "No Side effect",
      description: "Blending technology with emotions for thoughtful gifting"
    },
    {
      icon: (
        <FaLeaf className="w-12 h-12 text-rose-900" />
      ),
      title: "Sustainable",
      subtitle: "100% Organic",
      description: "Eco-friendly and creative alternatives to traditional gifts"
    }
  ];

  return (
    <div>
        <div className="bg-gray-700 py-8 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
            
            {/* Statistics Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
            {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                </div>
                <div className="text-gray-50 text-sm font-medium">
                    {stat.label}
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>

        <div className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6"></div>
        {/* Why Dangila Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wider">
            WHY WEGIFT-<span className="text-rose-900">3D?</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it. Farther be chapter at visited married in it pressed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-light text-gray-800 mb-2 tracking-wide">
                {feature.title}
              </h3>
              
              {/* Subtitle */}
              <h4 className="text-gray-600 font-medium mb-4">
                {feature.subtitle}
              </h4>
              
              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;