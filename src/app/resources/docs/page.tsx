import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Download, FileText, BookOpen, Shield, Award, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources & Documentation",
  description: "Brand guidelines, certifications, care guides, and official documentation from Navam Sunil Jewellers.",
};

const documents = [
  {
    title: "Brand Guidelines",
    description: "Official logo usage, colour palette, typography, and brand identity standards for partners and media.",
    icon: BookOpen,
    format: "PDF",
    size: "4.2 MB",
  },
  {
    title: "Jewellery Care Guide",
    description: "Complete guide to cleaning, storing, and maintaining gold, diamond, and gemstone jewellery.",
    icon: Shield,
    format: "PDF",
    size: "1.8 MB",
  },
  {
    title: "BIS Hallmarking — What You Need to Know",
    description: "Understanding Bureau of Indian Standards hallmarking, purity grades, and how to verify authenticity.",
    icon: Award,
    format: "PDF",
    size: "2.1 MB",
  },
  {
    title: "Diamond Certification Guide",
    description: "How to read a GIA or IGI certificate, understanding the 4Cs, and what to look for when purchasing.",
    icon: FileText,
    format: "PDF",
    size: "3.0 MB",
  },
  {
    title: "Return & Exchange Policy",
    description: "Our comprehensive policy on returns, exchanges, buyback programs, and warranty coverage.",
    icon: FileText,
    format: "PDF",
    size: "0.5 MB",
  },
  {
    title: "Ethical Sourcing Policy",
    description: "Our commitment to conflict-free diamonds, responsible gold sourcing, and fair labour practices.",
    icon: Shield,
    format: "PDF",
    size: "1.2 MB",
  },
];

const faqs = [
  {
    question: "How do I verify the authenticity of my jewellery?",
    answer: "Every Navam piece comes with a BIS hallmark and a Certificate of Authenticity. You can verify the hallmark at any BIS-authorised centre, or use the HUID lookup on the BIS website.",
  },
  {
    question: "What is your buyback policy?",
    answer: "We offer lifetime buyback at prevailing gold rates minus a nominal 2% deduction. Diamond and gemstone value is assessed by our in-house gemologists at the time of return.",
  },
  {
    question: "Can I customise a design from your collections?",
    answer: "Absolutely. Book a consultation with our design team to discuss customisations. We can modify any existing design or create something entirely bespoke from scratch.",
  },
  {
    question: "How should I store my gold jewellery?",
    answer: "Store each piece separately in a soft cloth pouch or the original Navam box. Keep away from humidity, cosmetics, and harsh chemicals. We recommend professional cleaning once a year.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we serve customers across India through our showrooms. International shipping for select pieces is available upon request — please contact our team for details.",
  },
];

export default function DocsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 dark-gradient-bg" />
        <div className="absolute inset-0 silk-overlay" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Resources</p>
            <h1 className="text-hero font-serif font-bold text-brown-50">
              Documentation & <em className="italic gold-text">Guides</em>
            </h1>
            <p className="mt-4 text-brown-100/60 max-w-xl">
              Everything you need — from care guides to brand assets and certification information.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading label="Downloads" title="Official Documents" />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {documents.map((doc) => (
              <StaggerItem key={doc.title}>
                <GlassCard hover className="p-6 h-full flex flex-col group cursor-pointer">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                      <doc.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-serif font-bold text-brown-50 group-hover:text-gold transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-xs text-brown-100/30 mt-1">{doc.format} · {doc.size}</p>
                    </div>
                  </div>
                  <p className="text-sm text-brown-100/50 flex-1">{doc.description}</p>
                  <div className="mt-4 pt-4 border-t border-glass-border">
                    <span className="text-gold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                      <Download className="w-3 h-3" /> Download
                    </span>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-brown-950/30">
        <div className="container-luxury max-w-3xl">
          <SectionHeading label="FAQ" title="Frequently Asked Questions" gold />
          <StaggerContainer className="space-y-4 mt-12">
            {faqs.map((faq) => (
              <StaggerItem key={faq.question}>
                <GlassCard className="p-6">
                  <div className="flex gap-4">
                    <HelpCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-serif font-bold text-brown-50">{faq.question}</h3>
                      <p className="text-sm text-brown-100/50 mt-2">{faq.answer}</p>
                    </div>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
