import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PlatformDownload from "@/components/downloads/PlatformDownload";

export default function PlatformSection() {
  return (
    <section id="platforms" className="py-20">
      <Container>
        <SectionHeading title="Choose your platform" description="Official downloads for Windows and Android." />
        <PlatformDownload />
      </Container>
    </section>
  );
}
