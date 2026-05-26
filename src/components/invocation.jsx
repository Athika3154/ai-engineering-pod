function Invocation() {
  return (
    <section
      id="invocation"
      className="mb-28 border-t border-white/10 pt-20"
    >

      {/* Heading */}
      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Invocation Model
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Explicit Enterprise AI Invocation
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          AI Engineering Pod operates using an explicit
          invocation model. The system responds only when
          directly mentioned through approved enterprise
          communication channels such as Zoho Mail
          and Zoho Cliq.

        </p>

      </div>

      {/* Invocation Surfaces */}
      <div className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-blue-300 text-sm">
            Chat Invocation
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Zoho Cliq Mentions
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Users invoke AI-Pod through explicit
            chat mentions such as:

          </p>

          <div className="mt-6 rounded-2xl bg-black/40 border border-white/10 p-5">

            <code className="text-green-300">
              @AI-Pod give full context on the payment API delay
            </code>

          </div>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-cyan-300 text-sm">
            Email Invocation
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Mailbox Inclusion
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            AI-Pod can be invoked by including
            its enterprise mailbox in email
            workflows.

          </p>

          <div className="mt-6 rounded-2xl bg-black/40 border border-white/10 p-5">

            <code className="text-green-300">
              ai-pod@company.com
            </code>

          </div>

        </div>

      </div>

      {/* Allowed Behaviors */}
      <div className="mt-20">

        <h3 className="text-3xl font-semibold">
          Supported Invocation Behaviors
        </h3>

        <div className="mt-10 space-y-5">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-300">
              @AI-Pod summarize this discussion
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-300">
              @AI-Pod draft a client response for this delay
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-300">
              @AI-Pod prepare agenda for tomorrow sprint review
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-gray-300">
              @AI-Pod generate README for the auth module
            </p>
          </div>

        </div>

      </div>

      {/* Safety Rules */}
      <div className="mt-20 rounded-3xl border border-red-500/20 bg-red-500/10 p-10">

        <h3 className="text-3xl font-semibold">
          Non-Invocation Safety Rules
        </h3>

        <div className="mt-8 space-y-5 text-gray-300">

          <p>
            • AI-Pod must not respond without explicit invocation.
          </p>

          <p>
            • AI-Pod must not send external communication automatically.
          </p>

          <p>
            • Unauthorized users and channels are blocked before execution.
          </p>

          <p>
            • Messages outside approved project scope are ignored.
          </p>

          <p>
            • External actions always pass through approval workflows.
          </p>

        </div>

      </div>

      {/* Silent Context Storage */}
      <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10">

        <h3 className="text-3xl font-semibold">
          Passive Context Ingestion
        </h3>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed">

          When not explicitly invoked,
          AI-Pod may silently ingest approved
          project context such as decisions,
          blockers, risks, action items,
          and technical discussions
          without generating visible responses.

        </p>

      </div>

    </section>
  );
}

export default Invocation;