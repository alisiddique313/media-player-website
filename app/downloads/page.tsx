import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PlatformDownload from "@/components/downloads/PlatformDownload";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = {
  title: "Downloads",
  description: "Download the official Media Player for Windows (.exe) and Android (.apk).",
  alternates: { canonical: "/downloads" },
};

export default function Page() {
  return (
    <section className="py-16 sm:py-24"><Container>
      <SectionHeading as="h1" title={`Download ${siteConfig.name}`} description="Choose your platform." />
      <PlatformDownload />
    </Container></section>
  );
}
