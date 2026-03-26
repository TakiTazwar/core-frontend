import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function MLOpsPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex flex-col flex-grow">
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden py-24">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-8">
            <div className="text-center">
              <h1 className="text-6xl lg:text-7xl font-black mb-4 text-white">MLOps</h1>
              <p className="text-2xl text-green-100 max-w-3xl mx-auto">Deploy and manage ML models in production with confidence</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full px-8 py-24 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                MLOps bridges the gap between machine learning development and production deployment. We provide end-to-end solutions for model training, versioning, deployment, monitoring, and continuous improvement.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our MLOps expertise ensures your models perform reliably in production while maintaining data quality and enabling rapid iteration.
              </p>
            </div>

            {/* Services Include */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Model Development & Training",
                  "ML Pipeline Automation",
                  "Model Versioning & Registry",
                  "Production Model Deployment",
                  "Model Performance Monitoring",
                  "Data Pipeline Management",
                  "Feature Store Implementation",
                  "A/B Testing & Experimentation",
                  "Model Explainability",
                  "Drift Detection & Management",
                  "Containerization & Orchestration",
                  "Cost Optimization"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-green-50 rounded-lg border border-green-100">
                    <span className="text-green-600 font-bold mr-3 text-xl">✓</span>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">ML Frameworks</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• TensorFlow & PyTorch</li>
                    <li>• Scikit-learn</li>
                    <li>• XGBoost & LightGBM</li>
                    <li>• Hugging Face</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">MLOps Tools</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• MLflow & Kubeflow</li>
                    <li>• DVC (Data Version Control)</li>
                    <li>• Airflow & Prefect</li>
                    <li>• Prometheus & ELK Stack</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-12 rounded-xl text-center">
              <h2 className="text-4xl font-bold mb-4">Scale Your ML Operations</h2>
              <p className="text-lg mb-8 text-green-100">Deploy, monitor, and optimize ML models at scale</p>
              <button className="px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors">
                Start MLOps Journey
              </button>
            </div>

            {/* Back Link */}
            <div className="mt-12">
              <Link href="/services" className="text-green-600 font-semibold hover:text-green-800 transition-colors">
                ← Back to Services
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
