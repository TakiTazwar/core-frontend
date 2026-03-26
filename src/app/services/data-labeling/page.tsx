"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { useState } from "react";
import SchedulingCalendar from "@/components/SchedulingCalendar";

export default function DataLabelingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    scheduleMeeting: false,
    meetingDate: "",
    meetingTime: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", scheduleMeeting: false, meetingDate: "", meetingTime: "" });
        setSubmitted(false);
      }, 4000);
    }, 1500);
  };

  const coreServices = [
    "Image Annotation Services (bounding boxes, segmentation, object detection)",
    "Video Annotation, Tracking for computer vision models",
    "Text Annotation and NLP Labeling (sentiment analysis, entity recognition, classification)",
    "Audio, Speech Data Labeling (transcription, speech-to-text datasets)",
    "3D Point Cloud Annotation for autonomous systems (LiDAR data)",
    "Medical Data Annotation with HIPAA-compliant workflows",
    "Data Classification, Categorization Services",
    "Semantic Segmentation, Instance Segmentation",
    "Keypoint and Landmark Annotation (facial recognition, pose estimation)",
    "Human-in-the-Loop Data Validation, Quality Assurance",
    "Custom Dataset Creation, Data Curation",
    "Multilingual Data Annotation Services"
  ];

  const keyFeatures = [
    "99%+ annotation accuracy supported by strict multi-stage QA processes",
    "Scalable workforce for large datasets",
    "Fast turnaround with consistent delivery quality",
    "Secure data handling with HIPAA and GDPR-compliant workflows",
    "Custom annotation pipelines tailored to AI/ML model requirements",
    "Experienced annotation teams across vision, NLP, and speech datasets"
  ];

  const industries = [
    "Autonomous Vehicles",
    "Healthcare and Medical AI",
    "Retail and E-commerce",
    "Security and Surveillance",
    "Agriculture Technology",
    "Natural Language Processing (NLP) Applications"
  ];

  const keyBenefits = [
    "Improve machine learning model accuracy with high-quality labeled data",
    "Reduce AI training time and operational costs",
    "Scalable solutions for high-volume datasets",
    "Secure, compliant, and reliable data processing"
  ];

  const annotationProcess = [
    "Data Assessment, Requirement Analysis",
    "Annotation Workflow Setup",
    "Data Labeling, Multi-Level Quality Checks",
    "Review, Validation, Delivery",
    "Continuous Feedback, Optimization"
  ];

  const trustSignals = [
    "99%+ Annotation Accuracy",
    "Scalable to Millions of Data Points",
    "Fast Turnaround (24 to 72 Hours)",
    "Secure and Compliant Workflows"
  ];

  const useCases = [
    "Training computer vision models for object detection",
    "NLP model training for chatbots and sentiment analysis",
    "Speech recognition dataset preparation",
    "Autonomous vehicle dataset annotation"
  ];

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-slate-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_12%_16%,rgba(15,23,42,0.10),transparent_42%),radial-gradient(circle_at_88%_12%,rgba(217,119,6,0.10),transparent_38%),radial-gradient(circle_at_50%_100%,rgba(51,65,85,0.10),transparent_48%)]"></div>
      <div className="pointer-events-none absolute -top-20 -left-24 z-0 h-96 w-96 rounded-full bg-slate-400/20 blur-3xl bg-orb-float"></div>
      <div className="pointer-events-none absolute top-24 -right-24 z-0 h-[26rem] w-[26rem] rounded-full bg-amber-300/15 blur-3xl bg-orb-float-delayed"></div>
      <Header />
      <main className="relative z-10 flex flex-col flex-grow">
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-br from-slate-900 via-amber-900 to-yellow-900 overflow-hidden py-20 md:py-24">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-yellow-100 text-sm font-semibold tracking-wide mb-6">
                AI Training Data Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-white">Data Labeling & Annotation Services</h1>
              <p className="text-lg sm:text-2xl text-yellow-100 max-w-4xl mx-auto">
                High-quality, scalable, and secure data labeling services to power accurate AI and machine learning models.
              </p>
              <p className="mt-3 text-sm sm:text-base text-yellow-200 max-w-3xl mx-auto">
                Trusted by AI teams to deliver precise, production-ready training data at scale.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full py-16 md:py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Trust Signals */}
            <div className="mb-14 md:mb-16 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {trustSignals.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <span className="text-emerald-600 text-lg font-bold">✔</span>
                    <p className="text-sm font-semibold text-slate-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div className="mb-14 md:mb-16 bg-white border border-slate-200 rounded-2xl p-7 md:p-10 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Data Labeling Services for AI & Machine Learning</h2>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                We provide high-quality data labeling and annotation services to help organizations build accurate, scalable, and reliable AI and machine learning models.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                Our team delivers human-in-the-loop data annotation solutions with strong quality control, ensuring consistent and precise labeled datasets tailored to your business needs.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                From image and video annotation to text and audio labeling, we enable faster AI development, improved model accuracy, and reduced time-to-market.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mb-14 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Benefits of Our Data Annotation Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {keyBenefits.map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-14 md:mb-16 bg-white border border-slate-200 rounded-2xl p-7 md:p-10 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {useCases.map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Include */}
            <div className="mb-14 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">Comprehensive Data Annotation Services</h2>
              <p className="text-slate-600 mb-8 max-w-3xl">
                End-to-end annotation services designed for AI teams that require data quality, consistency, and scalable delivery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {coreServices.map((item, idx) => (
                  <div key={idx} className="flex items-start p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-200 transition-all">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 text-amber-700 font-bold mr-3 text-sm flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-14 md:mb-16 bg-white border border-slate-200 rounded-2xl p-7 md:p-10 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Our Data Annotation Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {annotationProcess.map((step, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold text-amber-700 mb-2">STEP {idx + 1}</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-14 md:mb-16 bg-white border border-slate-200 rounded-2xl p-7 md:p-10 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {keyFeatures.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div className="mb-14 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Industries We Serve</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {industries.map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm">
                    <p className="font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="mb-14 md:mb-16 bg-white border border-slate-200 rounded-2xl p-7 md:p-10 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Tools & Platforms</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Annotation Tools</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li>Labelbox</li>
                    <li>Label Studio</li>
                    <li>Roboflow</li>
                    <li>Amazon SageMaker Ground Truth</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Data Management</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li>Version control</li>
                    <li>Quality metrics</li>
                    <li>Audit reports</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Infrastructure</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li>Secure storage</li>
                    <li>Access control</li>
                    <li>Workflow automation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white p-8 md:p-12 rounded-2xl text-center shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for a reliable data annotation partner?</h2>
              <p className="text-base md:text-lg mb-8 text-yellow-100 max-w-3xl mx-auto">
                Contact us today to get high-quality, scalable data labeling services for your AI projects.
              </p>
              <button className="px-8 py-4 bg-white text-amber-700 font-bold rounded-lg hover:bg-yellow-50 transition-colors">
                Talk to an Expert
              </button>
            </div>

            {/* Let's Get Started */}
            <div className="mt-14 md:mt-16 bg-gradient-to-br from-amber-50 to-yellow-50 p-8 md:p-12 rounded-2xl shadow-xl border border-amber-100">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black mb-3 text-slate-900">Start Your AI Data Labeling Project</h2>
                <p className="text-lg md:text-xl text-slate-600 mb-10">Fill out the form below and our team will reach out to discuss your project.</p>

                {submitted ? (
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-amber-500 rounded-2xl blur opacity-20"></div>
                    <div className="relative bg-white p-8 md:p-10 rounded-2xl border-2 border-green-500 text-center shadow-lg">
                      <div className="mb-6 flex justify-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">Request Received</h3>
                      <p className="text-lg text-slate-600 mb-6">We received your information and will contact you shortly.</p>
                      <div className="bg-amber-50 p-4 rounded-lg mb-6 border border-amber-200">
                        <p className="text-sm text-slate-600">Confirmation sent to:</p>
                        <p className="font-semibold text-slate-900">{formData.email}</p>
                      </div>
                      {formData.scheduleMeeting && (
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                          <p className="text-sm text-slate-600 mb-2">Meeting Scheduled</p>
                          <p className="font-semibold text-slate-900">
                            {new Date(formData.meetingDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} at {formData.meetingTime}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="bg-white p-6 md:p-8 rounded-xl border-2 border-amber-100 space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                        />
                      </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-xl border-2 border-amber-100">
                      <div className="flex items-center space-x-3 p-4 rounded-lg">
                        <input
                          type="checkbox"
                          id="scheduleMeeting"
                          name="scheduleMeeting"
                          checked={formData.scheduleMeeting}
                          onChange={handleChange}
                          className="w-5 h-5 cursor-pointer accent-amber-600"
                        />
                        <label htmlFor="scheduleMeeting" className="text-sm font-bold text-slate-900 cursor-pointer">
                          Schedule a consultation meeting
                        </label>
                      </div>

                      {formData.scheduleMeeting && (
                        <div className="mt-6 pt-6 border-t border-slate-200">
                          <SchedulingCalendar
                            selectedDate={formData.meetingDate}
                            selectedTime={formData.meetingTime}
                            onDateChange={(date) => setFormData((prev) => ({ ...prev, meetingDate: date }))}
                            onTimeChange={(time) => setFormData((prev) => ({ ...prev, meetingTime: time }))}
                          />
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-colors duration-200"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center space-x-2">
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Processing...</span>
                        </span>
                      ) : (
                        "Start Your Project"
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-500">
                      We typically respond within 24 hours.
                    </p>
                    <p className="text-center text-xs text-slate-500">
                      By submitting this form, you agree to our terms of service and privacy policy.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Back Link */}
            <div className="mt-12">
              <Link href="/services" className="inline-flex items-center px-4 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        .bg-orb-float {
          animation: floatOrb 18s ease-in-out infinite;
        }

        .bg-orb-float-delayed {
          animation: floatOrb 22s ease-in-out infinite;
          animation-delay: 1.6s;
        }

        @keyframes floatOrb {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(0, -12px, 0) scale(1.03);
          }
        }
      `}</style>
    </div>
  );
}
