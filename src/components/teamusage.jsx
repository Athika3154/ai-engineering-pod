// src/components/teamusage.jsx

function TeamUsage() {
  return (
    <section
      id="teamusage"
      className="mb-28 border-t border-white/10 pt-20"
    >

      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Team Usage Model
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Engineering Team Collaboration Flow
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          AI Engineering Pod integrates directly
          into existing engineering workflows
          without replacing current tools.
          Teams interact with the system
          through natural communication channels
          already used in daily operations.

        </p>

      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-blue-300 text-sm">
            Engineers
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Technical Assistance
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Developers invoke AI-Pod
            for debugging,
            implementation support,
            context retrieval,
            and documentation generation.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-cyan-300 text-sm">
            Project Managers
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Coordination Support
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            PMs use AI-Pod
            for sprint tracking,
            meeting facilitation,
            blocker visibility,
            and stakeholder communication drafts.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-purple-300 text-sm">
            Leadership
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Executive Visibility
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Leadership teams retrieve
            summarized project health,
            risks,
            timelines,
            escalation context,
            and operational insights.

          </p>

        </div>

      </div>

      <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10">

        <h3 className="text-3xl font-semibold">
          Daily Operational Usage
        </h3>

        <div className="mt-10 space-y-6">

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <p className="text-gray-300">
              Engineers invoke AI-Pod during implementation workflows.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            <p className="text-gray-300">
              Meeting discussions are summarized into structured memory.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <p className="text-gray-300">
              Approval workflows validate outbound communication.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <p className="text-gray-300">
              AI-generated outputs remain traceable and auditable.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default TeamUsage;