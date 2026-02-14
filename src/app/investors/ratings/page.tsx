import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Credit Ratings",
  description: "Credit ratings for Navam Sunil Jewellers from independent agencies.",
};

const ratings = [
  { agency: "CRISIL", rating: "AA-", outlook: "Stable", facility: "Long-term Bank Facilities" },
  { agency: "ICRA", rating: "A1+", outlook: "—", facility: "Short-term Bank Facilities" },
  { agency: "CARE", rating: "AA-", outlook: "Positive", facility: "Long-term NCD" },
];

export default function RatingsPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Financial Standing</p>
            <h1 className="text-hero font-serif font-bold text-foreground">
              Credit <em className="italic text-primary">Ratings</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury max-w-4xl">
          <div className="space-y-6">
            {ratings.map((r) => (
              <FadeIn key={r.agency}>
                <GlassCard hover glow className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-foreground">{r.agency}</h3>
                      <p className="text-sm text-neutral-400 mt-1">{r.facility}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-serif font-bold text-primary">{r.rating}</span>
                      {r.outlook !== "—" && (
                        <p className="text-sm text-neutral-400 mt-1">Outlook: {r.outlook}</p>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
