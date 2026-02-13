import type { Metadata } from "next";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { GoldButton } from "@/components/ui/GoldButton";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore our signature collections — Aradhya, Devyani, and Tarini. Heritage gold jewellery crafted for the modern connoisseur.",
};

const collections = [
  {
    name: "Aradhya",
    slug: "aradhya",
    tagline: "Divine Grace",
    description:
      "Inspired by temple architecture and devotional artistry. Heavy gold pieces with intricate detailing — necklaces, chokers, and temple sets fit for celebrations.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop&q=80",
    featured: [
      { name: "Temple Necklace", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop&q=80" },
      { name: "Devotional Choker", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=300&h=300&fit=crop&q=80" },
      { name: "Heritage Bangles Set", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop&q=80" },
    ],
  },
  {
    name: "Devyani",
    slug: "devyani",
    tagline: "Modern Elegance",
    description:
      "Where contemporary meets classic. Sleek, minimalist gold designs with subtle diamond accents — perfect for everyday luxury and the modern professional.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop&q=80",
    featured: [
      { name: "Crystal Pear Ring", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop&q=80" },
      { name: "Molten Hoops", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop&q=80" },
      { name: "Orbit Cuff", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop&q=80" },
    ],
  },
  {
    name: "Tarini",
    slug: "tarini",
    tagline: "Bridal Splendor",
    description:
      "The crown jewel of our collections. Opulent bridal sets, statement mangalsutras, and heirloom pieces designed to be passed through generations.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=600&fit=crop&q=80",
    featured: [
      { name: "Bridal Grand Set", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop&q=80" },
      { name: "Royal Mangalsutra", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop&q=80" },
      { name: "Dynasty Maang Tikka", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=300&h=300&fit=crop&q=80" },
    ],
  },
];

export default function CollectionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 dark-gradient-bg" />
        <div className="absolute inset-0 silk-overlay" />
        <div className="container-luxury relative z-10 pb-20 pt-40">
          <FadeIn>
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">
              Signature Collections
            </p>
            <h1 className="text-hero font-serif font-bold text-brown-50">
              Timeless <em className="italic gold-text">Collections</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Collections */}
      {collections.map((col) => (
        <section
          key={col.slug}
          className="py-16 md:py-20 lg:py-24 relative overflow-hidden"
        >
          <div className="container-luxury relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <FadeIn direction="left">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
                  <img 
                    src={col.image} 
                    alt={col.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </FadeIn>

              {/* Content */}
              <div className="space-y-8">
                <FadeIn delay={0.2}>
                  <p className="text-gold text-xs uppercase tracking-[0.3em]">
                    {col.tagline}
                  </p>
                  <h2 className="text-display font-serif font-bold text-brown-50 mt-2">
                    {col.name}
                  </h2>
                  <p className="text-brown-100/50 leading-relaxed mt-4">
                    {col.description}
                  </p>
                </FadeIn>

                {/* Featured Products */}
                <StaggerContainer className="grid grid-cols-3 gap-4">
                  {col.featured.map((p) => (
                    <StaggerItem key={p.name}>
                      <div className="glass-card-hover p-4 text-center space-y-3">
                        <div className="aspect-square rounded-xl bg-gradient-to-br from-brown-500/20 to-brown-700/30 overflow-hidden">
                          <img 
                            src={p.image} 
                            alt={p.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-xs text-brown-50 truncate">{p.name}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <FadeIn delay={0.4}>
                  <GoldButton href={`/collections/${col.slug}`} icon>
                    Explore {col.name}
                  </GoldButton>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
