function ProcessFlow() {
  return (
    <section
      id="processflow"
      className="mb-28 border-t border-white/10 pt-20"
    >

      {/* Heading */}
      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Process Flow
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Event-Driven Workflow Orchestration
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          AI Engineering Pod operates through a layered,
          event-driven workflow architecture.
          Requests move through validation,
          orchestration,
          retrieval,
          AI execution,
          governance,
          and approval stages before delivery.

        </p>

      </div>

      {/* Flow Steps */}
      <div className="mt-20 space-y-10">

        {/* Step */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-300 font-bold">
              01
            </div>

            <div>

              <p className="text-blue-300 text-sm">
                Ingress Layer
              </p>

              <h3 className="text-3xl font-semibold">
                Amazon API Gateway
              </h3>

            </div>

          </div>

          <p className="mt-8 text-gray-400 leading-relaxed text-lg">

            API Gateway acts as the secure enterprise
            entry point for Zoho Mail webhooks,
            Zoho Cliq events,
            GitHub triggers,
            and meeting ingestion workflows.
            It validates requests,
            applies throttling,
            and standardizes routing contracts.

          </p>

        </div>

        {/* Step */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-bold">
              02
            </div>

            <div>

              <p className="text-cyan-300 text-sm">
                Routing Layer
              </p>

              <h3 className="text-3xl font-semibold">
                Lambda Router
              </h3>

            </div>

          </div>

          <p className="mt-8 text-gray-400 leading-relaxed text-lg">

            The Lambda Router verifies invocation validity,
            applies RBAC authorization,
            identifies project scope,
            classifies intent,
            retrieves lightweight context,
            and determines whether the workflow
            requires orchestration or passive storage.

          </p>

        </div>

        {/* Step */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold">
              03
            </div>

            <div>

              <p className="text-purple-300 text-sm">
                Event Processing
              </p>

              <h3 className="text-3xl font-semibold">
                EventBridge & SQS
              </h3>

            </div>

          </div>

          <p className="mt-8 text-gray-400 leading-relaxed text-lg">

            EventBridge decouples event producers
            from workflow execution,
            while SQS buffers asynchronous workloads,
            protects the platform from spikes,
            and enables resilient retry handling
            through dead-letter queue isolation.

          </p>

        </div>

        {/* Step */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-300 font-bold">
              04
            </div>

            <div>

              <p className="text-green-300 text-sm">
                Workflow Orchestration
              </p>

              <h3 className="text-3xl font-semibold">
                AWS Step Functions
              </h3>

            </div>

          </div>

          <p className="mt-8 text-gray-400 leading-relaxed text-lg">

            Step Functions coordinate
            multi-agent execution,
            approval wait states,
            branching logic,
            retries,
            validation workflows,
            and human-in-the-loop governance.

          </p>

        </div>

        {/* Step */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center text-yellow-300 font-bold">
              05
            </div>

            <div>

              <p className="text-yellow-300 text-sm">
                AI Runtime
              </p>

              <h3 className="text-3xl font-semibold">
                Amazon Bedrock Agents
              </h3>

            </div>

          </div>

          <p className="mt-8 text-gray-400 leading-relaxed text-lg">

            Bedrock provides enterprise LLM execution,
            guardrails,
            retrieval workflows,
            prompt orchestration,
            and specialized AI agent behavior
            for coding,
            meetings,
            documentation,
            and communication assistance.

          </p>

        </div>

      </div>

      {/* Summary */}
      <div className="mt-20 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-10">

        <h3 className="text-3xl font-semibold">
          Enterprise Workflow Guarantees
        </h3>

        <div className="mt-8 grid md:grid-cols-2 gap-6">

          <div className="space-y-4 text-gray-300">

            <p>• Explicit invocation validation</p>
            <p>• RBAC authorization enforcement</p>
            <p>• Approval-gated external actions</p>

          </div>

          <div className="space-y-4 text-gray-300">

            <p>• Event-driven resiliency</p>
            <p>• Queue-based workload isolation</p>
            <p>• Traceable orchestration lifecycle</p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProcessFlow;