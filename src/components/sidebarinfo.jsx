// src/components/sidebarinfo.jsx

function SidebarInfo() {
  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">

      <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
        Documentation Scope
      </p>

      <h3 className="mt-5 text-3xl font-semibold">
        Internal Engineering Knowledge Portal
      </h3>

      <p className="mt-6 text-gray-400 leading-relaxed">

        This portal acts as the centralized
        reference for architecture,
        workflows,
        governance,
        security,
        orchestration,
        and operational behavior
        of AI Engineering Pod.

      </p>

      <div className="mt-10 space-y-4">

        <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
          <p className="text-gray-300">
            Enterprise Architecture Reference
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
          <p className="text-gray-300">
            Workflow & Invocation Documentation
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
          <p className="text-gray-300">
            Governance & Security Standards
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
          <p className="text-gray-300">
            AI Persona Operational Model
          </p>
        </div>

      </div>

    </div>
  );
}

export default SidebarInfo;