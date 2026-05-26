// src/components/appendix.jsx

function Appendix() {
  return (
    <section
      id="appendix"
      className="mb-28 border-t border-white/10 pt-20"
    >

      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Appendices
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Example Invocation Commands
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          The following examples demonstrate
          how engineers and stakeholders
          interact with AI Engineering Pod
          through enterprise communication channels.

        </p>

      </div>

      <div className="mt-16 space-y-8">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-blue-300 text-sm">
            Context Retrieval
          </p>

          <div className="mt-5 rounded-2xl bg-black/40 border border-white/10 p-6 overflow-x-auto">

            <code className="text-green-300 whitespace-nowrap">
              @AI-Pod give complete context about the payment API blocker
            </code>

          </div>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-cyan-300 text-sm">
            Meeting Support
          </p>

          <div className="mt-5 rounded-2xl bg-black/40 border border-white/10 p-6 overflow-x-auto">

            <code className="text-green-300 whitespace-nowrap">
              @AI-Pod prepare agenda for tomorrow sprint review
            </code>

          </div>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-purple-300 text-sm">
            Email Drafting
          </p>

          <div className="mt-5 rounded-2xl bg-black/40 border border-white/10 p-6 overflow-x-auto">

            <code className="text-green-300 whitespace-nowrap">
              @AI-Pod draft stakeholder update for deployment delay
            </code>

          </div>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-green-300 text-sm">
            Engineering Assistance
          </p>

          <div className="mt-5 rounded-2xl bg-black/40 border border-white/10 p-6 overflow-x-auto">

            <code className="text-green-300 whitespace-nowrap">
              @AI-Pod generate README for authentication module
            </code>

          </div>

        </div>

      </div>

      <div className="mt-20 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-10">

        <h3 className="text-3xl font-semibold">
          Invocation Rules
        </h3>

        <div className="mt-8 space-y-5 text-gray-300">

          <p>• AI-Pod responds only when explicitly invoked</p>
          <p>• Unauthorized channels are ignored</p>
          <p>• External actions require approval workflows</p>
          <p>• Retrieval remains project-scoped</p>
          <p>• AI outputs are traceable and auditable</p>

        </div>

      </div>

    </section>
  );
}

export default Appendix;