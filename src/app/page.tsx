import Footer from "@/components/footer";
import Header from "@/components/header";
import HomePage from "@/components/HomePage/homePage";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.22),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(124,58,237,0.18),transparent_35%),radial-gradient(circle_at_50%_85%,rgba(14,165,233,0.14),transparent_40%)]"></div>
      <div className="pointer-events-none absolute -top-32 -left-24 z-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl animate-float-slow"></div>
      <div className="pointer-events-none absolute top-32 -right-24 z-0 h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-3xl animate-float-slower"></div>
      <div className="pointer-events-none absolute bottom-0 left-1/3 z-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl animate-float-slow"></div>
      <Header />
      <main className="relative z-10 flex flex-col flex-grow">
        {/* Hero Section */}
        <div className="relative w-full min-h-[90vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-6xl lg:text-7xl font-black mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Complete IT Solutions</span>
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-slate-100">Built for Growth and Reliability</h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                  We provide end-to-end IT services including software development, DevOps, MLOps, data services, and embedded solutions to help businesses scale with confidence.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
                  Talk to Us
                </button>
              </div>
              <div className="hidden lg:block">
                <HomePage />
              </div>
            </div>
          </div>

          {/* Scroll Hint */}
          <Link
            href="#services"
            aria-label="Scroll to services"
            className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-30"
          >
            <div className="flex flex-col items-center rounded-full border border-white/40 bg-black/35 backdrop-blur-sm px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.55)] text-white">
              <svg
                className="w-9 h-9 animate-bounce drop-shadow-[0_3px_8px_rgba(255,255,255,0.35)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Services Section */}
        <div id="services" className="w-full px-8 py-24 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-black mb-4 text-white drop-shadow-[0_4px_16px_rgba(15,23,42,0.65)]">Our Services</h2>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto drop-shadow-[0_2px_10px_rgba(15,23,42,0.55)]">Comprehensive solutions tailored to transform your business with cutting-edge technology and innovation</p>
            </div>
            
            {/* All Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { id: "web-development", icon: "🌐", title: "Full-Stack AI Platforms", desc: "SaaS products, dashboards, AI-integrated apps" },
                { id: "devops", icon: "☁️", title: "Cloud & DevOps Engineering", desc: "Scalable infrastructure, CI/CD, serverless" },
                { id: "ml-model-training", icon: "🧠", title: "AI-Powered Applications", desc: "Chatbots, RAG systems, recommendation engines" },
                { id: "mlops", icon: "⚙️", title: "MLOps & Intelligent ML Systems", desc: "Pipelines, retraining, real-time inference" },
                { id: "embedded-systems-iot", icon: "📡", title: "IoT & Real-Time Data Systems", desc: "MQTT, sensor pipelines, live monitoring" },
                { id: "data-labeling", icon: "📊", title: "Data Engineering & Analytics", desc: "Data pipelines, ETL, analytics systems" },
                { id: "game-development", icon: "🎮", title: "Game & Interactive Experiences", desc: "Interactive products, simulations, and immersive experiences" },
                { id: "digital-technology-consulting", icon: "🧭", title: "Digital & Technology Consulting", desc: "Strategy, architecture, and transformation planning" }
              ].map((service) => (
                <Link key={service.id} href={`/services/${service.id}`}>
                  <div className="group p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200 cursor-pointer">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{service.icon}</div>
                    <h3 className="text-lg font-bold mb-2 text-slate-800 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-sm text-slate-600">{service.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <h1>Page is Under Construction!</h1>
        <h2>Please Wait.</h2>
      </main>
      <Footer />
    </div>
  );
}
