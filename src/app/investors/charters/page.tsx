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
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Governance</p>
            <h1 className="text-hero font-serif font-bold text-foreground">
              Charters & <em className="italic text-primary">Policies</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury max-w-4xl">
          <StaggerContainer className="space-y-3">
            {documents.map((doc) => (
              <StaggerItem key={doc}>
                <div className="brand-card p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <FileText className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-foreground">{doc}</span>
                  </div>
                  <button className="flex items-center gap-2 text-xs text-primary hover:underline shrink-0">
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
