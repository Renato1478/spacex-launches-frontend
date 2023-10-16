import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
  return (
    <main className="text-stone-400 bg-gradient-to-br from-stone-950 from-25% to-orange-950 flex min-h-screen flex-col items-center my-0 mx-auto font-normal transition-all">
      <Header />
      <Main />
      <Footer />
    </main>
  );
}
