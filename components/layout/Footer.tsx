import Link from "next/link";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  const links = [...navigation.filter((n) => n.href !== "/"), { name: "Privacy", href: "/privacy" }, { name: "Terms", href: "/terms" }];
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <nav aria-label="Footer"><ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map((l) => <li key={l.href}><Link href={l.href} className="text-sm text-slate-400 hover:text-white">{l.name}</Link></li>)}
        </ul></nav>
      </Container>
    </footer>
  );
}
