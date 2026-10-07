export type Platform = "windows" | "android";

export const downloads = {
  windows: {
    version: "1.0.0",
    fileName: "MediaPlayer-Windows.exe",
    fileSize: "24.5 MB",
    requirements: "Windows 10 or later",
    url: process.env.NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL ?? "",
  },
  android: {
    version: "1.0.0",
    fileName: "MediaPlayer-Android.apk",
    fileSize: "18.2 MB",
    requirements: "Android 8 or later",
    url: process.env.NEXT_PUBLIC_ANDROID_DOWNLOAD_URL ?? "",
  },
};

export const platformMeta = {
  windows: { label: "Windows", short: "Windows 10/11", ext: ".EXE", heroLabel: "Download for Windows", cardLabel: "Download .EXE" },
  android: { label: "Android", short: "Android 8+", ext: ".APK", heroLabel: "Download for Android", cardLabel: "Download .APK" },
} satisfies Record<Platform, Record<string, string>>;
