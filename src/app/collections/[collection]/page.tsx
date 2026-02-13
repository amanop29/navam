import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import Link from "next/link";

const collectionsData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  story: string;
  products: { name: string; slug: string; weight: string; purity: string; price: string; image: string }[];
}> = {
  aradhya: {
    name: "Aradhya",
    tagline: "Divine Grace",
    description: "Inspired by temple architecture and devotional artistry.",
    story: "The Aradhya collection draws from the magnificent temple architecture of South India. Each piece is a prayer in gold — intricate carvings of deities, lotus motifs, and sacred geometries transformed into wearable devotion. Crafted in 22K gold with kundan and temple work techniques passed down through five generations of our master artisans.",
    products: [
      { name: "Temple Grand Necklace", slug: "temple-grand-necklace", weight: "45g", purity: "22K", price: "$2,450", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&q=80" },
      { name: "Devotional Choker", slug: "devotional-choker", weight: "32g", purity: "22K", price: "$1,890", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop&q=80" },
      { name: "Heritage Bangles Set", slug: "heritage-bangles", weight: "28g", purity: "22K", price: "$1,240", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop&q=80" },
      { name: "Lakshmi Pendant", slug: "lakshmi-pendant", weight: "12g", purity: "22K", price: "$680", image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop&q=80" },
      { name: "Temple Jhumkas", slug: "temple-jhumkas", weight: "18g", purity: "22K", price: "$890", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop&q=80" },
      { name: "Sacred Waist Chain", slug: "sacred-waist-chain", weight: "35g", purity: "22K", price: "$1,950", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&q=80" },
    ],
  },
  devyani: {
    name: "Devyani",
    tagline: "Modern Elegance",
    description: "Where contemporary meets classic — minimalist gold with diamond accents.",
    story: "Devyani is the modern woman's collection. Designed for those who carry heritage in their heart and contemporary confidence in their stride. Clean lines, geometric forms, and subtle diamond touches create pieces that transition effortlessly from boardroom to cocktail hour. Crafted in 18K gold with ethically sourced diamonds.",
    products: [
      { name: "Crystal Pear Ring", slug: "crystal-pear-ring", weight: "4g", purity: "18K", price: "$184", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop&q=80" },
      { name: "Molten Hoops", slug: "molten-hoops", weight: "6g", purity: "18K", price: "$245", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop&q=80" },
      { name: "Orbit Crystal Cuff", slug: "orbit-crystal-cuff", weight: "15g", purity: "18K", price: "$139", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop&q=80" },
      { name: "Bold Huggies", slug: "bold-huggies", weight: "3g", purity: "18K", price: "$96", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&q=80" },
      { name: "Cascade Pendant", slug: "cascade-pendant", weight: "5g", purity: "18K", price: "$320", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&q=80" },
      { name: "Infinity Chain", slug: "infinity-chain", weight: "8g", purity: "18K", price: "$445", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop&q=80" },
    ],
  },
  tarini: {
    name: "Tarini",
    tagline: "Bridal Splendor",
    description: "Opulent bridal sets and heirloom pieces designed for generations.",
    story: "The Tarini collection is our crown jewel — created for the most important moments of life. Each bridal set takes 6-8 weeks of handcrafting by our senior-most artisans. Heavy polki, uncut diamonds, enamel work, and 22K gold come together in pieces meant to be passed down as treasured heirlooms.",
    products: [
      { name: "Bridal Grand Set", slug: "bridal-grand-set", weight: "120g", purity: "22K", price: "$8,900", image: "https://images.unsplash.com/photo-1614964158719-4cd61f4828cf?w=600&h=600&fit=crop&q=80" },
      { name: "Royal Mangalsutra", slug: "royal-mangalsutra", weight: "25g", purity: "22K", price: "$3,200", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&q=80" },
      { name: "Dynasty Maang Tikka", slug: "dynasty-maang-tikka", weight: "15g", purity: "22K", price: "$1,890", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop&q=80" },
      { name: "Rani Haar", slug: "rani-haar", weight: "85g", purity: "22K", price: "$6,500", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop&q=80" },
      { name: "Bridal Bangles Set (12)", slug: "bridal-bangles", weight: "95g", purity: "22K", price: "$5,200", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop&q=80" },
      { name: "Heirloom Earrings", slug: "heirloom-earrings", weight: "22g", purity: "22K", price: "$2,100", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop&q=80" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(collectionsData).map((slug) => ({ collection: slug }));
}

export function generateMetadata({ params }: { params: { collection: string } }): Metadata {
  const col = collectionsData[params.collection];
  if (!col) return { title: "Collection Not Found" };
  return {
    title: `${col.name} Collection`,
    description: col.description,
  };
}

export default function CollectionPage({ params }: { params: { collection: string } }) {
  const col = collectionsData[params.collection];
  if (!col) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-24 md:pt-0">
        <div className="absolute inset-0 dark-gradient-bg" />
        <div className="absolute inset-0 silk-overlay" />
        <div className="container-luxury relative z-10 pt-8 pb-20 md:pt-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <FadeIn direction="left">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
                <img 
                  src={col.products[0].image} 
                  alt={col.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </FadeIn>

            {/* Text Content */}
            <FadeIn direction="right" delay={0.2}>
              <div className="space-y-6">
                <p className="text-gold text-xs uppercase tracking-[0.3em]">
                  {col.tagline}
                </p>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-brown-50">
                  {col.name}
                </h1>
                <p className="text-brown-100/60 text-base lg:text-lg leading-relaxed">
                  {col.description}
                </p>
                <p className="text-brown-100/50 text-sm lg:text-base leading-relaxed">
                  {col.story}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container-luxury">
          <FadeIn>
            <h2 className="text-display font-serif font-bold text-brown-50 mb-4">
              The Collection
            </h2>
            <p className="text-brown-100/50 mb-12">
              {col.products.length} exquisite pieces
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {col.products.map((product) => (
              <StaggerItem key={product.slug}>
                <Link
                  href={`/collections/${params.collection}/${product.slug}`}
                  className="group block"
                >
                  <div className="glass-card-hover overflow-hidden">
                    <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-brown-500/20 to-brown-700/30 overflow-hidden group-hover:from-gold/5 group-hover:to-brown-700/30 transition-all duration-500">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Text Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                          <h3 className="text-lg font-serif font-bold text-brown-50">
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-brown-100/60">
                            <span>{product.weight}</span>
                            <span>•</span>
                            <span>{product.purity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
