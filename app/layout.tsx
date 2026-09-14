import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const bodyFont = localFont({ src: "../public/fonts/atkinson-hyperlegible-next-variable.woff2", variable: "--font-body", weight: "200 800", display: "swap", adjustFontFallback: false });
const displayFont = localFont({ src: "../public/fonts/bricolage-grotesque-variable.woff2", variable: "--font-display", weight: "200 800", display: "swap", adjustFontFallback: false });

export const metadata: Metadata = {
  title: "Milind Bansal — Full-stack engineer",
  description: "Evidence-led case studies across developer tools, AI feedback workflows, and multi-role marketplace systems by Milind Bansal.",
  openGraph: { type: "website", locale: "en_US", siteName: "Milind Bansal", title: "Milind Bansal — Full-stack engineer", description: "Developer tools, feedback workflows, and marketplace systems—built and explained." },
};
export const viewport: Viewport = { themeColor: "#F4F0E8", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}><body id="top"><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
