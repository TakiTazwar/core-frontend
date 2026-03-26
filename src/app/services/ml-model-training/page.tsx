import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function MLModelTrainingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex flex-col flex-grow">
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-br from-cyan-900 via-cyan-800 to-blue-900 overflow-hidden py-24">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-8">
            <div className="text-center">
              <h1 className="text-6xl lg:text-7xl font-black mb-4 text-white">ML Model Training</h1>
              <p className="text-2xl text-cyan-100 max-w-3xl mx-auto">Production-grade machine learning models built with cutting-edge algorithms</p>
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
                We build production-grade machine learning models using state-of-the-art algorithms and techniques. From data preprocessing to model optimization, we ensure every model is reliable, accurate, and ready for enterprise deployment.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our expertise spans across various domains including computer vision, natural language processing, predictive analytics, and more.
              </p>
            </div>

            {/* Services Include */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Custom Model Architecture Design",
                  "Deep Learning & Neural Networks",
                  "Computer Vision Models",
                  "NLP & Text Analysis Models",
                  "Model Optimization & Tuning",
                  "Hyperparameter Optimization",
                  "Performance Benchmarking",
                  "Transfer Learning Implementation",
                  "Ensemble Methods",
                  "Model Validation & Testing",
                  "Production-Ready Deployment",
                  "Model Documentation & Training"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-cyan-50 rounded-lg border border-cyan-100">
                    <span className="text-cyan-600 font-bold mr-3 text-xl">✓</span>
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
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Deep Learning</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• TensorFlow & Keras</li>
                    <li>• PyTorch</li>
                    <li>• JAX</li>
                    <li>• FastAI</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">ML Libraries</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Scikit-learn</li>
                    <li>• XGBoost & LightGBM</li>
                    <li>• OpenCV & YOLO</li>
                    <li>• Hugging Face Transformers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-12 rounded-xl text-center">
              <h2 className="text-4xl font-bold mb-4">Build Your Custom ML Model</h2>
              <p className="text-lg mb-8 text-cyan-100">Get production-ready models tailored to your specific needs</p>
              <button className="px-8 py-4 bg-white text-cyan-600 font-bold rounded-lg hover:bg-cyan-50 transition-colors">
                Train Your First Model
              </button>
            </div>

            {/* Back Link */}
            <div className="mt-12">
              <Link href="/services" className="text-cyan-600 font-semibold hover:text-cyan-800 transition-colors">
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
