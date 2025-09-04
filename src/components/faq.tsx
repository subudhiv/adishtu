"use client";

import { useMemo, useState } from "react";
import { Search, Plus, Minus, Zap, Shield, Users } from "lucide-react";

type QA = { 
  q: string; 
  a: string; 
  category?: string;
  icon?: string;
};

const FAQS: QA[] = [
  {
    q: "If it is no sugar, how come your bars are sweet?",
    a: "We rely on the natural sweetness from the dry fruits we add. Nature provides the perfect sweetness without any artificial additives or processed sugars.",
    category: "ingredients",
    icon: "🍯"
  },
  {
    q: "Without preservatives how can your product stay for long time?",
    a: "Minimal processing and packaging keep our bars fresh naturally. Unopened: ~6 months. Once opened: consume within 7 days for optimal freshness.",
    category: "storage",
    icon: "🛡️"
  },
  {
    q: "Who can consume these products?",
    a: "Our bars can be consumed by all regardless of age and gender. They're perfect for everyone from kids to seniors, athletes to office workers.",
    category: "usage",
    icon: "👥"
  },
  {
    q: "Do you add soy for proteins?",
    a: "No, we don't add soy/vegan/whey protein. All protein comes from natural ingredients like nuts, seeds, and whole grains - pure and simple.",
    category: "ingredients",
    icon: "🌱"
  },
  { 
    q: "Do your bars contain dairy?", 
    a: "No, our bars are completely vegan. We use only plant-based ingredients, making them suitable for all dietary preferences.",
    category: "dietary",
    icon: "🌿"
  },
  {
    q: "What's the recommended daily intake of your energy bars?",
    a: "Aim for protein roughly equal to your body weight (double if bulking). Each bar has ~5-6g protein, so adjust accordingly to your fitness goals.",
    category: "nutrition",
    icon: "⚡"
  },
  {
    q: "Can these bars be consumed before or after workouts?",
    a: "Yes! They're an excellent source of protein and micronutrients for both pre and post workout nutrition. Perfect fuel for your fitness journey.",
    category: "fitness",
    icon: "💪"
  },
];

const categories = [
  { id: "all", label: "All Questions", icon: <Zap className="w-4 h-4" /> },
  { id: "ingredients", label: "Ingredients", icon: <span className="text-lg">🌱</span> },
  { id: "nutrition", label: "Nutrition", icon: <span className="text-lg">⚡</span> },
  { id: "usage", label: "Usage", icon: <Users className="w-4 h-4" /> },
  { id: "dietary", label: "Dietary", icon: <span className="text-lg">🌿</span> },
  { id: "fitness", label: "Fitness", icon: <span className="text-lg">💪</span> },
  { id: "storage", label: "Storage", icon: <Shield className="w-4 h-4" /> },
];

export function FAQ() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const filtered = useMemo(() => {
    let results = FAQS;
    
    // Filter by category
    if (selectedCategory !== "all") {
      results = results.filter(f => f.category === selectedCategory);
    }
    
    // Filter by search query
    const q = query.trim().toLowerCase();
    if (q) {
      results = results.filter((f) => 
        f.q.toLowerCase().includes(q) || 
        f.a.toLowerCase().includes(q)
      );
    }
    
    return results;
  }, [query, selectedCategory]);

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="relative min-h-screen bg-white py-16 md:py-20 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Common FAQs</h2>
          <p className="mt-2 text-gray-600">Find instant answers to your most pressing questions about our energy bars</p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative flex items-center bg-white rounded-2xl border overflow-hidden shadow-sm">
              <Search className="w-6 h-6 text-gray-500 ml-6" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search your questions..."
                className="flex-1 bg-transparent px-6 py-5 text-gray-900 placeholder-gray-400 outline-none text-lg"
              />
              <div className="px-6 py-2">
                <span className="text-sm text-gray-600 font-medium">
                  {filtered.length} results
                </span>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 border hover:bg-gray-50'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-6 md:gap-8">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white border group-hover:border-gray-900 rounded-3xl overflow-hidden transition-all duration-300">
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-8 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                        {item.q}
                      </h3>
                      {item.category && (
                        <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center">
                    {openItems.has(index) ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openItems.has(index)
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8">
                    <div className="pl-16">
                      <div className="w-full h-px bg-gray-200 mb-6"></div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No Results Found</h3>
            <p className="text-gray-500">Try adjusting your search or browse different categories</p>
          </div>
        )}

        {/* Removed CTA for a cleaner white theme */}
      </div>

    </section>
  );
}