// src/components/agentpersonas.jsx

function AgentPersonas() {
  return (
    <section
      id="personas"
      className="mb-28 border-t border-white/10 pt-20"
    >

      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          AI Personas
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Specialized Enterprise AI Agents
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          AI Engineering Pod uses specialized
          worker personas instead of a single
          generic chatbot. Each agent operates
          with constrained responsibilities,
          approved tools, and validated outputs.

        </p>

      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-blue-300 text-sm">
            Communication Agent
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            AI Communication Assistant
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Drafts emails, summarizes threads,
            prepares updates, and generates
            approval-gated communication drafts.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-cyan-300 text-sm">
            Meeting Agent
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            AI Meeting Facilitator
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Creates agendas, extracts decisions,
            generates minutes of meeting,
            and tracks action items.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-purple-300 text-sm">
            Context Agent
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            AI Context Provider
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Retrieves project history,
            blockers, risks, ownership,
            and semantic knowledge context.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-green-300 text-sm">
            Coding Agent
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            AI Coding Assistant
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Reviews code, suggests fixes,
            explains logic, proposes tests,
            and assists engineering workflows.

          </p>

        </div>

      </div>

    </section>
  );
}

export default AgentPersonas;