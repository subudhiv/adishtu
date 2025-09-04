"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useCounter(target: number, durationMs = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return value;
}

function Progress({ value }: { value: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-muted">
      <div className="h-2 rounded-full bg-primary transition-[width] duration-700" style={{ width: `${value}%` }} />
    </div>
  );
}

export function HealthBenefits() {
  const energy = useCounter(92);
  const protein = useCounter(6);
  const natural = useCounter(100);
  const performance = useCounter(78);

  const testimonials = [
    { name: "Aarav", text: "Perfect pre-workout snack. Clean energy!", avatar: "/vercel.svg" },
    { name: "Isha", text: "Love the natural sweetness. No sugar crash.", avatar: "/vercel.svg" },
    { name: "Rohan", text: "Great for office and gym days.", avatar: "/vercel.svg" },
  ];
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % testimonials.length), 2800);
    return () => clearInterval(id);
  }, [testimonials.length]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Infographic cards */}
        <div className="space-y-6">
          <h2 className="text-gradient">Health Benefits</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border p-4">
              <div className="text-sm text-muted-foreground">Energy Boost</div>
              <div className="mt-2 flex items-end gap-2">
                <div className="text-3xl font-bold tabular-nums">{energy}%</div>
                <div className="text-xs text-muted-foreground">visualized</div>
              </div>
              <div className="mt-3">
                <Progress value={energy} />
              </div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-sm text-muted-foreground">Protein</div>
              <div className="mt-2 flex items-end gap-2">
                <div className="text-3xl font-bold tabular-nums">{protein}g</div>
                <div className="text-xs text-muted-foreground">per bar</div>
              </div>
              <div className="mt-3">
                <Progress value={Math.min(100, (protein / 10) * 100)} />
              </div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-sm text-muted-foreground">Natural Ingredients</div>
              <div className="mt-2 flex items-end gap-2">
                <div className="text-3xl font-bold tabular-nums">{natural}%</div>
                <div className="text-xs text-muted-foreground">clean label</div>
              </div>
              <div className="mt-3">
                <Progress value={natural} />
              </div>
            </div>
            <div className="rounded-xl border p-4">
              <div className="text-sm text-muted-foreground">Fitness Performance</div>
              <div className="mt-2 flex items-end gap-2">
                <div className="text-3xl font-bold tabular-nums">{performance}%</div>
                <div className="text-xs text-muted-foreground">support</div>
              </div>
              <div className="mt-3">
                <Progress value={performance} />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial slider */}
        <div>
          <div className="overflow-hidden rounded-xl border p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">What customers say</h3>
              <div className="text-xs text-muted-foreground">Auto-rotating</div>
            </div>
            <div className="relative mt-4 h-40">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="absolute inset-0 grid grid-cols-[48px_1fr] items-center gap-3 rounded-lg border bg-background p-4 transition-opacity duration-500"
                  style={{ opacity: i === slide ? 1 : 0 }}
                >
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border">
                    <Image src={t.avatar} alt={t.name} fill className="object-contain p-1" />
                  </div>
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <p className="text-sm text-muted-foreground">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)} className={`h-2 w-2 rounded-full ${i === slide ? "bg-primary" : "bg-muted"}`} aria-label={`Go to slide ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


