import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ML Model Training | Machine Learning Development & AI Solutions | Rientage",
  description: "Expert ML model training and machine learning development. Custom neural networks, deep learning, computer vision, NLP, and production-ready AI solutions using TensorFlow, PyTorch, and more.",
  keywords: [
    "Machine Learning",
    "ML Model Training",
    "Deep Learning",
    "AI Development",
    "Computer Vision",
    "NLP",
    "TensorFlow",
    "PyTorch",
    "Neural Networks",
    "Predictive Analytics",
    "Model Optimization",
    "Transfer Learning",
    "Data Science",
    "Machine Learning Deployment"
  ],
  openGraph: {
    title: "ML Model Training | Custom Machine Learning Solutions",
    description: "Production-ready machine learning models. Deep learning, computer vision, NLP, and predictive analytics expertise.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/ml-training-og.png",
        width: 1200,
        height: 630,
        alt: "ML Model Training Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ML Model Training & AI Development Services",
    description: "Expert machine learning development: neural networks, deep learning, computer vision, NLP, and production deployment.",
    images: ["/images/ml-training-og.png"]
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large"
  },
  alternates: {
    canonical: "https://rientage.com/services/ml-model-training"
  }
};

export default function MLModelTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
