"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigation } from "@/config/navigation";
import { buttonClass } from "@/components/ui/Button";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}
        className="rounded-lg p-2 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-300">
        {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
      </button>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="absolute inset-x-0 top-full border-b border-white/10 bg-ink/95 px-4 py-4 backdrop-blur-xl">
          <ul className="space-y-1">
            {navigation.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-slate-200 hover:bg-white/10">{n.name}</Link>
              </li>
            ))}
          </ul>
          <Link href="/downloads" onClick={() => setOpen(false)} className={buttonClass("primary", "mt-3 w-full")}>Download</Link>
        </nav>
      )}
    </div>
  );
}
