"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { useState } from "react";
import SchedulingCalendar from "@/components/SchedulingCalendar";

export default function DigitalTechnologyConsultingPage() {
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

  const consultingServices = [
    "Digital Transformation Consulting for modernizing business operations",
    "IT Strategy and Architecture Consulting for scalable system design",
    "Cloud Consulting (AWS, Azure, Google Cloud) and migration strategy",
    "Software Architecture Design and System Optimization",
    "AI and Data Strategy Consulting for intelligent business solutions",
    "IoT and Embedded Systems Consulting for connected products",
    "Cybersecurity and Risk Assessment Advisory",
    "Product Engineering and Technology Roadmap Planning",
    "DevOps and Infrastructure Optimization Consulting",
    "Legacy System Modernization and Re-Engineering",
    "Data Engineering and Analytics Strategy Consulting",
    "Technology Stack Selection and Technical Feasibility Analysis"
  ];

  const keyBenefits = [
    "Faster and smarter digital transformation",
    "Reduced operational costs through optimized architecture",
    "Scalable and future-proof technology solutions",
    "Expert guidance on cloud, AI, and modern software systems",
    "Improved system performance, security, and reliability",
    "Data-driven decision-making strategies"
  ];

  const industries = [
    "Information Technology and Software Companies",
    "Healthcare and Medical Technology",
    "Finance and FinTech",
    "Retail and E-commerce",
    "Manufacturing and Industrial Systems",
    "Startups and SaaS Platforms",
    "Government and Public Sector"
  ];

  const consultingApproach = [
    "Business and Technology Assessment",
    "Gap Analysis and Problem Identification",
    "Solution Architecture and Strategy Design",
    "Technology Selection and Planning",
    "Implementation Guidance and Support",
    "Performance Optimization and Scaling"
  ];

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-slate-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_20%,rgba(30,64,175,0.10),transparent_42%),radial-gradient(circle_at_85%_15%,rgba(6,182,212,0.10),transparent_38%),radial-gradient(circle_at_50%_100%,rgba(51,65,85,0.10),transparent_48%)]"></div>
      <div className="pointer-events-none absolute -top-20 -left-24 z-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl bg-orb-float"></div>
      <div className="pointer-events-none absolute top-24 -right-24 z-0 h-[26rem] w-[26rem] rounded-full bg-cyan-300/15 blur-3xl bg-orb-float-delayed"></div>
      <Header />
      <main className="relative z-10 flex flex-col flex-grow">
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden py-20 md:py-24">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-100 text-sm font-semibold tracking-wide mb-6">
                Strategic Technology Advisory
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-white">Digital & Technology Consulting</h1>
              <p className="text-lg sm:text-2xl text-cyan-100 max-w-4xl mx-auto">
                Strategic guidance to align technology decisions with business outcomes and accelerate your digital transformation.
              </p>
              <p className="mt-3 text-sm sm:text-base text-cyan-200 max-w-3xl mx-auto">
                Expert consulting across cloud, AI, DevOps, and modern software architecture.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full py-16 md:py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overview */}
            <div className="mb-14 md:mb-16 bg-white border border-slate-200 rounded-2xl p-7 md:p-10 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Digital & Technology Consulting</h2>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                We help organizations accelerate digital transformation through strategic technology consulting and engineering expertise. Our consulting services are designed to bridge the gap between business goals and modern technology solutions.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                We work with startups, enterprises, and product teams to design scalable, secure, and future-ready digital systems across cloud, software, AI, and emerging technologies.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                From technology strategy to architecture design and implementation support, we ensure your business stays competitive in a rapidly evolving digital landscape.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mb-14 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {keyBenefits.map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                    <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Consulting Services */}
            <div className="mb-14 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">Core Consulting Services</h2>
              <p className="text-slate-600 mb-8 max-w-3xl">
                End-to-end consulting services designed for organizations seeking strategic guidance and technology excellence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {consultingServices.map((item, idx) => (
                  <div key={idx} className="flex items-start p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold mr-3 text-sm flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div className="mb-14 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Industries We Serve</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm">
                    <p className="font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Consulting Approach */}
            <div className="mb-14 md:mb-16 bg-white border border-slate-200 rounded-2xl p-7 md:p-10 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Our Consulting Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {consultingApproach.map((step, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm font-semibold text-blue-700 mb-2">STEP {idx + 1}</p>
                    <p className="text-base text-slate-700 leading-relaxed font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies We Cover */}
            <div className="mb-14 md:mb-16 bg-white border border-slate-200 rounded-2xl p-7 md:p-10 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Technologies We Cover</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Cloud Platforms</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li>AWS, Azure, Google Cloud</li>
                    <li>Multi-cloud and hybrid strategies</li>
                    <li>Cloud-native architecture</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">AI & Data Platforms</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li>AI/ML frameworks and tools</li>
                    <li>Data engineering and pipelines</li>
                    <li>Analytics and data warehousing</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">DevOps & Infrastructure</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li>CI/CD pipelines and automation</li>
                    <li>Containerization and orchestration</li>
                    <li>Infrastructure as Code</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Web & Mobile Technologies</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li>Modern web frameworks</li>
                    <li>Mobile app architectures</li>
                    <li>Real-time communication</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">IoT & Embedded Systems</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li>IoT architecture and connectivity</li>
                    <li>Edge computing solutions</li>
                    <li>Real-time data processing</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Security & Compliance</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li>Cybersecurity best practices</li>
                    <li>Compliance frameworks</li>
                    <li>Risk assessment and mitigation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-slate-700 to-blue-800 text-white p-8 md:p-12 rounded-2xl text-center shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Strategic Technology Direction?</h2>
              <p className="text-base md:text-lg mb-8 text-cyan-100 max-w-3xl mx-auto">
                Let us help you define a practical and scalable technology path aligned with your business goals.
              </p>
              <button className="px-8 py-4 bg-white text-slate-800 font-bold rounded-lg hover:bg-slate-50 transition-colors">
                Book a Consulting Session
              </button>
            </div>

            {/* Let's Get Started */}
            <div className="mt-14 md:mt-16 bg-gradient-to-br from-white to-slate-50 p-8 md:p-12 rounded-2xl shadow-xl border border-slate-200">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black mb-3 text-slate-900">Let&apos;s Get Started</h2>
                <p className="text-lg md:text-xl text-slate-600 mb-10">Fill out the form below and our team will reach out to discuss your project.</p>

                {submitted ? (
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-20"></div>
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
                      <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
                        <p className="text-sm text-slate-600">Confirmation sent to:</p>
                        <p className="font-semibold text-slate-900">{formData.email}</p>
                      </div>
                      {formData.scheduleMeeting && (
                        <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
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
                    <div className="bg-white p-6 md:p-8 rounded-xl border-2 border-slate-200 space-y-6">
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
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
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
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
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
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                      </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-xl border-2 border-slate-200">
                      <div className="flex items-center space-x-3 p-4 rounded-lg">
                        <input
                          type="checkbox"
                          id="scheduleMeeting"
                          name="scheduleMeeting"
                          checked={formData.scheduleMeeting}
                          onChange={handleChange}
                          className="w-5 h-5 cursor-pointer accent-blue-600"
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
                      className="w-full px-8 py-4 bg-gradient-to-r from-slate-700 to-blue-800 hover:from-slate-800 hover:to-blue-900 disabled:from-slate-400 disabled:to-slate-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-colors duration-200"
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
                        "Start Your Consulting Engagement"
                      )}
                    </button>

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
