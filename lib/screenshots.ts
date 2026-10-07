export type Screenshot = { title: string; image: string; platform: "Windows" | "Android"; width: number; height: number };

const win = { platform: "Windows", width: 1280, height: 720 } as const;
const and = { platform: "Android", width: 540, height: 1170 } as const;

export const screenshots: Screenshot[] = [
  { title: "Windows Player", image: "/screenshots/windows-player.png", ...win },
  { title: "Windows Library", image: "/screenshots/windows-library.png", ...win },
  { title: "Windows Music", image: "/screenshots/windows-music.png", ...win },
  { title: "Windows Settings", image: "/screenshots/windows-settings.png", ...win },
  { title: "Android Player", image: "/screenshots/android-player.png", ...and },
  { title: "Android Library", image: "/screenshots/android-library.png", ...and },
  { title: "Android Music", image: "/screenshots/android-music.png", ...and },
];
