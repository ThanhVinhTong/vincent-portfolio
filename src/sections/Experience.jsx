const experiences = [
  {
    period: "Jul 2025 — Oct 2025",
    role: "Software Engineering Intern",
    company: "Lions Eye Institute • Perth, Australia",
    highlights: [
      {
        title: "Cross-Platform Medical Application",
        detail:
          "Co-engineered a cross-platform medical application using C++/Qt and Python, designing a robust SQLite persistence layer that centralized data from multiple ophthalmic instruments and reduced batch inspection time by 89%.",
      },
      {
        title: "Retinal Vessel Segmentation Pipeline",
        detail:
          "Developed a high-performance image processing pipeline utilizing an Attention U-Net and engineered modular preprocessing and evaluation scripts that achieved 83% mIoU across heterogeneous datasets.",
      },
      {
        title: "Internal Project Management Platform",
        detail:
          "Developed and implemented an internal full-stack project management platform with Next.js, ASP.NET Core, and PostgreSQL to centralize laboratory resources and schedules while streamlining project tracking for the team.",
      },
    ],
    technologies: [
      "C++",
      "Python",
      "Qt",
      "SQLite",
      "Attention U-Net",
      "Next.js",
      "ASP.NET Core",
      "PostgreSQL",
    ],
    current: false,
  },
  {
    period: "Aug 2023 — Oct 2023",
    role: "AI Software Engineer Intern",
    company: "Samsung Display Vietnam • Bac Ninh, Vietnam",
    highlights: [
      {
        title: "Automated Defect Detection",
        detail:
          "Architected and deployed a U-Net-based computer vision system for display panel defect detection, reducing manual inspection latency by 40% and standardizing production QA benchmarks.",
      },
      {
        title: "Internal Tracking Application",
        detail:
          "Developed a C#/.NET (WPF) desktop application with a SQL Server backend to centralize resource tracking, replacing fragmented spreadsheet workflows and improving cross-team operational visibility.",
      },
    ],
    technologies: [
      "U-Net",
      "Computer Vision",
      "WPF",
      "C#/.NET",
      "SQL Server",
    ],
    current: false,
  },
  {
    period: "Oct 2022 — Jun 2023",
    role: "Data Engineer Associate",
    company: "VNPT-Media • Hanoi, Vietnam",
    highlights: [
      {
        title: "Distributed Data Platform",
        detail:
          "Designed and maintained three distributed batch-processing pipelines using PySpark and Hadoop to ingest and transform 100M+ telecom records, achieving a 2x performance gain over legacy Pandas workflows.",
      },
      {
        title: "Recommendation Engine",
        detail:
          "Engineered a full-stack recommendation engine using FastAPI, Next.js, MongoDB, a ResNet50 model, and Selenium pipelines to eliminate dead-end user experiences by surfacing real-time alternatives for out-of-stock items.",
      },
    ],
    technologies: [
      "Python",
      "PySpark",
      "Hadoop",
      "Pandas",
      "FastAPI",
      "Next.js",
      "MongoDB",
      "Selenium",
      "ResNet50",
      "Batch Processing",
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground animate-fade-in animation-delay-200"
          >
            A timeline of my growth across software engineering, AI/computer
            vision, and data engineering in real-world research and production
            environments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <ul className="mt-4 space-y-3 text-sm text-muted-foreground text-left list-disc pl-5">
                      {exp.highlights.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <span className="text-foreground font-medium">
                            {item.title}:{" "}
                          </span>
                          {item.detail}
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};