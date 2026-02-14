import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";

import { Gem, Palette, Eye, Scissors, Sparkles, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Experts",
  description: "Meet the master artisans, gemologists, and designers behind Navam Sunil Jewellers.",
};

const experts = [
  {
    name: "Rajesh Mhatre",
    role: "Master Goldsmith",
    experience: "35+ years",
    icon: Scissors,
    description: "A third-generation goldsmith trained in traditional Maharashtrian techniques. Rajesh leads our bespoke creation workshop and has crafted over 10,000 individual pieces.",
    speciality: "Jadau & Kundan Setting",
  },
  {
    name: "Dr. Meera Iyer",
    role: "Head Gemologist (GIA)",
    experience: "20+ years",
    icon: Gem,
    description: "GIA-certified gemologist with two decades specialising in diamond grading and coloured gemstone authentication. Every Navam stone passes through her expert evaluation.",
    speciality: "Diamond Grading & Authentication",
  },
  {
    name: "Ananya Sen",
    role: "Creative Director",
    experience: "15+ years",
    icon: Palette,
    description: "Award-winning jewellery designer who bridges heritage aesthetics with modern sensibility. Ananya leads the design of all three signature collections.",
    speciality: "Contemporary Bridal Design",
  },
  {
    name: "Vikram Joshi",
    role: "Quality Assurance Lead",
    experience: "18+ years",
    icon: Eye,
    description: "Certified in BIS hallmarking standards, Vikram ensures every piece meets our exacting 916 purity standards and passes a 27-point quality checklist.",
    speciality: "BIS Hallmarking & Purity Testing",
  },
  {
    name: "Lakshmi Nair",
    role: "Heritage Craft Specialist",
    experience: "25+ years",
    icon: BookOpen,
    description: "Expert in reviving ancient South Indian temple jewellery techniques. Lakshmi is the creative force behind the Tarini Heritage collection.",
    speciality: "Temple Jewellery Restoration",
  },
  {
    name: "Farah Khan",
    role: "Styling Consultant",
    experience: "12+ years",
    icon: Sparkles,
    description: "Former Vogue stylist turned jewellery consultant. Farah helps clients curate their jewellery wardrobe for lifestyle, occasion, and personal expression.",
    speciality: "Personal Jewellery Styling",
  },
];

export default function ExpertsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Craftsmanship</p>
            <h1 className="text-hero font-serif font-bold text-foreground">
              Meet Our <em className="italic text-primary">Experts</em>
            </h1>
            <p className="mt-4 text-neutral-500 max-w-xl">
              Behind every masterpiece is a master. Meet the artisans, gemologists, and designers who bring Navam creations to life.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Experts Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experts.map((expert) => (
              <StaggerItem key={expert.name}>
                <GlassCard hover glow className="p-8 h-full flex flex-col">
                  {/* Icon Avatar */}
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <expert.icon className="w-8 h-8 text-primary" />
                  </div>
                  {/* Info */}
                  <h3 className="text-xl font-serif font-bold text-foreground">{expert.name}</h3>
                  <p className="text-primary text-xs uppercase tracking-wider mt-1">{expert.role}</p>
                  <p className="text-sm text-neutral-500 mt-4 flex-1">{expert.description}</p>
                  {/* Tags */}
                  <div className="mt-6 pt-4 border-t border-cream-300 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                      {expert.speciality}
                    </span>
                    <span className="text-xs text-neutral-300">{expert.experience}</span>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-luxury text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Book a Consultation
            </h2>
            <p className="text-neutral-500 max-w-lg mx-auto mb-8">
              Schedule a one-on-one session with any of our experts for personalised guidance on your jewellery journey.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/appointment" className="brand-button inline-flex items-center gap-2 px-8 py-3">
                Book Appointment
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
