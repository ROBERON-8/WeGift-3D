"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Embla setup with autoplay
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000 })]
  );

  const images = ["/bg_hero.png", "/decor.png"];

  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNext = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden z-10">
      {/* SVG Wave Line */}
      <Image
        src="/Vector 1.png"
        alt="Wave"
        fill
        className="absolute top-1/2 left-0 w-full h-40 z-0 pointer-events-none opacity-60"
      />

      {/* Container */}
      <div className="relative flex items-center min-h-screen px-6 lg:px-12 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
          
          {/* Left Content - Embla Carousel */}
          <div className="relative w-full h-[500px] overflow-hidden rounded-2xl bg-transparent">
            <div className="overflow-hidden w-full h-full" ref={emblaRef}>
              <div className="flex h-full">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] relative h-full"
                  >
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 delay-200 ${
              isLoaded ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <h1 className="font-playfair text-5xl lg:text-7xl xl:text-7xl font-semibold leading-tight text-white">
                Custom 3D Prints
              </h1>
              <h2 className="font-playfair text-3xl lg:text-5xl font-medium text-gray-300">
                Posters • Art • Designs
              </h2>
            </div>

            <p className="text-lg lg:text-xl text-gray-400 max-w-md leading-relaxed">
              Unique 3D printed products, designer posters, and custom orders
              tailored for you.
            </p>

            <div className="pt-4 relative z-10">
              <button className="bg-white text-black px-8 py-4 text-sm lg:text-base font-semibold tracking-wider hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" onClick={scrollToProducts}>
                Explore Collection
              </button>
            </div>

            <div className="pt-8 flex items-center absolute right-0" onClick={scrollToNext}>
              <LiaLongArrowAltDownSolid
                className="font-extralight text-white animate-bounce"
                size={64}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
