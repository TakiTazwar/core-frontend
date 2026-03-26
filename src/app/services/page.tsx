import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

const services = [
  {
    id: "ml-model-training",
    title: "AI-Powered Applications",
    icon: "🧠",
    description: "Chatbots, RAG systems, recommendation engines.",
    color: "from-cyan-50 to-blue-50",
    borderColor: "border-cyan-100",
    hoverColor: "group-hover:text-cyan-600",
    accentColor: "text-cyan-600",
  },
  {
    id: "mlops",
    title: "MLOps & Intelligent ML Systems",
    icon: "⚙️",
    description: "Pipelines, retraining, real-time inference.",
    color: "from-green-50 to-emerald-50",
    borderColor: "border-green-100",
    hoverColor: "group-hover:text-green-600",
    accentColor: "text-green-600",
  },
  {
    id: "web-development",
    title: "Full-Stack AI Platforms",
    icon: "🌐",
    description: "SaaS products, dashboards, AI-integrated apps.",
    color: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-100",
    hoverColor: "group-hover:text-blue-600",
    accentColor: "text-blue-600",
  },
  {
    id: "devops",
    title: "Cloud & DevOps Engineering",
    icon: "☁️",
    description: "Scalable infrastructure, CI/CD, serverless.",
    color: "from-orange-50 to-red-50",
    borderColor: "border-orange-100",
    hoverColor: "group-hover:text-orange-600",
    accentColor: "text-orange-600",
  },
  {
    id: "embedded-systems-iot",
    title: "IoT & Real-Time Data Systems",
    icon: "📡",
    description: "MQTT, sensor pipelines, live monitoring.",
    color: "from-rose-50 to-pink-50",
    borderColor: "border-rose-100",
    hoverColor: "group-hover:text-rose-600",
    accentColor: "text-rose-600",
  },
  {
    id: "data-labeling",
    title: "Data Engineering & Analytics",
    icon: "📊",
    description: "Data pipelines, ETL, analytics systems.",
    color: "from-yellow-50 to-amber-50",
    borderColor: "border-yellow-100",
    hoverColor: "group-hover:text-amber-600",
    accentColor: "text-amber-600",
  },
  {
    id: "game-development",
    title: "Game & Interactive Experiences",
    icon: "🎮",
    description: "Interactive products, simulations, and immersive experiences.",
    color: "from-purple-50 to-pink-50",
    borderColor: "border-purple-100",
    hoverColor: "group-hover:text-purple-600",
    accentColor: "text-purple-600",
  },
  {
    id: "digital-technology-consulting",
    title: "Digital & Technology Consulting",
    icon: "🧭",
    description: "Strategy, architecture, and transformation planning.",
    color: "from-slate-50 to-blue-50",
    borderColor: "border-slate-200",
    hoverColor: "group-hover:text-slate-700",
    accentColor: "text-slate-700",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex flex-col flex-grow">
        {/* Services Hero */}
        <div className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-8 text-center">
            <h1 className="text-6xl lg:text-7xl font-black mb-4 text-white">Our Services</h1>
            <p className="text-2xl text-slate-300 max-w-3xl mx-auto">Comprehensive solutions tailored to transform your business with cutting-edge technology and innovation</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="w-full px-8 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link key={service.id} href={`/services/${service.id}`}>
                  <div className={`group p-8 bg-gradient-to-br ${service.color} rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border ${service.borderColor} cursor-pointer h-full`}>
                    <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className={`text-2xl font-bold mb-4 text-slate-800 ${service.hoverColor} transition-colors`}>
                      {service.title}
                    </h3>
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className={`inline-block ${service.accentColor} font-semibold group-hover:translate-x-2 transition-transform duration-300`}>
                      Learn More →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
