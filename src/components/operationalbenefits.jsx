// src/components/operationalbenefits.jsx

function OperationalBenefits() {
  return (
    <section
      id="benefits"
      className="mb-28 border-t border-white/10 pt-20"
    >

      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Operational Benefits
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Enterprise Engineering Impact
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          AI Engineering Pod improves
          enterprise engineering collaboration
          by reducing coordination overhead,
          accelerating context retrieval,
          improving governance,
          and enabling scalable AI-assisted workflows.

        </p>

      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Faster Context Retrieval
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Engineers no longer depend entirely
            on manual knowledge transfer
            to understand blockers,
            decisions,
            sprint history,
            and project context.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Reduced Coordination Overhead
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            AI-assisted summaries,
            meeting facilitation,
            and workflow orchestration
            reduce repetitive project coordination effort.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Improved Governance
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Approval-gated workflows,
            audit logging,
            and RBAC enforcement
            ensure enterprise-safe AI operations.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Scalable AI Collaboration
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Teams can collaborate with AI
            directly inside communication channels
            without requiring dedicated AI interfaces.

          </p>

        </div>

      </div>

      <div className="mt-20 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-10">

        <h3 className="text-3xl font-semibold">
          Enterprise Outcome Goals
        </h3>

        <div className="mt-8 space-y-5 text-gray-300">

          <p>• Faster engineering onboarding</p>
          <p>• Better project visibility</p>
          <p>• Reduced meeting overhead</p>
          <p>• Safer enterprise AI execution</p>
          <p>• Centralized organizational knowledge</p>
          <p>• Improved cross-team collaboration</p>

        </div>

      </div>

    </section>
  );
}

export default OperationalBenefits;