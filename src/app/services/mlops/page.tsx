"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import SchedulingCalendar from "@/components/SchedulingCalendar";

export default function MLOpsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    scheduleMeeting: false,
    meetingDate: "",
    meetingTime: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rientage.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://rientage.com/services" },
        { "@type": "ListItem", "position": 3, "name": "MLOps", "item": "https://rientage.com/services/mlops" }
      ]
    };
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "MLOps Services",
      "description": "Enterprise MLOps solutions for production ML model deployment, monitoring, and management",
      "provider": { "@type": "Organization", "name": "Rientage" },
      "offers": [
        { "@type": "Offer", "name": "Model Deployment & Serving", "description": "Production deployment of ML models with high availability and scalability" },
        { "@type": "Offer", "name": "Model Monitoring & Observability", "description": "Comprehensive monitoring of model performance and data drift detection" },
        { "@type": "Offer", "name": "ML Pipeline Orchestration", "description": "Automated data and ML pipelines with version control and lineage tracking" },
        { "@type": "Offer", "name": "Model Registry & Versioning", "description": "Centralized model management with version history and reproducibility" }
      ]
    };
    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.innerHTML = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script1);
    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.innerHTML = JSON.stringify(serviceSchema);
    document.head.appendChild(script2);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: "MLOps"
        })
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex flex-col flex-grow">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 overflow-hidden py-24" aria-label="MLOps services hero section">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl" aria-hidden="true"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl" aria-hidden="true"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-8">
            <div className="text-center">
              <h1 className="text-6xl lg:text-7xl font-black mb-4 text-white">MLOps at Scale</h1>
              <p className="text-2xl text-green-100 max-w-3xl mx-auto">Deploy, monitor, and manage ML models in production with enterprise-grade confidence</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="w-full px-8 py-24 bg-slate-950">
          <div className="max-w-4xl mx-auto bg-slate-900/80 rounded-2xl border border-white/5 p-12 shadow-2xl backdrop-blur-md">
            {/* Overview */}
            <section className="mb-16 space-y-4" aria-label="MLOps overview and benefits">
              <h2 className="text-4xl font-bold text-white">Production ML Excellence</h2>
              <p className="text-lg text-green-100 leading-relaxed">
                MLOps bridges the critical gap between machine learning development and production deployment. We architect end-to-end solutions for continuous model training, intelligent versioning, seamless deployment, real-time monitoring, and autonomous improvement cycles.
              </p>
              <p className="text-lg text-green-100 leading-relaxed">
                Our enterprise MLOps expertise guarantees your models perform with maximum reliability in production, maintaining strict data quality standards while enabling rapid iteration and continuous innovation across your ML infrastructure.
              </p>
            </section>

            {/* Services Include */}
            <section className="mb-16" aria-label="MLOps services offered">
              <h2 className="text-4xl font-bold mb-8 text-white">Our MLOps Services</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none" role="list">
                {[
                  "Model Development & Training Orchestration",
                  "Automated ML Pipeline Construction",
                  "Model Versioning & Registry Management",
                  "Production Model Deployment & Serving",
                  "Real-time Model Performance Monitoring",
                  "Data Pipeline Architecture & Execution",
                  "Feature Store Implementation & Management",
                  "A/B Testing & Experimentation Platforms",
                  "Model Explainability & Interpretability",
                  "Data & Model Drift Detection Systems",
                  "Containerization & Kubernetes Orchestration",
                  "Cost Optimization & Resource Management"
                ].map((item, idx) => (
                  <li key={idx} className="group flex items-center gap-3 p-4 bg-green-950/60 rounded-lg border border-green-700 hover:border-green-500/50 transition-all" role="listitem">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-green-100 font-medium group-hover:text-green-50 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ML Frameworks - Collapsible */}
            <details className="mb-8 group border border-green-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-gradient-to-r from-green-900 to-green-800 hover:from-green-800 hover:to-green-700 transition-colors flex items-center justify-between"
                       role="button"
                       aria-expanded="false"
                       aria-controls="ml-frameworks-content">
                <h2 className="text-2xl font-bold text-white">ML Frameworks & Libraries</h2>
                <span className="text-2xl text-green-300 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <div className="p-6 bg-slate-900 border-t border-green-700" id="ml-frameworks-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list" aria-label="ML frameworks and libraries">
                  <article className="p-4 bg-green-950/80 rounded-lg border border-green-800" role="listitem">
                    <h3 className="font-bold text-green-300 mb-3">Deep Learning</h3>
                    <ul className="space-y-2 text-green-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>TensorFlow & Keras for production ML</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>PyTorch for research and experiments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>JAX for high-performance computing</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-green-950/80 rounded-lg border border-green-800" role="listitem">
                    <h3 className="font-bold text-green-300 mb-3">Classical ML</h3>
                    <ul className="space-y-2 text-green-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>Scikit-learn for standard algorithms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>XGBoost & LightGBM for gradient boosting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>Hugging Face for NLP & transformers</span>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </details>

            {/* MLOps Platforms - Collapsible */}
            <details className="mb-8 group border border-green-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-gradient-to-r from-green-900 to-green-800 hover:from-green-800 hover:to-green-700 transition-colors flex items-center justify-between"
                       role="button"
                       aria-expanded="false"
                       aria-controls="mlops-platforms-content">
                <h2 className="text-2xl font-bold text-white">MLOps Platforms & Tools</h2>
                <span className="text-2xl text-green-300 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <div className="p-6 bg-slate-900 border-t border-green-700" id="mlops-platforms-content">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="MLOps platforms and tools">
                  <article className="p-4 bg-green-950/80 rounded-lg border border-green-800" role="listitem">
                    <h3 className="font-bold text-green-300 mb-3">Model Management</h3>
                    <ul className="space-y-2 text-green-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>MLflow for model registry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>DVC for version control</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-green-950/80 rounded-lg border border-green-800" role="listitem">
                    <h3 className="font-bold text-green-300 mb-3">Orchestration</h3>
                    <ul className="space-y-2 text-green-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>Kubeflow for K8s workflows</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>Airflow & Prefect for pipelines</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-green-950/80 rounded-lg border border-green-800" role="listitem">
                    <h3 className="font-bold text-green-300 mb-3">Monitoring</h3>
                    <ul className="space-y-2 text-green-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>Prometheus & Grafana</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>ELK Stack for logging</span>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </details>

            {/* Model Deployment & Serving - Collapsible */}
            <details className="mb-8 group border border-green-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-gradient-to-r from-green-900 to-green-800 hover:from-green-800 hover:to-green-700 transition-colors flex items-center justify-between"
                       role="button"
                       aria-expanded="false"
                       aria-controls="deployment-content">
                <h2 className="text-2xl font-bold text-white">Model Deployment & Serving</h2>
                <span className="text-2xl text-green-300 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <div className="p-6 bg-slate-900 border-t border-green-700" id="deployment-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list" aria-label="Model deployment and serving technologies">
                  <article className="p-4 bg-green-950/80 rounded-lg border border-green-800" role="listitem">
                    <h3 className="font-bold text-green-300 mb-3">Inference Serving</h3>
                    <ul className="space-y-2 text-green-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>TensorFlow Serving for scalable inference</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>TorchServe for PyTorch models</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>KServe for unified model serving</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-green-950/80 rounded-lg border border-green-800" role="listitem">
                    <h3 className="font-bold text-green-300 mb-3">Containerization</h3>
                    <ul className="space-y-2 text-green-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>Docker for model containerization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>Kubernetes for orchestration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>Helm for deployment management</span>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </details>

            {/* Benefits Section - New */}
            <section className="mb-16 mt-16" aria-label="MLOps benefits">
              <h2 className="text-4xl font-bold mb-8 text-white">Why Choose Our MLOps Services</h2>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { emoji: "⚡", title: "Rapid Deployment", desc: "Get models from development to production in days, not months" },
                  { emoji: "📊", title: "Performance Tracking", desc: "Real-time monitoring and metrics for every model in production" },
                  { emoji: "🔄", title: "Continuous Improvement", desc: "Automated retraining and version management for model evolution" },
                  { emoji: "🛡️", title: "Production Reliability", desc: "Enterprise-grade deployment with high availability and scalability" },
                  { emoji: "📈", title: "Cost Efficiency", desc: "Optimize resource utilization and reduce operational expenses" },
                  { emoji: "🔍", title: "Full Observability", desc: "Complete visibility into model behavior, data drift, and system health" }
                ].map((benefit, idx) => (
                  <article key={idx} className="p-6 bg-green-950/60 rounded-lg border border-green-800 hover:border-green-600 transition-colors">
                    <dt className="text-3xl mb-3" aria-hidden="true">{benefit.emoji}</dt>
                    <dd className="space-y-2">
                      <h3 className="font-bold text-green-300 text-lg">{benefit.title}</h3>
                      <p className="text-green-100 text-sm">{benefit.desc}</p>
                    </dd>
                  </article>
                ))}
              </dl>
            </section>

            {/* Professional CTA Section */}
            <section className="bg-gradient-to-br from-green-900 to-emerald-900 p-16 rounded-2xl shadow-xl border border-green-700 mt-12" aria-label="Get started with MLOps">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-5xl font-black mb-3 text-white">Ready to Scale ML Operations?</h2>
                <p className="text-xl text-green-200 mb-12">Schedule a consultation with our MLOps experts to discuss your production ML requirements and strategy.</p>
                
                {submitted ? (
                  <article className="relative" role="region" aria-label="Form submission success">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-25"></div>
                    <div className="relative bg-slate-900 p-12 rounded-2xl border-2 border-green-500 text-center shadow-lg">
                      <div className="mb-6 flex justify-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900/50 rounded-full">
                          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">Request Received!</h3>
                      <p className="text-lg text-green-200 mb-6">We&apos;ve received your MLOps consultation request and will contact you shortly.</p>
                      <div className="bg-green-950/60 p-4 rounded-lg mb-6 border border-green-700">
                        <p className="text-sm text-green-100">Confirmation sent to:</p>
                        <p className="font-semibold text-white">{formData.email}</p>
                      </div>
                      {formData.scheduleMeeting && (
                        <div className="bg-green-950/60 p-4 rounded-lg border border-green-700">
                          <p className="text-sm text-green-100 mb-2">📅 Meeting Scheduled</p>
                          <p className="font-semibold text-white">
                            {new Date(formData.meetingDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at {formData.meetingTime}
                          </p>
                        </div>
                      )}
                    </div>
                  </article>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" aria-label="MLOps consultation request form">
                    {/* Basic Info Section */}
                    <fieldset className="bg-slate-900/80 p-8 rounded-xl border-2 border-green-800 space-y-6">
                      <legend className="text-lg font-bold text-white mb-4">Your Contact Information</legend>
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-green-300 mb-2">
                          Full Name <span className="text-red-400" aria-label="required">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-describedby="name-hint"
                          className="w-full px-4 py-3 border-2 border-green-700 rounded-lg bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-400/50 transition-all"
                        />
                        <p id="name-hint" className="text-xs text-green-300 mt-1">Please provide your full name</p>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-green-300 mb-2">
                          Email Address <span className="text-red-400" aria-label="required">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-describedby="email-hint"
                          className="w-full px-4 py-3 border-2 border-green-700 rounded-lg bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-400/50 transition-all"
                        />
                        <p id="email-hint" className="text-xs text-green-300 mt-1">We&apos;ll use this to contact you about your MLOps project</p>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-green-300 mb-2">
                          Phone Number <span className="text-red-400" aria-label="required">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          aria-describedby="phone-hint"
                          className="w-full px-4 py-3 border-2 border-green-700 rounded-lg bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-400/50 transition-all"
                        />
                        <p id="phone-hint" className="text-xs text-green-300 mt-1">Best number to reach you during business hours</p>
                      </div>
                    </fieldset>

                    {/* Meeting Scheduler */}
                    <fieldset className="bg-slate-900/80 p-8 rounded-xl border-2 border-green-800">
                      <legend className="text-lg font-bold text-white mb-4">Consultation Preferences</legend>
                      <div className="flex items-center space-x-3 p-4 rounded-lg">
                        <input
                          type="checkbox"
                          id="scheduleMeeting"
                          name="scheduleMeeting"
                          checked={formData.scheduleMeeting}
                          onChange={handleChange}
                          className="w-5 h-5 cursor-pointer accent-green-500"
                          aria-describedby="meeting-hint"
                        />
                        <label htmlFor="scheduleMeeting" className="text-sm font-bold text-green-300 cursor-pointer">
                          Schedule an MLOps consultation meeting
                        </label>
                      </div>
                      <p id="meeting-hint" className="text-xs text-green-300 mt-2 ml-8">Optional: Book a time to discuss your production ML requirements</p>
                      
                      {formData.scheduleMeeting && (
                        <div className="mt-6 pt-6 border-t border-green-700" role="region" aria-label="Meeting scheduling options">
                          <SchedulingCalendar
                            selectedDate={formData.meetingDate}
                            selectedTime={formData.meetingTime}
                            onDateChange={(date) => setFormData(prev => ({ ...prev, meetingDate: date }))}
                            onTimeChange={(time) => setFormData(prev => ({ ...prev, meetingTime: time }))}
                          />
                        </div>
                      )}
                    </fieldset>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-colors duration-200"
                      aria-label="Submit MLOps consultation request"
                      aria-disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center space-x-2" aria-live="polite">
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Processing...</span>
                        </span>
                      ) : (
                        'Start Your MLOps Project'
                      )}
                    </button>

                    <p className="text-center text-xs text-green-300 leading-relaxed">
                      By submitting this form, you agree to our <Link href="/privacy" className="text-green-400 hover:text-green-300 underline">privacy policy</Link> and <Link href="/terms" className="text-green-400 hover:text-green-300 underline">terms of service</Link>. We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </div>
            </section>

            {/* Back Link */}
            <nav className="mt-12" aria-label="Page navigation">
              <Link href="/services" className="text-green-400 font-semibold hover:text-green-300 transition-colors flex items-center gap-2">
                <span aria-hidden="true">←</span>
                Back to Services
              </Link>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
