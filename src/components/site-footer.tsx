import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, Zap } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: "Strawberry Energy Bar", href: "#shop" },
    { name: "Fig & Apricot Bar", href: "#shop" },
    { name: "Cranberry Power Bar", href: "#shop" },
    { name: "Peanut Protein Bar", href: "#shop" },
    { name: "Coffee Energy Bar", href: "#shop" },
  ];

  const supportLinks = [
    { name: "FAQs", href: "#faq" },
    { name: "Shipping Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  const trustBadges = [
    { icon: "/images/icons/no-additives.svg.png", label: "100% Vegan", color: "emerald" },
    { icon: "/images/icons/no-sugar.svg.png", label: "No Added Sugar", color: "cyan" },
    { icon: "/images/icons/no-additives.svg.png", label: "No Preservatives", color: "teal" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Brand Section - Takes more space */}
          <div className="lg:col-span-4 space-y-8">
            {/* Logo and Brand - Improved */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 p-3 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-400/40 transition-all duration-300 transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                  <div className="relative w-full h-full">
                    <Image 
                      src="/images/hero/logo.jpg.png" 
                      alt="Adishtu" 
                      fill 
                      className="object-contain drop-shadow-sm" 
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-black bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent tracking-wide">
                    ADISHTU
                  </h3>
                  <p className="text-sm text-gray-400 font-medium tracking-wide">Fuel Your Day, The Healthy Way</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Guilt-free energy bars crafted with <span className="text-emerald-400 font-semibold">natural ingredients</span>. 
                No sugar. No preservatives. Pure nutrition for your active lifestyle.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-400" />
                Why Choose Us
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {trustBadges.map((badge, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl border border-${badge.color}-500/30 hover:border-${badge.color}-400/50 transition-all duration-300 group backdrop-blur-sm`}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 bg-${badge.color}-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className="relative w-6 h-6">
                        <Image src={badge.icon} alt={badge.label} fill className="object-contain brightness-150" />
                      </div>
                    </div>
                    <span className={`font-semibold text-${badge.color}-300 group-hover:text-${badge.color}-200 transition-colors duration-300`}>
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">Follow Our Journey</h4>
              <div className="flex gap-4">
                <Link 
                  href="#" 
                  className="group relative p-3 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-orange-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  href="#" 
                  className="group relative p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Products Column */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></div>
                Our Products
              </h4>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="group flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                    >
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-teal-400 rounded-full"></div>
                Customer Support
              </h4>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-to-b from-teal-400 to-green-400 rounded-full"></div>
                Get In Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-300">Email Us</p>
                    <Link href="mailto:hello@adishtu.com" className="hover:text-emerald-400 transition-colors duration-300">
                      hello@adishtu.com
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-300">Call Us</p>
                    <Link href="tel:+1234567890" className="hover:text-cyan-400 transition-colors duration-300">
                      +91 98765 43210
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-300">Visit Us</p>
                    <p className="text-sm">Madurai, Tamil Nadu<br />India</p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup - Enhanced */}
              <div className="mt-8 p-6 bg-gradient-to-br from-emerald-900/40 to-teal-900/40 rounded-2xl border border-emerald-500/30 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <h5 className="text-lg font-bold text-white">Stay Updated</h5>
                </div>
                <p className="text-sm text-gray-300 mb-6">Get the latest news and exclusive offers delivered to your inbox</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 backdrop-blur-sm"
                  />
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/30 flex items-center justify-center gap-2 group">
                    <span>Subscribe Now</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-3 text-center">
                  No spam, unsubscribe anytime
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <p>© {currentYear} Adishtu. All rights reserved.</p>
              <div className="hidden md:flex items-center gap-4">
                <Link href="#" className="hover:text-emerald-400 transition-colors duration-300">Privacy</Link>
                <Link href="#" className="hover:text-emerald-400 transition-colors duration-300">Terms</Link>
                <Link href="#" className="hover:text-emerald-400 transition-colors duration-300">Cookies</Link>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-full animate-pulse"></div>
              <span>for healthy living</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}