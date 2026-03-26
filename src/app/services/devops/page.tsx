import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function DevOpsPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex flex-col flex-grow">
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 overflow-hidden py-24">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-8">
            <div className="text-center">
              <h1 className="text-6xl lg:text-7xl font-black mb-4 text-white">DevOps</h1>
              <p className="text-2xl text-orange-100 max-w-3xl mx-auto">Streamline development and deployment with modern DevOps practices</p>
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
                Modern DevOps practices enable faster, more reliable software delivery. We help you build robust CI/CD pipelines, manage infrastructure efficiently, and ensure seamless deployments to production.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                From containerization to cloud orchestration, we implement best practices that reduce deployment risks and improve system reliability at scale.
              </p>
            </div>

            {/* Services Include */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "CI/CD Pipeline Setup",
                  "Container Orchestration (Docker, Kubernetes)",
                  "Infrastructure as Code (Terraform, CloudFormation)",
                  "Cloud Deployment (AWS, Azure, GCP)",
                  "Monitoring & Logging Solutions",
                  "Security & Compliance",
                  "Auto-Scaling & Load Balancing",
                  "Database Management",
                  "Disaster Recovery Planning",
                  "Performance Monitoring",
                  "Incident Management",
                  "Cost Optimization"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <span className="text-orange-600 font-bold mr-3 text-xl">✓</span>
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
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Containerization</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Docker</li>
                    <li>• Kubernetes (K8s)</li>
                    <li>• Container Registry (ECR, GCR)</li>
                    <li>• Docker Compose</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Cloud & Infrastructure</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• AWS (EC2, S3, RDS, Lambda)</li>
                    <li>• Google Cloud Platform</li>
                    <li>• Microsoft Azure</li>
                    <li>• Terraform & CloudFormation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-12 rounded-xl text-center">
              <h2 className="text-4xl font-bold mb-4">Optimize Your DevOps Pipeline</h2>
              <p className="text-lg mb-8 text-orange-100">Deploy faster and manage infrastructure with confidence</p>
              <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-colors">
                Improve Your Infrastructure
              </button>
            </div>

            {/* Back Link */}
            <div className="mt-12">
              <Link href="/services" className="text-orange-600 font-semibold hover:text-orange-800 transition-colors">
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
