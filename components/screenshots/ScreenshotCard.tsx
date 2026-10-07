import Image from "next/image";
import type { Screenshot } from "@/lib/screenshots";

export default function ScreenshotCard({ shot, onOpen }: { shot: Screenshot; onOpen: () => void }) {
  return (
    <button type="button" onClick={onOpen} aria-label={`View ${shot.title} larger`}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] text-left transition duration-300 hover:border-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-300">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image src={shot.image} alt={`${shot.title} screenshot`} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover object-top transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-sm font-medium text-white">{shot.title}</span>
        <span className="text-xs text-slate-400">{shot.platform}</span>
      </div>
    </button>
  );
}
