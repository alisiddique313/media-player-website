"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import ScreenshotCard from "./ScreenshotCard";
import { screenshots, type Screenshot } from "@/lib/screenshots";

export default function ScreenshotGallery({ items = screenshots }: { items?: Screenshot[] }) {
  const [active, setActive] = useState<Screenshot | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => <ScreenshotCard key={s.image} shot={s} onOpen={() => setActive(s)} />)}
      </div>
      {active && (
        <div role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex animate-fade-up items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <button type="button" autoFocus onClick={() => setActive(null)} aria-label="Close screenshot"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-300">
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <Image src={active.image} alt={`${active.title} screenshot`} width={active.width} height={active.height}
            onClick={(e) => e.stopPropagation()} className="h-auto max-h-[85vh] w-auto max-w-full rounded-xl object-contain shadow-2xl" />
        </div>
      )}
    </>
  );
}
