import { cn } from "@/lib/utils";

export default function SectionHeading({ title, description, as: Tag = "h2", className }: { title: string; description?: string; as?: "h1" | "h2"; className?: string }) {
  return (
    <div className={cn("mx-auto mb-12 max-w-2xl text-center", className)}>
      <Tag className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</Tag>
      {description && <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>}
    </div>
  );
}
