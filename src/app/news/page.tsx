import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "News & Press",
  description: "Latest news, press releases, and media coverage of Navam Sunil Jewellers.",
};

const newsItems = [
  {
    title: "Navam Sunil Jewellers Launches Tarini Bridal Collection 2025",
    slug: "tarini-bridal-collection-2025",
    date: "January 15, 2025",
    category: "Collection Launch",
    excerpt: "The new Tarini bridal collection features 45 exquisite pieces inspired by Mughal-era artistry, combining traditional techniques with modern design sensibilities.",
  },
  {
    title: "Annual Report FY24: Revenue Surges 28% to ₹850 Crore",
    slug: "annual-report-fy24",
    date: "December 20, 2024",
    category: "Financial",
    excerpt: "Navam Sunil Jewellers reports robust financial performance with 28% revenue growth and expanded EBITDA margins driven by the festive season.",
  },
  {
    title: "Partnership with Responsible Jewellery Council Announced",
    slug: "rjc-partnership",
    date: "November 8, 2024",
    category: "Sustainability",
    excerpt: "Strengthening our commitment to ethical practices, we join the Responsible Jewellery Council to enhance supply chain transparency.",
  },
  {
    title: "New Flagship Showroom Opens in Hyderabad",
    slug: "hyderabad-showroom-opens",
    date: "October 5, 2024",
    category: "Expansion",
    excerpt: "Our 13th showroom brings the Navam experience to Hyderabad, featuring immersive jewellery discovery and private consultation suites.",
  },
  {
    title: "Artisan Empowerment: 500th Artisan Graduates from Training Program",
    slug: "artisan-empowerment-milestone",
    date: "September 18, 2024",
    category: "CSR",
    excerpt: "A milestone moment as our 500th artisan completes the two-year heritage goldsmithing training program in Nashik.",
  },
  {
    title: "Devyani Collection Wins Best Contemporary Design at IIJS 2024",
    slug: "devyani-iijs-award",
    date: "August 22, 2024",
    category: "Awards",
    excerpt: "The Devyani collection's Cascade Pendant wins the prestigious Best Contemporary Design award at India International Jewellery Show 2024.",
  },
];

export default function NewsPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Press & Media</p>
            <h1 className="text-hero font-serif font-bold text-foreground">
              Latest <em className="italic text-primary">News</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <StaggerItem key={item.slug}>
                <Link href={`/news/${item.slug}`} className="block group">
                  <div className="brand-card p-6 h-full space-y-4">
                    <div className="aspect-video rounded-2xl bg-gradient-to-br from-cream-300 to-cream-400 overflow-hidden group-hover:from-primary/5 group-hover:to-cream-400 transition-all duration-500">
                      <img 
                        src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=250&fit=crop&q=80" 
                        alt="News"
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-primary bg-primary/10 px-3 py-1 rounded-full">{item.category}</span>
                      <span className="text-xs text-neutral-300">{item.date}</span>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                    <span className="text-xs text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read more <span>→</span>
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
