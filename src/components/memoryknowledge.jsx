// src/components/memoryknowledge.jsx

function MemoryKnowledge() {
  return (
    <section
      id="memory"
      className="mb-28 border-t border-white/10 pt-20"
    >

      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Memory & Knowledge Layer
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Enterprise Context & Semantic Retrieval
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          AI Engineering Pod separates
          short-term conversational memory
          from durable enterprise knowledge.
          This architecture enables scalable,
          retrieval-grounded AI workflows
          with project-scoped context isolation.

        </p>

      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-blue-300 text-sm">
            Short-Term Memory
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            DynamoDB Session Context
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            DynamoDB stores temporary
            conversational state,
            recent interactions,
            active workflow context,
            and multi-turn session memory
            using TTL-based expiration.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-cyan-300 text-sm">
            Long-Term Memory
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Aurora PostgreSQL + pgvector
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Durable project facts,
            risks,
            blockers,
            approvals,
            decisions,
            and semantic embeddings
            are stored in Aurora PostgreSQL
            with pgvector support.

          </p>

        </div>

      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-purple-300 text-sm">
            Semantic Retrieval
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Retrieval-Augmented Generation
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            AI workflows retrieve approved
            project-specific context
            from vectorized semantic memory
            before response generation,
            reducing hallucinations
            and improving grounded outputs.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-green-300 text-sm">
            Object Storage
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Amazon S3
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            S3 stores meeting transcripts,
            generated documents,
            workflow artifacts,
            audio recordings,
            static website assets,
            and archived outputs.

          </p>

        </div>

      </div>

      <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-10">

        <h3 className="text-3xl font-semibold">
          Enterprise Knowledge Guarantees
        </h3>

        <div className="mt-8 space-y-5 text-gray-300">

          <p>• Project-scoped semantic retrieval</p>
          <p>• Retrieval-grounded AI generation</p>
          <p>• TTL-based short-term memory cleanup</p>
          <p>• Durable enterprise fact storage</p>
          <p>• Semantic vector search support</p>
          <p>• Approved-context-only retrieval workflows</p>

        </div>

      </div>

    </section>
  );
}

export default MemoryKnowledge;