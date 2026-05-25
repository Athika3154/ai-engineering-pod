import { useState } from "react";

function Architecture() {

  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Static Website",
      subtitle: "Frontend Layer",
      color: "blue",
      description:
        "Hosted on S3 + CloudFront for enterprise-grade static delivery.",
    },

    {
      title: "Zoho Mail + Cliq",
      subtitle: "Invocation Layer",
      color: "cyan",
      description:
        "Users invoke AI workflows through mentions and email inclusion.",
    },

    {
      title: "API Gateway",
      subtitle: "Entry Layer",
      color: "yellow",
      description:
        "Validates enterprise requests and routes traffic securely.",
    },

    {
      title: "Lambda Router",
      subtitle: "Core Orchestrator",
      color: "purple",
      description:
        "Classifies workflows, creates events, and controls orchestration.",
    },

    {
      title: "EventBridge + SQS",
      subtitle: "Async Processing",
      color: "pink",
      description:
        "Buffers spikes and enables resilient asynchronous workflows.",
    },

    {
      title: "Step Functions",
      subtitle: "Workflow Engine",
      color: "green",
      description:
        "Coordinates retries, approvals, and long-running orchestration.",
    },

    {
      title: "Bedrock Agents",
      subtitle: "AI Runtime",
      color: "blue",
      description:
        "Specialized AI agents for coding, meetings, documentation, and context.",
    },

    {
      title: "Approval Gate",
      subtitle: "Governance",
      color: "red",
      description:
        "Human approval enforced before external communication delivery.",
    },
  ];

  return (
    <section
      id="architecture"
      className="relative z-10 px-8 py-32 border-t border-white/10 overflow-hidden"
    >

      {/* Massive Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      {/* Heading */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">

        <p className="text-blue-400 text-sm tracking-[0.3em] uppercase">
          Interactive Architecture
        </p>

        <h2 className="mt-5 text-5xl font-bold leading-tight">
          Event-Driven Autonomous AI Infrastructure
        </h2>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          Click through the orchestration pipeline to explore how
          requests move across the enterprise AI system.
        </p>

      </div>

      {/* Architecture Flow */}
      <div className="relative z-10 mt-24 flex flex-col items-center">

        {steps.map((step, index) => {

          const isActive = index <= activeStep;

          return (
            <div
              key={index}
              className="flex flex-col items-center"
            >

              {/* Card */}
              <button
                onClick={() => setActiveStep(index)}
                className={`w-[320px] rounded-[32px] border p-6 text-center backdrop-blur-2xl transition-all duration-500 hover:scale-105
                  
                  ${
                    isActive
                      ? `border-${step.color}-500/40 bg-${step.color}-500/10 shadow-[0_0_50px_rgba(59,130,246,0.2)]`
                      : "border-white/10 bg-white/5"
                  }
                  
                `}
              >

                {/* Step Number */}
                <div
                  className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center text-sm font-semibold mb-5
                  
                  ${
                    isActive
                      ? `bg-${step.color}-400 text-black`
                      : "bg-white/10 text-gray-400"
                  }
                  
                `}
                >

                  {index + 1}

                </div>

                {/* Subtitle */}
                <p
                  className={`text-sm
                  
                  ${
                    isActive
                      ? `text-${step.color}-300`
                      : "text-gray-500"
                  }
                  
                `}
                >

                  {step.subtitle}

                </p>

                {/* Title */}
                <h3 className="mt-3 text-3xl font-semibold">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {step.description}
                </p>

              </button>

              {/* Connection Line */}
              {index !== steps.length - 1 && (

                <div className="relative w-[3px] h-20 overflow-hidden">

                  <div
                    className={`absolute top-0 left-0 w-full transition-all duration-700
                      
                      ${
                        index < activeStep
                          ? "h-full bg-gradient-to-b from-blue-400 via-cyan-300 to-transparent"
                          : "h-0"
                      }
                      
                    `}
                  ></div>

                  <div className="absolute top-0 left-0 w-full h-full bg-white/10"></div>

                </div>

              )}

            </div>
          );
        })}

      </div>

      {/* Active Step Description */}
      <div className="relative z-10 mt-24 max-w-4xl mx-auto">

        <div className="rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10">

          <p className="text-sm text-blue-400 tracking-[0.3em] uppercase">
            Active Workflow Stage
          </p>

          <h3 className="mt-5 text-4xl font-bold">
            {steps[activeStep].title}
          </h3>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            {steps[activeStep].description}
          </p>

        </div>

      </div>

    </section>
  );
}

export default Architecture;