"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2, Ban, Droplets, Leaf } from "lucide-react";

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

export function WhyChoose() {
  const customers = useCounter(12000);
  const months = useCounter(6);
  const flavors = useCounter(5);

  return (
    <section id="about" className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:gap-16 md:py-20">
      {/* Left: Illustration / Visual */}
      <div className="relative">
      <div className="relative aspect-[16/6] w-full overflow-hidden rounded-xl border">
  <Image
    src="/images/about/about.svg.png"
    alt="Natural Ingredients"
    fill
    className="object-cover rounded-xl"
  />
</div>


        <div className="pointer-events-none absolute -left-3 top-4 rounded-full bg-background/80 px-3 py-1 text-xs shadow">100% Vegan</div>
        <div className="pointer-events-none absolute right-2 bottom-6 rounded-full bg-background/80 px-3 py-1 text-xs shadow">No Preservatives</div>
      </div>

      {/* Right: Benefits grid with flip */}
      <div>
        <h2 className="text-gradient">Why choose Adishtu</h2>
        <p className="mt-2 text-sm text-muted-foreground">Guilt-free energy bars crafted with clean ingredients and zero compromises.</p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            {
              icon: <img src="/images/icons/no-chemicals.svg.png" alt="No chemicals" className="h-6 w-6" />, title: "No Added Chemicals",
              front: "Clean ingredients only.", back: "We skip synthetic additives so you can snack with confidence.",
            },
            {
              icon: <img src="/images/icons/no artificial flavours.svg.png" alt="No artificial flavours" className="h-6 w-6" />, title: "No Added Artificial Flavours",
              front: "Only natural taste.", back: "We rely on real ingredients for authentic flavor.",
            },
            {
              icon: <img src="/images/icons/no-sugar.svg.png" alt="No sugar" className="h-6 w-6" />, title: "No Added Sugar",
              front: "Sweetness from fruits.", back: "Naturally sweet without refined sugars.",
            },
            {
              icon: <img src="/images/icons/no-additives.svg.png" alt="No preservatives" className="h-6 w-6" />, title: "No Preservatives",
              front: "Minimal processing.", back: "Freshness without artificial preservatives.",
            },
          ].map((b) => (
            <div key={b.title} className="group perspective">
              <div className="relative h-full rounded-xl border bg-background p-4 transition [transform-style:preserve-3d] [backface-visibility:hidden] duration-500 group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="space-y-2 [backface-visibility:hidden] [transform:rotateY(0deg)]">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border bg-background">{b.icon}</span>
                    <h3 className="font-medium">{b.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{b.front}</p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 grid place-content-center rounded-xl bg-background p-4 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-sm text-muted-foreground">{b.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Counters */}
        <div className="mt-6 grid grid-cols-3 gap-3 rounded-xl border p-4 text-center">
          <div>
            <div className="text-2xl font-bold tabular-nums">{customers.toLocaleString()}+</div>
            <div className="text-xs text-muted-foreground">Happy customers</div>
          </div>
          <div>
            <div className="text-2xl font-bold tabular-nums">{months} mo</div>
            <div className="text-xs text-muted-foreground">Shelf life (unopened)</div>
          </div>
          <div>
            <div className="text-2xl font-bold tabular-nums">{flavors}</div>
            <div className="text-xs text-muted-foreground">Core flavors</div>
          </div>
        </div>
      </div>
    </section>
  );
}


