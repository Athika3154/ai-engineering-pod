function Features() {
  return (
    <section
      id="features"
      className="relative z-10 px-8 py-28 border-t border-white/10 overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full"></div>

      {/* Heading */}
      <div className="relative z-10 max-w-4xl">

        <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase">
          AI Specialist Agents
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Autonomous AI Personas
        </h2>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          Instead of one generic chatbot, the platform uses
          specialized AI agents designed for communication,
          meetings, coding, documentation, scrum reporting,
          and contextual project intelligence.
        </p>

      </div>

      {/* Grid */}
      <div className="relative z-10 mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="group rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-blue-500/30 transition duration-500">

          <div className="w-16 h-16 rounded-3xl border border-blue-500/20 bg-blue-500/10 flex items-center justify-center mb-8">

            <div className="w-4 h-4 rounded-full bg-blue-400 group-hover:scale-125 transition duration-500"></div>

          </div>

          <h3 className="text-3xl font-semibold">
            Communication Assistant
          </h3>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Drafts professional emails, summarizes threads,
            prepares stakeholder updates, and generates
            approval-gated enterprise communication workflows.
          </p>

        </div>

        {/* Card 2 */}
        <div className="group rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-cyan-500/30 transition duration-500">

          <div className="w-16 h-16 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center mb-8">

            <div className="w-4 h-4 rounded-full bg-cyan-400 group-hover:scale-125 transition duration-500"></div>

          </div>

          <h3 className="text-3xl font-semibold">
            Meeting Facilitator
          </h3>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Generates agendas, extracts decisions,
            identifies blockers, and produces
            approval-ready meeting documentation.
          </p>

        </div>

        {/* Card 3 */}
        <div className="group rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-purple-500/30 transition duration-500">

          <div className="w-16 h-16 rounded-3xl border border-purple-500/20 bg-purple-500/10 flex items-center justify-center mb-8">

            <div className="w-4 h-4 rounded-full bg-purple-400 group-hover:scale-125 transition duration-500"></div>

          </div>

          <h3 className="text-3xl font-semibold">
            Coding Assistant
          </h3>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Reviews pull requests, explains code,
            suggests fixes, generates tests,
            and accelerates engineering workflows.
          </p>

        </div>

        {/* Card 4 */}
        <div className="group rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-pink-500/30 transition duration-500">

          <div className="w-16 h-16 rounded-3xl border border-pink-500/20 bg-pink-500/10 flex items-center justify-center mb-8">

            <div className="w-4 h-4 rounded-full bg-pink-400 group-hover:scale-125 transition duration-500"></div>

          </div>

          <h3 className="text-3xl font-semibold">
            Documentation Agent
          </h3>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Generates API docs, README files,
            architecture documents, release notes,
            and enterprise knowledge artifacts.
          </p>

        </div>

        {/* Card 5 */}
        <div className="group rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-yellow-500/30 transition duration-500">

          <div className="w-16 h-16 rounded-3xl border border-yellow-500/20 bg-yellow-500/10 flex items-center justify-center mb-8">

            <div className="w-4 h-4 rounded-full bg-yellow-400 group-hover:scale-125 transition duration-500"></div>

          </div>

          <h3 className="text-3xl font-semibold">
            Scrum Master
          </h3>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Tracks blockers, compares sprint baselines,
            prepares reports, and generates
            executive engineering summaries.
          </p>

        </div>

        {/* Card 6 */}
        <div className="group rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:border-green-500/30 transition duration-500">

          <div className="w-16 h-16 rounded-3xl border border-green-500/20 bg-green-500/10 flex items-center justify-center mb-8">

            <div className="w-4 h-4 rounded-full bg-green-400 group-hover:scale-125 transition duration-500"></div>

          </div>

          <h3 className="text-3xl font-semibold">
            Context Provider
          </h3>

          <p className="mt-5 text-gray-400 leading-relaxed">
            Retrieves organizational memory,
            explains decisions, surfaces blockers,
            and provides grounded engineering context.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;