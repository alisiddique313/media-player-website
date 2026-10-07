import { cn } from "@/lib/utils";

export default function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/30 backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/[0.06]", className)}>
      {children}
    </div>
  );
}
