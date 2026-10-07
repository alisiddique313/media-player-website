import DownloadCard from "./DownloadCard";

export default function PlatformDownload() {
  return (
    <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
      <DownloadCard platform="windows" />
      <DownloadCard platform="android" />
    </div>
  );
}
