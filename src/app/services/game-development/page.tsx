"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { useState } from "react";
import SchedulingCalendar from "@/components/SchedulingCalendar";

export default function GameDevelopmentPage() {
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
  const gameServices = [
    "Custom Game Design and Development for mobile, PC, and web",
    "2D and 3D Game Development with high-quality graphics and animation",
    "Development using Unity and Unreal Engine",
    "Multiplayer Game Development with real-time networking",
    "AR/VR Game Development for immersive experiences",
    "Game UI/UX design for intuitive player interaction",
    "Game Physics and Real-Time Simulation Systems",
    "Cross-platform game development (Android, iOS, Windows, WebGL)",
    "Integration of in-game analytics and monetization systems",
    "Game testing, debugging, and performance optimization",
    "Backend development for leaderboards, matchmaking, and user accounts",
    "Live game operations, updates, and maintenance"
  ];

  const keyBenefits = [
    "High-performance and optimized game engines",
    "Engaging and immersive user experiences",
    "Scalable multiplayer architecture",
    "Cross-platform compatibility",
    "Fast development cycles with modern frameworks",
    "Secure backend systems for player data and transactions"
  ];

  const industries = [
    "Mobile Gaming Industry",
    "Entertainment & Media",
    "Education (Gamified Learning)",
    "Simulation & Training",
    "AR/VR Experience Platforms",
    "Metaverse and Interactive Applications"
  ];

  const developmentProcess = [
    "Game Concept & Idea Design",
    "Game Mechanics & Storyboarding",
    "UI/UX & Asset Design",
    "Development & Engine Integration",
    "Testing & Performance Optimization",
    "Deployment & Launch",
    "Ongoing Updates & Support"
  ];

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-slate-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.10),transparent_42%),radial-gradient(circle_at_80%_15%,rgba(236,72,153,0.10),transparent_38%),radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.10),transparent_48%)]"></div>
      <div className="pointer-events-none absolute -top-20 -left-24 z-0 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl bg-orb-float"></div>
      <div className="pointer-events-none absolute top-24 -right-24 z-0 h-[26rem] w-[26rem] rounded-full bg-pink-300/15 blur-3xl bg-orb-float-delayed"></div>
      <Header />
      <main className="relative z-10 flex flex-col flex-grow">
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-br from-purple-950 via-purple-900 to-pink-950 overflow-hidden py-20 md:py-24">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-pink-100 text-sm font-semibold tracking-wide mb-6">
                Interactive Entertainment Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-white">Game Development</h1>
              <p className="text-lg sm:text-2xl text-pink-100 max-w-4xl mx-auto">
                High-performance, immersive game experiences for mobile, PC, and web platforms powered by modern game engines and expert design.
              </p>
              <p className="mt-3 text-sm sm:text-base text-pink-200 max-w-3xl mx-auto">
                From concept to production-ready delivery, we combine gameplay design, real-time graphics, and interactive systems.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full py-16 md:py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overview */}
            <div className="mb-14 md:mb-16 bg-white border border-slate-200 rounded-2xl p-7 md:p-10 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Game Development Services</h2>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                We design and develop high-performance, immersive game experiences for mobile, PC, and web platforms. Our team combines expertise in game design, real-time graphics, and interactive systems to deliver engaging and scalable gaming solutions.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                From concept development to final deployment, we build custom game development solutions that focus on performance, creativity, and user engagement.
              </p>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                We help startups, studios, and enterprises turn game ideas into interactive, production-ready products using modern game engines and development frameworks.
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

            {/* Services Include */}
            <div className="mb-14 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">Key Game Development Services</h2>
              <p className="text-slate-600 mb-8 max-w-3xl">
                End-to-end game development services designed for studios and enterprises that require performance, creativity, and scalable delivery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {gameServices.map((item, idx) => (
                  <div key={idx} className="flex items-start p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-200 transition-all">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-100 text-purple-700 font-bold mr-3 text-sm flex items-center justify-center">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {industries.map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm">
                    <p className="font-medium text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-14 md:mb-16 bg-white border border-slate-200 rounded-2xl p-7 md:p-10 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Technologies We Use</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Game Engines</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li>Unity</li>
                    <li>Unreal Engine</li>
                    <li>Godot</li>
                    <li>Three.js & Babylon.js</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Programming Languages</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li>C#, C++, Python</li>
                    <li>JavaScript/TypeScript</li>
                    <li>WebGL & WebGPU</li>
                    <li>OpenGL</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Backend & Platforms</h3>
                  <ul className="space-y-2 text-slate-700 leading-relaxed">
                    <li>Node.js, Firebase, AWS</li>
                    <li>Photon, WebSockets</li>
                    <li>ARCore, ARKit, Oculus SDK</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="mb-14 md:mb-16 bg-white border border-slate-200 rounded-2xl p-7 md:p-10 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Game Development Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {developmentProcess.map((step, idx) => (
                  <div key={idx} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold text-purple-700 mb-2">STEP {idx + 1}</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 md:p-12 rounded-2xl text-center shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create an Epic Game?</h2>
              <p className="text-base md:text-lg mb-8 text-pink-100 max-w-3xl mx-auto">
                Partner with our game development team to turn your vision into an engaging, production-ready interactive experience.
              </p>
              <button className="px-8 py-4 bg-white text-purple-700 font-bold rounded-lg hover:bg-slate-50 transition-colors">
                Start Your Game Project
              </button>
            </div>

            {/* Let's Get Started */}
            <div className="mt-14 md:mt-16 bg-gradient-to-br from-white to-slate-50 p-8 md:p-12 rounded-2xl shadow-xl border border-slate-200">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black mb-3 text-slate-900">Let&apos;s Get Started</h2>
                <p className="text-lg md:text-xl text-slate-600 mb-10">Fill out the form below and our team will reach out to discuss your project.</p>

                {submitted ? (
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-purple-500 rounded-2xl blur opacity-20"></div>
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
                      <div className="bg-purple-50 p-4 rounded-lg mb-6 border border-purple-200">
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
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all"
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
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all"
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
                          className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all"
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
                          className="w-5 h-5 cursor-pointer accent-purple-600"
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
                      className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-colors duration-200"
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
                        "Start Your Game Project"
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
