import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FAQAccordion from "@/components/faq/FAQAccordion";

export default function FAQPreview() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading title="Frequently asked questions" />
        <FAQAccordion limit={4} />
        <div className="mt-8 text-center"><Button href="/faq" variant="secondary">See all questions</Button></div>
      </Container>
    </section>
  );
}
