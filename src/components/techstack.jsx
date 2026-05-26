// src/components/techstack.jsx

function TechStack() {
  return (
    <section
      id="techstack"
      className="mb-28 border-t border-white/10 pt-20"
    >

      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Enterprise Tech Stack
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          AWS-Native Serverless Architecture
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          AI Engineering Pod is designed
          using enterprise-grade managed services
          optimized for scalability,
          resiliency,
          governance,
          and operational efficiency.

        </p>

      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-blue-300 text-sm">
            Communication Layer
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Zoho Mail & Zoho Cliq
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Enterprise communication surfaces
            used for AI invocation,
            messaging,
            approvals,
            and collaboration workflows.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-cyan-300 text-sm">
            Ingress Layer
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            API Gateway & Lambda
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            API Gateway receives enterprise events
            while Lambda performs validation,
            routing,
            RBAC enforcement,
            and orchestration decisions.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-purple-300 text-sm">
            Event Processing
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            EventBridge & SQS
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            EventBridge enables decoupled workflows,
            scheduled orchestration,
            and event-driven architecture,
            while SQS provides queue-based resiliency.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-green-300 text-sm">
            Workflow Engine
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            AWS Step Functions
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Coordinates multi-step orchestration,
            branching,
            retries,
            human approval,
            and enterprise workflow lifecycle management.

          </p>

        </div>

      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-yellow-300 text-sm">
            AI Runtime
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Amazon Bedrock
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Provides enterprise LLM access,
            prompt orchestration,
            retrieval workflows,
            agent execution,
            and AI guardrails.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-pink-300 text-sm">
            Memory Layer
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            DynamoDB & Aurora PostgreSQL
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            DynamoDB stores temporary session memory,
            while Aurora PostgreSQL with pgvector
            manages durable semantic knowledge retrieval.

          </p>

        </div>

      </div>

      <div className="mt-20 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-10">

        <h3 className="text-3xl font-semibold">
          Infrastructure Principles
        </h3>

        <div className="mt-8 space-y-5 text-gray-300">

          <p>• Serverless-first architecture</p>
          <p>• Managed AWS infrastructure</p>
          <p>• Event-driven orchestration</p>
          <p>• Enterprise-grade resiliency</p>
          <p>• Scalable workflow execution</p>
          <p>• Governance-oriented AI operations</p>

        </div>

      </div>

    </section>
  );
}

export default TechStack;