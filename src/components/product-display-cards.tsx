"use client";

import DisplayCards from "@/components/ui/display-cards";
import { Heart, Zap, Star, Coffee, Apple, Nut } from "lucide-react";

const adishtuCards = [
  {
    icon: <Heart className="size-4 text-red-300" />,
    title: "Strawberry",
    description: "Natural sweetness with real fruit",
    date: "Most Popular",
    iconClassName: "text-red-500",
    titleClassName: "text-red-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Zap className="size-4 text-yellow-300" />,
    title: "Coffee",
    description: "Energizing boost for your day",
    date: "Best Seller",
    iconClassName: "text-yellow-500",
    titleClassName: "text-yellow-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Star className="size-4 text-purple-300" />,
    title: "Cranberry",
    description: "Antioxidant-rich superfood",
    date: "New Flavor",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export function ProductDisplayCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-gradient">Featured Energy Bars</h2>
        <div className="text-sm text-muted-foreground">
          Hover to explore our premium flavors
        </div>
      </div>
      
      <div className="flex min-h-[400px] w-full items-center justify-center">
        <div className="w-full max-w-3xl">
          <DisplayCards cards={adishtuCards} />
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          Each bar is crafted with natural ingredients, no chemicals, no preservatives
        </p>
      </div>
    </section>
  );
}
