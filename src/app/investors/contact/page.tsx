import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Investor Contact",
  description: "Contact the investor relations team at Navam Sunil Jewellers.",
};

export default function InvestorContactPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Get In Touch</p>
            <h1 className="text-hero font-serif font-bold text-foreground">
              Investor <em className="italic text-primary">Contact</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <GlassCard hover glow className="p-8 space-y-6">
                <h3 className="text-xl font-serif font-bold text-foreground">Investor Relations Officer</h3>
                <div className="space-y-4">
                  <p className="text-foreground font-medium">Ms. Kavita Reddy</p>
                  <p className="text-sm text-neutral-400">Company Secretary & Compliance Officer</p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-3 text-sm text-neutral-500">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>investors@navamjewellers.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-500">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+91 22 6789 0123</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-500">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Navam House, Zaveri Bazaar, Mumbai 400002</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              <GlassCard hover glow className="p-8 space-y-6">
                <h3 className="text-xl font-serif font-bold text-foreground">Registrar & Transfer Agent</h3>
                <div className="space-y-4">
                  <p className="text-foreground font-medium">Link Intime India Pvt. Ltd.</p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-3 text-sm text-neutral-500">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>rnt.helpdesk@linkintime.co.in</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-500">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+91 22 4918 6270</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-neutral-500">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>C-101 LBS Marg, Vikhroli (W), Mumbai 400083</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
