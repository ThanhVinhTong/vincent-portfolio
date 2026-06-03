import { ArrowRight, Code2, ExternalLink, Lightbulb, Rocket, Users } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";

const interviewPrepUrl = "https://tech-interview-prepare.vercel.app/#/";

const practiceAreas = [
  {
    icon: Code2,
    title: "DSA Patterns",
    description:
      "Practice by recognizing the shape of a problem first: pointers, windows, graphs, heaps, dynamic programming, and search.",
  },
  {
    icon: Lightbulb,
    title: "System Tradeoffs",
    description:
      "Compare reliability, latency, consistency, storage, caching, and operational cost before choosing an architecture.",
  },
  {
    icon: Users,
    title: "Clear Explanation",
    description:
      "Structure answers so teammates and interviewers can follow constraints, options, decisions, and failure cases.",
  },
  {
    icon: Rocket,
    title: "Production Mindset",
    description:
      "Connect practice back to real engineering: testing, observability, deployment, user impact, and maintainability.",
  },
];

const problemSolvingLoop = [
  "Clarify the goal, inputs, constraints, and success criteria.",
  "Break the problem into a simple model before writing code.",
  "Compare at least two approaches with complexity and tradeoffs.",
  "Implement, test edge cases, and explain the decision clearly.",
];

export const ProblemSolving = ({ onTabChange }) => {
  return (
    <section id="problem-solving" className="section-shell border-y border-border/70">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <div className="section-kicker">Problem solving lab</div>
            <h2 className="section-title-sm mt-4">
              DSA and system design practice,{" "}
              <span className="font-serif text-primary">built into my workflow.</span>
            </h2>
            <div className="mt-5 space-y-4 section-copy">
              <p>
                I built a dedicated interview-prep site to train the way I want
                to solve engineering problems: identify patterns, reason through
                constraints, and communicate tradeoffs before jumping to code.
              </p>
              <p>
                The goal is bigger than interview practice. It is a repeatable
                process for becoming the engineer who can turn ambiguous
                problems into simple, working systems.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-4">
              <Button
                as="a"
                size="lg"
                href={interviewPrepUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Practice Site
                <ExternalLink className="h-5 w-5" />
              </Button>
              <AnimatedBorderButton type="button" onClick={() => onTabChange?.("projects")}>
                Related Projects
                <ArrowRight className="h-5 w-5" />
              </AnimatedBorderButton>
            </div>
          </div>

          <div className="panel overflow-hidden">
            <div className="technical-grid border-b border-border p-5 md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-primary">tech-interview-prepare</p>
                  <h3 className="mt-2 text-2xl font-semibold">Practice tracks</h3>
                </div>
                <a
                  href={interviewPrepUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-button"
                  aria-label="Open Tech Interview Prepare"
                  title="Open practice site"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid gap-px bg-border sm:grid-cols-2">
              {practiceAreas.map((area) => (
                <div key={area.title} className="bg-card p-5 md:p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-primary/35 bg-primary/10">
                    <area.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-base font-semibold">{area.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.74fr_1fr] lg:items-start">
          <div>
            <p className="section-kicker">How I approach hard problems</p>
            <h3 className="mt-4 text-2xl font-semibold">
              A repeatable loop for interviews and production work.
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {problemSolvingLoop.map((step, index) => (
              <div key={step} className="panel-soft p-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
