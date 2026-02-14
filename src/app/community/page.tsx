import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";
import { Users, Calendar, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Community",
  description: "Join the Navam Sunil Jewellers community — events, experts, and exclusive experiences.",
};

export default function CommunityPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Join Us</p>
            <h1 className="text-hero font-serif font-bold text-foreground">
              Our <em className="italic text-primary">Community</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <Link href="/community/join" className="block group">
                <GlassCard hover glow className="p-8 h-full space-y-4 text-center">
                  <Users className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                    Join the Circle
                  </h3>
                  <p className="text-sm text-neutral-500">
                    Become a member for exclusive previews, first access to new collections, and VIP event invitations.
                  </p>
                </GlassCard>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/community/events" className="block group">
                <GlassCard hover glow className="p-8 h-full space-y-4 text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                    Events
                  </h3>
                  <p className="text-sm text-neutral-500">
                    Trunk shows, collection launches, and intimate jewellery appreciation evenings.
                  </p>
                </GlassCard>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/community/experts" className="block group">
                <GlassCard hover glow className="p-8 h-full space-y-4 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto" />
                  <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                    Meet Our Experts
                  </h3>
                  <p className="text-sm text-neutral-500">
                    Connect with our master artisans, gemologists, and design consultants.
                  </p>
                </GlassCard>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
