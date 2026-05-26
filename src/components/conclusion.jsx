// src/components/conclusion.jsx

function Conclusion() {
  return (
    <section
      id="conclusion"
      className="mb-28 border-t border-white/10 pt-20"
    >

      <div className="rounded-[40px] border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-14">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Conclusion
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight max-w-4xl">
          Enterprise AI Collaboration Requires Governance,
          Context, and Controlled Autonomy
        </h2>

        <p className="mt-10 max-w-5xl text-xl text-gray-300 leading-relaxed">

          AI Engineering Pod demonstrates how
          enterprise AI systems can operate
          as governed engineering teammates
          rather than uncontrolled assistants.
          Through explicit invocation,
          semantic memory,
          approval-gated orchestration,
          and event-driven architecture,
          the platform enables scalable
          AI collaboration while preserving
          enterprise safety and operational control.

        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">

          <div className="rounded-3xl border border-white/10 bg-black/30 p-8">

            <h3 className="text-2xl font-semibold">
              Controlled AI Participation
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">

              AI workflows remain scoped,
              validated,
              approval-gated,
              and enterprise-auditable.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-black/30 p-8">

            <h3 className="text-2xl font-semibold">
              Enterprise Workflow Integration
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">

              The platform integrates directly
              into existing communication
              and engineering workflows.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-black/30 p-8">

            <h3 className="text-2xl font-semibold">
              Scalable Architecture
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">

              Serverless orchestration,
              semantic retrieval,
              and managed AWS services
              provide enterprise scalability.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Conclusion;