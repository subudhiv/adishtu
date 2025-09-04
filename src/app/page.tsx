import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";
import { ProductsGrid } from "@/components/products-grid";
import { WhyChoose } from "@/components/why-choose";
import { ProductShowcase } from "@/components/product-showcase";
import { BlogPreview, VideoTestimonials } from "@/components/blog-preview";
import { Testimonials } from "@/components/testimonials";

import { FAQ } from "@/components/faq";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <ProductsGrid />
      <WhyChoose />
      <ProductShowcase />
      <Testimonials />
      <BlogPreview />
      <VideoTestimonials /> 
      <FAQ />
      <Newsletter />
    </main>
  );
}
