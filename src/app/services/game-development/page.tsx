import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function GameDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex flex-col flex-grow">
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 overflow-hidden py-24">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-8">
            <div className="text-center">
              <h1 className="text-6xl lg:text-7xl font-black mb-4 text-white">Game Development</h1>
              <p className="text-2xl text-purple-100 max-w-3xl mx-auto">Engaging and immersive gaming experiences that captivate players</p>
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
                We create engaging game experiences that entertain, challenge, and delight players. From web-based games to interactive applications, we combine gameplay mechanics, stunning visuals, and smooth performance to deliver unforgettable experiences.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our team brings together artists, designers, and engineers to craft games that stand out in the market and keep players coming back.
              </p>
            </div>

            {/* Services Include */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Web-Based Games",
                  "Interactive Experiences",
                  "Game Design & Mechanics",
                  "3D Graphics & Animation",
                  "Cross-Platform Compatibility",
                  "Real-Time Performance",
                  "Multiplayer Functionality",
                  "Game Physics Engine",
                  "Sound & Music Integration",
                  "Performance Optimization",
                  "Mobile Game Development",
                  "Game Analytics & Telemetry"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-purple-50 rounded-lg border border-purple-100">
                    <span className="text-purple-600 font-bold mr-3 text-xl">✓</span>
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
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Game Engines</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Unity</li>
                    <li>• Unreal Engine</li>
                    <li>• Godot</li>
                    <li>• Three.js & Babylon.js</li>
                    <li>• PlayCanvas</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Development</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li>• C# & C++</li>
                    <li>• JavaScript/TypeScript</li>
                    <li>• WebGL & WebGPU</li>
                    <li>• Node.js Backend</li>
                    <li>• Cloud Hosting & Networking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-12 rounded-xl text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Create an Epic Game?</h2>
              <p className="text-lg mb-8 text-purple-100">Let's bring your game concept to life with stunning gameplay</p>
              <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors">
                Start Your Game Project
              </button>
            </div>

            {/* Back Link */}
            <div className="mt-12">
              <Link href="/services" className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
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
