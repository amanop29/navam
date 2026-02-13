"use client";

import { FadeIn } from "@/components/ui/FadeIn";

export function GlamourSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Gold Plated Bracelet */}
          <FadeIn>
            <div className="space-y-8">
              <div>
                <p className="text-xs text-brown-100/40 uppercase tracking-wider">
                  Premium Grade
                </p>
                <h3 className="text-2xl font-serif font-bold text-brown-50 mt-2">
                  Gold Plated Braceleted
                </h3>
                <button className="text-xs text-gold mt-3 uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                  SHOP JEWELLERY <span>→</span>
                </button>
              </div>

              <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-coral to-coral-light relative">
                <img 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=400&fit=crop&q=80" 
                  alt="Gold plated bracelet"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-gold-gradient flex items-center justify-center">
                    <span className="text-xs text-brown-800">◆</span>
                  </span>
                </div>
                <p className="text-sm text-brown-100/60">
                  Hand-made Gold chain link bracelets →
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right - Glamour */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <h2 className="text-display font-serif font-bold text-brown-50">
                <em className="italic gold-text">Glamour</em> that
                <br />
                steals the show
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-coral/80 to-coral-light relative">
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
                  <h4 className="text-lg font-serif font-bold text-brown-50">
                    Exquisite <em className="italic gold-text">Jewellery</em>{" "}
                    for extraordinary You
                  </h4>
                  <p className="text-xs text-brown-100/40 leading-relaxed">
                    Solid gold jewellery is known for its durability and strength.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-brown-50">
                    Explore Handmade Bracelets
                  </h4>
                  <p className="text-xs text-brown-100/40 leading-relaxed">
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
