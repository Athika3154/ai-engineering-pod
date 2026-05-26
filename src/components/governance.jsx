// src/components/governance.jsx

function Governance() {
  return (
    <section
      id="governance"
      className="mb-28 border-t border-white/10 pt-20"
    >

      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Governance
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Human Approval & Enterprise Safety
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          AI Engineering Pod is designed with
          approval-gated enterprise governance.
          The system can draft, summarize,
          retrieve context, and prepare outputs,
          but cannot perform external communication
          without explicit human approval.

        </p>

      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-8">

          <h3 className="text-2xl font-semibold">
            External Communication Protection
          </h3>

          <p className="mt-4 text-gray-300 leading-relaxed">

            Emails, external chat updates,
            PR comments, documentation changes,
            and tracker updates require
            approval before execution.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Approval Workflows
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            AWS Step Functions pause workflows
            until an approver accepts,
            edits, regenerates,
            or rejects generated outputs.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            RBAC Enforcement
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Every request is validated against
            project scope,
            workspace access,
            approved channels,
            and enterprise authorization rules.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Traceable Auditability
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Generated outputs,
            approvals,
            timestamps,
            actors,
            and workflow actions
            are fully traceable through audit logs.

          </p>

        </div>

      </div>

      <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10">

        <h3 className="text-3xl font-semibold">
          Approval Lifecycle
        </h3>

        <div className="mt-10 space-y-6">

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <p className="text-gray-300">
              AI generates draft output.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            <p className="text-gray-300">
              Workflow pauses in Step Functions approval state.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <p className="text-gray-300">
              Approver reviews generated output.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <p className="text-gray-300">
              Output is approved, edited, or rejected.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <p className="text-gray-300">
              Only approved actions proceed to execution.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Governance;