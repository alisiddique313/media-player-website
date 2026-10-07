import Container from "@/components/ui/Container";
import DownloadButton from "@/components/downloads/DownloadButton";
import { platformMeta } from "@/lib/downloads";
import { siteConfig } from "@/config/site";

export default function DownloadSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/25 via-surface to-violet-600/25 px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Get {siteConfig.name} today</h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-300">Free to download for Windows and Android.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <DownloadButton platform="windows" label={platformMeta.windows.heroLabel} className="w-full sm:w-auto" />
            <DownloadButton platform="android" label={platformMeta.android.heroLabel} variant="secondary" className="w-full sm:w-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
}
