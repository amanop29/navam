import { HeroSection } from "@/components/home/HeroSection";
import { CollectionsShowcase } from "@/components/home/CollectionsShowcase";
import { CollectionsSection } from "@/components/home/CollectionsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CollectionsShowcase />
      <CollectionsSection />
    </>
  );
}
