function ProblemStatement() {
  return (
    <section
      id="problem"
      className="mb-28 border-t border-white/10 pt-20"
    >

      {/* Heading */}
      <div className="max-w-4xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Problem Statement
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Engineering Context Is Fragmented Across Systems
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          Modern engineering teams operate across emails,
          chat systems, meetings, pull requests,
          trackers, and documentation platforms.
          Critical project context becomes distributed
          across disconnected systems, making
          coordination expensive and inefficient.

        </p>

      </div>

      {/* Problem Cards */}
      <div className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Repeated Context Transfer
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            New engineers and stakeholders repeatedly
            depend on senior team members to understand
            project decisions, blockers, dependencies,
            and implementation history.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Lost Meeting Outcomes
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Decisions, risks, and action items discussed
            during meetings are often delayed,
            undocumented, or inconsistently tracked.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Manual Coordination Overhead
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Project managers and engineers spend
            significant effort reconstructing status,
            preparing updates, following up on blockers,
            and gathering context before communication.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Unsafe Generic AI Tools
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Generic AI assistants lack project-scoped
            memory, approval governance,
            enterprise access control,
            and operational safety guarantees.

          </p>

        </div>

      </div>

      {/* Conclusion */}
      <div className="mt-16 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-10">

        <h3 className="text-3xl font-semibold">
          Why AI Engineering Pod Exists
        </h3>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed">

          AI Engineering Pod addresses this challenge
          by operating as a controlled enterprise AI teammate
          capable of retrieving context,
          generating drafts,
          assisting engineering workflows,
          facilitating meetings,
          and coordinating communication —
          only when explicitly invoked
          through approved enterprise channels.

        </p>

      </div>

    </section>
  );
}

export default ProblemStatement;