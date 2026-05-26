import Layout from "./components/layout";
import Architecture from "./components/architecture";
import Features from "./components/features";
import Security from "./components/security";
import Demo from "./components/demo";

function App() {
  return (
    <Layout>

      {/* OVERVIEW */}
      <section id="overview" className="mb-28">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Overview
        </p>

        <h1 className="mt-5 text-6xl font-bold leading-tight">
          Autonomous AI Engineering Pod
        </h1>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-4xl">

          The AI Engineering Pod is an enterprise-focused
          autonomous AI orchestration platform designed to
          operate through communication channels such as
          email and chat systems.

        </p>

        <p className="mt-6 text-gray-500 leading-relaxed max-w-4xl">

          The platform enables AI-assisted engineering
          workflows including meeting facilitation,
          documentation generation, sprint reporting,
          coding assistance, and enterprise communication
          orchestration through event-driven serverless architecture.

        </p>

      </section>

      {/* ARCHITECTURE */}
      <Architecture />

      {/* FEATURES */}
      <Features />

      {/* SECURITY */}
      <Security />

      {/* DEMO */}
      <Demo />

      {/* ROADMAP */}
      <section
        id="roadmap"
        className="mt-28 border-t border-white/10 pt-20"
      >

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Roadmap
        </p>

        <h2 className="mt-5 text-5xl font-bold">
          Implementation Timeline
        </h2>

        <div className="mt-16 space-y-8">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="text-blue-300 text-sm">
              Phase 1
            </p>

            <h3 className="mt-3 text-3xl font-semibold">
              Architecture & Invocation Design
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Define orchestration patterns, invocation flows,
              and enterprise communication architecture.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="text-cyan-300 text-sm">
              Phase 2
            </p>

            <h3 className="mt-3 text-3xl font-semibold">
              AI Workflow Orchestration
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Implement Lambda routing, Step Functions,
              asynchronous event processing, and AI agents.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <p className="text-green-300 text-sm">
              Phase 3
            </p>

            <h3 className="mt-3 text-3xl font-semibold">
              Governance & Enterprise Controls
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Integrate approval workflows, RBAC,
              audit logging, encryption,
              and enterprise observability.
            </p>

          </div>

        </div>

      </section>

    </Layout>
  );
}

export default App;