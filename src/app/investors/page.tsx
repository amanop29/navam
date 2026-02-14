import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import {
  Users,
  FileText,
  Building,
  TrendingUp,
  Star,
  ScrollText,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Navam Sunil Jewellers investor relations — annual reports, board of directors, AGM notices, IPO information, and more.",
};

const sections = [
  {
    title: "Board of Directors",
    href: "/investors/board",
    icon: Users,
    desc: "Meet our distinguished board members who guide our corporate vision.",
  },
  {
    title: "Annual Reports",
    href: "/investors/reports",
    icon: FileText,
    desc: "Download audited financial statements and annual performance reports.",
  },
  {
    title: "AGM Notices",
    href: "/investors/agm",
    icon: Building,
    desc: "Annual General Meeting notices, resolutions, and voting outcomes.",
  },
  {
    title: "IPO Information",
    href: "/investors/ipo",
    icon: TrendingUp,
    desc: "Prospectus, allotment details, and listing information.",
  },
  {
    title: "Credit Ratings",
    href: "/investors/ratings",
    icon: Star,
    desc: "Independent credit ratings from CRISIL, ICRA, and other agencies.",
  },
  {
    title: "Charters & Policies",
    href: "/investors/charters",
    icon: ScrollText,
    desc: "Corporate governance charters, codes of conduct, and policies.",
  },
  {
    title: "Investor Contact",
    href: "/investors/contact",
    icon: Phone,
    desc: "Reach our investor relations team for queries and grievances.",
  },
];

export default function InvestorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">
              Corporate Governance
            </p>
            <h1 className="text-hero font-serif font-bold text-foreground">
              Investor <em className="italic text-primary">Relations</em>
            </h1>
            <p className="text-neutral-500 text-lg mt-6 max-w-lg">
              Transparency, trust, and accountability — the pillars of our
              corporate governance.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 border-y border-cream-300">
        <div className="container-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Market Cap", value: "₹1,200 Cr" },
              { label: "Revenue FY24", value: "₹850 Cr" },
              { label: "Net Profit", value: "₹92 Cr" },
              { label: "EPS", value: "₹24.5" },
            ].map((stat) => (
              <FadeIn key={stat.label}>
                <div className="text-center">
                  <span className="text-3xl lg:text-4xl font-serif font-bold text-primary">
                    {stat.value}
                  </span>
                  <p className="text-sm text-neutral-400 mt-2">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="section-padding">
        <div className="container-luxury">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <StaggerItem key={section.title}>
                <Link href={section.href} className="block group">
                  <div className="brand-card p-8 h-full space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {section.desc}
                    </p>
                    <span className="text-xs text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore <span>→</span>
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
