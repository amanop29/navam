"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-screen overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 dark-gradient-bg" />
      <div className="absolute inset-0 silk-overlay" />

      {/* Decorative gold particles */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-gold/30 animate-float" />
      <div className="absolute top-40 right-20 w-1.5 h-1.5 rounded-full bg-gold/20 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-1/4 w-1 h-1 rounded-full bg-gold/25 animate-float" style={{ animationDelay: "2s" }} />

      <div className="container-luxury relative z-10 pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-12 lg:pb-16">
        {/* Main Hero Box */}
        <motion.div
          initial={mounted ? { opacity: 0, y: 30 } : false}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex flex-col justify-end p-6 md:p-8 lg:p-12"
        >
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1600&h=1200&fit=crop&q=80" 
              alt="Luxury Gold Jewellery"
              className="w-full h-full object-cover transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 transition-all duration-700 ease-out" />
          </div>
          <div className="relative z-10 space-y-6 max-w-2xl">
            <div className="flex items-center gap-6">
              <span className="text-brown-100/60 text-xs uppercase tracking-[0.3em]">Heritage</span>
              <span className="text-brown-100/30">·</span>
              <span className="text-brown-100/60 text-xs uppercase tracking-[0.3em]">Craftsmanship</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-brown-50 leading-[1.1]">
              Unleash the
              <br />
              <em className="italic gold-text">shining beauty</em>
              <br />
              within.
            </h1>
            <a
              href="/collections"
              className="inline-block gold-button text-sm px-8 py-3 rounded-full"
            >
              Explore Collections
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
