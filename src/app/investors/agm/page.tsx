import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { FileText, Download, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "AGM Notices",
  description: "Annual General Meeting notices for Navam Sunil Jewellers.",
};

const agmDocs = [
  { title: "61st AGM Notice – 2024", date: "September 15, 2024", size: "3.2 MB" },
  { title: "60th AGM Notice – 2023", date: "September 10, 2023", size: "2.8 MB" },
  { title: "59th AGM Notice – 2022", date: "September 12, 2022", size: "2.5 MB" },
  { title: "AGM Proceedings – 2024", date: "October 1, 2024", size: "4.1 MB" },
  { title: "AGM Proceedings – 2023", date: "October 3, 2023", size: "3.8 MB" },
];

export default function AGMPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 dark-gradient-bg" />
        <div className="absolute inset-0 silk-overlay" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Corporate Meetings</p>
            <h1 className="text-hero font-serif font-bold text-brown-50">
              AGM <em className="italic gold-text">Notices</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury max-w-4xl">
          <StaggerContainer className="space-y-4">
            {agmDocs.map((doc) => (
              <StaggerItem key={doc.title}>
                <div className="glass-card-hover p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-bold text-brown-50">{doc.title}</h3>
                      <p className="text-sm text-brown-100/40 mt-1">{doc.date} • {doc.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-sm text-brown-100/60 hover:text-gold hover:border-gold/30 transition-all">
                      <Eye className="w-4 h-4" /> View
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-sm text-gold hover:bg-gold/20 transition-all">
                      <Download className="w-4 h-4" /> Download
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
