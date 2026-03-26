import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MLOps Services | ML Model Deployment & Management | Rientage",
  description: "Enterprise MLOps solutions for production ML model deployment, monitoring, and management. CI/CD pipelines, model versioning, performance tracking, and continuous improvement.",
  keywords: [
    "MLOps",
    "ML Model Deployment",
    "Model Versioning",
    "ML Pipeline",
    "Model Monitoring",
    "MLflow",
    "Kubeflow",
    "Data Pipeline",
    "Feature Store",
    "A/B Testing",
    "Model Registry",
    "Production ML",
    "Model Explainability",
    "Drift Detection",
    "Model Performance",
    "Data Management"
  ],
  openGraph: {
    title: "MLOps Services | ML Model Deployment & Management",
    description: "Enterprise MLOps solutions for production ML model deployment, monitoring, and management.",
    type: "website",
    url: "https://rientage.com/services/mlops",
    images: [
      {
        url: "https://rientage.com/og-mlops.png",
        width: 1200,
        height: 630,
        alt: "MLOps Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MLOps Services",
    description: "Enterprise ML model deployment and production management solutions"
  },
  robots: {
    index: true,
    follow: true
  },
  canonical: "https://rientage.com/services/mlops"
};

export default function MLOpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
