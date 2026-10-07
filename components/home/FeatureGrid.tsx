import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/features/FeatureCard";
import { features } from "@/lib/features";

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20">
      <Container>
        <SectionHeading title="Everything you need to play your media" description="Video, music and playlists in one lightweight app." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => <FeatureCard key={f.title} {...f} details={undefined} />)}
        </div>
      </Container>
    </section>
  );
}
