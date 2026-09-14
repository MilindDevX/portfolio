// ABOUTME: Route entry and metadata for the evidence-led TruthLens case study.
import type { Metadata, Viewport } from "next";
import { TruthLensCaseStudy } from "@/components/ai/TruthLensCaseStudy";

export const metadata: Metadata = {
  title: "TruthLens — release-gated misinformation experiment | Milind Bansal",
  description: "TruthLens documents a misinformation-classification experiment, its rejected out-of-distribution result, and the safeguards that keep invalid inference offline.",
  openGraph: {
    type: "article",
    locale: "en_US",
    siteName: "Milind Bansal",
    title: "TruthLens — release-gated misinformation experiment",
    description: "A misinformation-classification experiment, its rejected held-out result, and the boundary that kept invalid inference offline.",
  },
};

export const viewport: Viewport = { themeColor: "#070707", colorScheme: "dark" };

export default function TruthLensPage() {
  return <TruthLensCaseStudy />;
}
