import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function EmbeddedSystemsIoTPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex flex-col flex-grow">
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-br from-rose-900 via-rose-800 to-pink-900 overflow-hidden py-24">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-8">
            <div className="text-center">
              <h1 className="text-6xl lg:text-7xl font-black mb-4 text-white">Embedded Systems & IoT</h1>
              <p className="text-2xl text-rose-100 max-w-3xl mx-auto">Intelligent connected devices that drive smart automation</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full px-8 py-24 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                We design and develop intelligent embedded systems and IoT solutions that connect devices, collect data, and enable smart automation. From hardware integration to cloud connectivity, we build reliable IoT ecosystems that work seamlessly.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our expertise covers the entire IoT stack, enabling you to capture real-time data and derive actionable insights from your connected devices.
              </p>
            </div>

            {/* Services Include */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Embedded System Design",
                  "IoT Device Development",
                  "Firmware Development",
                  "Sensor Integration & Calibration",
                  "Data Collection & Processing",
                  "Cloud Connectivity & APIs",
                  "Edge Computing Solutions",
                  "Real-Time Monitoring",
                  "Control Systems Development",
                  "Protocol Implementation (MQTT, CoAP)",
                  "Battery Optimization",
                  "Scalable Architecture Design"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-rose-50 rounded-lg border border-rose-100">
                    <span className="text-rose-600 font-bold mr-3 text-xl">✓</span>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Embedded Systems</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• ARM & RISC-V Architectures</li>
                    <li>• ESP32 & Arduino</li>
                    <li>• Real-Time Operating Systems (RTOS)</li>
                    <li>• C/C++ & Python</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">IoT & Cloud</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• AWS IoT & Azure IoT Hub</li>
                    <li>• MQTT & CoAP Protocols</li>
                    <li>• LoRaWAN & NB-IoT</li>
                    <li>• Data Processing & Analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white p-12 rounded-xl text-center">
              <h2 className="text-4xl font-bold mb-4">Build Your IoT Solution</h2>
              <p className="text-lg mb-8 text-rose-100">Connect your devices and unlock intelligent automation</p>
              <button className="px-8 py-4 bg-white text-rose-600 font-bold rounded-lg hover:bg-rose-50 transition-colors">
                Start IoT Project
              </button>
            </div>

            {/* Back Link */}
            <div className="mt-12">
              <Link href="/services" className="text-rose-600 font-semibold hover:text-rose-800 transition-colors">
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
