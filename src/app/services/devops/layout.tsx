import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps Services | CI/CD, Kubernetes & Cloud Infrastructure | Rientage",
  description: "Professional DevOps consulting and implementation. Expert CI/CD pipelines, Kubernetes orchestration, AWS/Azure/GCP cloud deployment, infrastructure as code, and monitoring solutions.",
  keywords: [
    "DevOps",
    "CI/CD",
    "Kubernetes",
    "Docker",
    "AWS",
    "Infrastructure as Code",
    "Terraform",
    "Cloud Deployment",
    "Continuous Integration",
    "Continuous Delivery",
    "Cloud Services",
    "Container Orchestration",
    "Monitoring & Logging",
    "Site Reliability Engineering"
  ],
  openGraph: {
    title: "DevOps Services | CI/CD, Kubernetes & Cloud Infrastructure",
    description: "Enterprise DevOps solutions including CI/CD pipelines, Kubernetes, cloud deployment, and infrastructure automation.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/devops-og.png",
        width: 1200,
        height: 630,
        alt: "DevOps Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Services & Cloud Infrastructure Solutions",
    description: "Expert DevOps consulting: CI/CD pipelines, Kubernetes, AWS, infrastructure automation, and enterprise deployment.",
    images: ["/images/devops-og.png"]
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large"
  },
  alternates: {
    canonical: "https://rientage.com/services/devops"
  }
};

export default function DevOpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
