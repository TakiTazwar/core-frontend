import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full-Stack Web Development Services | Rientage",
  description:
    "Professional full-stack web development with Next.js, Node.js, PostgreSQL & more. Scalable, secure, and performance-focused applications for modern enterprises.",
  keywords:
    "web development, full-stack development, Next.js, React, Node.js, backend development, web applications, API development, database design, PostgreSQL",
  
  // Open Graph for social sharing
  openGraph: {
    title: "Full-Stack Web Development Services | Rientage",
    description:
      "Professional full-stack web development with Next.js, Node.js, PostgreSQL & more. Scalable, secure, and performance-focused applications.",
    type: "website",
    url: "https://rientage.com/services/web-development",
    siteName: "Rientage",
    locale: "en_US",
    images: [
      {
        url: "https://rientage.com/og-web-development.jpg",
        width: 1200,
        height: 630,
        alt: "Full-Stack Web Development Services",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Web Development Services | Rientage",
    description:
      "Professional full-stack web development with modern technologies. Scalable, secure applications.",
    images: ["https://rientage.com/og-web-development.jpg"],
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },

  alternates: {
    canonical: "https://rientage.com/services/web-development",
  },

  other: {
    "article:published_time": new Date().toISOString(),
    "article:author": "Rientage",
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
