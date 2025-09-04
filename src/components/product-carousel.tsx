"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import DisplayCards from "@/components/ui/display-cards";

const products = [
  {
    id: "peanut",
    name: "Peanut Energy Bar",
    image: "/images/products/peanut-energy-bar.jpg.png",
    ingredient: "/images/Ingredient/peanuts.svg.png",
    color: "green",
    textColor: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: "coffee", 
    name: "Coffee Energy Bar",
    image: "/images/products/coffee-energy-bar.jpg.png",
    ingredient: "/images/Ingredient/coffee.svg.png",
    color: "brown",
    textColor: "text-amber-700",
    bgColor: "bg-amber-50"
  },
  {
    id: "strawberry",
    name: "Strawberry Energy Bar", 
    image: "/images/products/strawberry-energy-bar.jpg.png",
    ingredient: "/images/Ingredient/cranberries.svg.png", // Using cranberries as strawberry substitute
    color: "red",
    textColor: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    id: "fig-apricot",
    name: "Fig & Apricot Energy Bar",
    image: "/images/products/fig-apricot-energy-bar.jpg.png", 
    ingredient: "/images/Ingredient/dates.svg.png", // Using dates as fig substitute
    color: "orange",
    textColor: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    id: "cranberry",
    name: "Cranberry Energy Bar",
    image: "/images/products/cranberry-energy-bar.jpg.png",
    ingredient: "/images/Ingredient/cranberries.svg.png",
    color: "purple", 
    textColor: "text-purple-600",
    bgColor: "bg-purple-50"
  }
];

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with strawberry in center

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
      {/* Decorative background animation (keeps look unchanged) */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-10">
        <div className="hidden sm:block">
          <DisplayCards />
        </div>
      </div>
      <div className="text-center mb-12">
        <h2 className="text-gradient text-3xl md:text-4xl font-bold mb-4">
          ADISHTU'S Energy Bars
        </h2>
        <p className="text-muted-foreground text-lg">
          Natural ingredients, clean energy, pure nutrition
        </p>
      </div>

      <div className="relative">
        {/* Background with floating ingredients */}
        <div className="absolute inset-0 overflow-hidden">
          {products.map((product, index) => (
            <motion.div
              key={`bg-${product.id}`}
              className="absolute opacity-20"
              style={{
                left: `${20 + index * 15}%`,
                top: `${30 + (index % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={product.ingredient}
                alt={product.name}
                width={60}
                height={60}
                className="grayscale"
              />
            </motion.div>
          ))}
        </div>

        {/* Product carousel */}
        <div className="relative flex items-center justify-center min-h-[500px]">
          {products.map((product, index) => {
            const offset = index - currentIndex;
            const isActive = offset === 0;
            const isLeft = offset < 0;
            const isRight = offset > 0;

            let transform = "";
            let opacity = 0.3;
            let scale = 0.7;
            let zIndex = 1;

            if (isActive) {
              transform = "translateX(0) translateZ(0)";
              opacity = 1;
              scale = 1;
              zIndex = 10;
            } else if (isLeft) {
              transform = `translateX(${-120 + offset * 20}px) translateZ(${offset * 50}px) rotateY(${offset * 15}deg)`;
              opacity = 0.6;
              scale = 0.8;
              zIndex = 5 - Math.abs(offset);
            } else if (isRight) {
              transform = `translateX(${120 - offset * 20}px) translateZ(${offset * 50}px) rotateY(${offset * 15}deg)`;
              opacity = 0.6;
              scale = 0.8;
              zIndex = 5 - Math.abs(offset);
            }

            return (
              <motion.div
                key={product.id}
                className="absolute cursor-pointer"
                style={{
                  transform,
                  opacity,
                  scale,
                  zIndex,
                }}
                animate={{
                  y: isActive ? [-5, 5, -5] : 0,
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: isActive ? 1.05 : 0.85 }}
              >
                <div className={`relative ${product.bgColor} rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 ${
                  isActive ? 'border-primary shadow-xl' : 'border-transparent'
                }`}>
                  {/* Product image */}
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Product info */}
                  <div className="text-center">
                    <h3 className={`font-bold text-lg ${product.textColor} mb-2`}>
                      {product.name.toUpperCase()}
                    </h3>
                    
                    {/* Health claims */}
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div>ALL INGREDIENTS LISTED HERE</div>
                      <div className="flex flex-wrap justify-center gap-1 text-[10px]">
                        <span>No Added Preservatives</span>
                        <span>•</span>
                        <span>No Added Sugar</span>
                        <span>•</span>
                        <span>No Artificial Sweeteners</span>
                      </div>
                      <div className="flex flex-wrap justify-center gap-1 text-[10px]">
                        <span>No Artificial Colors</span>
                        <span>•</span>
                        <span>No Artificial Flavors</span>
                        <span>•</span>
                        <span>No Dairy, Soy, Gluten</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>

        {/* Product name display */}
        <div className="text-center mt-6">
          <motion.h3
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-foreground"
          >
            {products[currentIndex].name}
          </motion.h3>
        </div>
      </div>
    </section>
  );
}
