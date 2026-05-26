// src/components/implementationstatus.jsx

function ImplementationStatus() {
  return (
    <section
      id="implementation"
      className="mb-28 border-t border-white/10 pt-20"
    >

      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Implementation Status
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Current Platform Development Progress
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          AI Engineering Pod is currently being
          developed as a phased enterprise AI
          orchestration platform with progressive
          implementation milestones across
          infrastructure,
          workflows,
          governance,
          and semantic memory systems.

        </p>

      </div>

      <div className="mt-16 space-y-8">

        <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-10">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-green-300 text-sm">
                Completed
              </p>

              <h3 className="mt-3 text-3xl font-semibold">
                Documentation & Architecture Design
              </h3>

            </div>

            <div className="text-green-300 text-2xl font-bold">
              100%
            </div>

          </div>

          <p className="mt-6 text-gray-300 leading-relaxed text-lg">

            Enterprise workflows,
            orchestration patterns,
            governance model,
            AI personas,
            and invocation architecture
            have been finalized.

          </p>

        </div>

        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-10">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-cyan-300 text-sm">
                In Progress
              </p>

              <h3 className="mt-3 text-3xl font-semibold">
                Serverless Workflow Implementation
              </h3>

            </div>

            <div className="text-cyan-300 text-2xl font-bold">
              Active
            </div>

          </div>

          <p className="mt-6 text-gray-300 leading-relaxed text-lg">

            API Gateway,
            Lambda orchestration,
            Step Functions workflows,
            approval states,
            and event-driven processing
            are currently under implementation.

          </p>

        </div>

        <div className="rounded-3xl border border-purple-500/20 bg-purple-500/10 p-10">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-purple-300 text-sm">
                Planned
              </p>

              <h3 className="mt-3 text-3xl font-semibold">
                Enterprise Integrations & Multi-Agent Expansion
              </h3>

            </div>

            <div className="text-purple-300 text-2xl font-bold">
              Upcoming
            </div>

          </div>

          <p className="mt-6 text-gray-300 leading-relaxed text-lg">

            Future milestones include
            GitHub integration,
            Jira workflows,
            semantic collaboration agents,
            advanced governance controls,
            and enterprise marketplace extensions.

          </p>

        </div>

      </div>

    </section>
  );
}

export default ImplementationStatus;