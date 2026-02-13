import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Clock, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Journal",
  description: "Insights on jewellery trends, gemstone guides, and styling tips from Navam Sunil Jewellers.",
};

const categories = ["All", "Trends", "Gemstones", "Styling", "Craftsmanship", "Bridal"];

const articles = [
  {
    slug: "ultimate-guide-to-diamond-cuts",
    title: "The Ultimate Guide to Diamond Cuts in 2025",
    excerpt: "From brilliant round to emerging rose cuts — understanding how cut affects sparkle, value, and personal style.",
    category: "Gemstones",
    readTime: "8 min read",
    date: "Jan 15, 2025",
    featured: true,
  },
  {
    slug: "bridal-jewellery-trends-2025",
    title: "Bridal Jewellery Trends: What Modern Brides Are Choosing",
    excerpt: "Layered necklaces, mismatched earrings, and the resurgence of Polki — the trends defining bridal jewellery this season.",
    category: "Bridal",
    readTime: "6 min read",
    date: "Jan 8, 2025",
    featured: true,
  },
  {
    slug: "caring-for-gold-jewellery",
    title: "How to Care for Your Gold Jewellery: Expert Tips",
    excerpt: "Simple daily habits and professional maintenance that keep your gold pieces looking brand new for decades.",
    category: "Styling",
    readTime: "4 min read",
    date: "Dec 28, 2024",
    featured: false,
  },
  {
    slug: "history-of-kundan-jewellery",
    title: "The Rich History of Kundan: From Rajasthan to Modern Runways",
    excerpt: "Tracing the 2,500-year journey of India's most iconic jewellery technique and its contemporary revival.",
    category: "Craftsmanship",
    readTime: "10 min read",
    date: "Dec 15, 2024",
    featured: false,
  },
  {
    slug: "investing-in-gold-jewellery",
    title: "Beyond Adornment: Gold Jewellery as a Financial Asset",
    excerpt: "Understanding hallmarking, making charges, and how to evaluate gold jewellery as an investment.",
    category: "Trends",
    readTime: "7 min read",
    date: "Dec 5, 2024",
    featured: false,
  },
  {
    slug: "coloured-gemstones-guide",
    title: "Emeralds, Rubies & Sapphires: A Collector's Guide",
    excerpt: "What to look for when selecting coloured gemstones — origin, treatment, certification, and setting recommendations.",
    category: "Gemstones",
    readTime: "9 min read",
    date: "Nov 20, 2024",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPosts = articles.filter((a) => a.featured);
  const regularPosts = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 dark-gradient-bg" />
        <div className="absolute inset-0 silk-overlay" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Journal</p>
            <h1 className="text-hero font-serif font-bold text-brown-50">
              The Navam <em className="italic gold-text">Journal</em>
            </h1>
            <p className="mt-4 text-brown-100/60 max-w-xl">
              Expert insights on gemstones, styling tips, jewellery care, and the artistry behind every creation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-glass-border">
        <div className="container-luxury">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className="text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-glass-border text-brown-100/50 hover:text-gold hover:border-gold/30 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading label="Featured" title="Editor's Picks" />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {featuredPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/resources/blog/${post.slug}`} className="block group">
                  <GlassCard hover glow className="p-8 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] uppercase tracking-wider px-3 py-1 bg-gold/10 text-gold rounded-full border border-gold/20">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-brown-100/30">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-brown-50 group-hover:text-gold transition-colors mb-3">
                      {post.title}
                    </h3>
                    <p className="text-sm text-brown-100/50 flex-1">{post.excerpt}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs text-brown-100/30">{post.date}</span>
                      <span className="text-gold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read Article <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </GlassCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding bg-brown-950/30">
        <div className="container-luxury">
          <SectionHeading label="All Articles" title="Recent Posts" />
          <StaggerContainer className="space-y-6 mt-12">
            {regularPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/resources/blog/${post.slug}`} className="block group">
                  <GlassCard hover className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Tag className="w-3 h-3 text-gold" />
                          <span className="text-[10px] uppercase tracking-wider text-gold">{post.category}</span>
                          <span className="text-xs text-brown-100/30">{post.date}</span>
                        </div>
                        <h3 className="text-lg font-serif font-bold text-brown-50 group-hover:text-gold transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-brown-100/50 mt-1">{post.excerpt}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="text-xs text-brown-100/30 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
