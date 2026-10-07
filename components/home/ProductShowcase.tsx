import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const rows = [
  { title: "On your desktop", text: "A roomy layout with a library, queue and controls that stay within reach.", src: "/images/windows-mockup.png", alt: "Media Player running on a Windows laptop", w: 1400, h: 900 },
  { title: "In your pocket", text: "Touch-friendly controls and a layout made for one-handed use on Android.", src: "/images/android-mockup.png", alt: "Media Player running on an Android phone", w: 700, h: 1200 },
];

export default function ProductShowcase() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading title="One player, two screens" />
        <div className="space-y-20">
          {rows.map((r, i) => (
            <div key={r.title} className="grid items-center gap-10 md:grid-cols-2">
              <div className={i % 2 ? "md:order-2" : ""}>
                <h3 className="text-2xl font-bold text-white">{r.title}</h3>
                <p className="mt-3 max-w-md leading-7 text-slate-400">{r.text}</p>
              </div>
              <div className={`flex justify-center ${i % 2 ? "md:order-1" : ""}`}>
                <Image src={r.src} alt={r.alt} width={r.w} height={r.h} sizes="(min-width:768px) 480px, 90vw" className={`h-auto rounded-2xl border border-white/10 shadow-2xl shadow-black/40 ${i % 2 ? "max-w-[260px]" : "w-full"}`} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
