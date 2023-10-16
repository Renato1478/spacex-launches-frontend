import Header from "../components/Header";
import Footer from "../components/Footer";
import LaunchesPerRocket from "../components/LaunchesPerRocket";
import LaunchesPerYear from "@/components/LaunchesPerYear";
import LaunchesHistory from "@/components/LaunchesHistory";

export default function Home() {
  return (
    <main className="text-stone-400 bg-gradient-to-br from-stone-950 from-25% to-orange-950 flex min-h-screen flex-col items-center my-0 mx-auto font-normal transition-all">
      <Header />
      <div className="wrapper mt-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 max-md:flex-col">
            <LaunchesPerRocket />
            <LaunchesPerYear />
          </div>
          <LaunchesHistory />
        </div>
      </div>
      <Footer />
    </main>
  );
}
