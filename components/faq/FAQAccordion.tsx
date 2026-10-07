import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faq";

export default function FAQAccordion({ limit }: { limit?: number }) {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.slice(0, limit).map((f) => (
        <details key={f.question} className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur open:bg-white/[0.06]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-4 font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-300 [&::-webkit-details-marker]:hidden">
            {f.question}
            <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="px-6 pb-5 text-sm leading-6 text-slate-400">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}
