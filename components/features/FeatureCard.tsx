import { Play, Music, ListMusic, Zap, Headphones, FolderOpen, Monitor, Smartphone, LayoutDashboard, type LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";

const icons: Record<string, LucideIcon> = { Play, Music, ListMusic, Zap, Headphones, FolderOpen, Monitor, Smartphone, LayoutDashboard };

type Props = { title: string; description: string; icon: string; details?: string };

export default function FeatureCard({ title, description, icon, details }: Props) {
  const Icon = icons[icon] ?? Play;
  return (
    <Card className="p-6">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-violet-500/30 text-indigo-200">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{details ?? description}</p>
    </Card>
  );
}
