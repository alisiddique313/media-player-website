import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Media Player handles your information.",
  alternates: { canonical: "/privacy" },
};

const sections: [string, string][] = [
  [
    "Overview",
    "{name} plays media stored on your device. This page explains what information the app and this website handle."
  ],
  [
    "Your media",
    "Your files stay on your device. Describe here whether the app ever uploads or analyzes them."
  ],
  [
    "Website data",
    "Describe any analytics or cookies used on this website, or state that none are used."
  ],
  [
    "Downloads",
    "Describe any information collected when you download the installer or APK."
  ],
  [
    "Contact",
    "Add a contact email for privacy questions."
  ]
];

export default function Page() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
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
