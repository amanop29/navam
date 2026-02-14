import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { supabase } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Board of Directors",
  description: "Meet the distinguished board members guiding Navam Sunil Jewellers.",
};

export const revalidate = 60; // Revalidate every 60 seconds

async function getBoardMembers() {
  const { data } = await supabase
    .from("board_members")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  return data || [];
}

export default async function BoardPage() {
  const boardMembers = await getBoardMembers();
  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">
              Leadership
            </p>
            <h1 className="text-hero font-serif font-bold text-foreground">
              Board of <em className="italic text-primary">Directors</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding" id="team">
        <div className="container-luxury px-12 md:px-24 lg:px-32">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {boardMembers.map((member) => (
              <StaggerItem key={member.id}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-brown-900/50 backdrop-blur-sm border border-cream-300 hover:border-white/20 transition-all duration-500">
                  {member.image_url ? (
                    <img 
                      src={member.image_url} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5">
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    {member.bio && (
                      <p className="text-xs text-white/70 leading-relaxed line-clamp-3">
                        {member.bio}
                      </p>
                    )}
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
