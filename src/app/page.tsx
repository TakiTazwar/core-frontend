import Footer from "@/components/footer";
import Header from "@/components/header";
import HomePage from "@/components/HomePage/homePage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen ">
      <Header />
      <main className="flex flex-col flex-grow bg-gray-100 items-center text-black">
        <div className="flex flex-row w-full h-150 p-10 bg-[#1E1E1E] shadow-md">
          <div className="w-[60%] h-full flex flex-col justify-center p-36 text-white">
            <h1 className="text-5xl font-bold">Innovating Beyond Boundaries,</h1>
            <h1 className="text-5xl font-bold pb-8">Redefining Possibilities.</h1>
            <p>Harness the power of modern web technologies and cloud-native solutions to deliver scalable, high-performance WordPress products. Combining frameworks like Next.js and Nuxt.js with robust backend tools such as Django and FastAPI, supported by leading cloud platforms and container orchestration, we create seamless, secure, and future-ready experiences.</p>
          </div>
          <div className="w-[40%] h-full">
            <HomePage />
          </div>
        </div>
        <h1>Page is Under Construction!</h1>
      </main>
      <Footer />
    </div>
  );
}
