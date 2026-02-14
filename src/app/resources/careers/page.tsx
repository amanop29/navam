import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { GoldButton } from "@/components/ui/GoldButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Clock, Briefcase, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Navam Sunil Jewellers — explore career opportunities in luxury jewellery craftsmanship and retail.",
};

const openPositions = [
  {
    title: "Senior Jewellery Designer",
    department: "Design Studio",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    description: "Lead design for the Devyani contemporary collection. Must have 5+ years in fine jewellery design with proficiency in CAD and traditional sketching.",
  },
  {
    title: "GIA-Certified Gemologist",
    department: "Quality Assurance",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    description: "Join our QA team to evaluate and certify gemstones for all collections. GIA Graduate Gemologist certification required.",
  },
  {
    title: "Showroom Manager",
    department: "Retail Operations",
    location: "New Delhi",
    type: "Full-time",
    description: "Manage our upcoming New Delhi flagship showroom. Experience in luxury retail management and team leadership essential.",
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Mumbai (Hybrid)",
    type: "Full-time",
    description: "Drive our digital presence across social media, email, and content marketing. Experience in luxury or fashion brands preferred.",
  },
  {
    title: "Master Goldsmith — Kundan",
    department: "Workshop",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    description: "Experienced Kundan artisan to join our heritage craftsmanship team. 10+ years of traditional Kundan and Meenakari work required.",
  },
  {
    title: "Inventory & ERP Analyst",
    department: "Operations",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    description: "Implement and manage inventory tracking for our expanding retail network. Experience with jewellery ERP systems preferred.",
  },
];

const perks = [
  "Competitive salary with annual appraisal",
  "Employee jewellery purchase programme",
  "Health insurance for family",
  "Skill development & certification support",
  "Festival bonuses & celebrations",
  "Flexible working for eligible roles",
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Careers</p>
            <h1 className="text-hero font-serif font-bold text-foreground">
              Craft Your <em className="italic text-primary">Future</em>
            </h1>
            <p className="mt-4 text-neutral-500 max-w-xl">
              Join a team where tradition meets innovation, and every day is an opportunity to create something extraordinary.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Navam */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading label="Why Navam" title="More Than a Workplace" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <FadeIn direction="left">
              <div className="space-y-4">
                <p className="text-neutral-500 leading-relaxed">
                  At Navam Sunil Jewellers, we believe that the craft of jewellery-making is an art form — and our people are the artists. 
                  We foster an environment where heritage skills are honoured, creativity is encouraged, and professional growth is invested in.
                </p>
                <p className="text-neutral-500 leading-relaxed">
                  Whether you&apos;re a seasoned artisan or a fresh graduate with a passion for luxury, 
                  we offer a workplace where your contributions shape the future of Indian fine jewellery.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <GlassCard className="p-6">
                <h3 className="text-lg font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" /> Benefits & Perks
                </h3>
                <ul className="space-y-3">
                  {perks.map((perk) => (
                    <li key={perk} className="text-sm text-neutral-500 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-cream-200">
        <div className="container-luxury">
          <SectionHeading label="Openings" title="Current Opportunities" gold />
          <StaggerContainer className="space-y-6 mt-12">
            {openPositions.map((position) => (
              <StaggerItem key={position.title}>
                <GlassCard hover className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-serif font-bold text-foreground">{position.title}</h3>
                      <p className="text-sm text-neutral-500 mt-1">{position.description}</p>
                      <div className="flex flex-wrap gap-4 mt-3 text-xs text-neutral-400">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" /> {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {position.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <GoldButton variant="outline" size="sm">
                        Apply
                      </GoldButton>
                    </div>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="section-padding bg-primary">
        <div className="container-luxury text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Don&apos;t See Your Role?
            </h2>
            <p className="text-neutral-500 max-w-lg mx-auto mb-8">
              We&apos;re always looking for exceptional talent. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <a href="mailto:careers@navamjewellers.com" className="brand-button inline-flex items-center gap-2 px-8 py-3">
              Send Your Resume
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
