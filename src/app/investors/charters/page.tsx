import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { FileText, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Charters & Policies",
  description: "Corporate governance documents of Navam Sunil Jewellers.",
};

const documents = [
  "Code of Conduct for Board & Senior Management",
  "Audit Committee Charter",
  "Nomination & Remuneration Committee Charter",
  "Stakeholders Relationship Committee Charter",
  "CSR Committee Charter",
  "Whistle Blower Policy",
  "Related Party Transaction Policy",
  "Dividend Distribution Policy",
  "Policy on Board Diversity",
  "Insider Trading Code",
];

export default function ChartersPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 dark-gradient-bg" />
        <div className="absolute inset-0 silk-overlay" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Governance</p>
            <h1 className="text-hero font-serif font-bold text-brown-50">
              Charters & <em className="italic gold-text">Policies</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury max-w-4xl">
          <StaggerContainer className="space-y-3">
            {documents.map((doc) => (
              <StaggerItem key={doc}>
                <div className="glass-card-hover p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <FileText className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-sm text-brown-50">{doc}</span>
                  </div>
                  <button className="flex items-center gap-2 text-xs text-gold hover:underline shrink-0">
                    <Download className="w-4 h-4" /> PDF
                  </button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
