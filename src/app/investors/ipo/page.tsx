import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "IPO Information",
  description: "IPO details and listing information for Navam Sunil Jewellers.",
};

export default function IPOPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 dark-gradient-bg" />
        <div className="absolute inset-0 silk-overlay" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Public Offering</p>
            <h1 className="text-hero font-serif font-bold text-brown-50">
              IPO <em className="italic gold-text">Information</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { label: "Issue Price", value: "₹340 per share" },
              { label: "Issue Size", value: "₹480 Crore" },
              { label: "Listing Date", value: "March 15, 2023" },
              { label: "Exchange", value: "BSE & NSE" },
              { label: "Lot Size", value: "44 shares" },
              { label: "Current Price", value: "₹520" },
            ].map((item) => (
              <FadeIn key={item.label}>
                <GlassCard hover className="p-6 text-center">
                  <p className="text-sm text-brown-100/40 uppercase tracking-wider">{item.label}</p>
                  <p className="text-2xl font-serif font-bold gold-text mt-2">{item.value}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <GlassCard className="p-8 space-y-4">
              <h3 className="text-xl font-serif font-bold text-brown-50">IPO Documents</h3>
              <div className="space-y-3">
                {[
                  "Draft Red Herring Prospectus (DRHP)",
                  "Red Herring Prospectus (RHP)",
                  "Prospectus",
                  "Allotment Status",
                  "Basis of Allotment",
                ].map((doc) => (
                  <div key={doc} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <span className="text-sm text-brown-100/60">{doc}</span>
                    <button className="text-xs text-gold hover:underline">Download PDF →</button>
                  </div>
                ))}
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
