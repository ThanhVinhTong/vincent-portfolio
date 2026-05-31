const experiences = [
  {
    period: "Jul 2025 - Nov 2025",
    role: "Software Engineer",
    company: "Lions Eye Institute, Perth, Australia",
    highlights: [
      {
        title: "Cross-platform medical application",
        detail:
          "Co-engineered a C++/Qt and Python application with a SQLite persistence layer that centralised data from multiple ophthalmic instruments and reduced batch inspection time by 89%.",
      },
      {
        title: "Retinal vessel segmentation pipeline",
        detail:
          "Developed preprocessing and evaluation scripts around a pretrained model, reaching 83% accuracy across heterogeneous retinal imaging datasets.",
      },
      {
        title: "Internal project management platform",
        detail:
          "Built a Next.js, ASP.NET Core, and PostgreSQL platform to centralise laboratory resources, schedules, and project tracking.",
      },
    ],
    technologies: [
      "C++",
      "Python",
      "Qt",
      "SQLite",
      "Pretrained Model",
      "Next.js",
      "ASP.NET Core",
      "PostgreSQL",
    ],
  },
  {
    period: "Aug 2023 - Oct 2023",
    role: "Software Engineer Intern",
    company: "Samsung Corporation, Bac Ninh, Vietnam",
    highlights: [
      {
        title: "Automated defect detection",
        detail:
          "Architected and deployed a pretrained-model computer vision system for display panel defect detection, reducing manual inspection latency by 40%.",
      },
      {
        title: "Internal tracking application",
        detail:
          "Developed a C#/.NET WPF desktop application with a SQL Server backend to replace fragmented spreadsheet workflows.",
      },
    ],
    technologies: ["Pretrained Model", "Computer Vision", "WPF", "C#/.NET", "SQL Server"],
  },
  {
    period: "Oct 2022 - Jun 2023",
    role: "Data Engineer",
    company: "Vietnam Posts and Telecommunications Group, Hanoi, Vietnam",
    highlights: [
      {
        title: "Distributed data platform",
        detail:
          "Built PySpark and Hadoop pipelines to process 100M+ telecom records, improving performance 2x and supporting downstream backend services.",
      },
      {
        title: "Recommendation engine",
        detail:
          "Engineered a FastAPI, Next.js, MongoDB, and Selenium recommendation system that surfaced real-time alternatives for out-of-stock items.",
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
      "Batch Processing",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-shell border-b border-border/70">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <div className="section-kicker">Experience</div>
          <h2 className="section-title-sm mt-4">
            Engineering work across{" "}
            <span className="font-serif text-primary">research and production.</span>
          </h2>
          <p className="section-copy mt-4">
            A timeline of software engineering, AI/computer vision, and data
            engineering work in real teams and real operating environments.
          </p>
        </div>

        <div className="relative">
          <div className="timeline-glow absolute bottom-0 left-0 top-0 w-px bg-primary/55 md:left-[13.5rem]" />

          <div className="space-y-6">
            {experiences.map((exp) => (
              <article
                key={`${exp.role}-${exp.company}`}
                className="relative grid gap-4 pl-8 md:grid-cols-[12rem_1fr] md:gap-8 md:pl-0"
              >
                <div className="absolute left-0 top-2 h-3 w-3 rounded-full border-4 border-background bg-primary md:left-[13.5rem] md:-translate-x-1/2" />
                <div className="text-sm text-primary md:pt-1 md:text-right">{exp.period}</div>

                <div className="panel p-5 md:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-4">
                    {exp.highlights.map((item) => (
                      <div key={item.title} className="border-l border-primary/45 pl-4">
                        <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="chip text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
