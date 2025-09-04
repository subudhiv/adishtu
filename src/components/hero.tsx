"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";

export function Hero() {
  const bgRef = useRef<HTMLDivElement | null>(null);

  const floatingIngredients = [
    { name: "Almonds", image: "/images/Ingredient/almonds.svg.png", position: { top: "10%", left: "8%" } },
    { name: "Strawberry", image: "/images/Ingredient/cranberries.svg.png", position: { top: "25%", left: "15%" } },
    { name: "Coffee", image: "/images/Ingredient/coffee.svg.png", position: { top: "15%", right: "12%" } },
    { name: "Dates", image: "/images/Ingredient/dates.svg.png", position: { bottom: "20%", left: "10%" } },
    { name: "Cranberries", image: "/images/Ingredient/cranberries.svg.png", position: { bottom: "15%", right: "8%" } },
    { name: "Peanuts", image: "/images/Ingredient/peanuts.svg.png", position: { top: "60%", left: "5%" } },
    { name: "Coffee Beans", image: "/images/Ingredient/coffee.svg.png", position: { top: "70%", right: "15%" } },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(0, ${y * -0.1}px, 0)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Dynamic mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900"></div>
      
      {/* Animated geometric patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-emerald-400/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-green-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-br from-cyan-400/25 to-emerald-500/25 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Shader Animation Background */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay">
        <ShaderAnimation />
      </div>
      
      {/* Hexagonal floating ingredients pattern */}
      <div ref={bgRef} className="pointer-events-none absolute inset-0 -z-10">
        {floatingIngredients.map((ingredient, index) => (
          <div
            key={ingredient.name}
            className="absolute opacity-60 group"
            style={{
              ...ingredient.position,
              animationDelay: `${index * 1.2}s`,
            }}
          >
            <div className="relative transform transition-all duration-500 hover:scale-125">
              {/* Hexagonal glow container */}
              <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-emerald-400/40 to-teal-500/40 rotate-45 rounded-lg blur-lg animate-spin-slow"></div>
              <div className="relative w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg border border-emerald-300/30 flex items-center justify-center">
                <Image
                  src={ingredient.image}
                  alt={ingredient.name}
                  width={32}
                  height={32}
                  className="animate-[bounce_3s_ease-in-out_infinite] brightness-150 contrast-125"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Hero Text with cyber aesthetic */}
          <div className="text-center lg:text-left space-y-12">
            <div className="space-y-8">
              {/* Glitch effect headline */}
              <div className="relative">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.8] tracking-tighter">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-300 animate-gradient-x glow-text">
                    FUEL
                  </span>
                  <span className="block text-white drop-shadow-2xl relative">
                    YOUR
                    <span className="absolute -top-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></span>
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-400 to-cyan-400 animate-gradient-x-reverse glow-text">
                    DAY
                  </span>
                  <div className="relative inline-block">
                    <span className="block text-white drop-shadow-2xl">THE</span>
                    <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                  </div>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-emerald-300 to-teal-400 animate-gradient-x glow-text">
                    HEALTHY
                  </span>
                  <span className="block text-white drop-shadow-2xl">WAY!</span>
                </h1>
                
                {/* Decorative lines */}
                <div className="absolute -left-8 top-1/2 w-1 h-32 bg-gradient-to-b from-emerald-400 to-transparent rounded-full"></div>
                <div className="absolute -right-8 top-1/4 w-1 h-48 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"></div>
              </div>
              
              <p className="text-xl sm:text-2xl text-gray-200 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed backdrop-blur-sm">
                Power-packed energy bars with{" "}
                <span className="text-emerald-400 font-medium">no chemicals</span>,{" "}
                <span className="text-cyan-400 font-medium">no added sugar</span>,{" "}
                <span className="text-teal-400 font-medium">pure nutrition</span>.
              </p>
            </div>

            {/* Futuristic Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="relative bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 font-bold px-12 py-6 text-xl rounded-none skew-x-[-15deg] transform hover:skew-x-0 transition-all duration-300 border-2 border-emerald-300/50 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/50 hover:shadow-2xl overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 skew-x-[-45deg] transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                <span className="relative z-10">SHOP NOW</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="relative border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold px-12 py-6 text-xl rounded-none skew-x-[15deg] transform hover:skew-x-0 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-400/25 overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 skew-x-[45deg] transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                <span className="relative z-10">LEARN MORE</span>
              </Button>
            </div>


          </div>

          {/* Right side - 3D Product Showcase (refined to match hero theme) */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative transform hover:scale-105 transition-transform duration-700">
              {/* Glass card with neon rim */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
                <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-teal-400/30 blur-xl"></div>
                <div className="relative z-10 h-full w-full rounded-[24px] border border-white/20 bg-white/5 backdrop-blur-md overflow-hidden">
                  {/* subtle scan shine */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent translate-y-[-100%] animate-scan" />
                  <Image
                    src="/images/hero/hero-product.jpg.png"
                    alt="ADISHTU Energy Bar"
                    fill
                    className="object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.35)]"
                    priority
                  />
                </div>
              </div>

              {/* Floating product tiles (reuse existing animations) */}
              <div className="absolute -top-14 -left-14 w-28 h-28 sm:w-32 sm:h-32">
                <div className="relative w-full h-full animate-orbit">
                  <div className="absolute inset-0 rounded-2xl bg-emerald-500/20 blur-xl"></div>
                  <div className="relative w-full h-full rounded-2xl border border-emerald-400/30 bg-black/30 backdrop-blur-md p-2">
                    <Image src="/images/products/strawberry-energy-bar.jpg.png" alt="Strawberry Energy Bar" fill className="object-contain" />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-12 -right-12 w-28 h-28 sm:w-32 sm:h-32">
                <div className="relative w-full h-full animate-orbit-reverse" style={{ animationDelay: '1.6s' }}>
                  <div className="absolute inset-0 rounded-2xl bg-amber-500/20 blur-xl"></div>
                  <div className="relative w-full h-full rounded-2xl border border-amber-400/30 bg-black/30 backdrop-blur-md p-2">
                    <Image src="/images/products/coffee-energy-bar.jpg.png" alt="Coffee Energy Bar" fill className="object-contain" />
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-20 w-24 h-24 sm:w-28 sm:h-28">
                <div className="relative w-full h-full animate-float-complex" style={{ animationDelay: '3.2s' }}>
                  <div className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-xl"></div>
                  <div className="relative w-full h-full rounded-2xl border border-purple-400/30 bg-black/30 backdrop-blur-md p-2">
                    <Image src="/images/products/cranberry-energy-bar.jpg.png" alt="Cranberry Energy Bar" fill className="object-contain" />
                  </div>
                </div>
              </div>

              {/* Minimal accent dots */}
              <div className="absolute top-1/4 -left-10 h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <div className="absolute bottom-1/3 -right-8 h-2 w-2 rounded-full bg-cyan-400 animate-ping" style={{ animationDelay: '1s' }} />
              <div className="absolute top-2/3 -left-6 h-2 w-2 rounded-full bg-teal-400 animate-ping" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for advanced animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-x-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }
        
        @keyframes orbit-reverse {
          0% { transform: rotate(0deg) translateX(-40px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(-40px) rotate(360deg); }
        }
        
        @keyframes float-complex {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-5deg); }
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-gradient-x-reverse {
          background-size: 200% 200%;
          animation: gradient-x-reverse 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-orbit {
          animation: orbit 8s linear infinite;
        }
        
        .animate-orbit-reverse {
          animation: orbit-reverse 10s linear infinite;
        }
        
        .animate-float-complex {
          animation: float-complex 6s ease-in-out infinite;
        }
        
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        
        .glow-text {
          text-shadow: 0 0 20px currentColor, 0 0 40px currentColor;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}