"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { GoldButton } from "@/components/ui/GoldButton";
import Link from "next/link";

const collections = [
  {
    name: "Aradhya",
    slug: "aradhya",
    tagline: "Divine Grace",
    description:
      "Inspired by temple architecture and devotional artistry. Heavy gold pieces with intricate detailing.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop&q=80",
  },
  {
    name: "Devyani",
    slug: "devyani",
    tagline: "Modern Elegance",
    description:
      "Where contemporary meets classic. Sleek, minimalist gold designs with subtle diamond accents.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=1000&fit=crop&q=80",
  },
  {
    name: "Tarini",
    slug: "tarini",
    tagline: "Bridal Splendor",
    description:
      "The crown jewel of our collections. Opulent bridal sets and heirloom pieces designed to be passed through generations.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop&q=80",
  },
];

export function CollectionsShowcase() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container-luxury">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-4">
              Signature Collections
            </p>
            <h2 className="text-display font-serif font-bold text-foreground">
              Discover Our{" "}
              <em className="italic text-primary">Collections</em>
            </h2>
            <p className="text-neutral-500 text-sm mt-4 max-w-2xl mx-auto">
              Three distinct collections, each telling its own story. From
              divine heritage to modern elegance and bridal splendor.
            </p>
          </div>
        </FadeIn>

        {/* Collections Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <StaggerItem key={collection.slug}>
              <Link
                href={`/collections/${collection.slug}`}
                className="group block"
              >
                <div className="brand-card overflow-hidden rounded-2xl h-full">
                  {/* Collection Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-gold-light text-xs uppercase tracking-wider mb-2">
                        {collection.tagline}
                      </p>
                      <h3 className="text-2xl font-serif font-bold text-white">
                        {collection.name}
                      </h3>
                    </div>
                  </div>

                  {/* Collection Info */}
                  <div className="p-6 space-y-4">
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {collection.description}
                    </p>
                    <span className="text-sm text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore Collection <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All CTA */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <GoldButton href="/collections" variant="outline" icon>
              VIEW ALL COLLECTIONS
            </GoldButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
