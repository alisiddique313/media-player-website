import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScreenshotGallery from "@/components/screenshots/ScreenshotGallery";
export const metadata: Metadata = {
  title: "Screenshots",
  description: "Screenshots of Media Player on Windows and Android.",
  alternates: { canonical: "/screenshots" },
};

export default function Page() {
  return (
    <section className="py-16 sm:py-24"><Container>
      <SectionHeading as="h1" title="Screenshots" description="Select a screenshot to view it larger." />
      <ScreenshotGallery />
    </Container></section>
  );
}
