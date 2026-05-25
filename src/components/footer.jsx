function Footer() {
  return (
    <>
      {/* CTA SECTION */}
      <section className="relative z-10 px-8 py-36 border-t border-white/10 overflow-hidden">

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          {/* Label */}
          <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase">
            Enterprise Autonomous AI
          </p>

          {/* Heading */}
          <h2 className="mt-8 text-6xl md:text-7xl font-bold leading-[1] tracking-tight">

            The Future Of
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
              Engineering Collaboration
            </span>

          </h2>

          {/* Description */}
          <p className="mt-10 text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">

            A headless enterprise AI teammate designed
            for engineering organizations — operating
            through communication channels, orchestrating
            intelligent workflows, retrieving organizational
            memory, and enabling approval-gated autonomous operations.

          </p>

          {/* Buttons */}
          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <a
              href="#architecture"
              className="px-9 py-5 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition duration-300 shadow-2xl"
            >

              Explore Full Architecture

            </a>

            <a
              href="#demo"
              className="px-9 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300"
            >

              View Workflow Demo

            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 px-8 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div>

            <h3 className="text-2xl font-bold">

              <span className="text-white">
                AI
              </span>

              <span className="text-blue-400">
                Engineering
              </span>

              <span className="text-gray-500">
                Pod
              </span>

            </h3>

            <p className="mt-2 text-gray-500">
              Autonomous Enterprise AI Infrastructure
            </p>

          </div>

          {/* Center */}
          <div className="flex gap-8 text-gray-400 text-sm">

            <a
              href="#architecture"
              className="hover:text-white transition duration-300"
            >
              Architecture
            </a>

            <a
              href="#features"
              className="hover:text-white transition duration-300"
            >
              Features
            </a>

            <a
              href="#security"
              className="hover:text-white transition duration-300"
            >
              Security
            </a>

            <a
              href="#demo"
              className="hover:text-white transition duration-300"
            >
              Demo
            </a>

          </div>

          {/* Right */}
          <div className="text-gray-500 text-sm">

            Built For Enterprise AI Orchestration

          </div>

        </div>

      </footer>
    </>
  );
}

export default Footer;