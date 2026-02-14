"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function SparkleSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        {/* Infinite Sparkle Header */}
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-display font-serif text-foreground">
              Infinite{" "}
              <em className="italic text-primary font-bold">Sparkle</em>
              <sup className="text-primary text-lg">+</sup>
            </h2>
          </div>
        </FadeIn>

        {/* Most Loved Jewellery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left - Label */}
          <div className="lg:col-span-3">
            <FadeIn>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-serif font-bold text-foreground">
                    Navam Sunil Jewellers
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground">
                  Most Loved Jewellery
                </h3>
                <button className="px-4 py-1.5 rounded-full border border-cream-400 text-xs text-neutral-500">
                  Diamonds ▾
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Center - Featured Item */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=450&fit=crop&q=80"
                  alt="Model showcasing sapphire jewellery"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right - Product Info */}
          <div className="lg:col-span-4">
            <FadeIn delay={0.3}>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-neutral-400 uppercase tracking-wider">
                    World famous
                  </p>
                  <h3 className="text-2xl font-serif font-bold text-foreground mt-2">
                    Gold Necklace
                  </h3>
                </div>
                <div className="aspect-square w-32 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop&q=80"
                    alt="Gold Necklace"
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
