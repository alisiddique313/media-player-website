import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { downloads } from "@/lib/downloads";

const notes = ["First public release for Windows and Android", "Video and music playback", "Playlist and queue support", "Modern dark interface"];

export default function Changelog() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading title="What's new" />
        <Card className="mx-auto max-w-2xl p-8">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold text-white">Version {downloads.windows.version}</h3>
            <Badge>Latest</Badge>
          </div>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-300 marker:text-indigo-400">
            {notes.map((n) => <li key={n}>{n}</li>)}
          </ul>
        </Card>
      </Container>
    </section>
  );
}
