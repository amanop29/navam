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
        <div className="absolute inset-0 dark-gradient-bg" />
        <div className="absolute inset-0 silk-overlay" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">Get In Touch</p>
            <h1 className="text-hero font-serif font-bold text-brown-50">
              Investor <em className="italic gold-text">Contact</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <GlassCard hover glow className="p-8 space-y-6">
                <h3 className="text-xl font-serif font-bold text-brown-50">Investor Relations Officer</h3>
                <div className="space-y-4">
                  <p className="text-brown-50 font-medium">Ms. Kavita Reddy</p>
                  <p className="text-sm text-brown-100/40">Company Secretary & Compliance Officer</p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-3 text-sm text-brown-100/60">
                      <Mail className="w-4 h-4 text-gold" />
                      <span>investors@navamjewellers.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-brown-100/60">
                      <Phone className="w-4 h-4 text-gold" />
                      <span>+91 22 6789 0123</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-brown-100/60">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span>Navam House, Zaveri Bazaar, Mumbai 400002</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              <GlassCard hover glow className="p-8 space-y-6">
                <h3 className="text-xl font-serif font-bold text-brown-50">Registrar & Transfer Agent</h3>
                <div className="space-y-4">
                  <p className="text-brown-50 font-medium">Link Intime India Pvt. Ltd.</p>
                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-3 text-sm text-brown-100/60">
                      <Mail className="w-4 h-4 text-gold" />
                      <span>rnt.helpdesk@linkintime.co.in</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-brown-100/60">
                      <Phone className="w-4 h-4 text-gold" />
                      <span>+91 22 4918 6270</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-brown-100/60">
                      <MapPin className="w-4 h-4 text-gold" />
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
