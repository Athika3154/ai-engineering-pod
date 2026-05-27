function ProductDirection() {
  return (
    <section
      id="direction"
      className="mb-28 border-t border-white/10 pt-20"
    >

      {/* Heading */}
      <div className="max-w-4xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Product Direction
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          A Headless Enterprise AI Teammate
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          AI Engineering Pod is intentionally designed
          as a headless enterprise system.
          Instead of building a standalone application,
          the AI operates directly inside the communication
          systems already used by engineering teams.

        </p>

      </div>

      {/* Direction Grid */}
      <div className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-blue-300 text-sm">
            Frontend Strategy
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Static Documentation Website
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            The project does not require a traditional
            operational frontend application.
            A static documentation portal is sufficient
            for architecture explanation,
            workflows, demos, and usage guidance.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-cyan-300 text-sm">
            Invocation Model
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Explicit AI Invocation
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            The AI responds only when explicitly invoked
            through email inclusion or chat mention,
            ensuring predictable enterprise behavior
            and controlled AI participation.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-purple-300 text-sm">
            AI Identity
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Dedicated Team Presence
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            AI-Pod operates with its own mailbox
            and chat identity,
            allowing it to behave as a collaborative
            enterprise engineering teammate.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-green-300 text-sm">
            Governance
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Approval-Gated Communication
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            External communication cannot be sent
            automatically.
            All outbound actions pass through
            human approval workflows
            before delivery.

          </p>

        </div>

      </div>

      {/* Summary */}
      <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10">

        <h3 className="text-3xl font-semibold">
          Why This Architecture Matters
        </h3>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed">

          The system is designed around enterprise realities:
          fragmented communication,
          distributed project context,
          governance requirements,
          and operational safety.
          Instead of replacing existing tools,
          AI Engineering Pod integrates directly into
          the workflows teams already use.

        </p>

      </div>

    </section>
  );
}

export default ProductDirection;