import { Monitor, Smartphone } from "lucide-react";
import Card from "@/components/ui/Card";
import DownloadButton from "./DownloadButton";
import { downloads, platformMeta, type Platform } from "@/lib/downloads";
import { siteConfig } from "@/config/site";

export default function DownloadCard({ platform }: { platform: Platform }) {
  const d = downloads[platform];
  const m = platformMeta[platform];
  const Icon = platform === "windows" ? Monitor : Smartphone;
  const rows = [["Version", d.version], ["Requires", m.short], ["File type", m.ext], ["Size", d.fileSize]];
  return (
    <Card className="flex flex-col p-8">
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-violet-500/30 text-indigo-200">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-xl font-semibold text-white">{m.label}</h3>
          <p className="text-sm text-slate-400">{siteConfig.name} for {m.label}</p>
        </div>
      </div>
      <dl className="my-6 divide-y divide-white/10 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between py-2.5">
            <dt className="text-slate-400">{k}</dt>
            <dd className="font-medium text-white">{v}</dd>
          </div>
        ))}
      </dl>
      <DownloadButton platform={platform} label={m.cardLabel} className="mt-auto w-full" />
    </Card>
  );
}
