import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function DigitalTechnologyConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex flex-col flex-grow">
        <div className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden py-24">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-8 text-center">
            <h1 className="text-6xl lg:text-7xl font-black mb-4 text-white">Digital & Technology Consulting</h1>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
              Strategic guidance to align technology decisions with business outcomes.
            </p>
          </div>
        </div>

        <div className="w-full px-8 py-24 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                We help organizations make better technology decisions through clear strategy, system architecture planning,
                and practical execution roadmaps.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Whether you are modernizing legacy systems, planning cloud adoption, or defining an AI roadmap,
                our consulting approach focuses on measurable value and low-risk delivery.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">What We Deliver</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  "Technology Strategy & Roadmapping",
                  "Architecture Review & Modernization Plans",
                  "Cloud Readiness & Migration Planning",
                  "Platform Selection & Vendor Evaluation",
                  "AI Adoption Strategy & Use-Case Prioritization",
                  "Security, Governance & Compliance Guidance",
                  "Delivery Process Optimization",
                  "Cost, Performance & Scalability Assessments",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-slate-700 font-bold mr-3 text-xl">✓</span>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-700 to-blue-800 text-white p-12 rounded-xl text-center">
              <h2 className="text-4xl font-bold mb-4">Need Strategic Technology Direction?</h2>
              <p className="text-lg mb-8 text-slate-200">
                Let us help you define a practical and scalable technology path.
              </p>
              <button className="px-8 py-4 bg-white text-slate-800 font-bold rounded-lg hover:bg-slate-100 transition-colors">
                Book a Consulting Session
              </button>
            </div>

            <div className="mt-12">
              <Link href="/services" className="text-slate-700 font-semibold hover:text-slate-900 transition-colors">
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
