function Demo() {
  return (
    <section
      id="demo"
      className="relative z-10 px-8 py-28 border-t border-white/10 overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      {/* Heading */}
      <div className="relative z-10 max-w-4xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Live Workflow Demo
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          AI Operating Inside Enterprise Communication
        </h2>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          The AI Engineering Pod works directly inside
          enterprise email and chat workflows —
          responding only when explicitly invoked
          through mentions, tags, or email inclusion.
        </p>

      </div>

      {/* Grid */}
      <div className="relative z-10 mt-20 grid lg:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <div className="rounded-[36px] border border-white/10 bg-black/40 backdrop-blur-2xl p-8">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">

            <div>

              <p className="text-sm text-gray-500">
                Zoho Cliq
              </p>

              <h3 className="mt-2 text-3xl font-semibold">
                Engineering Channel
              </h3>

            </div>

            <div className="px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-300 text-sm">

              Live

            </div>

          </div>

          {/* Messages */}
          <div className="mt-8 space-y-6">

            {/* User */}
            <div className="flex justify-end">

              <div className="max-w-md rounded-3xl rounded-br-md bg-blue-500/10 border border-blue-500/20 p-5">

                <p className="text-sm text-blue-300">
                  Product Manager
                </p>

                <p className="mt-3 text-lg leading-relaxed">
                  @AI-Pod summarize sprint blockers
                  and prepare a leadership update.
                </p>

              </div>

            </div>

            {/* Thinking */}
            <div className="flex justify-start">

              <div className="max-w-md rounded-3xl rounded-bl-md bg-white/5 border border-white/10 p-5">

                <p className="text-sm text-cyan-300">
                  AI Engineering Pod
                </p>

                <div className="mt-4 flex gap-2">

                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></div>

                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce delay-100"></div>

                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce delay-200"></div>

                </div>

              </div>

            </div>

            {/* Response */}
            <div className="flex justify-start">

              <div className="max-w-md rounded-3xl rounded-bl-md bg-cyan-500/10 border border-cyan-500/20 p-5">

                <p className="text-sm text-cyan-300">
                  AI Engineering Pod
                </p>

                <p className="mt-3 leading-relaxed text-gray-200">
                  Sprint blocker analysis completed.
                  Leadership update draft generated
                  and routed to approval workflow
                  before external delivery.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

          {/* Header */}
          <div className="border-b border-white/10 pb-6">

            <p className="text-sm text-gray-500">
              Runtime Orchestration
            </p>

            <h3 className="mt-2 text-3xl font-semibold">
              Distributed AI Workflow
            </h3>

          </div>

          {/* Flow */}
          <div className="mt-8 space-y-6">

            {/* Step 1 */}
            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">

              <p className="text-sm text-blue-300">
                01 — Invocation
              </p>

              <h4 className="mt-3 text-xl font-semibold">
                Mention detected in approved channel
              </h4>

            </div>

            {/* Arrow */}
            <div className="flex justify-center text-gray-600 text-2xl">
              ↓
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6">

              <p className="text-sm text-yellow-300">
                02 — Routing
              </p>

              <h4 className="mt-3 text-xl font-semibold">
                Lambda Router classifies workflow intent
              </h4>

            </div>

            {/* Arrow */}
            <div className="flex justify-center text-gray-600 text-2xl">
              ↓
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-6">

              <p className="text-sm text-purple-300">
                03 — Orchestration
              </p>

              <h4 className="mt-3 text-xl font-semibold">
                Step Functions coordinate AI agents
              </h4>

            </div>

            {/* Arrow */}
            <div className="flex justify-center text-gray-600 text-2xl">
              ↓
            </div>

            {/* Step 4 */}
            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-6">

              <p className="text-sm text-green-300">
                04 — Governance
              </p>

              <h4 className="mt-3 text-xl font-semibold">
                Approval gate enforced before delivery
              </h4>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Demo;