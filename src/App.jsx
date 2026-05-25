import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Architecture from "./components/architecture";
import Features from "./components/features";
import Security from "./components/security";
import Demo from "./components/demo";
import Footer from "./components/footer";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Global Background */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]"></div>

      {/* Noise Texture */}
      <div className="fixed inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="relative z-10">

        <Navbar />

        <Hero />

        <Architecture />

        <Features />

        <Security />

        <Demo />

        <Footer />

      </div>

    </main>
  );
}

export default App;