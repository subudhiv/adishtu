"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Search, User, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-50 shadow-sm border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 md:px-6">
        {/* Left: Company Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12">
              <Image
                src="/images/hero/logo.jpg.png"
                alt="ADISHTU Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-green-600 sm:text-2xl relative">
              ADISHTU
              <Zap className="absolute -top-1 -right-2 h-3 w-3 text-orange-500" />
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link 
            href="/" 
            className="text-sm font-medium text-gray-800 uppercase tracking-wide border-b-2 border-green-600 pb-1"
          >
            HOME
          </Link>
          <Link 
            href="/#products" 
            className="text-sm font-medium text-gray-600 uppercase tracking-wide transition-colors hover:text-gray-800"
          >
            SHOP
          </Link>
          <Link 
            href="/#about" 
            className="text-sm font-medium text-gray-600 uppercase tracking-wide transition-colors hover:text-gray-800"
          >
            ABOUT
          </Link>
          <Link 
            href="/#blogs" 
            className="text-sm font-medium text-gray-600 uppercase tracking-wide transition-colors hover:text-gray-800"
          >
            BLOGS
          </Link>
          <Link 
            href="/#contact" 
            className="text-sm font-medium text-gray-600 uppercase tracking-wide transition-colors hover:text-gray-800"
          >
            CONTACT
          </Link>
        </nav>

        {/* Right: HERBI MAGIC Button and Icons */}
        <div className="flex items-center gap-4">
          {/* HERBI MAGIC Button */}
          <Button className="bg-green-800 hover:bg-green-900 text-white px-4 py-2 rounded-md font-medium text-sm uppercase tracking-wide">
            <span>HERBI MAGIC</span>
            <ArrowRight className="ml-2 h-4 w-4 text-yellow-400" />
          </Button>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Search" className="text-gray-600 hover:text-green-600 border border-gray-300">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="User Login" className="text-gray-600 hover:text-green-600 border border-gray-300">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Shopping Cart" className="text-gray-600 hover:text-green-600 border border-gray-300 relative">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}


