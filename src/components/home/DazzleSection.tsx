"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GoldButton } from "@/components/ui/GoldButton";

export function DazzleSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div className="space-y-8">
            <FadeIn>
              <div className="brand-card p-8 space-y-4">
                <p className="text-xs text-neutral-400 uppercase tracking-[0.2em]">
                  Unleash Your Own
                </p>
                <h3 className="text-xl font-serif font-bold text-foreground">
                  Hidden Flare
                </h3>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="aspect-video rounded-2xl overflow-hidden">
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
                <h2 className="text-display font-serif font-bold text-foreground">
                  Dare to <em className="italic text-primary">dazzle</em>
                  <br />
                  differently
                </h2>
                <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                  Excellent quality gold jewelry that is strongly recommended
                  for you. Each piece is meticulously crafted.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="brand-card p-6 space-y-4">
                <h4 className="text-sm font-medium text-foreground">
                  Hand-made Earrings Creative Design
                </h4>
                <div className="aspect-video rounded-xl overflow-hidden">
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
            <div className="brand-card p-8 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  New Arrivals
                </h3>
                <p className="text-sm text-primary mt-1">01/2025/FA</p>
              </div>
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full bg-primary" />
                <div className="w-12 h-12 rounded-full bg-gold" />
                <div className="w-12 h-12 rounded-full bg-cream-400" />
              </div>
            </div>

            <div className="brand-card p-8 space-y-4">
              <p className="text-sm text-neutral-500 leading-relaxed">
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
