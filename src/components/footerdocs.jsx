// src/components/footerdocs.jsx

function FooterDocs() {
  return (
    <footer className="border-t border-white/10 py-16">

      <div className="max-w-6xl">

        <h2 className="text-3xl font-bold">
          Autonomous AI Engineering Pod
        </h2>

        <p className="mt-6 max-w-3xl text-gray-400 leading-relaxed">

          Enterprise AI orchestration platform
          designed for engineering collaboration,
          workflow automation,
          approval-gated communication,
          semantic context retrieval,
          and governed AI operations.

        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-10">

          <div>

            <p className="text-white font-semibold">
              Documentation
            </p>

            <div className="mt-5 space-y-3 text-gray-400">

              <p>Architecture Overview</p>
              <p>Invocation Model</p>
              <p>Process Flow</p>
              <p>Security Architecture</p>

            </div>

          </div>

          <div>

            <p className="text-white font-semibold">
              Enterprise Features
            </p>

            <div className="mt-5 space-y-3 text-gray-400">

              <p>AI Personas</p>
              <p>Workflow Orchestration</p>
              <p>Approval Governance</p>
              <p>Semantic Memory</p>

            </div>

          </div>

          <div>

            <p className="text-white font-semibold">
              Infrastructure
            </p>

            <div className="mt-5 space-y-3 text-gray-400">

              <p>AWS Step Functions</p>
              <p>Amazon Bedrock</p>
              <p>EventBridge & SQS</p>
              <p>Aurora PostgreSQL</p>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-sm text-gray-500">

          AI Engineering Pod Documentation Portal • Enterprise Architecture Reference

        </div>

      </div>

    </footer>
  );
}

export default FooterDocs;