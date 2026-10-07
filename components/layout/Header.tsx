import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <Container className="relative flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 rounded-lg font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-300">
          <Image src="/logo-icon.png" alt="" width={32} height={32} className="rounded-lg" />
          {siteConfig.name}
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navigation.map((n) => (
            <Link key={n.href} href={n.href} className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">{n.name}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button href="/downloads" className="hidden !py-2 md:inline-flex">Download</Button>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
