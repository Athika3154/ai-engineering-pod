// src/components/systemprinciples.jsx

function SystemPrinciples() {
  return (
    <section
      id="principles"
      className="mb-28 border-t border-white/10 pt-20"
    >

      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          System Principles
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Core Enterprise Design Principles
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          AI Engineering Pod is built around
          enterprise-first operational principles
          focused on governance,
          scalability,
          security,
          explainability,
          and controlled AI participation.

        </p>

      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Explicit Invocation
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            AI workflows execute only when
            explicitly invoked through
            approved communication channels.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Human-in-the-Loop
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            External actions,
            communication,
            and workflow execution
            remain approval-gated
            before delivery.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Retrieval-Grounded AI
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            AI responses are generated
            using project-scoped semantic retrieval
            instead of relying solely
            on prompt-based reasoning.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Event-Driven Architecture
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Workflow execution is decoupled
            through asynchronous event processing
            using queues,
            orchestration,
            and managed AWS services.

          </p>

        </div>

      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Enterprise Auditability
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Every invocation,
            approval,
            generated output,
            and orchestration step
            remains traceable through
            enterprise audit workflows.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Scoped Context Isolation
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Project memory,
            retrieval pipelines,
            and workflow execution
            remain isolated
            to approved enterprise boundaries.

          </p>

        </div>

      </div>

    </section>
  );
}

export default SystemPrinciples;