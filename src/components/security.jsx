function Security() {
  return (
    <section
      id="security"
      className="relative z-10 px-8 py-28 border-t border-white/10 overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-green-500/10 blur-[180px] rounded-full"></div>

      {/* Heading */}
      <div className="relative z-10 max-w-4xl">

        <p className="text-green-400 text-sm tracking-[0.3em] uppercase">
          Security & Governance
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Enterprise-Grade AI Safety Architecture
        </h2>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          Every workflow is protected through RBAC,
          approval-gated communication, encryption,
          auditability, least-privilege IAM policies,
          and enterprise observability controls.
        </p>

      </div>

      {/* Grid */}
      <div className="relative z-10 mt-20 grid lg:grid-cols-2 gap-10">

        {/* LEFT PANEL */}
        <div className="rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

          <div className="space-y-10">

            {/* Item 1 */}
            <div className="flex gap-5">

              <div className="w-16 h-16 rounded-3xl border border-green-500/20 bg-green-500/10 flex items-center justify-center flex-shrink-0">

                <div className="w-4 h-4 rounded-full bg-green-400"></div>

              </div>

              <div>

                <h3 className="text-3xl font-semibold">
                  Approval-Gated Actions
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  External communication is never sent automatically.
                  Step Functions pause workflows until approve,
                  edit, or reject decisions are completed.
                </p>

              </div>

            </div>

            {/* Item 2 */}
            <div className="flex gap-5">

              <div className="w-16 h-16 rounded-3xl border border-blue-500/20 bg-blue-500/10 flex items-center justify-center flex-shrink-0">

                <div className="w-4 h-4 rounded-full bg-blue-400"></div>

              </div>

              <div>

                <h3 className="text-3xl font-semibold">
                  Role-Based Access Control
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  Project-level authorization ensures users
                  only retrieve context and workflows
                  within approved enterprise scopes.
                </p>

              </div>

            </div>

            {/* Item 3 */}
            <div className="flex gap-5">

              <div className="w-16 h-16 rounded-3xl border border-purple-500/20 bg-purple-500/10 flex items-center justify-center flex-shrink-0">

                <div className="w-4 h-4 rounded-full bg-purple-400"></div>

              </div>

              <div>

                <h3 className="text-3xl font-semibold">
                  Encryption & Secrets
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  KMS encryption, Secrets Manager,
                  and least-privilege IAM policies secure
                  storage, credentials, and integrations.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="rounded-[36px] border border-white/10 bg-black/40 backdrop-blur-2xl p-8">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">

            <div>

              <p className="text-sm text-gray-500">
                Governance Workflow
              </p>

              <h3 className="mt-2 text-3xl font-semibold">
                External Email Approval
              </h3>

            </div>

            <div className="px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-300 text-sm">

              Pending Approval

            </div>

          </div>

          {/* Workflow */}
          <div className="mt-8 space-y-6">

            {/* Step */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <p className="text-sm text-gray-500">
                Request
              </p>

              <h4 className="mt-3 text-xl font-semibold">
                Draft client response for revised ETA
              </h4>

            </div>

            {/* Arrow */}
            <div className="flex justify-center text-gray-600 text-2xl">
              ↓
            </div>

            {/* AI Draft */}
            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">

              <p className="text-sm text-blue-300">
                AI Draft Generated
              </p>

              <h4 className="mt-3 text-xl font-semibold">
                Communication Assistant completed response draft
              </h4>

            </div>

            {/* Arrow */}
            <div className="flex justify-center text-gray-600 text-2xl">
              ↓
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-3 gap-4">

              <button className="rounded-2xl border border-green-500/20 bg-green-500/10 py-4 text-green-300 font-medium hover:bg-green-500/20 transition duration-300">

                Approve

              </button>

              <button className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 py-4 text-yellow-300 font-medium hover:bg-yellow-500/20 transition duration-300">

                Edit

              </button>

              <button className="rounded-2xl border border-red-500/20 bg-red-500/10 py-4 text-red-300 font-medium hover:bg-red-500/20 transition duration-300">

                Reject

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Security;