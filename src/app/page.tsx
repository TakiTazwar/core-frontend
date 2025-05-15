import Footer from "@/components/footer";
import DataFetcher from "./DataFetcher";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen ">
      <Header />
      <main className="flex flex-col flex-grow bg-gray-100 items-center justify-center text-black">
        <h1>Page is Under Construction!</h1>
        <p>Sample Database Values: </p>
        <DataFetcher />
      </main>
      <Footer />
    </div>
  );
}
