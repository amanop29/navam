"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function GlamourSection() {
  return (
    <section className="section-padding bg-cream-200">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Gold Plated Bracelet */}
          <FadeIn>
            <div className="space-y-8">
              <div>
                <p className="text-xs text-neutral-400 uppercase tracking-wider">
                  Premium Grade
                </p>
                <h3 className="text-2xl font-serif font-bold text-foreground mt-2">
                  Gold Plated Braceleted
                </h3>
                <button className="text-xs text-primary mt-3 uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                  SHOP JEWELLERY <span>→</span>
                </button>
              </div>

              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=400&fit=crop&q=80"
                  alt="Gold plated bracelet"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="brand-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-xs text-white">◆</span>
                  </span>
                </div>
                <p className="text-sm text-neutral-500">
                  Hand-made Gold chain link bracelets →
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right - Glamour */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <h2 className="text-display font-serif font-bold text-foreground">
                <em className="italic text-primary">Glamour</em> that
                <br />
                steals the show
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop&q=80"
                  alt="Glamorous jewellery showcase"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-lg font-serif font-bold text-foreground">
                    Exquisite{" "}
                    <em className="italic text-primary">Jewellery</em> for
                    extraordinary You
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Solid gold jewellery is known for its durability and
                    strength.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">
                    Explore Handmade Bracelets
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    We generally order its value as a precious metal fit.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
