"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    "https://images.unsplash.com/photo-1601121141461-920cb1993441?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1600&h=1200&fit=crop&q=80",
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
    <section className="relative h-[60vh] md:h-[60vh] lg:h-[70vh] overflow-visible">
      {/* Full-bleed background image behind navbar */}
      <div className="absolute inset-0">
        <img
          src={banner.image_url}
          alt={banner.title}
          className="w-full h-full object-cover transition-all duration-700"
        />
        {/* Dark overlay for text readability with green tint */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0B7A75]/50 via-black/40 to-black/10"
          style={{ opacity: banner.overlay_opacity + 0.2 }}
        />
      </div>

      {/* Bottom blend — smooth gradient into page background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-[2]" />
      {/* Teal glow at bottom edge */}
      <div className="absolute -bottom-8 left-0 right-0 h-24 z-[1]" style={{ background: "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(11,122,117,0.15) 0%, transparent 70%)" }} />

      {/* Hero content at the bottom */}
      <div className="container-luxury relative z-10 h-full flex flex-col justify-end pb-12 md:pb-16 lg:pb-20">
        <motion.div
          key={banner.id}
          initial={mounted ? { opacity: 0, y: 30 } : false}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 max-w-2xl"
        >
          {subtitleParts.length > 0 && (
            <div className="flex items-center gap-6">
              {subtitleParts.map((part, i) => (
                <span key={i}>
                  {i > 0 && <span className="text-white/30 mr-6">·</span>}
                  <span className="text-white/70 text-xs uppercase tracking-[0.3em]">
                    {part}
                  </span>
                </span>
              ))}
            </div>
          )}
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-[1.1]">
              {banner.title}
            </h1>

          </div>
          <a
            href={banner.link_url}
            className="inline-block bg-[#0B7A75] text-white text-sm px-8 py-3 rounded-full hover:bg-[#065E5A] shadow-[0_0_20px_rgba(11,122,117,0.4)] border border-[#0B7A75]/50 transition-all duration-300"
          >
            {banner.link_text}
          </a>
        </motion.div>
      </div>

      {/* Banner indicators */}
      {banners.length > 1 && (
        <div className="absolute bottom-6 right-8 flex gap-2 z-10">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current
                  ? "bg-white scale-110"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
