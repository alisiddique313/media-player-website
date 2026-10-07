import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const base = siteConfig.url || "http://localhost:3000";
const title = `${siteConfig.name} — ${siteConfig.tagline}`;
const description = "Download the official Media Player for Windows and Android. Play your videos and music with a fast, modern media player.";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: { default: title, template: `%s | ${siteConfig.name}` },
  description,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
  openGraph: { type: "website", siteName: siteConfig.name, title, description, url: "/", images: [{ url: "/images/hero-player.png", width: 1600, height: 900, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/hero-player.png"] },
};
export const viewport: Viewport = { themeColor: "#05060a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
