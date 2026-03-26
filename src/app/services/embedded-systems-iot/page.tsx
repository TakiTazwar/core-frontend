"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { useState } from "react";
import SchedulingCalendar from "@/components/SchedulingCalendar";

export default function EmbeddedSystemsIoTPage() {
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

  const capabilities = [
    "Custom Embedded Systems Design and Development Services",
    "Firmware Development (C/C++) for Microcontrollers (ESP32, STM32, Arduino)",
    "End-to-End IoT Product Development (Prototype to Production)",
    "Sensor Integration and Data Acquisition Systems",
    "Wireless IoT Communication Solutions (Wi-Fi, Bluetooth, LoRa, MQTT)",
    "Edge Computing and Real-Time Data Processing",
    "Cloud Integration Services (AWS IoT, Azure IoT, Firebase)",
    "IoT Dashboard and Mobile App Development",
    "Smart Home Automation and Industrial IoT (IIoT) Solutions",
    "Remote Device Monitoring, Control, and Predictive Maintenance",
    "PCB Design and Hardware Prototyping Services",
    "Edge AI and TinyML Solutions for Smart Devices"
  ];

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-slate-100">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_20%,rgba(30,64,175,0.10),transparent_42%),radial-gradient(circle_at_85%_10%,rgba(15,23,42,0.08),transparent_38%),radial-gradient(circle_at_50%_100%,rgba(51,65,85,0.10),transparent_48%)]"></div>
      <Header />
      <main className="relative z-10 flex flex-col flex-grow">
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden py-20 md:py-24">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-slate-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-rose-100 text-sm font-semibold tracking-wide mb-6">
                Enterprise Engineering Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 text-white leading-tight">Embedded Systems & IoT</h1>
              <p className="text-lg sm:text-xl text-rose-100 max-w-4xl mx-auto leading-relaxed">
                Enterprise-grade embedded engineering and IoT product development for reliable, secure, and scalable connected systems.
              </p>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
                <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                  <p className="text-xs uppercase tracking-wider text-rose-200">Delivery Model</p>
                  <p className="text-white font-semibold mt-1">End-to-End Ownership</p>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                  <p className="text-xs uppercase tracking-wider text-rose-200">Primary Focus</p>
                  <p className="text-white font-semibold mt-1">Security and Reliability</p>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                  <p className="text-xs uppercase tracking-wider text-rose-200">Deployment</p>
                  <p className="text-white font-semibold mt-1">Prototype to Production</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full py-16 md:py-20 bg-transparent">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overview */}
            <div className="mb-14 md:mb-16 bg-white border border-slate-200 rounded-2xl p-7 md:p-10 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Overview</h2>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                We are a leading Embedded Systems Development Company and IoT Solutions Provider helping organizations design, build, and scale custom IoT solutions from concept to production.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                Our team combines expertise in hardware design, firmware development, and cloud integration to deliver reliable, scalable systems that perform in real-world environments.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                With end-to-end ownership across device, edge, and cloud layers, we enable secure IoT connectivity, real-time monitoring, and data-driven operational intelligence across connected products.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                We help businesses reduce time-to-market and deploy production-ready IoT systems tailored to industries such as industrial IoT (IIoT), smart homes, healthcare, and logistics.
              </p>
            </div>

            {/* Services Include */}
            <div className="mb-14 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">Core Capabilities</h2>
              <p className="text-slate-600 mb-8 max-w-3xl">
                Comprehensive capabilities across electronics, firmware, connectivity, and cloud layers to support business-critical IoT initiatives.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {capabilities.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-rose-200 transition-all"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-rose-100 text-rose-700 font-bold mr-3 text-sm flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-slate-700 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-14 md:mb-16 bg-white border border-slate-200 rounded-2xl p-7 md:p-10 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Technology Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Embedded Platforms</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li>ARM and RISC-V Architectures</li>
                    <li>ESP32 and Arduino Ecosystems</li>
                    <li>Real-Time Operating Systems (RTOS)</li>
                    <li>C/C++ and Python Development</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Connectivity & Cloud</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li>AWS IoT and Azure IoT Hub</li>
                    <li>MQTT and CoAP Protocols</li>
                    <li>LoRaWAN and NB-IoT Networks</li>
                    <li>Data Processing and Analytics Pipelines</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="mb-14 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">How We Deliver</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <p className="text-sm font-semibold text-rose-700 mb-2">Step 1</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Discovery & Architecture</h3>
                  <p className="text-slate-600 leading-relaxed">Define use cases, constraints, and system architecture aligned with your operational and compliance requirements.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <p className="text-sm font-semibold text-rose-700 mb-2">Step 2</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Build & Integrate</h3>
                  <p className="text-slate-600 leading-relaxed">Develop firmware, hardware interfaces, and cloud connectivity with clear validation checkpoints.</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                  <p className="text-sm font-semibold text-rose-700 mb-2">Step 3</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Deploy & Optimize</h3>
                  <p className="text-slate-600 leading-relaxed">Launch production-ready solutions with observability, lifecycle support, and continuous performance tuning.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-slate-800 to-blue-900 text-white p-8 md:p-12 rounded-2xl text-center shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Connected Product Roadmap</h2>
              <p className="text-base md:text-lg mb-8 text-rose-100 max-w-2xl mx-auto leading-relaxed">
                Partner with our engineering team to architect, build, and scale secure IoT solutions with confidence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors">
                  Request Technical Consultation
                </button>
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-8 py-3.5 border border-white/40 rounded-lg font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Explore Other Services
                </Link>
              </div>
            </div>

            {/* Let's Get Started */}
            <div className="mt-14 md:mt-16 bg-gradient-to-br from-white to-slate-50 p-8 md:p-12 rounded-2xl shadow-xl border border-slate-200">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black mb-3 text-slate-900">Let&apos;s Get Started</h2>
                <p className="text-lg md:text-xl text-slate-600 mb-10">Fill out the form below and our team will reach out to discuss your project.</p>

                {submitted ? (
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-rose-500 rounded-2xl blur opacity-20"></div>
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
                      <div className="bg-rose-50 p-4 rounded-lg mb-6 border border-rose-200">
                        <p className="text-sm text-slate-600">Confirmation sent to:</p>
                        <p className="font-semibold text-slate-900">{formData.email}</p>
                      </div>
                      {formData.scheduleMeeting && (
                        <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
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
                          className="w-5 h-5 cursor-pointer accent-blue-700"
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
                      className="w-full px-8 py-4 bg-gradient-to-r from-slate-800 to-blue-900 hover:from-slate-900 hover:to-blue-950 disabled:from-slate-400 disabled:to-slate-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-colors duration-200"
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
                        "Get Started Today"
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
    </div>
  );
}
