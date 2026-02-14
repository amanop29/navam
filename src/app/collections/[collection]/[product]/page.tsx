import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Product Detail",
  description: "Exquisite gold jewellery by Navam Sunil Jewellers.",
};

export default function ProductPage({
  params,
}: {
  params: { collection: string; product: string };
}) {
  const productName = params.product
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const collectionName =
    params.collection.charAt(0).toUpperCase() + params.collection.slice(1);

  return (
    <>
      <section className="section-padding pt-32">
        <div className="container-luxury">
          {/* Breadcrumb */}
          <FadeIn>
            <div className="flex items-center gap-2 text-sm text-neutral-400 mb-12">
              <Link href="/collections" className="hover:text-primary transition-colors">
                Collections
              </Link>
              <span>/</span>
              <Link
                href={`/collections/${params.collection}`}
                className="hover:text-primary transition-colors"
              >
                {collectionName}
              </Link>
              <span>/</span>
              <span className="text-neutral-500">{productName}</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Images */}
            <FadeIn>
              <div className="space-y-4">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-cream-300 to-cream-400 brand-card">
                  <img 
                    src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop&q=80" 
                    alt={productName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-2xl bg-gradient-to-br from-cream-200 to-cream-300 brand-card overflow-hidden cursor-pointer hover:border-primary/30 transition-all"
                    >
                      <img 
                        src={`https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop&q=80&sat=-${i * 20}`}
                        alt={`${productName} view ${i}`}
                        className="w-full h-full object-cover opacity-50"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Product Info */}
            <div className="space-y-8">
              <FadeIn delay={0.2}>
                <p className="text-primary text-xs uppercase tracking-[0.3em]">
                  {collectionName} Collection
                </p>
                <h1 className="text-display font-serif font-bold text-foreground mt-2">
                  {productName}
                </h1>
                <div className="flex items-center gap-4 mt-4 text-sm text-neutral-400">
                  <span>22K Gold</span>
                  <span>•</span>
                  <span>18g</span>
                  <span>•</span>
                  <span>BIS Hallmarked</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-neutral-500 leading-relaxed">
                  This exquisite piece from the {collectionName} collection
                  showcases the pinnacle of our artisans&apos; craft. Handcrafted
                  in 22K pure gold with intricate detailing, this piece comes
                  with BIS hallmark certification and a lifetime maintenance
                  warranty.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="brand-card p-6 space-y-4">
                  <h4 className="text-sm font-semibold text-foreground">
                    Product Details
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-neutral-400">Metal</span>
                      <p className="text-foreground mt-1">22K Yellow Gold</p>
                    </div>
                    <div>
                      <span className="text-neutral-400">Weight</span>
                      <p className="text-foreground mt-1">18 grams</p>
                    </div>
                    <div>
                      <span className="text-neutral-400">Certification</span>
                      <p className="text-foreground mt-1">BIS Hallmarked</p>
                    </div>
                    <div>
                      <span className="text-neutral-400">Warranty</span>
                      <p className="text-foreground mt-1">Lifetime</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.45}>
                <div className="flex items-center gap-4">
                  <button className="w-12 h-12 rounded-full border border-cream-300 flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary/30 transition-all">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
