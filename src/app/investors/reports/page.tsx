import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { FileText, Download, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Annual Reports",
  description: "Download annual reports and financial statements of Navam Sunil Jewellers.",
};

const reports = [
  { title: "Annual Report FY 2023-24", year: "2024", size: "12.4 MB" },
  { title: "Annual Report FY 2022-23", year: "2023", size: "11.8 MB" },
  { title: "Annual Report FY 2021-22", year: "2022", size: "10.2 MB" },
  { title: "Annual Report FY 2020-21", year: "2021", size: "9.6 MB" },
  { title: "Annual Report FY 2019-20", year: "2020", size: "8.9 MB" },
];

export default function ReportsPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">
              Financial Disclosure
            </p>
            <h1 className="text-hero font-serif font-bold text-foreground">
              Annual <em className="italic text-primary">Reports</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury max-w-4xl">
          <StaggerContainer className="space-y-4">
            {reports.map((report) => (
              <StaggerItem key={report.year}>
                <div className="brand-card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-serif font-bold text-foreground">
                        {report.title}
                      </h3>
                      <p className="text-sm text-neutral-400 mt-1">
                        PDF • {report.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-cream-300 text-sm text-neutral-500 hover:text-primary hover:border-primary/30 transition-all">
                      <Eye className="w-4 h-4" /> View
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm text-primary hover:bg-primary/20 transition-all">
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
