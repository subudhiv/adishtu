"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import { ProductCarousel } from "@/components/product-carousel";
import { TiltedScroll } from "@/components/ui/tilted-scroll";


export function NutritionCompare() {
  const [view, setView] = useState<"before" | "after">("before");
  const before = { calories: 220, sugar: 18, protein: 3 };
  const after = { calories: 180, sugar: 6, protein: 6 };
  const data = view === "before" ? before : after;
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-gradient">Before / After</h2>
        <div className="flex gap-2">
          <Button variant={view === "before" ? "default" : "outline"} onClick={() => setView("before")}>Before</Button>
          <Button variant={view === "after" ? "default" : "outline"} onClick={() => setView("after")}>After</Button>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {Object.entries(data).map(([k, v]) => (
          <div key={k} className="rounded-xl border p-4 text-center transition animate-[fade-up_400ms_ease-both]">
            <div className="text-sm text-muted-foreground capitalize">{k}</div>
            <div className="text-2xl font-bold tabular-nums">{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function IngredientSpotlight() {
  const ingredients = [
    { name: "Almonds", desc: "Healthy fats and protein.", image: "/images/Ingredient/almonds.svg.png" },
    { name: "Dates", desc: "Natural sweetness and fiber.", image: "/images/Ingredient/dates.svg.png" },
    { name: "Cranberries", desc: "Antioxidants-rich fruit.", image: "/images/Ingredient/cranberries.svg.png" },
    { name: "Peanuts", desc: "Protein-dense and tasty.", image: "/images/Ingredient/peanuts.svg.png" },
    { name: "Coffee", desc: "Energizing kick.", image: "/images/Ingredient/coffee.svg.png" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h2 className="text-gradient animate-[fade-up_0.8s_ease-out]">Ingredient Spotlight</h2>
      
      {/* Background animation (non-interactive) */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-20">
          <TiltedScroll className="[&_>div>div]:w-[280px]" />
        </div>

        {/* Animated Ingredient Cards */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ingredients.map((ing, index) => (
          <div 
            key={ing.name} 
            className="group overflow-hidden rounded-xl border hover:shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 animate-[fade-up_0.8s_ease-out] hover:animate-[ingredient-glow_2s_ease-in-out_infinite]"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'both'
            }}
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image 
                src={ing.image} 
                alt={ing.name} 
                fill 
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 animate-[ingredient-float_4s_ease-in-out_infinite]" 
                style={{ animationDelay: `${index * 0.5}s` }}
              />
              {/* Overlay effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </div>
            <div className="p-4">
              <div className="text-lg font-medium transition-colors duration-300 group-hover:text-green-600">
                {ing.name}
              </div>
              <div className="mt-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                {ing.desc}
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

    </section>
  );
}

export function VideoTestimonials() {
  const [open, setOpen] = useState(false);
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-gradient">Video Testimonials</h2>
      </div>
      <div className="mt-6 overflow-hidden rounded-xl border">
        <button onClick={() => setOpen(true)} className="relative block aspect-video w-full">
          <video
            src="/images/blog/blog.mp4"
            className="h-full w-full object-cover"
            muted
            loop
            autoPlay
            playsInline
          />
          <span className="absolute inset-0 grid place-items-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
              <Play className="h-6 w-6" />
            </span>
          </span>
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
          <div className="w-full max-w-3xl overflow-hidden rounded-xl border bg-background">
            <div className="flex items-center justify-between border-b p-3">
              <div className="font-medium">Customer Story</div>
              <button onClick={() => setOpen(false)} className="rounded p-1 hover:bg-accent"><X className="h-5 w-5" /></button>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <video className="h-full w-full" controls autoPlay>
                <source src="/images/blog/blog.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


export function ProductShowcase() {
  return (
    <div>
      <ProductCarousel />
      <NutritionCompare />
      <IngredientSpotlight />
      <VideoTestimonials />
    </div>
  );
}


