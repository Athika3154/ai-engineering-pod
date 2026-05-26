// src/components/roadmapdocs.jsx

function RoadmapDocs() {
  return (
    <section
      id="roadmap"
      className="mb-28 border-t border-white/10 pt-20"
    >

      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Future Roadmap
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Enterprise Expansion Strategy
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          AI Engineering Pod is designed
          to evolve from a focused engineering
          collaboration assistant into a broader
          enterprise orchestration platform
          supporting multiple business functions.

        </p>

      </div>

      <div className="mt-16 space-y-8">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <p className="text-blue-300 text-sm">
            Phase 01
          </p>

          <h3 className="mt-4 text-3xl font-semibold">
            Engineering Workflow Foundation
          </h3>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">

            Build invocation workflows,
            Lambda routing,
            enterprise memory,
            approval systems,
            AI personas,
            and communication orchestration
            for engineering teams.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <p className="text-cyan-300 text-sm">
            Phase 02
          </p>

          <h3 className="mt-4 text-3xl font-semibold">
            Enterprise Integrations
          </h3>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">

            Expand integrations across
            GitHub,
            Jira,
            Confluence,
            Slack,
            CI/CD pipelines,
            and enterprise tracking systems.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <p className="text-purple-300 text-sm">
            Phase 03
          </p>

          <h3 className="mt-4 text-3xl font-semibold">
            Autonomous Coordination
          </h3>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">

            Introduce multi-agent collaboration,
            proactive risk detection,
            sprint coordination,
            workflow recommendations,
            and intelligent escalation handling.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

          <p className="text-green-300 text-sm">
            Phase 04
          </p>

          <h3 className="mt-4 text-3xl font-semibold">
            Enterprise Marketplace Ecosystem
          </h3>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">

            Enable organization-specific AI personas,
            workflow plugins,
            department extensions,
            reusable orchestration templates,
            and enterprise AI marketplaces.

          </p>

        </div>

      </div>

    </section>
  );
}

export default RoadmapDocs;