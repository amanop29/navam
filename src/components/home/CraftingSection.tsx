"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GoldButton } from "@/components/ui/GoldButton";

export function CraftingSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 dark-gradient-bg" />
      <div className="absolute inset-0 silk-overlay" />

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left - Image */}
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-coral to-coral-light relative">
                <img 
                  src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=500&h=667&fit=crop&q=80" 
                  alt="Artisan crafting jewellery"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-7 space-y-10">
            <FadeIn delay={0.2}>
              <h2 className="text-display font-serif font-bold text-brown-50">
                We&apos;re{" "}
                <em className="italic gold-text">best in crafting</em>
                <br />
                the best jewellery
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Stat 1 */}
                <div className="glass-card p-6 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center">
                    <span className="text-white text-sm font-bold">W</span>
                  </div>
                  <p className="text-sm text-brown-100/50 leading-relaxed">
                    High quality silver watches twice recommended to be cleaned
                    with mild soapy water for shine.
                  </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col justify-center gap-4">
                  <GoldButton href="/collections" icon>
                    Find a Store
                  </GoldButton>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <span className="text-gold text-sm">◆</span>
                  </div>
                  <p className="text-sm text-brown-100/50 leading-relaxed">
                    We focus in offering the finest quality jewelry.
                  </p>
                </div>
                <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gold/10 to-brown-700/20">
                  <img 
                    src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop&q=80" 
                    alt="Gold Ring"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
