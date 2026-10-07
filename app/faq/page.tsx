import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/faq/FAQAccordion";
export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about downloading and using Media Player.",
  alternates: { canonical: "/faq" },
};

export default function Page() {
  return (
    <section className="py-16 sm:py-24"><Container>
      <SectionHeading as="h1" title="Frequently asked questions" />
      <FAQAccordion />
    </Container></section>
  );
}
