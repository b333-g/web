import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://badritech.dev";

  // Static routes
  const routes = [
    "",
    "/products",
    "/products/greatgoga",
    "/products/bhagavad-gita",
    "/products/truvideo-demo",
    "/products/nckit-demo",
    "/sdks",
    "/documentation",
    "/downloads",
    "/roadmap",
    "/changelog",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/products/") ? 0.8 : 0.6,
  }));
}
