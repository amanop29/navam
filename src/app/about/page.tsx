import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the legacy of Navam Sunil Jewellers — crafting heritage into gold since 1964.",
};

const milestones = [
  { year: "1964", title: "Founded", desc: "Navam Sunil Jewellers was established with a vision to craft timeless gold jewellery." },
  { year: "1985", title: "Expansion", desc: "Opened our first flagship showroom in the heart of Mumbai." },
  { year: "2000", title: "Heritage Award", desc: "Recognized for excellence in traditional Indian jewellery craftsmanship." },
  { year: "2015", title: "Modern Era", desc: "Launched contemporary collections while preserving heritage techniques." },
  { year: "2024", title: "Digital", desc: "Embracing technology with online presence and digital craftsmanship showcase." },
];

const values = [
  { icon: "◆", title: "Heritage", desc: "Preserving centuries-old goldsmithing traditions passed through generations." },
  { icon: "◆", title: "Craftsmanship", desc: "Every piece undergoes 40+ hours of meticulous handwork by master artisans." },
  { icon: "◆", title: "Purity", desc: "Only 22K and 18K gold with certified BIS hallmarking on every piece." },
  { icon: "◆", title: "Trust", desc: "Serving over 2.8 million families with transparency and integrity since 1964." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">
              Our Legacy
            </p>
            <h1 className="text-hero font-serif font-bold text-foreground">
              Crafting <em className="italic text-primary">Heritage</em>
              <br />
              into Gold
            </h1>
            <p className="text-neutral-500 text-lg mt-6 max-w-lg">
              Since 1964, we&apos;ve been transforming raw gold into wearable
              art. Each piece carries the weight of tradition and the spark of
              innovation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-luxury">
          <FadeIn>
            <h2 className="text-display font-serif font-bold text-center text-foreground mb-16">
              Our <em className="italic text-primary">Values</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <GlassCard hover glow className="p-8 h-full">
                  <span className="text-3xl text-primary mb-4 block">{v.icon}</span>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {v.desc}
                  </p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10">
          <FadeIn>
            <h2 className="text-display font-serif font-bold text-center text-foreground mb-20">
              Our <em className="italic text-primary">Journey</em>
            </h2>
          </FadeIn>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden lg:block" />
            <div className="space-y-16">
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                    <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}>
                      <span className="text-4xl font-serif font-bold text-primary">
                        {m.year}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-foreground mt-2">
                        {m.title}
                      </h3>
                      <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-primary shadow-soft shrink-0 hidden lg:block" />
                    <div className="lg:w-1/2" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "60+", label: "Years of Legacy" },
              { num: "2.8M", label: "Happy Families" },
              { num: "150+", label: "Master Artisans" },
              { num: "12", label: "Showrooms" },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <div className="text-center">
                  <span className="text-4xl lg:text-5xl font-serif font-bold text-primary">
                    {s.num}
                  </span>
                  <p className="text-sm text-neutral-500 mt-2">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
