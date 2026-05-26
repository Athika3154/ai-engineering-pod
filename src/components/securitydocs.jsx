// src/components/securitydocs.jsx

function SecurityDocs() {
  return (
    <section
      id="security"
      className="mb-28 border-t border-white/10 pt-20"
    >

      <div className="max-w-5xl">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Security Architecture
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Enterprise Security & Access Control
        </h2>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed">

          AI Engineering Pod follows enterprise-grade
          security principles including authentication,
          authorization,
          encryption,
          auditability,
          least privilege access,
          and approval-gated outbound communication.

        </p>

      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Authentication
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Zoho OAuth validation,
            webhook signature validation,
            API Gateway authorization,
            and verified enterprise identities
            protect workflow access.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Authorization
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Requests are validated against
            project scope,
            user roles,
            approved workspaces,
            and enterprise RBAC policies
            before context retrieval.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Encryption
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            KMS encryption secures
            S3,
            DynamoDB,
            Aurora PostgreSQL,
            logs,
            and enterprise data storage layers.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Secrets Management
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Credentials,
            webhook tokens,
            database secrets,
            and integration keys
            are stored securely using
            AWS Secrets Manager.

          </p>

        </div>

      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Audit & Observability
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            CloudWatch,
            X-Ray,
            CloudTrail,
            and workflow audit tables
            provide traceability,
            metrics,
            logs,
            alarms,
            and operational monitoring.

          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-semibold">
            Egress Control
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">

            Only approved outbound integrations
            such as Zoho,
            GitHub,
            trackers,
            and enterprise systems
            are allowed through approval-gated workflows.

          </p>

        </div>

      </div>

      <div className="mt-20 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-10">

        <h3 className="text-3xl font-semibold">
          Enterprise Security Principles
        </h3>

        <div className="mt-8 space-y-5 text-gray-300">

          <p>• Least privilege IAM access</p>
          <p>• Project-scoped data isolation</p>
          <p>• Approval-gated external communication</p>
          <p>• Traceable audit logging</p>
          <p>• Prompt safety and validation checks</p>
          <p>• Retrieval-grounded AI responses</p>

        </div>

      </div>

    </section>
  );
}

export default SecurityDocs;