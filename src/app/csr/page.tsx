import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = {
  title: "CSR Initiatives",
  description: "Corporate Social Responsibility initiatives by Navam Sunil Jewellers.",
};

const initiatives = [
  {
    title: "Artisan Empowerment Program",
    desc: "Training 500+ rural artisans in traditional goldsmithing techniques, providing sustainable livelihoods and preserving heritage craftsmanship.",
    impact: "500+ artisans trained",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=300&fit=crop&q=80",
  },
  {
    title: "Gold for Education",
    desc: "Funding scholarships for children of gold mine workers and artisan families. Supporting education from primary to graduate level.",
    impact: "1,200 scholarships awarded",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&q=80",
  },
  {
    title: "Sustainable Mining Initiative",
    desc: "Partnering with responsible mining organizations to source ethically mined gold and reduce environmental impact.",
    impact: "80% ethically sourced",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop&q=80",
  },
  {
    title: "Women Artisan Collective",
    desc: "Empowering women artisans through skill development, financial literacy, and entrepreneurship programs in rural Maharashtra.",
    impact: "300+ women empowered",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&q=80",
  },
  {
    title: "Heritage Conservation",
    desc: "Preserving ancient jewellery-making techniques by documenting and teaching traditional craftsmanship methods.",
    impact: "15 techniques preserved",
    image: "https://images.unsplash.com/photo-1577415124269-fc1140ec09de?w=400&h=300&fit=crop&q=80",
  },
  {
    title: "Community Health",
    desc: "Free health camps and insurance coverage for artisan families across our manufacturing centres.",
    impact: "10,000+ families covered",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&q=80",
  },
];

export default function CSRPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cream-200" />
        <div className="absolute inset-0 hidden" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">Social Responsibility</p>
            <h1 className="text-hero font-serif font-bold text-foreground">
              Giving <em className="italic text-primary">Back</em>
            </h1>
            <p className="text-neutral-500 text-lg mt-6 max-w-lg">
              Our commitment extends beyond gold — we invest in communities, heritage, and a sustainable future.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((item) => (
              <StaggerItem key={item.title}>
                <GlassCard hover glow className="p-8 h-full space-y-4">
                  <div className="w-full aspect-video rounded-xl overflow-hidden mb-2">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                  <div className="pt-4 border-t border-cream-300">
                    <span className="text-sm text-primary font-medium">{item.impact}</span>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
