import type { Metadata, Viewport } from "next";
import { AiPortfolio } from "@/components/ai/AiPortfolio";

export const metadata: Metadata = {
  alternates: { canonical: "/ai" },
  title: "Milind Bansal — Applied AI engineer",
  description: "Milind Bansal trains and evaluates models, then integrates their uncertain outputs into dependable products with explicit safeguards.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Milind Bansal",
    title: "Milind Bansal — Applied AI engineer",
    description: "Model experiments, evaluation boundaries, and AI-assisted product systems—built and explained.",
  },
};

export const viewport: Viewport = { themeColor: "#070707", colorScheme: "dark" };

export default function AiPortfolioPage() {
  return <AiPortfolio />;
}
