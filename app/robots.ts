// ABOUTME: Allows indexing of the public portfolio and points crawlers at the sitemap.
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://portfolio-milind.vercel.app/sitemap.xml" };
}
