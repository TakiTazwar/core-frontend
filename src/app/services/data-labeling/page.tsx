import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function DataLabelingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex flex-col flex-grow">
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-br from-yellow-900 via-yellow-800 to-amber-900 overflow-hidden py-24">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-8">
            <div className="text-center">
              <h1 className="text-6xl lg:text-7xl font-black mb-4 text-white">Data Labeling</h1>
              <p className="text-2xl text-yellow-100 max-w-3xl mx-auto">High-quality data annotation for machine learning projects</p>
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
                Quality data is the foundation of successful machine learning. We provide comprehensive data labeling and annotation services with rigorous quality assurance to ensure your training datasets are accurate and consistent.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our expert team uses advanced tools and methodologies to handle projects of any scale, from image classification to complex sequence labeling.
              </p>
            </div>

            {/* Services Include */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Image & Video Annotation",
                  "Bounding Boxes & Segmentation",
                  "Text Classification & Tagging",
                  "Named Entity Recognition (NER)",
                  "Sentiment Analysis",
                  "Object Detection Labeling",
                  "Semantic & Instance Segmentation",
                  "3D Point Cloud Annotation",
                  "Audio Transcription & Labeling",
                  "Quality Assurance & Validation",
                  "Custom Labeling Workflows",
                  "Data Management & Versioning"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                    <span className="text-amber-600 font-bold mr-3 text-xl">✓</span>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Tools & Platforms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Annotation Tools</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Labelbox & Label Studio</li>
                    <li>• Roboflow</li>
                    <li>• Amazon SageMaker Ground Truth</li>
                    <li>• Custom Web-based Tools</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Data Management</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Version Control Systems</li>
                    <li>• Quality Metrics & Reports</li>
                    <li>• Secure Data Storage</li>
                    <li>• Workflow Automation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white p-12 rounded-xl text-center">
              <h2 className="text-4xl font-bold mb-4">Get Your Data Labeled</h2>
              <p className="text-lg mb-8 text-yellow-100">High-quality annotations for your machine learning projects</p>
              <button className="px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-yellow-50 transition-colors">
                Start Labeling Project
              </button>
            </div>

            {/* Back Link */}
            <div className="mt-12">
              <Link href="/services" className="text-amber-600 font-semibold hover:text-amber-800 transition-colors">
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
