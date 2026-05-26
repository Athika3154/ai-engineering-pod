import Layout from "./components/layout";

import ProblemStatement from "./components/problemstatement";
import ProductDirection from "./components/productdirection";
import Architecture from "./components/architecture";
import Invocation from "./components/invocation";
import ProcessFlow from "./components/processflow";

import AgentPersonas from "./components/agentpersonas";
import Workflows from "./components/workflows";
import TeamUsage from "./components/teamusage";
import UseCases from "./components/usecases";

import Governance from "./components/governance";
import SecurityDocs from "./components/securitydocs";
import SystemPrinciples from "./components/systemprinciples";

import MemoryKnowledge from "./components/memoryknowledge";
import TechStack from "./components/techstack";

import OperationalBenefits from "./components/operationalbenefits";
import ImplementationStatus from "./components/implementationstatus";
import RoadmapDocs from "./components/roadmapdocs";

import NavigationMap from "./components/navigationmap";
import References from "./components/references";
import Appendix from "./components/appendix";
import Conclusion from "./components/conclusion";

import FooterDocs from "./components/footerdocs";

function App() {
  return (
    <Layout>

      {/* OVERVIEW */}
      <section
        id="overview"
        className="mb-28"
      >

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Overview
        </p>

        <h1 className="mt-5 text-6xl font-bold leading-tight max-w-5xl">
          Autonomous AI Engineering Pod
        </h1>

        <p className="mt-8 text-xl text-gray-400 leading-relaxed max-w-4xl">

          AI Engineering Pod is an enterprise-focused
          autonomous AI orchestration platform
          designed to operate directly through
          communication channels such as
          email and enterprise chat systems.

        </p>

        <p className="mt-6 text-gray-500 leading-relaxed max-w-4xl">

          The platform enables governed AI-assisted
          engineering workflows including
          semantic context retrieval,
          meeting facilitation,
          workflow orchestration,
          coding assistance,
          documentation generation,
          and approval-gated enterprise communication.

        </p>

      </section>

      <NavigationMap />

      <ProblemStatement />

      <ProductDirection />

      <SystemPrinciples />

      <Architecture />

      <Invocation />

      <ProcessFlow />

      <MemoryKnowledge />

      <AgentPersonas />

      <Workflows />

      <UseCases />

      <TeamUsage />

      <Governance />

      <SecurityDocs />

      <TechStack />

      <OperationalBenefits />

      <ImplementationStatus />

      <RoadmapDocs />

      <References />

      <Appendix />

      <Conclusion />

      <FooterDocs />

    </Layout>
  );
}

export default App;