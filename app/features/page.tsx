import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureDetails from "@/components/features/FeatureDetails";
export const metadata: Metadata = {
  title: "Features",
  description: "Explore everything Media Player can do: video, music, playlists and more.",
  alternates: { canonical: "/features" },
};

export default function Page() {
  return (
    <section className="py-16 sm:py-24"><Container>
      <SectionHeading as="h1" title="Features" description="A closer look at what Media Player offers on Windows and Android." />
      <FeatureDetails />
    </Container></section>
  );
}
