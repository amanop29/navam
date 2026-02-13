"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GoldButton } from "@/components/ui/GoldButton";

export function DazzleSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dark-gradient-bg" />
      <div className="absolute inset-0 silk-overlay" />

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div className="space-y-8">
            <FadeIn>
              <div className="glass-card p-8 space-y-4">
                <p className="text-xs text-brown-100/40 uppercase tracking-[0.2em]">
                  Unleash Your Own
                </p>
                <h3 className="text-xl font-serif font-bold text-brown-50">
                  Hidden Flare
                </h3>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-coral to-coral-light relative">
                <img 
                  src="https://images.unsplash.com/photo-1614964158719-4cd61f4828cf?w=600&h=400&fit=crop&q=80" 
                  alt="Model with elegant jewellery"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                <h2 className="text-display font-serif font-bold text-brown-50">
                  Dare to <em className="italic gold-text">dazzle</em>
                  <br />
                  differently
                </h2>
                <p className="text-brown-100/50 text-sm leading-relaxed max-w-md">
                  Excellent quality gold jewelry that is strongly recommended
                  for you. Each piece is meticulously crafted.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="glass-card p-6 space-y-4">
                <h4 className="text-sm font-medium text-brown-50">
                  Hand-made Earrings Creative Design
                </h4>
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-brown-500/20 to-brown-700/30 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop&q=80" 
                    alt="Hand-made Earrings"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* New Arrivals Row */}
        <FadeIn delay={0.4}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-serif font-bold text-brown-50">
                  New Arrivals
                </h3>
                <p className="text-sm text-gold mt-1">01/2025/FA</p>
              </div>
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-gold-gradient" />
                <div className="w-12 h-12 rounded-full bg-coral" />
                <div className="w-12 h-12 rounded-full bg-brown-400" />
              </div>
            </div>

            <div className="glass-card p-8 space-y-4">
              <p className="text-sm text-brown-100/50 leading-relaxed">
                We&apos;re crafting personalised Memories since 1964
              </p>
              <GoldButton href="/collections" variant="outline" size="sm">
                VIEW COLLECTION
              </GoldButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
