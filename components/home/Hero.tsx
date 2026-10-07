import Image from "next/image";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import DownloadButton from "@/components/downloads/DownloadButton";
import { platformMeta } from "@/lib/downloads";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 sm:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-[120px]" />
      <Container className="relative text-center">
        <div className="animate-fade-up">
          <Badge>Version 1.0.0 now available</Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-extrabold tracking-tight text-white sm:text-7xl">Your media. Your way.</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">A fast, modern media player for Windows and Android.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <DownloadButton platform="windows" label={platformMeta.windows.heroLabel} className="w-full sm:w-auto" />
            <DownloadButton platform="android" label={platformMeta.android.heroLabel} variant="secondary" className="w-full sm:w-auto" />
          </div>
          <p className="mt-4 text-sm text-slate-500">Windows 10/11 &bull; Android 8+</p>
        </div>
        <div className="mx-auto mt-14 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-indigo-900/30 backdrop-blur">
          <Image src="/images/hero-player.png" alt="Media Player showing a video library with playback controls" width={1600} height={900} priority sizes="(min-width:896px) 896px, 100vw" className="h-auto w-full rounded-xl" />
        </div>
      </Container>
    </section>
  );
}
