import { Download } from "lucide-react";
import { downloads, type Platform } from "@/lib/downloads";
import { buttonClass } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Props = { platform: Platform; label: string; variant?: "primary" | "secondary"; className?: string };

export default function DownloadButton({ platform, label, variant = "primary", className }: Props) {
  const d = downloads[platform];
  if (!d.url) {
    return (
      <span role="link" aria-disabled="true" className={buttonClass("secondary", cn("cursor-not-allowed opacity-60 hover:scale-100", className))}>
        {label} (link coming soon)
      </span>
    );
  }
  return (
    <a href={d.url} download={d.fileName} className={buttonClass(variant, className)}>
      <Download className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
