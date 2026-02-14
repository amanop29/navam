import { HeroSection } from "@/components/home/HeroSection";
import { CollectionsShowcase } from "@/components/home/CollectionsShowcase";
import { CollectionsSection } from "@/components/home/CollectionsSection";
import { VideoSection } from "@/components/home/VideoSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CollectionsShowcase />
      <VideoSection />
      <CollectionsSection />
    </>
  );
}
