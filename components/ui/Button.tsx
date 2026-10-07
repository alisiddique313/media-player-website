import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25 hover:brightness-110",
  secondary: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
};

export function buttonClass(variant: keyof typeof variants = "primary", className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300",
    variants[variant],
    className,
  );
}

export default function Button({ href, variant, className, children }: { href: string; variant?: keyof typeof variants; className?: string; children: React.ReactNode }) {
  return <Link href={href} className={buttonClass(variant, className)}>{children}</Link>;
}
