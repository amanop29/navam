import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "News Article",
  description: "News from Navam Sunil Jewellers.",
};

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const title = params.slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 dark-gradient-bg" />
        <div className="absolute inset-0 silk-overlay" />
        <div className="container-luxury relative z-10 pb-16 pt-40">
          <FadeIn>
            <Link href="/news" className="text-gold text-sm flex items-center gap-2 mb-6 hover:gap-3 transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to News
            </Link>
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Press Release</p>
            <h1 className="text-display font-serif font-bold text-brown-50">{title}</h1>
            <p className="text-sm text-brown-100/40 mt-4">Published: January 2025</p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury max-w-3xl">
          <FadeIn>
            <div className="prose prose-invert prose-gold max-w-none space-y-6">
              <p className="text-brown-100/60 text-lg leading-relaxed">
                Navam Sunil Jewellers continues to set benchmarks in the Indian luxury
                jewellery industry. This article covers our latest developments and
                milestones that reinforce our commitment to excellence.
              </p>
              <p className="text-brown-100/50 leading-relaxed">
                Founded in 1964, Navam Sunil Jewellers has grown from a single workshop
                in Mumbai&apos;s historic Zaveri Bazaar to become one of India&apos;s most trusted
                names in gold jewellery. Our journey has been defined by three principles:
                uncompromising quality, heritage preservation, and customer trust.
              </p>
              <p className="text-brown-100/50 leading-relaxed">
                The company&apos;s three signature collections — Aradhya (temple jewellery),
                Devyani (contemporary), and Tarini (bridal) — collectively represent
                the full spectrum of Indian jewellery artistry. Each collection draws
                from distinct design philosophies while maintaining our hallmark
                standard of 22K and 18K gold with BIS certification.
              </p>
              <p className="text-brown-100/50 leading-relaxed">
                Looking ahead, we remain committed to expanding our reach while
                preserving the artisan traditions that make our pieces truly unique.
                With 13 showrooms and growing, the next chapter of Navam Sunil
                Jewellers promises to be our most exciting yet.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
