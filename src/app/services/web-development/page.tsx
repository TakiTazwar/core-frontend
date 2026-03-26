'use client';

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { useState, useEffect } from "react";
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

  // Inject JSON-LD structured data for SEO
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
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
              "name": "Web Development",
              "item": "https://rientage.com/services/web-development"
            }
          ]
        },
        {
          "@type": "Service",
          "@id": "https://rientage.com/services/web-development",
          "name": "Full-Stack Web Development",
          "description": "Professional full-stack web development services including frontend, backend, database design, and API development using modern technologies.",
          "provider": {
            "@type": "Organization",
            "name": "Rientage",
            "url": "https://rientage.com"
          },
          "areaServed": "Worldwide",
          "hasOfferingDescription": [
            {
              "@type": "DefinedTerm",
              "name": "Frontend Development",
              "description": "React, Next.js, Vue.js, Angular, Svelte applications"
            },
            {
              "@type": "DefinedTerm",
              "name": "Backend Development",
              "description": "Node.js, Django, FastAPI, Flask server development"
            },
            {
              "@type": "DefinedTerm",
              "name": "Database Architecture",
              "description": "PostgreSQL and MongoDB database design"
            },
            {
              "@type": "DefinedTerm",
              "name": "Microservices",
              "description": "RabbitMQ, Kafka, and MQTT message broker integration"
            }
          ]
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

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
              <h1 className="text-6xl lg:text-7xl font-black mb-4 text-white">Full-Stack Web Development Services</h1>
              <p className="text-2xl text-blue-100 max-w-3xl mx-auto">Scalable, high-performance web applications built with modern technologies. Next.js, Node.js, React, and more.</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full px-6 py-24 bg-transparent md:px-8 lg:px-10 xl:px-12">
          <div className="mx-auto w-full max-w-[1200px] rounded-3xl border border-white/50 bg-white/85 p-8 shadow-2xl backdrop-blur-md md:p-12">
            {/* Overview */}
            <section className="mb-16" aria-label="Web development services overview">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Overview</h2>
              <div className="space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  We build conversion-focused web products that are <strong>fast, scalable, and production-ready</strong> from day one. Our full-stack web development services combine modern frontend frameworks (Next.js, React, TypeScript) with robust backend architectures using Node.js, Express, and cloud solutions.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  From product planning and architecture design through launch and optimization, our team delivers <strong>end-to-end execution</strong> with clear communication and measurable business outcomes. We specialize in building applications that perform, scale, and drive real value.
                </p>
              </div>
            </section>

            {/* Services Include */}
            <section className="mb-16" aria-label="Services offered">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Web Development Services We Offer</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none"
                   role="list"
                   aria-label="Web development services offered">
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
                  <li key={idx} className="flex items-start p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <span className="text-blue-600 font-bold mr-3 text-xl flex-shrink-0" aria-hidden="true">✓</span>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Why Clients Choose Us */}
            <section className="mb-12" aria-label="Why choose our web development team">
              <h2 className="text-4xl font-bold mb-3 text-slate-900">Why Choose Our Web Development Team</h2>
              <p className="text-lg text-slate-600 mb-8">We deliver <strong>secure, performant, and user-friendly</strong> web applications that drive business results and scale with your growth.</p>
              <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                  role="list"
                  aria-label="Benefits of our web development services">
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <dt className="text-lg font-bold text-slate-900 mb-2">🔒 Security First</dt>
                  <dd className="text-sm text-slate-600">Enterprise-grade authentication, authorization, secure coding practices, and vulnerability assessments built into every delivery.</dd>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <dt className="text-lg font-bold text-slate-900 mb-2">⚡ Performance Focused</dt>
                  <dd className="text-sm text-slate-600">Fast loading pages, optimized APIs, intelligent caching strategies, and Core Web Vitals improvements for better SEO.</dd>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <dt className="text-lg font-bold text-slate-900 mb-2">🔍 SEO Ready</dt>
                  <dd className="text-sm text-slate-600">Technical SEO, metadata, schema, and clean structure to improve discoverability.</dd>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <dt className="text-lg font-bold text-slate-900 mb-2">♿ Accessible UX</dt>
                  <dd className="text-sm text-slate-600">WCAG-conscious interfaces with keyboard support and strong contrast for all users.</dd>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <dt className="text-lg font-bold text-slate-900 mb-2">✅ Reliable Operations</dt>
                  <dd className="text-sm text-slate-600">Monitoring, alerts, error tracking, and rollback plans to keep production stable.</dd>
                </div>
                <div className="p-5 rounded-xl border border-slate-200 bg-white">
                  <dt className="text-lg font-bold text-slate-900 mb-2">📊 Growth Insights</dt>
                  <dd className="text-sm text-slate-600">Analytics, funnels, and experimentation support so your product improves over time.</dd>
                </div>
              </dl>
            </section>

            {/* Tech Stack - Collapsible */}
            <details className="mb-8 group border border-blue-200 rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-colors flex items-center justify-between"
                       role="button"
                       aria-expanded="false"
                       aria-controls="tech-stack-content">
                <h2 className="text-2xl font-bold text-slate-900">Frontend & Backend Frameworks & Technologies</h2>
                <span className="text-2xl text-slate-600 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <div className="p-6 bg-white border-t border-blue-200" id="tech-stack-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <section aria-label="Frontend development frameworks and libraries">
                    <h3 className="text-xl font-bold mb-4 text-slate-800 pb-2 border-b border-blue-300">Frontend Frameworks</h3>
                    <ul className="space-y-3 list-none" role="list">
                      <li>
                        <article className="p-3 bg-blue-50 rounded border border-blue-100">
                          <h4 className="font-bold text-blue-900">Next.js</h4>
                          <p className="text-sm text-blue-700">React framework with SSR, static generation, and API routes</p>
                        </article>
                      </li>
                      <li>
                        <article className="p-3 bg-green-50 rounded border border-green-100">
                          <h4 className="font-bold text-green-900">React</h4>
                          <p className="text-sm text-green-700">Library for building component-based user interfaces</p>
                        </article>
                      </li>
                      <li>
                        <article className="p-3 bg-red-50 rounded border border-red-100">
                          <h4 className="font-bold text-red-900">TypeScript</h4>
                          <p className="text-sm text-red-700">Typed superset of JavaScript for safer development</p>
                        </article>
                      </li>
                      <li>
                        <article className="p-3 bg-orange-50 rounded border border-orange-100">
                          <h4 className="font-bold text-orange-900">Tailwind CSS</h4>
                          <p className="text-sm text-orange-700">Utility-first CSS framework for rapid UI design</p>
                        </article>
                      </li>
                    </ul>
                  </section>
                  <section aria-label="Backend development frameworks and runtimes">
                    <h3 className="text-xl font-bold mb-4 text-slate-800 pb-2 border-b border-blue-300">Backend & API Frameworks</h3>
                    <ul className="space-y-3 list-none" role="list">
                      <li>
                        <article className="p-3 bg-yellow-50 rounded border border-yellow-100">
                          <h4 className="font-bold text-yellow-900">Node.js</h4>
                          <p className="text-sm text-yellow-700">JavaScript runtime for scalable server applications</p>
                        </article>
                      </li>
                      <li>
                        <article className="p-3 bg-red-50 rounded border border-red-100">
                          <h4 className="font-bold text-red-900">Express.js</h4>
                          <p className="text-sm text-red-700">Minimal, flexible web application framework</p>
                        </article>
                      </li>
                      <li>
                        <article className="p-3 bg-purple-50 rounded border border-purple-100">
                          <h4 className="font-bold text-purple-900">Next.js API Routes</h4>
                          <p className="text-sm text-purple-700">Full-stack solution with integrated backend APIs</p>
                        </article>
                      </li>
                      <li>
                        <article className="p-3 bg-pink-50 rounded border border-pink-100">
                          <h4 className="font-bold text-pink-900">GraphQL & REST</h4>
                          <p className="text-sm text-pink-700">Modern API architectures for efficient data access</p>
                        </article>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </details>

            {/* Database & Caching - Collapsible */}
            <details className="mb-8 group border border-green-200 rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-colors flex items-center justify-between"
                       role="button"
                       aria-expanded="false"
                       aria-controls="database-caching-content">
                <h2 className="text-2xl font-bold text-slate-900">Database & Caching Solutions</h2>
                <span className="text-2xl text-slate-600 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <div className="p-6 bg-white border-t border-green-200" id="database-caching-content">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="Database and caching technologies">
                  <article className="p-4 bg-blue-50 rounded-lg border border-blue-200" role="listitem">
                    <h3 className="font-bold text-blue-900 mb-3">PostgreSQL</h3>
                    <ul className="space-y-2 text-blue-700 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-blue-500">•</span>
                        <span>Advanced SQL with JSONB support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-blue-500">•</span>
                        <span>ACID compliance and reliability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-blue-500">•</span>
                        <span>Full-text search capabilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-blue-500">•</span>
                        <span>Horizontal scaling with partitioning</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-green-50 rounded-lg border border-green-200" role="listitem">
                    <h3 className="font-bold text-green-900 mb-3">MongoDB</h3>
                    <ul className="space-y-2 text-green-700 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>Document-based NoSQL database</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>Flexible schema for dynamic data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>Built-in sharding and replication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-green-500">•</span>
                        <span>Excellent for real-time applications</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-red-50 rounded-lg border border-red-200" role="listitem">
                    <h3 className="font-bold text-red-900 mb-3">Redis</h3>
                    <ul className="space-y-2 text-red-700 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-red-500">•</span>
                        <span>In-memory data store for speed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-red-500">•</span>
                        <span>Sub-millisecond latency responses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-red-500">•</span>
                        <span>Caching, sessions, and Pub/Sub</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-red-500">•</span>
                        <span>Data persistence options</span>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </details>

            {/* Microservices - Collapsible */}
            <details className="mb-8 group border border-orange-200 rounded-lg overflow-hidden">
              <summary className="cursor-pointer p-6 bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-colors flex items-center justify-between"
                       role="button"
                       aria-expanded="false"
                       aria-controls="microservices-content">
                <h2 className="text-2xl font-bold text-slate-900">Microservices & Message Brokers</h2>
                <span className="text-2xl text-slate-600 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
              </summary>
              <div className="p-6 bg-white border-t border-orange-200" id="microservices-content">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6" role="list" aria-label="Microservices and message broker technologies">
                  <article className="p-4 bg-orange-50 rounded-lg border border-orange-200" role="listitem">
                    <h3 className="font-bold text-orange-900 text-lg mb-3">RabbitMQ</h3>
                    <ul className="space-y-2 text-orange-700 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-orange-500">•</span>
                        <span>Reliable message broker with AMQP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-orange-500">•</span>
                        <span>Asynchronous task queues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-orange-500">•</span>
                        <span>Job scheduling and routing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-orange-500">•</span>
                        <span>Enterprise-grade messaging</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-purple-50 rounded-lg border border-purple-200" role="listitem">
                    <h3 className="font-bold text-purple-900 text-lg mb-3">Apache Kafka</h3>
                    <ul className="space-y-2 text-purple-700 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>High-throughput streaming platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Event sourcing and log streaming</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Real-time data pipelines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-purple-500">•</span>
                        <span>Distributed systems coordination</span>
                      </li>
                    </ul>
                  </article>
                  <article className="p-4 bg-cyan-50 rounded-lg border border-cyan-200" role="listitem">
                    <h3 className="font-bold text-cyan-900 text-lg mb-3">MQTT protocol</h3>
                    <ul className="space-y-2 text-cyan-700 text-sm list-none" role="list">
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>Lightweight IoT messaging protocol</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>Quality of Service (QoS) levels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>Low bandwidth and latency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span aria-hidden="true" className="font-bold text-cyan-500">•</span>
                        <span>Pub/Sub architecture for IoT devices</span>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
            </details>

            {/* Professional CTA Section */}
            <section className="bg-gradient-to-br from-slate-50 to-slate-100 p-16 rounded-2xl shadow-xl border border-slate-200" aria-label="Get started with web development services">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-5xl font-black mb-3 text-slate-900">Let&apos;s Get Started</h2>
                <p className="text-xl text-slate-600 mb-12">Fill out the form below and our team will reach out to discuss your web development project</p>
                
                {submitted ? (
                  <article className="relative" role="region" aria-label="Form submission success">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-25"></div>
                    <div className="relative bg-white p-12 rounded-2xl border-2 border-green-500 text-center shadow-lg">
                      <div className="mb-6 flex justify-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
                          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">Request Received!</h3>
                      <p className="text-lg text-slate-600 mb-6">We&apos;ve received your information and will contact you shortly.</p>
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
                  </article>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" aria-label="Web development service request form">
                    {/* Basic Info Section */}
                    <fieldset className="bg-white p-8 rounded-xl border-2 border-slate-200 space-y-6">
                      <legend className="text-lg font-bold text-slate-900 mb-4">Your Contact Information</legend>
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">
                          Full Name <span className="text-red-600" aria-label="required">*</span>
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
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                        <p id="name-hint" className="text-xs text-slate-500 mt-1">Please provide your full name</p>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                          Email Address <span className="text-red-600" aria-label="required">*</span>
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
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                        <p id="email-hint" className="text-xs text-slate-500 mt-1">We&apos;ll use this to contact you about your project</p>
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-2">
                          Phone Number <span className="text-red-600" aria-label="required">*</span>
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
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        />
                        <p id="phone-hint" className="text-xs text-slate-500 mt-1">Best number to reach you during business hours</p>
                      </div>
                    </fieldset>

                    {/* Meeting Scheduler */}
                    <fieldset className="bg-white p-8 rounded-xl border-2 border-slate-200">
                      <legend className="text-lg font-bold text-slate-900 mb-4">Consultation Preferences</legend>
                      <div className="flex items-center space-x-3 p-4 rounded-lg">
                        <input
                          type="checkbox"
                          id="scheduleMeeting"
                          name="scheduleMeeting"
                          checked={formData.scheduleMeeting}
                          onChange={handleChange}
                          className="w-5 h-5 cursor-pointer accent-blue-600"
                          aria-describedby="meeting-hint"
                        />
                        <label htmlFor="scheduleMeeting" className="text-sm font-bold text-slate-900 cursor-pointer">
                          Schedule a consultation meeting
                        </label>
                      </div>
                      <p id="meeting-hint" className="text-xs text-slate-500 mt-2 ml-8">Optional: Book a time to discuss your project details</p>
                      
                      {formData.scheduleMeeting && (
                        <div className="mt-6 pt-6 border-t border-slate-200" role="region" aria-label="Meeting scheduling options">
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
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-400 disabled:to-slate-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-colors duration-200"
                      aria-label="Submit web development service request"
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
                        'Get Started Today'
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-600 leading-relaxed">
                      By submitting this form, you agree to our <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">privacy policy</Link> and <Link href="/terms" className="text-blue-600 hover:text-blue-800 underline">terms of service</Link>. We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </div>
            </section>

            {/* Back Link */}
            <nav className="mt-12" aria-label="Page navigation">
              <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2">
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
