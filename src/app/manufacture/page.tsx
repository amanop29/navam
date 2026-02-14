import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Pencil, Flame, FlameKindling, Gem, Sparkles, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacture",
  description:
    "From sketch to sparkle — discover the meticulous process behind every Navam Sunil Jewellers piece.",
};

const steps = [
  {
    num: "01",
    title: "Design & Concept",
    desc: "Our master designers sketch every piece by hand, blending heritage motifs with contemporary elegance. Each design goes through multiple iterations.",
    Icon: Pencil,
  },
  {
    num: "02",
    title: "Wax Modelling",
    desc: "Precision wax models are handcrafted to capture every intricate detail. This ancient technique ensures flawless form before casting.",
    Icon: FlameKindling,
  },
  {
    num: "03",
    title: "Gold Casting",
    desc: "Using the lost-wax casting method with 22K or 18K pure gold, melted at 1064°C and poured into moulds with extreme precision.",
    Icon: Flame,
  },
  {
    num: "04",
    title: "Stone Setting",
    desc: "Expert gem-setters place each diamond and precious stone with microscopic accuracy. Every stone is certified and ethically sourced.",
    Icon: Gem,
  },
  {
    num: "05",
    title: "Hand Finishing",
    desc: "40+ hours of hand-polishing, engraving, and finishing by master artisans. Each piece is individually inspected for perfection.",
    Icon: Sparkles,
  },
  {
    num: "06",
    title: "Quality & Hallmark",
    desc: "BIS hallmarking certification, purity testing, and a final quality check ensures every piece meets our exacting standards.",
    Icon: CheckCircle,
  },
];

export default function ManufacturePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">
              The Process
            </p>
            <h1 className="text-hero font-serif font-bold text-foreground">
              From Sketch
              <br />
              to <em className="italic text-primary">Sparkle</em>
            </h1>
            <p className="text-neutral-500 text-lg mt-6 max-w-lg">
              Every masterpiece begins with a vision. Discover the six stages of
              meticulous craftsmanship behind each piece.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="brand-card p-8 h-full space-y-4 group">
                  <div className="flex items-center justify-between">
                    <step.Icon className="w-8 h-8 text-primary" />
                    <span className="text-3xl font-serif font-bold text-neutral-200 group-hover:text-primary/20 transition-colors">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship CTA */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 text-center">
          <FadeIn>
            <h2 className="text-display font-serif font-bold text-foreground mb-6">
              150+ <em className="italic text-primary">Master Artisans</em>
            </h2>
            <p className="text-neutral-500 text-lg max-w-xl mx-auto mb-8">
              Each artisan in our workshop carries decades of expertise,
              transforming raw gold into wearable masterpieces.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
