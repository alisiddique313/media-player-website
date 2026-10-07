import Hero from "@/components/home/Hero";
import PlatformSection from "@/components/home/PlatformSection";
import FeatureGrid from "@/components/home/FeatureGrid";
import ProductShowcase from "@/components/home/ProductShowcase";
import SystemRequirements from "@/components/home/SystemRequirements";
import Changelog from "@/components/home/Changelog";
import FAQPreview from "@/components/home/FAQPreview";
import DownloadSection from "@/components/home/DownloadSection";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScreenshotGallery from "@/components/screenshots/ScreenshotGallery";
import { screenshots } from "@/lib/screenshots";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PlatformSection />
      <FeatureGrid />
      <ProductShowcase />
      <section className="py-20">
        <Container>
          <SectionHeading title="See it in action" description="Select a screenshot to view it larger." />
          <ScreenshotGallery items={screenshots.slice(0, 3)} />
          <div className="mt-8 text-center"><Button href="/screenshots" variant="secondary">View all screenshots</Button></div>
        </Container>
      </section>
      <SystemRequirements />
      <Changelog />
      <FAQPreview />
      <DownloadSection />
    </>
  );
}
