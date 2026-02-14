"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GoldButton } from "@/components/ui/GoldButton";

export function DiamondSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-12">
            <FadeIn>
              <div className="space-y-6">
                <p className="text-primary text-xs uppercase tracking-[0.3em]">
                  Premium Collection
                </p>
                <h2 className="text-display font-serif font-bold text-foreground">
                  Sparkle endlessly with
                  <br />
                  <em className="italic text-primary">exclusive</em> ◆{" "}
                  <em className="italic text-foreground">diamond</em>
                  <br />
                  designs
                </h2>
                <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                  We assist jewellery artisans make Australian gifts for
                  Christmas. Each piece tells a story of heritage and
                  craftsmanship.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="brand-card p-8 space-y-4">
                <h3 className="text-xl font-serif font-bold text-foreground">
                  Find best{" "}
                  <em className="italic text-primary">Diamond</em>
                  <br />
                  for loved one&apos;s
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-primary">◆</span>
                  <span className="text-primary">◆</span>
                </div>
                <GoldButton href="/collections" icon size="sm">
                  Find a Store
                </GoldButton>
              </div>
            </FadeIn>
          </div>

          {/* Center - Main Image */}
          <div className="lg:col-span-4">
            <FadeIn delay={0.3}>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=667&fit=crop&q=80"
                  alt="Model wearing diamond jewellery"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 space-y-6">
            <FadeIn delay={0.4}>
              <div className="brand-card p-6 space-y-4">
                <h3 className="text-lg font-serif font-bold text-foreground">
                  Golden Earring
                </h3>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop&q=80"
                    alt="Golden Earring"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <button className="w-full text-sm text-primary flex items-center justify-between hover:gap-2 transition-all">
                  <span>ADD TO CART</span>
                  <span>→</span>
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
