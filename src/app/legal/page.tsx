import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "Legal — Privacy Policy & Terms",
  description: "Privacy policy, terms of use, and legal information for Navam Sunil Jewellers.",
};

export default function LegalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 pb-16 pt-40">
          <FadeIn>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Legal</p>
            <h1 className="text-hero font-serif font-bold text-foreground">
              Privacy & <em className="italic text-primary">Terms</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury max-w-3xl">
          <FadeIn>
            <GlassCard className="p-8 md:p-12 space-y-10">

              {/* Privacy Policy */}
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-foreground">Privacy Policy</h2>
                <p className="text-xs text-neutral-300">Last updated: January 1, 2025</p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Navam Sunil Jewellers (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;) respects your privacy and is committed to protecting personal data you share with us. This policy explains how we collect, use, and safeguard your information in accordance with the Information Technology Act, 2000 and applicable Indian data protection regulations.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-serif font-bold text-foreground">1. Information We Collect</h3>
                <ul className="space-y-2 text-sm text-neutral-500 leading-relaxed">
                  <li className="flex gap-2"><span className="text-primary">•</span> <strong>Personal Information:</strong> Name, email, phone number, and address when you fill out forms, book appointments, or make inquiries.</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> <strong>Usage Data:</strong> Browser type, pages visited, time spent, and referring URL — collected via analytics tools.</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> <strong>Cookies:</strong> Small data files stored on your device to enhance your browsing experience.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-serif font-bold text-foreground">2. How We Use Your Data</h3>
                <ul className="space-y-2 text-sm text-neutral-500 leading-relaxed">
                  <li className="flex gap-2"><span className="text-primary">•</span> To process and respond to your inquiries, appointment bookings, and feedback.</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> To send newsletters and promotional communications (with your consent).</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> To improve our website, services, and customer experience through analytics.</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> To comply with legal obligations and protect our rights.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-serif font-bold text-foreground">3. Data Sharing</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  We do not sell or rent your personal data. We may share data with trusted service providers (hosting, analytics, payment processing) under strict confidentiality agreements, or when required by law.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-serif font-bold text-foreground">4. Data Security</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  We implement industry-standard security measures including SSL encryption, secure servers, and access controls. However, no electronic transmission is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-serif font-bold text-foreground">5. Your Rights</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  You may request access to, correction of, or deletion of your personal data at any time by contacting us at <a href="mailto:privacy@navamjewellers.com" className="text-primary hover:underline">privacy@navamjewellers.com</a>. You may also opt out of marketing communications via the unsubscribe link in our emails.
                </p>
              </div>

              <div className="w-full h-px bg-cream-300 my-8" />

              {/* Terms of Use */}
              <div className="space-y-4">
                <h2 className="text-2xl font-serif font-bold text-foreground">Terms of Use</h2>
                <p className="text-xs text-neutral-300">Last updated: January 1, 2025</p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-serif font-bold text-foreground">1. Acceptance</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  By accessing or using the Navam Sunil Jewellers website, you agree to be bound by these Terms of Use. If you disagree with any part, please discontinue use immediately.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-serif font-bold text-foreground">2. Intellectual Property</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  All content on this website — including text, images, logos, designs, and software — is the property of Navam Sunil Jewellers and protected by Indian and international copyright laws. Reproduction without written permission is prohibited.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-serif font-bold text-foreground">3. Product Information</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  While we strive for accuracy, product images, prices, and descriptions are indicative and subject to change. Gold prices fluctuate daily. Final pricing is confirmed at the time of purchase at our showrooms.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-serif font-bold text-foreground">4. Limitation of Liability</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Navam Sunil Jewellers shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website. Our total liability is limited to the amount paid for services directly rendered through this platform.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-serif font-bold text-foreground">5. Governing Law</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
                </p>
              </div>

              <div className="w-full h-px bg-cream-300 my-8" />

              {/* Contact */}
              <div className="space-y-3">
                <h3 className="text-lg font-serif font-bold text-foreground">Contact Us</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  For legal queries, privacy requests, or grievances, please contact:<br />
                  <strong className="text-neutral-700">Navam Sunil Jewellers — Legal Department</strong><br />
                  Email: <a href="mailto:legal@navamjewellers.com" className="text-primary hover:underline">legal@navamjewellers.com</a><br />
                  Address: Zaveri Bazaar, Mumbai 400 002, Maharashtra, India
                </p>
              </div>

            </GlassCard>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
