function architecture() {
  return (
    <section
      id="architecture"
      className="mb-28 border-t border-white/10 pt-20"
    >

      {/* Heading */}
      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Architecture Overview
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Enterprise Headless AI Architecture
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          AI Engineering Pod follows a serverless,
          event-driven enterprise architecture.
          Users interact through communication systems
          such as Zoho Mail and Zoho Cliq,
          while orchestration, memory,
          AI execution, governance,
          and approval workflows
          operate within AWS managed services.

        </p>

      </div>

      {/* Architecture Diagram Placeholder */}
      <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10">

        <div className="flex items-center justify-center h-[420px] rounded-2xl border border-dashed border-white/10 bg-black/30">

          <p className="text-gray-500 text-lg">
            Enterprise Architecture Diagram
          </p>

        </div>

        <p className="mt-6 text-sm text-gray-500 text-center">

          Replace this placeholder with the architecture image
          from the project documentation.

        </p>

      </div>

      {/* Architecture Principles */}
      <div className="mt-20">

        <h3 className="text-3xl font-semibold">
          Core Architecture Principles
        </h3>

        <div className="mt-10 grid md:grid-cols-2 gap-6">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h4 className="text-2xl font-semibold">
              Headless by Design
            </h4>

            <p className="mt-4 text-gray-400 leading-relaxed">

              The operational experience exists entirely
              within enterprise communication platforms.
              No standalone operational frontend
              application is required.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h4 className="text-2xl font-semibold">
              Explicit Invocation
            </h4>

            <p className="mt-4 text-gray-400 leading-relaxed">

              AI workflows activate only through
              approved mentions or email inclusion,
              preventing uncontrolled responses
              and ensuring predictable behavior.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h4 className="text-2xl font-semibold">
              Human Approval
            </h4>

            <p className="mt-4 text-gray-400 leading-relaxed">

              External communication,
              workflow execution,
              and outbound actions
              remain approval-gated
              before delivery.

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h4 className="text-2xl font-semibold">
              Enterprise Memory
            </h4>

            <p className="mt-4 text-gray-400 leading-relaxed">

              The architecture separates
              short-term conversational memory
              from durable semantic project memory
              for scalable enterprise retrieval.

            </p>

          </div>

        </div>

      </div>

      {/* Architecture Flow */}
      <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10">

        <h3 className="text-3xl font-semibold">
          High-Level System Flow
        </h3>

        <div className="mt-10 space-y-6">

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <p className="text-gray-300">
              User invokes AI-Pod through email or chat mention.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            <p className="text-gray-300">
              API Gateway receives and validates incoming events.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <p className="text-gray-300">
              Lambda Router applies RBAC, intent classification, and routing.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-pink-400"></div>
            <p className="text-gray-300">
              EventBridge and SQS coordinate asynchronous workflows.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <p className="text-gray-300">
              Step Functions orchestrate AI agents and approval workflows.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <p className="text-gray-300">
              Bedrock agents retrieve context and generate grounded responses.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default architecture;