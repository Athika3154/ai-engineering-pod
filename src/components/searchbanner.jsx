// src/components/searchbanner.jsx

function SearchBanner() {
  return (
    <section className="mb-20">

      <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-10">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Enterprise Documentation Portal
        </p>

        <h1 className="mt-5 text-6xl font-bold leading-tight max-w-5xl">
          Autonomous AI Engineering Pod
        </h1>

        <p className="mt-8 max-w-4xl text-xl text-gray-400 leading-relaxed">

          Centralized engineering documentation
          for enterprise AI orchestration,
          invocation workflows,
          governance,
          semantic memory,
          and event-driven architecture.

        </p>

        <div className="mt-10">

          <div className="max-w-2xl rounded-2xl border border-white/10 bg-black/40 px-6 py-5">

            <input
              type="text"
              placeholder="Search architecture, workflows, governance..."
              className="w-full bg-transparent outline-none text-gray-300 placeholder:text-gray-500"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default SearchBanner;