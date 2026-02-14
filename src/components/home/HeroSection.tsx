"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";


interface Banner {
  id: string;
  title: string;
  subtitle: string | null;
  image_url: string;
  mobile_image_url: string | null;
  link_url: string;
  link_text: string;
  overlay_opacity: number;
}

const fallbackBanner: Banner = {
  id: "fallback",
  title: "Unleash the shining beauty within.",
  subtitle: "Heritage · Craftsmanship",
  image_url:
    "https://images.unsplash.com/photo-1722410180644-5955f83ec8b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGdvbGQlMjBqZXdlbGxlcnl8ZW58MHx8MHx8fDA%3Dw=1600&h=1200&fit=crop&q=80",
  mobile_image_url: null,
  link_url: "/collections",
  link_text: "Explore Collections",
  overlay_opacity: 0.3,
};

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [banners, setBanners] = useState<Banner[]>([fallbackBanner]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setMounted(true);
    fetch("/api/public/banners")
      .then((r) => r.json())
      .then((d) => {
        if (d.data && d.data.length > 0) setBanners(d.data);
      })
      .catch(() => {});
  }, []);

  // Auto-rotate banners
  useEffect(() => {
    if (banners.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const banner = banners[current];

  // Parse subtitle into parts
  const subtitleParts = banner.subtitle
    ? banner.subtitle.split("·").map((s) => s.trim())
    : [];

  return (
    <section className="relative h-[85vh] overflow-hidden rounded-b-[2.5rem] md:rounded-b-[4rem] z-0 group">
      {/* Full-bleed background image with Ken Burns effect */}
      <div className="absolute inset-0 bg-black">
        <motion.div
           initial={{ scale: 1 }}
           animate={{ scale: 1.05 }}
           transition={{ 
             duration: 20, 
             repeat: Infinity, 
             repeatType: "reverse",
             ease: "easeInOut"
           }}
           className="w-full h-full"
        >
          <img
            src={banner.image_url}
            alt={banner.title}
            className="w-full h-full object-cover opacity-90 transition-opacity duration-1000"
          />
        </motion.div>
        
        {/* Cinematic Gradient Overlay - Top down and Bottom up */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        
        {/* Radial Vignette for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>
      
      {/* Delicate Gold Border Line at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C4A35A]/60 to-transparent opacity-80" />

      {/* Hero content */}
      <div className="container-luxury relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32">
        <motion.div
          key={banner.id}
          initial={mounted ? { opacity: 0, y: 30 } : false}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          {subtitleParts.length > 0 && (
            <div className="flex items-center gap-4 mb-4">
               <div className="h-[1px] w-12 bg-[#0B7A75]" />
               <div className="flex items-center gap-3">
                 {subtitleParts.map((part, i) => (
                    <span key={i} className="text-[#C4A35A] text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
                      {part}
                      {i < subtitleParts.length - 1 && <span className="mx-2 text-white/30">·</span>}
                    </span>
                 ))}
               </div>
            </div>
          )}
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] mb-8 tracking-tight drop-shadow-2xl">
            {banner.title}
          </h1>

          <div className="flex items-center gap-6">
            <a
              href={banner.link_url}
              className="group/btn relative overflow-hidden bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-3"
            >
              <span className="text-sm font-medium tracking-wider uppercase relative z-10">{banner.link_text}</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Banner indicators - Minimal dots */}
      {banners.length > 1 && (
        <div className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col gap-4 z-20">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                i === current
                  ? "bg-[#C4A35A] scale-150 h-6"
                  : "bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
