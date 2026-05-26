// src/components/references.jsx

function References() {
  return (
    <section
      id="references"
      className="mb-28 border-t border-white/10 pt-20"
    >

      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          References & Supporting Assets
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Enterprise Documentation References
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          The following assets,
          systems,
          and enterprise references
          support the architecture,
          workflows,
          governance,
          and operational behavior
          of AI Engineering Pod.

        </p>

      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-blue-300 text-sm">
            Architecture Assets
          </p>

          <div className="mt-6 space-y-4 text-gray-300">

            <p>• Enterprise Architecture Diagram</p>
            <p>• Workflow Orchestration Diagram</p>
            <p>• Approval Lifecycle Diagram</p>
            <p>• Memory & Retrieval Architecture</p>

          </div>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-cyan-300 text-sm">
            Enterprise Planning
          </p>

          <div className="mt-6 space-y-4 text-gray-300">

            <p>• Sprint Timeline Documentation</p>
            <p>• RACI Responsibility Matrix</p>
            <p>• Team Capacity Planning</p>
            <p>• Workflow Ownership Structure</p>

          </div>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-purple-300 text-sm">
            AWS Services
          </p>

          <div className="mt-6 space-y-4 text-gray-300">

            <p>• Amazon Bedrock</p>
            <p>• AWS Step Functions</p>
            <p>• EventBridge & SQS</p>
            <p>• Lambda & API Gateway</p>

          </div>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-green-300 text-sm">
            Enterprise Platforms
          </p>

          <div className="mt-6 space-y-4 text-gray-300">

            <p>• Zoho Mail</p>
            <p>• Zoho Cliq</p>
            <p>• GitHub</p>
            <p>• Jira & Confluence</p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default References;