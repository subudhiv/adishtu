"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    setMessage("");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 800));
    if (email.endsWith("@example.com")) {
      setStatus("error");
      setMessage("This email is already subscribed.");
    } else {
      setStatus("success");
      setMessage("You're in! Check your inbox for the 10% off code.");
      setEmail("");
    }
  };

  return (
    <section id="contact" className="relative mx-auto w-full bg-emerald-50 py-16 md:py-24">
      {/* Decorative animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-green-400/20 blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl animate-[float_7s_ease-in-out_infinite]" style={{animationDelay:"1.2s"}} />
        <div className="absolute top-10 right-1/3 h-60 w-60 rounded-full bg-primary/20 blur-3xl animate-[float_8s_ease-in-out_infinite]" style={{animationDelay:"2s"}} />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="mx-auto max-w-4xl px-4">
        <div className="relative overflow-hidden rounded-2xl border bg-white shadow-xl">
          {/* top glow */}
          <div className="pointer-events-none absolute -inset-x-10 -top-10 h-24 bg-gradient-to-b from-primary/30 to-transparent blur-2xl" />

          <div className="relative grid grid-cols-1 items-center gap-6 p-8 md:grid-cols-[1fr_auto] md:gap-8 md:p-10">
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Join 10,000+ health enthusiasts</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-emerald-800">Get 10% off your first order</h2>
              <p className="mt-2 text-sm text-muted-foreground">Sign up for tips, new flavors, and exclusive offers.</p>
            </div>

            <form onSubmit={onSubmit} className="mx-auto flex w-full max-w-xl flex-col items-center gap-3 md:mx-0 md:flex-row">
              <div className="relative w-full md:flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-xl border bg-background/90 px-4 text-sm font-medium shadow-sm outline-none ring-0 transition focus-visible:ring-2 focus-visible:ring-primary"
                  aria-invalid={status === "error"}
                  aria-describedby="newsletter-message"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">No spam</span>
              </div>
              <Button type="submit" disabled={status === "loading"} className="h-12 rounded-xl px-6 font-semibold shadow-sm">
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>

            <div id="newsletter-message" className={`md:col-span-2 mx-auto mt-0 min-h-6 text-sm text-center ${status === "error" ? "text-destructive" : status === "success" ? "text-green-600" : "text-muted-foreground"}`}>
              <span className={`inline-block transition-opacity duration-300 ${status === "idle" ? "opacity-0" : "opacity-100"}`}>
                {message || ""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


