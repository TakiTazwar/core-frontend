'use client';

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { useState } from "react";
import SchedulingCalendar from "@/components/SchedulingCalendar";

export default function WebDevelopmentPage() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      console.log('Form submitted:', formData);
      // Reset form after 4 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', scheduleMeeting: false, meetingDate: '', meetingTime: '' });
        setSubmitted(false);
      }, 4000);
    }, 1500);
  };
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_22%,rgba(59,130,246,0.22),transparent_40%),radial-gradient(circle_at_82%_14%,rgba(34,211,238,0.16),transparent_38%),radial-gradient(circle_at_50%_88%,rgba(124,58,237,0.14),transparent_42%)]"></div>
      <div className="pointer-events-none absolute -top-28 -left-24 z-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-float-slow"></div>
      <div className="pointer-events-none absolute top-28 -right-24 z-0 h-[28rem] w-[28rem] rounded-full bg-cyan-400/18 blur-3xl animate-float-slower"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/3 z-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl animate-float-slow"></div>
      <Header />
      <main className="relative z-10 flex flex-col flex-grow">
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden py-24">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-8">
            <div className="text-center">
              <h1 className="text-6xl lg:text-7xl font-black mb-4 text-white">Web Development</h1>
              <p className="text-2xl text-blue-100 max-w-3xl mx-auto">Scalable, high-performance web applications built with modern technologies</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full px-6 py-24 bg-transparent md:px-8 lg:px-10 xl:px-12">
          <div className="mx-auto w-full max-w-[1200px] rounded-3xl border border-white/50 bg-white/85 p-8 shadow-2xl backdrop-blur-md md:p-12">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-3">
                We build conversion-focused web products that are fast, scalable, and ready for production from day one.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                From product planning to launch and optimization, our team delivers end-to-end execution with clear communication and measurable outcomes.
              </p>
            </div>

            {/* Services Include */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Frontend Development (Next.js, Vue.js, Angular, Svelte)",
                  "Backend Development (Node.js, Django, FastAPI, Flask)",
                  "Database Architecture (PostgreSQL, MongoDB)",
                  "Caching Strategy & Performance (Redis)",
                  "Microservices Architecture & Service Communication",
                  "Event-driven Messaging (RabbitMQ, Kafka, MQTT/Mosquitto)",
                  "API Design, Integration & Documentation",
                  "Authentication, Roles & Access Control",
                  "Real-time Features & Event Workflows",
                  "Video Streaming Delivery & Playback Pipelines",
                  "File Streaming, Chunked Uploads & Secure Downloads",
                  "Cloud Deployment, Monitoring & Long-term Support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <span className="text-blue-600 font-bold mr-3 text-xl">✓</span>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Clients Choose Us */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-3 text-slate-900">Why Clients Choose Our Web Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Security First</h3>
                  <p className="text-sm text-slate-600">Authentication, authorization, secure coding, and vulnerability checks built into delivery.</p>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Performance Focused</h3>
                  <p className="text-sm text-slate-600">Fast loading pages, optimized APIs, caching strategy, and Core Web Vitals improvements.</p>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">SEO Ready</h3>
                  <p className="text-sm text-slate-600">Technical SEO, metadata, schema, and clean structure to improve discoverability.</p>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Accessible UX</h3>
                  <p className="text-sm text-slate-600">WCAG-conscious interfaces with keyboard support and strong contrast for all users.</p>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Reliable Operations</h3>
                  <p className="text-sm text-slate-600">Monitoring, alerts, error tracking, and rollback plans to keep production stable.</p>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Growth Insights</h3>
                  <p className="text-sm text-slate-600">Analytics, funnels, and experimentation support so your product improves over time.</p>
                </div>
              </div>
            </div>

            {/* Tech Stack - Collapsible */}
            <details className="mb-8 group border border-blue-200 rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-colors flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">Frameworks & Technologies</h2>
                <span className="text-2xl text-slate-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-6 bg-white border-t border-blue-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-slate-800 pb-2 border-b border-blue-300">Frontend Frameworks</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded border border-blue-100">
                        <p className="font-bold text-blue-900">Next.js</p>
                        <p className="text-sm text-blue-700">React framework with SSR, static generation, and API routes</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded border border-green-100">
                        <p className="font-bold text-green-900">Vue.js</p>
                        <p className="text-sm text-green-700">Progressive framework for interactive UIs</p>
                      </div>
                      <div className="p-3 bg-red-50 rounded border border-red-100">
                        <p className="font-bold text-red-900">Angular</p>
                        <p className="text-sm text-red-700">Full-featured framework with strong typing and structure</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded border border-orange-100">
                        <p className="font-bold text-orange-900">Svelte</p>
                        <p className="text-sm text-orange-700">Lightweight compiler-based framework with minimal overhead</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-slate-800 pb-2 border-b border-blue-300">Backend Frameworks</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-yellow-50 rounded border border-yellow-100">
                        <p className="font-bold text-yellow-900">Node.js</p>
                        <p className="text-sm text-yellow-700">JavaScript runtime for scalable servers</p>
                      </div>
                      <div className="p-3 bg-red-50 rounded border border-red-100">
                        <p className="font-bold text-red-900">Django</p>
                        <p className="text-sm text-red-700">Python framework with admin panel & ORM</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded border border-purple-100">
                        <p className="font-bold text-purple-900">FastAPI</p>
                        <p className="text-sm text-purple-700">Modern Python for fast APIs</p>
                      </div>
                      <div className="p-3 bg-pink-50 rounded border border-pink-100">
                        <p className="font-bold text-pink-900">Flask</p>
                        <p className="text-sm text-pink-700">Lightweight Python framework</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </details>

            {/* Database & Caching - Collapsible */}
            <details className="mb-8 group border border-green-200 rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-colors flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">Database & Caching Solutions</h2>
                <span className="text-2xl text-slate-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-6 bg-white border-t border-green-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="font-bold text-blue-900 mb-2">PostgreSQL</p>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Advanced SQL database</li>
                      <li>• JSONB support</li>
                      <li>• ACID compliance</li>
                      <li>• Full-text search</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="font-bold text-green-900 mb-2">MongoDB</p>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• Document-based NoSQL</li>
                      <li>• Flexible schema</li>
                      <li>• Built-in sharding</li>
                      <li>• Dynamic data support</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <p className="font-bold text-red-900 mb-2">Redis</p>
                    <ul className="space-y-1 text-red-700 text-sm">
                      <li>• In-memory data store</li>
                      <li>• Sub-millisecond response</li>
                      <li>• Caching & sessions</li>
                      <li>• Pub/Sub messaging</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>

            {/* Microservices - Collapsible */}
            <details className="mb-8 group border border-orange-200 rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-colors flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">Microservices & Message Brokers</h2>
                <span className="text-2xl text-slate-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="p-6 bg-white border-t border-orange-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="font-bold text-orange-900 text-lg mb-2">RabbitMQ</p>
                    <ul className="space-y-1 text-orange-700 text-sm">
                      <li>• Message broker</li>
                      <li>• AMQP protocol</li>
                      <li>• Task queues</li>
                      <li>• Job scheduling</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="font-bold text-purple-900 text-lg mb-2">Apache Kafka</p>
                    <ul className="space-y-1 text-purple-700 text-sm">
                      <li>• Streaming platform</li>
                      <li>• High-throughput</li>
                      <li>• Event sourcing</li>
                      <li>• Real-time pipelines</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                    <p className="font-bold text-cyan-900 text-lg mb-2">MQTT</p>
                    <ul className="space-y-1 text-cyan-700 text-sm">
                      <li>• IoT protocol</li>
                      <li>• Lightweight</li>
                      <li>• QoS levels</li>
                      <li>• Low bandwidth</li>
                    </ul>
                  </div>
                </div>
              </div>
            </details>

            {/* Professional CTA Section */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-16 rounded-2xl shadow-xl border border-slate-200">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-5xl font-black mb-3 text-slate-900">Let's Get Started</h2>
                <p className="text-xl text-slate-600 mb-12">Fill out the form below and our team will reach out to discuss your project</p>
                
                {submitted ? (
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-25"></div>
                    <div className="relative bg-white p-12 rounded-2xl border-2 border-green-500 text-center shadow-lg">
                      <div className="mb-6 flex justify-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">Request Received!</h3>
                      <p className="text-lg text-slate-600 mb-6">We've received your information and will contact you shortly.</p>
                      <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
                        <p className="text-sm text-slate-600">Confirmation sent to:</p>
                        <p className="font-semibold text-slate-900">{formData.email}</p>
                      </div>
                      {formData.scheduleMeeting && (
                        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                          <p className="text-sm text-slate-600 mb-2">📅 Meeting Scheduled</p>
                          <p className="font-semibold text-slate-900">
                            {new Date(formData.meetingDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at {formData.meetingTime}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Info Section */}
                    <div className="bg-white p-8 rounded-xl border-2 border-slate-200 space-y-6">
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
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
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
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
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
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                      </div>
                    </div>

                    {/* Meeting Scheduler */}
                    <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
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
                            onDateChange={(date) => setFormData(prev => ({ ...prev, meetingDate: date }))}
                            onTimeChange={(time) => setFormData(prev => ({ ...prev, meetingTime: time }))}
                          />
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-400 disabled:to-slate-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-colors duration-200"
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
                        'Get Started Today'
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-500">
                      By submitting this form, you agree to our terms of service and privacy policy
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Back Link */}
            <div className="mt-12">
              <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
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
