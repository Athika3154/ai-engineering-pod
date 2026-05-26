// src/components/usecases.jsx

function UseCases() {
  return (
    <section
      id="usecases"
      className="mb-28 border-t border-white/10 pt-20"
    >

      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Enterprise Use Cases
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Real-World Engineering Scenarios
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          AI Engineering Pod is designed
          to support practical enterprise
          engineering workflows across
          communication,
          coordination,
          delivery,
          documentation,
          and operational governance.

        </p>

      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-blue-300 text-sm">
            Delivery Coordination
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Sprint & Blocker Visibility
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Teams retrieve sprint progress,
            blocker dependencies,
            ownership details,
            escalation risks,
            and delivery status
            through conversational workflows.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-cyan-300 text-sm">
            Communication Assistance
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Stakeholder Updates
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            AI-Pod drafts status updates,
            escalation emails,
            dependency communication,
            and client-facing summaries
            for approval before delivery.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-purple-300 text-sm">
            Engineering Support
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Development Assistance
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Developers invoke AI-Pod
            for debugging support,
            README generation,
            code explanations,
            implementation guidance,
            and technical summaries.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-green-300 text-sm">
            Knowledge Preservation
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Organizational Memory
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Meeting decisions,
            technical discussions,
            blockers,
            approvals,
            and implementation history
            are preserved within enterprise memory systems.

          </p>

        </div>

      </div>

    </section>
  );
}

export default UseCases;
