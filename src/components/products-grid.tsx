"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Product = {
  id: string;
  name: string;
  flavor: "Strawberry" | "Fig & Apricot" | "Cranberry" | "Peanut" | "Coffee";
  price: number;
  compareAt?: number;
  highlights: string[];
  image: string;
};

const BASE_PRODUCTS: Product[] = [
  {
    id: "strawberry",
    name: "Strawberry Energy Bar",
    flavor: "Strawberry",
    price: 725,
    compareAt: 750,
    highlights: ["5-6g protein", "No sugar", "Vegan"],
    image: "/images/products/strawberry-energy-bar.jpg.png",
  },
  {
    id: "fig-apricot",
    name: "Fig & Apricot Energy Bar",
    flavor: "Fig & Apricot",
    price: 725,
    compareAt: 750,
    highlights: ["Micronutrients", "Clean energy", "Vegan"],
    image: "/images/products/fig-apricot-energy-bar.jpg.png",
  },
  {
    id: "cranberry",
    name: "Cranberry Energy Bar",
    flavor: "Cranberry",
    price: 725,
    compareAt: 750,
    highlights: ["Antioxidants", "No preservatives", "Vegan"],
    image: "/images/products/cranberry-energy-bar.jpg.png",
  },
  {
    id: "peanut",
    name: "Peanut Energy Bar",
    flavor: "Peanut",
    price: 725,
    compareAt: 750,
    highlights: ["Protein rich", "No additives", "Vegan"],
    image: "/images/products/peanut-energy-bar.jpg.png",
  },
  {
    id: "coffee",
    name: "Coffee Energy Bar",
    flavor: "Coffee",
    price: 725,
    compareAt: 750,
    highlights: ["Real coffee", "Energizing", "Vegan"],
    image: "/images/products/coffee-energy-bar.jpg.png",
  },
  {
    id: "strawberry-5",
    name: "Strawberry Bars - Box of 5",
    flavor: "Strawberry",
    price: 325,
    compareAt: 375,
    highlights: ["Value pack", "No sugar", "Vegan"],
    image: "/images/products/strawberry-energy-bar.jpg.png",
  },
];

type SortKey = "popularity" | "price-asc" | "price-desc" | "name";

export function ProductsGrid() {
  const [query, setQuery] = useState("");
  const [flavor, setFlavor] = useState<"All" | Product["flavor"]>("All");
  const [sort, setSort] = useState<SortKey>("popularity");

  const filtered = useMemo(() => {
    let list = BASE_PRODUCTS.filter((p) =>
      (flavor === "All" || p.flavor === flavor) &&
      (query.trim().length === 0 || p.name.toLowerCase().includes(query.toLowerCase()))
    );
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "name":
        list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    return list;
  }, [query, flavor, sort]);

  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="flex flex-col gap-4 rounded-xl border bg-background/70 px-4 py-4 shadow-sm backdrop-blur sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-gradient text-3xl font-extrabold tracking-tight">Explore Flavors</h2>
          <p className="text-sm font-medium text-muted-foreground">Hover to preview. Filter and sort to find your favorite.</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="flex gap-2 flex-wrap">
            {["All", "Strawberry", "Fig & Apricot", "Cranberry", "Peanut", "Coffee"].map((f) => (
              <button
                key={f}
                onClick={() => setFlavor(f as any)}
                className={`rounded-full border px-3 py-1 text-sm font-semibold transition shadow-sm ${
                  flavor === f
                    ? "bg-primary text-primary-foreground ring-2 ring-primary/30"
                    : "hover:bg-accent hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="h-9 rounded-md border bg-background px-3 text-sm font-medium outline-none ring-0 shadow-sm focus-visible:ring-2 focus-visible:ring-primary"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="h-9 rounded-md border bg-background px-3 text-sm font-medium shadow-sm focus-visible:ring-2 focus-visible:ring-primary"
            >
              <option value="popularity">Sort: Popularity</option>
              <option value="price-asc">Sort: Price (Low→High)</option>
              <option value="price-desc">Sort: Price (High→Low)</option>
              <option value="name">Sort: Name</option>
            </select>
          </div>
        </div>
      </div>

      {/* Horizontal marquee list */}
      <div className="relative mt-6 md:mt-8">
        <div className="overflow-hidden">
          <div className="flex w-[200%] gap-6 animate-[marquee-x_25s_linear_infinite] hover:[animation-play-state:paused]">
            {[...filtered, ...filtered].map((p, idx) => (
              <div
                key={`${p.id}-${idx}`}
                className="group w-[260px] shrink-0 overflow-hidden rounded-xl border bg-background shadow-sm transition hover:shadow-md"
              >
                <div className="relative">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  {p.compareAt && (
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">Sale</span>
                  )}
                </div>
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold tracking-tight">{p.flavor}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">Rs. {p.price}</span>
                    {p.compareAt && (
                      <span className="text-sm text-muted-foreground line-through">Rs. {p.compareAt}</span>
                    )}
                  </div>
                  <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {p.highlights.map((h) => (
                      <li key={h} className="rounded-full border px-2 py-0.5">{h}</li>
                    ))}
                  </ul>
                  <Button className="mt-2 w-full transition active:scale-[0.98]">Add to Cart</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


