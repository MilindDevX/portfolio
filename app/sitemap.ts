// ABOUTME: Public route list for search engines; every entry is a page a recruiter can land on.
import type { MetadataRoute } from "next";

const origin = "https://portfolio-milind.vercel.app";
const routes = ["/", "/ai", "/work/feedbackos", "/work/medmarket", "/work/routelens", "/work/truthlens"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${origin}${route}`, changeFrequency: "monthly", priority: route === "/" || route === "/ai" ? 1 : 0.7 }));
}
