import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Board of Directors",
  description: "Meet the distinguished board members guiding Navam Sunil Jewellers.",
};

const boardMembers = [
  {
    name: "Mr. Sunil Navam",
    role: "Chairman & Managing Director",
    bio: "Visionary leader with 40+ years in the gold jewellery industry. Under his leadership, the company has grown from a single showroom to a national brand.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop&q=80",
  },
  {
    name: "Mrs. Priya Navam",
    role: "Executive Director – Design",
    bio: "Award-winning jewellery designer with a passion for blending heritage motifs with contemporary aesthetics. Head of the Tarini collection.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=300&fit=crop&q=80",
  },
  {
    name: "Mr. Arjun Mehta",
    role: "Independent Director",
    bio: "Former CFO of a major banking institution. Brings 30 years of financial expertise and corporate governance experience.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=300&fit=crop&q=80",
  },
  {
    name: "Dr. Anita Sharma",
    role: "Independent Director",
    bio: "Renowned gemologist and professor. Advisor to the Gem & Jewellery Export Promotion Council.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=300&fit=crop&q=80",
  },
  {
    name: "Mr. Raghav Kapoor",
    role: "Chief Financial Officer",
    bio: "Chartered Accountant with expertise in luxury retail finance. Led the company through its successful IPO journey.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=300&fit=crop&q=80",
  },
  {
    name: "Ms. Kavita Reddy",
    role: "Company Secretary",
    bio: "Expert in corporate compliance and governance. Ensures adherence to SEBI regulations and listing requirements.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=300&fit=crop&q=80",
  },
];

export default function BoardPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 dark-gradient-bg" />
        <div className="absolute inset-0 silk-overlay" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">
              Leadership
            </p>
            <h1 className="text-hero font-serif font-bold text-brown-50">
              Board of <em className="italic gold-text">Directors</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding" id="team">
        <div className="container-luxury px-12 md:px-24 lg:px-32">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {boardMembers.map((member) => (
              <StaggerItem key={member.name}>
                <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-brown-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5">
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gold">{member.role}</p>
                    <p className="text-xs text-white/70 leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
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
