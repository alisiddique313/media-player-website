import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { downloads, platformMeta } from "@/lib/downloads";

export default function SystemRequirements() {
  const items = (["windows", "android"] as const).map((p) => ({ name: platformMeta[p].label, req: downloads[p].requirements, size: downloads[p].fileSize }));
  return (
    <section className="py-20">
      <Container>
        <SectionHeading title="System requirements" />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {items.map((i) => (
            <Card key={i.name} className="p-6">
              <h3 className="font-semibold text-white">{i.name}</h3>
              <p className="mt-2 text-slate-300">{i.req}</p>
              <p className="mt-1 text-sm text-slate-500">{i.size} download</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
