// src/components/layout.jsx

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}
      <aside className="w-[320px] border-r border-white/10 bg-[#0a0a0a] sticky top-0 h-screen overflow-y-auto hidden lg:block">

        {/* Logo */}
        <div className="px-8 py-8 border-b border-white/10">

          <h1 className="text-3xl font-bold leading-tight">

            <span className="text-white">
              AI
            </span>

            <span className="text-blue-400 ml-2">
              Engineering
            </span>

            <span className="text-gray-500 ml-2">
              Pod
            </span>

          </h1>

          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Enterprise AI Documentation Portal
          </p>

        </div>

        {/* Navigation */}
        <nav className="px-5 py-8 space-y-2">

          <a
            href="#overview"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            Overview
          </a>

          <a
            href="#problem"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            Problem Statement
          </a>

          <a
            href="#direction"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            Product Direction
          </a>

          <a
            href="#principles"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            System Principles
          </a>

          <a
            href="#architecture"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            Architecture
          </a>

          <a
            href="#invocation"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            Invocation Model
          </a>

          <a
            href="#processflow"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            Process Flow
          </a>

          <a
            href="#memory"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            Memory & Knowledge
          </a>

          <a
            href="#personas"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            AI Personas
          </a>

          <a
            href="#workflows"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            Workflows
          </a>

          <a
            href="#usecases"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            Use Cases
          </a>

          <a
            href="#governance"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            Governance
          </a>

          <a
            href="#security"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            Security
          </a>

          <a
            href="#techstack"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            Tech Stack
          </a>

          <a
            href="#benefits"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            Operational Benefits
          </a>

          <a
            href="#roadmap"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            Roadmap
          </a>

          <a
            href="#appendix"
            className="block px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 transition"
          >
            Appendix
          </a>

        </nav>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 min-w-0">

        {/* TOP BAR */}
        <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur-xl">

          <div className="px-8 py-5 flex items-center justify-between">

            {/* Search */}
            <div className="w-full max-w-xl">

              <input
                type="text"
                placeholder="Search architecture, workflows, governance..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 outline-none focus:border-blue-500/50 text-sm text-gray-300 placeholder:text-gray-500"
              />

            </div>

            {/* Status */}
            <div className="hidden md:flex items-center gap-3 ml-6 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-300 text-sm">

              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

              Documentation Active

            </div>

          </div>

        </header>

        {/* CONTENT */}
        <div className="px-8 py-12 max-w-6xl">

          {children}

        </div>

      </main>

    </div>
  );
}

export default Layout;