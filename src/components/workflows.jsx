// src/components/workflows.jsx

function Workflows() {
  return (
    <section
      id="workflows"
      className="mb-28 border-t border-white/10 pt-20"
    >

      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Enterprise Workflows
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          End-to-End AI Workflow Scenarios
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          AI Engineering Pod supports
          multiple enterprise workflow patterns
          including context retrieval,
          engineering communication,
          sprint coordination,
          documentation assistance,
          and meeting orchestration.

        </p>

      </div>

      <div className="mt-16 space-y-8">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <p className="text-blue-300 text-sm">
            Workflow 01
          </p>

          <h3 className="mt-4 text-3xl font-semibold">
            Context Retrieval Request
          </h3>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">

            Engineers invoke AI-Pod to retrieve
            project blockers,
            decision history,
            ownership information,
            sprint status,
            and implementation context
            using semantic retrieval workflows.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <p className="text-cyan-300 text-sm">
            Workflow 02
          </p>

          <h3 className="mt-4 text-3xl font-semibold">
            Email Draft Generation
          </h3>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">

            AI-Pod prepares enterprise email drafts
            for stakeholders,
            clients,
            sprint updates,
            escalation communication,
            and approval requests
            before routing them to human review.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <p className="text-purple-300 text-sm">
            Workflow 03
          </p>

          <h3 className="mt-4 text-3xl font-semibold">
            Meeting Facilitation
          </h3>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">

            AI-Pod generates agendas,
            extracts action items,
            tracks blockers,
            summarizes meeting outcomes,
            and stores important decisions
            into enterprise memory systems.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <p className="text-green-300 text-sm">
            Workflow 04
          </p>

          <h3 className="mt-4 text-3xl font-semibold">
            Engineering Assistance
          </h3>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">

            Developers can invoke AI-Pod
            for code explanation,
            README generation,
            debugging assistance,
            test generation,
            and implementation guidance
            within approved repositories.

          </p>

        </div>

      </div>

    </section>
  );
}

export default Workflows;