import type { Metadata } from "next";

export const defaultSEO: Metadata = {
  title: "Premium Restaurant",
  description: "A modern premium dining experience",
  openGraph: {
    title: "Premium Restaurant",
    description: "Fine dining with elegance",
    url: "https://restaurant.com",
    siteName: "Premium Restaurant",
    images: [
      { url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Restaurant" }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Restaurant",
    description: "Fine dining with elegance",
    images: ["/images/og-image.jpg"],
  },
};
