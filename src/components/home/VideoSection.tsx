"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";
import { Play, Sparkles, Award, Heart } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Sparkles,
    title: "Crafted with Precision",
    description: "Every piece tells a story of dedication and artistry",
  },
  {
    icon: Award,
    title: "Heritage Quality",
    description: "Five generations of jewelry-making excellence",
  },
  {
    icon: Heart,
    title: "Designed with Love",
    description: "Creating moments that last a lifetime",
  },
];

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Replace this with your YouTube video ID
  const videoId = "dQw4w9WgXcQ"; // Example video ID

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-cream-100">
      <div className="container-luxury">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">
              Our Story
            </p>
            <h2 className="text-display font-serif font-bold text-foreground mb-6">
              Experience the{" "}
              <em className="italic text-primary">Artistry</em>
            </h2>
            <p className="text-neutral-500 text-base max-w-2xl mx-auto leading-relaxed">
              Discover the passion and craftsmanship that goes into every piece
              of jewelry we create. A journey through heritage, tradition, and
              timeless beauty.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video */}
          <FadeIn direction="left">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-cream-200 shadow-card group">
              {!isPlaying ? (
                <>
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <motion.button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-elevated group-hover:bg-primary group-hover:shadow-[0_0_40px_rgba(11,122,117,0.4)] transition-all duration-300">
                      <Play className="w-8 h-8 text-primary group-hover:text-white ml-1 transition-colors" />
                    </div>
                  </motion.button>
                </>
              ) : (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </FadeIn>

          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={feature.title} direction="right" delay={index * 0.1}>
                  <motion.div
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_20px_rgba(11,122,117,0.2)] transition-shadow duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
}
