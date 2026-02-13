"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { GoldButton } from "@/components/ui/GoldButton";
import Link from "next/link";

const collections = [
  {
    name: "Bold Huggies",
    slug: "bold-huggies",
    category: "Ring",
    categorySlug: "rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Crystal Pear Ring",
    slug: "crystal-pear-ring",
    category: "Ring",
    categorySlug: "rings",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Molten Hoops in Gold",
    slug: "molten-hoops-in-gold",
    category: "Earrings",
    categorySlug: "earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Orbit Crystal Cuff",
    slug: "orbit-crystal-cuff",
    category: "Bracelets",
    categorySlug: "bracelets",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop&q=80",
  },
  {
    name: "Horseshoe Pendant",
    slug: "horseshoe-pendant",
    category: "Necklace",
    categorySlug: "necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&q=80",
  },
];

export function CollectionsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative">
      <div className="container-luxury">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-display font-serif font-bold text-brown-50">
              Our <em className="italic gold-text">jewellery</em> collections
            </h2>
            <GoldButton href="/collections" variant="outline" icon size="sm">
              VIEW ALL JEWELLERY
            </GoldButton>
          </div>
        </FadeIn>

        {/* Products Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {collections.map((item) => (
            <StaggerItem key={item.name}>
              <Link href={`/collections/${item.categorySlug}/${item.slug}`} className="group block">
                <div className="glass-card-hover overflow-hidden rounded-2xl">
                  {/* Product Image with Text Overlay */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-brown-500/20 to-brown-700/30 group-hover:from-gold/5 group-hover:to-brown-700/30 transition-all duration-700 ease-out">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-xs text-white/60 uppercase tracking-wider mb-1">
                        {item.category}
                      </p>
                      <h3 className="text-sm font-medium text-white">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
