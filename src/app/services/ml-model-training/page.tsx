"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import SchedulingCalendar from "@/components/SchedulingCalendar";

export default function MLModelTrainingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    scheduleMeeting: false,
    meetingDate: '',
    meetingTime: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!submitted) return;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://rientage.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://rientage.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "ML Model Training",
          "item": "https://rientage.com/services/ml-model-training"
        }
      ]
    });
    document.head.appendChild(script);

    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Machine Learning Model Training",
      "description": "Expert ML model development including deep learning, computer vision, NLP, and production-ready AI solutions",
      "provider": {
        "@type": "Organization",
        "name": "Rientage",
        "url": "https://rientage.com"
      },
      "hasOfferingDetails": [
        {
          "@type": "ServiceReference",
          "name": "Deep Learning & Neural Networks",
          "description": "Custom architectures using TensorFlow, PyTorch, and modern frameworks"
        },
        {
          "@type": "ServiceReference",
          "name": "Computer Vision Models",
          "description": "Image recognition, object detection, and visual analysis"
        },
        {
          "@type": "ServiceReference",
          "name": "Natural Language Processing",
          "description": "Text analysis, sentiment analysis, and language understanding"
        },
        {
          "@type": "ServiceReference",
          "name": "Predictive Analytics",
          "description": "Time-series forecasting and data-driven predictions"
        }
      ]
    });
    document.head.appendChild(serviceScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(serviceScript);
    };
  }, [submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.currentTarget;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', scheduleMeeting: false, meetingDate: '', meetingTime: '' });
          setSubmitted(false);
        }, 4000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_22%,rgba(34,211,238,0.22),transparent_40%),radial-gradient(circle_at_82%_14%,rgba(59,130,246,0.16),transparent_38%),radial-gradient(circle_at_50%_88%,rgba(168,85,247,0.14),transparent_42%)]"></div>
      <div className="pointer-events-none absolute -top-28 -left-24 z-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-float-slow"></div>
      <div className="pointer-events-none absolute top-28 -right-24 z-0 h-[28rem] w-[28rem] rounded-full bg-blue-400/18 blur-3xl animate-float-slower"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/3 z-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-float-slow"></div>
      <Header />
      <main className="relative z-10 flex flex-col flex-grow">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-br from-cyan-900 via-cyan-800 to-blue-900 overflow-hidden py-24" aria-label="ML model training hero section">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-8">
            <div className="text-center">
              <h1 className="text-6xl lg:text-7xl font-black mb-4 text-white">Custom ML Model Training</h1>
              <p className="text-2xl text-cyan-100 max-w-3xl mx-auto">Production-grade machine learning models using deep learning, computer vision, and NLP. From research to deployment.</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <div className="w-full px-8 py-24 bg-slate-950">
          <div className="mx-auto w-full max-w-[1200px] rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md md:p-12">
            {/* Overview */}
            <section className="mb-16" aria-label="ML model training overview">
              <h2 className="text-4xl font-bold mb-6 text-white">Overview</h2>
              <div className="space-y-4">
                <p className="text-lg text-cyan-100 leading-relaxed">
                  We build <strong>enterprise-grade machine learning models</strong> that turn complex data into actionable insights. From architecture design to production deployment, we handle every stage of the ML pipeline using cutting-edge frameworks and best practices.
                </p>
                <p className="text-lg text-cyan-100 leading-relaxed">
                  Our expertise spans deep learning, computer vision, natural language processing, and predictive analytics. Whether you need custom neural networks, image recognition systems, language models, or time-series forecasting, we deliver <strong>models that scale, perform, and drive real business value</strong>.
                </p>
              </div>
            </section>

            {/* Services Include */}
            <section className="mb-16" aria-label="ML model training services offered">
              <h2 className="text-4xl font-bold mb-6 text-white">Services We Offer</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none"
                   role="list"
                   aria-label="Complete list of ML model training services">
                {[
                  "Custom Model Architecture Design & Implementation",
                  "Deep Learning & Neural Networks (CNN, RNN, Transformers)",
                  "Computer Vision Models (Detection, Segmentation, Classification)",
                  "Natural Language Processing (NLP) & Text Analysis",
                  "Predictive Analytics & Time-Series Forecasting",
                  "Model Optimization & Hyperparameter Tuning",
                  "Transfer Learning & Fine-Tuning Pre-trained Models",
                  "Ensemble Methods & Advanced Techniques",
                  "Data Preprocessing & Feature Engineering",
                  "Evaluation, Validation & Performance Benchmarking",
                  "MLOps Integration & Model Deployment Pipeline",
                  "Documentation, Training & Knowledge Transfer"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start p-4 bg-cyan-950/50 rounded-lg border border-cyan-800">
                    <span className="text-cyan-500 font-bold mr-3 text-xl flex-shrink-0" aria-hidden="true">✓</span>
                    <span className="text-cyan-100 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Why Choose Us */}
            <section className="mb-12" aria-label="Why choose our ML training team">
              <h2 className="text-4xl font-bold mb-3 text-white">Why Choose Our ML Team</h2>
              <p className="text-lg text-cyan-200 mb-8">We deliver <strong>accurate, efficient, and production-ready models</strong> that outperform industry benchmarks and integrate seamlessly with your applications.</p>
              <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                  role="list"
                  aria-label="Benefits of our ML model training services">
                <div className="p-5 rounded-xl border border-cyan-800 bg-cyan-950/60">
                  <dt className="text-lg font-bold text-cyan-300 mb-2">🎯 Accuracy & Performance</dt>
                  <dd className="text-sm text-cyan-100">Models achieving 95%+ accuracy through rigorous testing, validation, and optimization on your specific datasets.</dd>
                </div>
                <div className="p-5 rounded-xl border border-cyan-800 bg-cyan-950/60">
                  <dt className="text-lg font-bold text-cyan-300 mb-2">⚡ Scalable Architecture</dt>
                  <dd className="text-sm text-cyan-100">Efficient models designed to handle millions of predictions while maintaining low latency and resource usage.</dd>
                </div>
                <div className="p-5 rounded-xl border border-cyan-800 bg-cyan-950/60">
                  <dt className="text-lg font-bold text-cyan-300 mb-2">📊 Data Expertise</dt>
                  <dd className="text-sm text-cyan-100">Advanced data preprocessing, feature engineering, and dataset optimization for maximum model effectiveness.</dd>
                </div>
                <div className="p-5 rounded-xl border border-cyan-800 bg-cyan-950/60">
                  <dt className="text-lg font-bold text-cyan-300 mb-2">🔐 Interpretability</dt>
                  <dd className="text-sm text-cyan-100">Transparent models with explainability analysis for regulatory compliance and stakeholder confidence.</dd>
                </div>
                <div className="p-5 rounded-xl border border-cyan-800 bg-cyan-950/60">
                  <dt className="text-lg font-bold text-cyan-300 mb-2">🚀 Fast Deployment</dt>
                  <dd className="text-sm text-cyan-100">Production-ready models with optimized serving, containerization, and seamless integration with your infrastructure.</dd>
                </div>
                <div className="p-5 rounded-xl border border-cyan-800 bg-cyan-950/60">
                  <dt className="text-lg font-bold text-cyan-300 mb-2">📈 Continuous Improvement</dt>
                  <dd className="text-sm text-cyan-100">Monitoring, retraining pipelines, and ongoing optimization as new data arrives and requirements evolve.</dd>
                </div>
              </dl>
            </section>

            {/* Deep Learning Frameworks - Collapsible */}
            <details className="mb-8 group border border-cyan-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-gradient-to-r from-cyan-900 to-cyan-800 hover:from-cyan-800 hover:to-cyan-700 transition-colors flex items-center justify-between"
                       role="button"
                       aria-expanded="false"
                       aria-controls="dl-content">
                <h2 className="text-2xl font-bold text-white">Deep Learning Frameworks & Libraries</h2>
                <span className="text-2xl text-cyan-300 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <div className="p-6 bg-slate-900 border-t border-cyan-700" id="dl-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list" aria-label="Deep learning frameworks">
                  <article className="p-4 bg-cyan-950/80 rounded-lg border border-cyan-800" role="listitem">
                    <h3 className="font-bold text-cyan-300 mb-3">TensorFlow & Keras</h3>
                    <ul className="space-y-2 text-cyan-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>End-to-end ML platform with Keras high-level API</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>TensorFlow Lite for mobile and edge deployment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>Serving and production pipelines</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-cyan-950/80 rounded-lg border border-cyan-800" role="listitem">
                    <h3 className="font-bold text-cyan-300 mb-3">PyTorch</h3>
                    <ul className="space-y-2 text-cyan-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>Dynamic computation graphs for research</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>PyTorch Lightning for production workflows</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>ONNX export for cross-platform deployment</span>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </details>

            {/* ML Libraries & Tools - Collapsible */}
            <details className="mb-8 group border border-cyan-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-gradient-to-r from-cyan-900 to-cyan-800 hover:from-cyan-800 hover:to-cyan-700 transition-colors flex items-center justify-between"
                       role="button"
                       aria-expanded="false"
                       aria-controls="ml-content">
                <h2 className="text-2xl font-bold text-white">ML Libraries & Tools</h2>
                <span className="text-2xl text-cyan-300 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <div className="p-6 bg-slate-900 border-t border-cyan-700" id="ml-content">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="ML libraries and tools">
                  <article className="p-4 bg-cyan-950/80 rounded-lg border border-cyan-800" role="listitem">
                    <h3 className="font-bold text-cyan-300 mb-3">Scikit-learn</h3>
                    <ul className="space-y-2 text-cyan-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>Classical ML algorithms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>Feature engineering tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>Model evaluation & metrics</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-cyan-950/80 rounded-lg border border-cyan-800" role="listitem">
                    <h3 className="font-bold text-cyan-300 mb-3">XGBoost & LightGBM</h3>
                    <ul className="space-y-2 text-cyan-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>Gradient boosting machines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>High-performance predictions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>Feature importance analysis</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-cyan-950/80 rounded-lg border border-cyan-800" role="listitem">
                    <h3 className="font-bold text-cyan-300 mb-3">Additionally</h3>
                    <ul className="space-y-2 text-cyan-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>CatBoost for categorical data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>HyperOpt, Optuna for tuning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>SHAP for model explainability</span>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </details>

            {/* Computer Vision & NLP - Collapsible */}
            <details className="mb-8 group border border-cyan-700 rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-gradient-to-r from-cyan-900 to-cyan-800 hover:from-cyan-800 hover:to-cyan-700 transition-colors flex items-center justify-between"
                       role="button"
                       aria-expanded="false"
                       aria-controls="cv-nlp-content">
                <h2 className="text-2xl font-bold text-white">Computer Vision & NLP Specializations</h2>
                <span className="text-2xl text-cyan-300 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <div className="p-6 bg-slate-900 border-t border-cyan-700" id="cv-nlp-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list" aria-label="Computer vision and NLP specializations">
                  <article className="p-4 bg-cyan-950/80 rounded-lg border border-cyan-800" role="listitem">
                    <h3 className="font-bold text-cyan-300 mb-3">Computer Vision</h3>
                    <ul className="space-y-2 text-cyan-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>OpenCV for image processing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>YOLO, Faster R-CNN for detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>Transformers (Vision Transformers)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>Semantic & instance segmentation</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-cyan-950/80 rounded-lg border border-cyan-800" role="listitem">
                    <h3 className="font-bold text-cyan-300 mb-3">Natural Language Processing</h3>
                    <ul className="space-y-2 text-cyan-100 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>Hugging Face Transformers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>BERT, GPT, LLaMA models</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>Sentiment analysis & classification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>Text generation & summarization</span>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </details>

            {/* Professional CTA Section */}
            <section className="bg-gradient-to-br from-cyan-900 to-blue-900 p-16 rounded-2xl shadow-xl border border-cyan-700 mt-12" aria-label="Get started with ML model training">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-5xl font-black mb-3 text-white">Start Your ML Journey</h2>
                <p className="text-xl text-cyan-200 mb-12">Schedule a consultation with our ML experts to discuss your modeling challenges and solutions.</p>
                
                {submitted ? (
                  <article className="relative" role="region" aria-label="Form submission success">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-25"></div>
                    <div className="relative bg-slate-900 p-12 rounded-2xl border-2 border-green-500 text-center shadow-lg">
                      <div className="mb-6 flex justify-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900/50 rounded-full">
                          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">Request Received!</h3>
                      <p className="text-lg text-cyan-200 mb-6">We've received your information and will contact you shortly.</p>
                      <div className="bg-cyan-950/60 p-4 rounded-lg mb-6 border border-cyan-700">
                        <p className="text-sm text-cyan-100">Confirmation sent to:</p>
                        <p className="font-semibold text-white">{formData.email}</p>
                      </div>
                      {formData.scheduleMeeting && (
                        <div className="bg-cyan-950/60 p-4 rounded-lg border border-cyan-700">
                          <p className="text-sm text-cyan-100 mb-2">📅 Meeting Scheduled</p>
                          <p className="font-semibold text-white">
                            {new Date(formData.meetingDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at {formData.meetingTime}
                          </p>
                        </div>
                      )}
                    </div>
                  </article>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" aria-label="ML model training consultation request form">
                    {/* Basic Info Section */}
                    <fieldset className="bg-slate-900/80 p-8 rounded-xl border-2 border-cyan-800 space-y-6">
                      <legend className="text-lg font-bold text-white mb-4">Your Contact Information</legend>
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-cyan-300 mb-2">
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
                          className="w-full px-4 py-3 border-2 border-cyan-700 rounded-lg bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 transition-all"
                        />
                        <p id="name-hint" className="text-xs text-cyan-300 mt-1">Please provide your full name</p>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-cyan-300 mb-2">
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
                          className="w-full px-4 py-3 border-2 border-cyan-700 rounded-lg bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 transition-all"
                        />
                        <p id="email-hint" className="text-xs text-cyan-300 mt-1">We'll use this to contact you about your ML project</p>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-cyan-300 mb-2">
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
                          className="w-full px-4 py-3 border-2 border-cyan-700 rounded-lg bg-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-400/50 transition-all"
                        />
                        <p id="phone-hint" className="text-xs text-cyan-300 mt-1">Best number to reach you during business hours</p>
                      </div>
                    </fieldset>

                    {/* Meeting Scheduler */}
                    <fieldset className="bg-slate-900/80 p-8 rounded-xl border-2 border-cyan-800">
                      <legend className="text-lg font-bold text-white mb-4">Consultation Preferences</legend>
                      <div className="flex items-center space-x-3 p-4 rounded-lg">
                        <input
                          type="checkbox"
                          id="scheduleMeeting"
                          name="scheduleMeeting"
                          checked={formData.scheduleMeeting}
                          onChange={handleChange}
                          className="w-5 h-5 cursor-pointer accent-cyan-500"
                          aria-describedby="meeting-hint"
                        />
                        <label htmlFor="scheduleMeeting" className="text-sm font-bold text-cyan-300 cursor-pointer">
                          Schedule an ML consultation meeting
                        </label>
                      </div>
                      <p id="meeting-hint" className="text-xs text-cyan-300 mt-2 ml-8">Optional: Book a time to discuss your specific ML requirements</p>
                      
                      {formData.scheduleMeeting && (
                        <div className="mt-6 pt-6 border-t border-cyan-700" role="region" aria-label="Meeting scheduling options">
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
                      className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-colors duration-200"
                      aria-label="Submit ML model training consultation request"
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
                        'Start Training Your Model'
                      )}
                    </button>

                    <p className="text-center text-xs text-cyan-300 leading-relaxed">
                      By submitting this form, you agree to our <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">privacy policy</Link> and <Link href="/terms" className="text-cyan-400 hover:text-cyan-300 underline">terms of service</Link>. We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </div>
            </section>

            {/* Back Link */}
            <nav className="mt-12" aria-label="Page navigation">
              <Link href="/services" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors flex items-center gap-2">
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
