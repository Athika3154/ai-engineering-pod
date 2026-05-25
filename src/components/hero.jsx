function Hero() {
  return (
    <section className="relative z-10 px-8 pt-12 pb-28 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full text-sm text-blue-300 shadow-lg">

            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>

            Enterprise Autonomous AI Teammate

          </div>

          {/* Heading */}
          <h1 className="mt-10 text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight">

            <span className="text-white">
              THE
            </span>

            <br />

            <span className="bg-gradient-to-r from-blue-500 via-cyan-300 to-white bg-clip-text text-transparent">
              BROKEN
            </span>

            <br />

            <span className="text-gray-600">
              PIPELINE
            </span>

          </h1>

          {/* Description */}
          <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">

            A headless enterprise AI engineering pod operating
            through email and chat — orchestrating workflows,
            retrieving project intelligence, drafting communications,
            coordinating meetings, and managing engineering operations
            through approval-gated autonomy.

          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-4 flex-wrap">

            <a
              href="#architecture"
              className="px-7 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition duration-300 shadow-2xl"
            >

              Explore Architecture

            </a>

            <a
              href="#demo"
              className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300"
            >

              Watch Workflow Demo

            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">

          {/* Glow */}
          <div className="absolute w-[450px] h-[450px] bg-cyan-500/20 blur-[140px] rounded-full"></div>

          {/* Glass Panel */}
          <div className="relative w-full max-w-xl rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl">

            {/* Window Controls */}
            <div className="flex items-center gap-2 mb-8">

              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>

            </div>

            {/* Request */}
            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">

              <p className="text-sm text-blue-300">
                Incoming Request
              </p>

              <h3 className="mt-4 text-3xl font-semibold leading-snug">
                @AI-Pod summarize sprint blockers
              </h3>

            </div>

            {/* Arrow */}
            <div className="flex justify-center py-6 text-3xl text-gray-500">
              ↓
            </div>

            {/* Middle */}
            <div className="grid grid-cols-2 gap-5">

              {/* Router */}
              <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-5">

                <p className="text-yellow-300 text-sm">
                  Router
                </p>

                <h3 className="mt-3 text-xl font-semibold">
                  Lambda + EventBridge
                </h3>

              </div>

              {/* Workflow */}
              <div className="rounded-3xl border border-purple-500/20 bg-purple-500/5 p-5">

                <p className="text-purple-300 text-sm">
                  Workflow
                </p>

                <h3 className="mt-3 text-xl font-semibold">
                  Step Functions
                </h3>

              </div>

            </div>

            {/* Arrow */}
            <div className="flex justify-center py-6 text-3xl text-gray-500">
              ↓
            </div>

            {/* Output */}
            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6">

              <p className="text-cyan-300 text-sm">
                AI Output
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-snug">
                Approval-gated enterprise workflow generated.
              </h3>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;