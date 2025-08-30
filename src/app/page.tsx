import Footer from "@/components/footer";
import Header from "@/components/header";
import HomePage from "@/components/HomePage/homePage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full ">
      <Header />
      <main className="flex flex-col flex-grow bg-gray-100 items-center text-black">
        <div className="flex flex-row w-full h-150 p-10 bg-[#1E1E1E] shadow-md">
          <div className="w-[60%] h-full flex flex-col justify-center p-36 text-white">
            <h1 className="text-5xl font-bold bg-custom-gradient">Innovating Beyond Boundaries,</h1>
            <h1 className="text-5xl font-bold pb-8 bg-custom-gradient">Redefining Possibilities.</h1>
            <p>Harness the power of modern web technologies and cloud-native solutions to deliver scalable, high-performance WordPress products. Combining frameworks like Next.js and Nuxt.js with robust backend tools such as Django and FastAPI, supported by leading cloud platforms and container orchestration, we create seamless, secure, and future-ready experiences.</p>
          </div>
          <div className="w-[40%] h-full">
            <HomePage />
          </div>
        </div>
        <div className="flex flex-row w-[80%] ml-[20%] mt-[50px]">
          <div className="bg-[#21759A] h-[30px] w-[3px] mr-[20px]">
          </div>
          <div className="text-xl">
            WORDPRESS ESSENTIAL
          </div>
        </div>
        <div className="text-4xl font-bold text-[#000000] w-[80%] ml-[20%] mt-[20px]">
          Must Have Plugins for Everyone
        </div>
        <div className="max-w-2xl rounded-2xl border border-sky-100 bg-sky-50 p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-2 ring-orange-500">
              <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-7 w-7 rounded-full"
          >
            <circle cx="12" cy="12" r="11" fill="#0b0b0b" />
            <path
              d="M14.5 5.5a6.5 6.5 0 1 0 4 11.9A6 6 0 1 1 14.5 5.5z"
              fill="#fff"
              opacity=".95"
            />
          </svg>
            </div>
              <div className="text-xl font-semibold text-gray-900">WP Dark Mode</div>
          </div>
        </div>
        <h1>Page is Under Construction!</h1>
        <h2>Please Wait.</h2>
      </main>
      <Footer />
    </div>
  );
}
