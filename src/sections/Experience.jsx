const experiences = [
  {
    period: "Jun 2025 - Present",
    role: "Software Engineer",
    company: "Rate Pulse, Perth, Australia",
    highlights: [
      {
        title: "Production FX monitoring platform",
        detail:
          "Built and launched a production FX monitoring platform that consolidates fragmented rate-checking workflows with centralised exchange-rate comparison, conversion, historical trends, and macro-news context.",
      },
      {
        title: "Secure read-heavy backend",
        detail:
          "Developed Go backend microservices using REST and gRPC, contributed to PostgreSQL data services, and used Redis caching to reduce P95 latency at 20 QPS from 7-10 seconds to approximately 250 ms.",
      },
      {
        title: "Market-context dashboard",
        detail:
          "Developed a Next.js, React, and TypeScript dashboard that helps users move from rate discovery to market context through source-aware rate tables, converter flows, historical charts, and macro-news feeds.",
      },
      {
        title: "Automated data pipelines",
        detail:
          "Built Python Selenium pipelines to collect and normalise multi-source FX data into PostgreSQL and market-intelligence snapshots into MongoDB.",
      },
      {
        title: "Production delivery automation",
        detail:
          "Built CI/CD pipelines with GitHub Actions and migrated services from AWS to a lower-cost DigitalOcean deployment using Docker and Kubernetes.",
      },
    ],
    technologies: [
      "Go/Gin",
      "PostgreSQL/sqlc",
      "Redis",
      "Paseto/JWT",
      "Brevo",
      "REST APIs",
      "gRPC",
      "Protocol Buffers",
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "Selenium",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "Kubernetes",
      "DigitalOcean",
    ],
  },
  {
    period: "Jan 2025 - May 2025",
    role: "Software Engineer Intern",
    company: "Lions Eye Institute, Perth, Australia",
    highlights: [
      {
        title: "Cross-platform medical application",
        detail:
          "Developed an internal FastAPI application backed by embedded SQLite for a low-resource server, reducing the review process from around one hour to approximately ten minutes.",
      },
      {
        title: "Retinal vessel segmentation pipeline",
        detail:
          "Developed an image-processing pipeline around a pretrained segmentation model, with modular preprocessing and evaluation scripts that achieved 83% accuracy across heterogeneous retinal imaging datasets.",
      },
      {
        title: "Internal project management platform",
        detail:
          "Delivered a Next.js, ASP.NET Core, and PostgreSQL platform to centralise laboratory resources and schedules while reducing team context-switching.",
      },
    ],
    technologies: [
      "Python",
      "FastAPI",
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
          "Deployed a pretrained computer vision system for display panel defect detection, reducing manual inspection latency by 40% and standardising production QA benchmarks.",
      },
      {
        title: "Internal tracking application",
        detail:
          "Developed a C#/.NET WPF desktop application with a SQL Server backend to centralise resource tracking, replacing fragmented spreadsheet workflows and improving cross-team operational visibility.",
      },
    ],
    technologies: ["Pretrained Model", "Computer Vision", "WPF", "C#/.NET", "SQL Server"],
  },
  {
    period: "Jun 2022 - Jun 2023",
    role: "Data Engineer",
    company: "Vietnam Posts and Telecommunications Group, Hanoi, Vietnam",
    highlights: [
      {
        title: "Distributed data platform",
        detail:
          "Developed and migrated big-data pipelines processing approximately 100 million records daily from Pandas to Spark and Hadoop, reducing runtime by roughly three times.",
      },
      {
        title: "AI service integration",
        detail:
          "Developed backend services in Python and FastAPI to wrap core PyTorch AI models.",
      },
    ],
    technologies: [
      "Python",
      "PySpark",
      "Hadoop",
      "FastAPI",
      "PyTorch",
    ],
  },
  {
    period: "Apr 2022 - May 2022",
    role: "Software Engineer Intern",
    company: "Samsung, Vietnam",
    highlights: [
      {
        title: "Just Jump Android game",
        detail:
          "Developed an offline casual Android game inspired by Bounce using Kotlin, separating player movement, obstacles, scoring, and game-state logic to simplify future updates.",
      },
    ],
    technologies: ["Kotlin", "Android", "Game Development"],
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
            A timeline of software engineering, product delivery, AI/computer
            vision, and data engineering work in real operating environments.
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
