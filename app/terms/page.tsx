import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using Media Player and this website.",
  alternates: { canonical: "/terms" },
};

const sections: [string, string][] = [
  [
    "Acceptance",
    "By downloading or using {name}, you agree to these terms."
  ],
  [
    "License",
    "Describe what users may do with the software, such as personal use, and any restrictions."
  ],
  [
    "Disclaimer",
    "The software is provided as is, without warranty. Edit this section with your legal wording."
  ],
  [
    "Changes",
    "Explain how and when these terms may change."
  ],
  [
    "Contact",
    "Add a contact email for questions about these terms."
  ]
];

export default function Page() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: replace with date. This is a placeholder; have it reviewed before launch.</p>
        <div className="mt-10 space-y-8">
          {sections.map(([h, p]) => (
            <div key={h}>
              <h2 className="text-xl font-semibold text-white">{h}</h2>
              <p className="mt-2 leading-7 text-slate-400">{p.replaceAll("{name}", siteConfig.name)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
