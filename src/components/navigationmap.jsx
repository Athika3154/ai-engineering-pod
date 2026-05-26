// src/components/navigationmap.jsx

function NavigationMap() {
  return (
    <section
      id="navigation"
      className="mb-28 border-t border-white/10 pt-20"
    >

      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Documentation Navigation
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Documentation Structure Overview
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          The documentation portal is organized
          into architecture,
          governance,
          workflow orchestration,
          enterprise security,
          semantic memory,
          and operational collaboration domains.

        </p>

      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-blue-300 text-sm">
            Foundation
          </p>

          <div className="mt-6 space-y-4 text-gray-300">

            <p>• Overview</p>
            <p>• Problem Statement</p>
            <p>• Product Direction</p>
            <p>• System Principles</p>

          </div>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-cyan-300 text-sm">
            Architecture
          </p>

          <div className="mt-6 space-y-4 text-gray-300">

            <p>• Architecture Overview</p>
            <p>• Invocation Model</p>
            <p>• Process Flow</p>
            <p>• Memory & Knowledge</p>

          </div>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-purple-300 text-sm">
            Operations
          </p>

          <div className="mt-6 space-y-4 text-gray-300">

            <p>• AI Personas</p>
            <p>• Governance</p>
            <p>• Security Architecture</p>
            <p>• Enterprise Workflows</p>

          </div>

        </div>

      </div>

      <div className="mt-16 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-10">

        <h3 className="text-3xl font-semibold">
          Portal Objective
        </h3>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed">

          This portal acts as the centralized
          engineering reference for architecture,
          governance,
          orchestration behavior,
          workflow execution,
          enterprise AI collaboration,
          and operational design principles
          of AI Engineering Pod.

        </p>

      </div>

    </section>
  );
}

export default NavigationMap;