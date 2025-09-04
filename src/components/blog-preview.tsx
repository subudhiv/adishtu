"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";

// Blog Preview
type Post = {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
};

const POSTS: Post[] = [
  {
    id: "healthy-fats",
    title: "How to Incorporate Healthy Fats into Your Diet",
    date: "Feb 18, 2025",
    readTime: "6 min",
    excerpt: "There are still many misconceptions about fats. Here's how to add the right ones...",
    image: "/images/products/facts.jpg.png",
  },
  {
    id: "rise-of-energy-bars",
    title: "The Rise of Energy Bars in India",
    date: "Jan 23, 2025",
    readTime: "5 min",
    excerpt: "Consumers are shifting to healthier snacking. We unpack the trends and choices...",
    image: "/images/products/energy.jpg.png",
  },
  {
    id: "weight-management",
    title: "Energy Bars and Healthy Weight Management",
    date: "Dec 23, 2024",
    readTime: "7 min",
    excerpt: "Balancing calorie control with nutrition is hard—here's how bars can help...",
    image: "/images/products/weight.jpg.png",
  },
];

export function BlogPreview() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const id = setTimeout(() => {
      setPosts(POSTS);
      setLoading(false);
    }, 500);
    return () => clearTimeout(id);
  }, []);

  return (
    <section id="blogs" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-gradient">Chew on Healthy Tips</h2>
        <Button variant="ghost" className="hidden sm:inline-flex">View all</Button>
      </div>
      <div className="mt-6 overflow-x-auto md:mt-8 md:overflow-visible">
        <div className="flex gap-4 md:grid md:grid-cols-3 md:gap-6">
          {(loading ? (Array.from({ length: 3 }) as (Post | null)[]) : (posts as (Post | null)[])).map((p, i) => (
            <article key={loading ? i : p!.id} className="group relative w-[85%] min-w-[260px] flex-1 overflow-hidden rounded-xl border bg-background md:w-auto">
              <div className="relative aspect-[16/9] w-full">
                {loading ? (
                  <div className="h-full w-full animate-pulse bg-muted" />
                ) : (
                  <>
                    <Image src={p!.image} alt={p!.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="pointer-events-none absolute bottom-2 left-2 rounded bg-background/80 px-2 py-0.5 text-xs text-foreground backdrop-blur">
                      {p!.date} • {p!.readTime}
                    </div>
                  </>
                )}
              </div>
              <div className="space-y-2 p-4">
                {loading ? (
                  <>
                    <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-full animate-pulse rounded bg-muted" />
                    <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
                    <div className="h-9 w-24 animate-pulse rounded bg-muted" />
                  </>
                ) : (
                  <>
                    <h3 className="line-clamp-2 font-medium leading-snug">{p!.title}</h3>
                    <p className="line-clamp-3 text-sm text-muted-foreground">{p!.excerpt}</p>
                    <Button variant="link" className="px-0">Read more</Button>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Video Testimonials (kept here; page can import from this module)
type VideoTestimonial = {
  id: string;
  name: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  quote: string;
  rating: number;
};

const TESTIMONIALS: VideoTestimonial[] = [
  {
    id: "1",
    name: "Prem Sharma",
    title: "Fitness Enthusiast",
    thumbnail: "/images/products/strawberry-energy-bar.jpg.png",
    videoUrl: "images/blog/sample1.mp4",
    quote: "These energy bars have transformed my routine!",
    rating: 4,
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    title: "Marathon Runner",
    thumbnail: "/images/products/fig-apricot-energy-bar.jpg.png",
    videoUrl: "images/blog/sample2.mp4",
    quote: "Perfect fuel for my long runs. Natural and delicious!",
    rating: 5,
  },
  {
    id: "3",
    name: "Anita Patel",
    title: "Working Mom",
    thumbnail: "/images/products/cranberry-energy-bar.jpg.png",
    videoUrl: "images/blog/sample3.mp4",
    quote: "Healthy snacking made easy for my busy lifestyle.",
    rating: 5,
  },
];

export function VideoTestimonials() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const toggle = (id: string) => setPlayingVideo((p) => (p === id ? null : id));

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Video <span className="text-green-600">Testimonials</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear what our customers have to say about their experience with Adishtu energy bars</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-video bg-gray-100">
                {playingVideo === t.id ? (
                  <video className="w-full h-full object-cover" controls autoPlay onEnded={() => setPlayingVideo(null)}>
                    <source src={t.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <>
                    <Image src={t.thumbnail} alt={`${t.name} testimonial`} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer hover:bg-black/30 transition-colors" onClick={() => toggle(t.id)}>
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-green-600 ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">1:30</div>
                  </>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic text-sm leading-relaxed">"{t.quote}"</blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.title}</div>
                </div>
                <Button onClick={() => toggle(t.id)} className="mt-4 w-full" variant={playingVideo === t.id ? "secondary" : "default"}>
                  {playingVideo === t.id ? (<><Pause className="w-4 h-4 mr-2" />Playing...</>) : (<><Play className="w-4 h-4 mr-2" />Watch Testimonial</>)}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}