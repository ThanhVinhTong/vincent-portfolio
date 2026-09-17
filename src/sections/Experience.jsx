const experiences = [
  {
    period: "Dec 2025 - Present",
    role: "Software Engineer",
    company: "Rate Pulse, Australia",
    highlights: [
      {
        title: "Self-hosted FX platform",
        detail:
          "Designed and self-hosted a not-for-profit FX platform helping international users compare exchange rates, fees, taxes, historical trends, and market news.",
      },
      {
        title: "Backend services and caching",
        detail:
          "Developed backend microservices in Go using REST and gRPC, contributed to building and maintaining PostgreSQL databases, and cached frequently accessed, rarely changing data in Redis. Reduced P95 latency at 20 QPS from 7-10 seconds to approximately 250 ms.",
      },
      {
        title: "Automated data pipelines",
        detail:
          "Developed a multi-source scraping engine to collect and normalise structured market data using Python, Selenium, and GitHub Actions.",
      },
      {
        title: "Cloud infrastructure and CI/CD",
        detail:
          "Built CI/CD pipelines with GitHub Actions and migrated services from AWS to a lower-cost OVHcloud deployment using Docker and Kubernetes, reducing infrastructure costs.",
      },
      {
        title: "Responsive frontend",
        detail:
          "Built and deployed a responsive frontend using Next.js and TypeScript on Cloudflare, with server-side rendering, parallel data fetching across backend services, and typed API responses to reduce integration errors.",
      },
    ],
    technologies: [
      "Go",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "gRPC",
      "Next.js",
      "TypeScript",
      "Cloudflare",
      "Python",
      "Selenium",
      "Docker",
      "GitHub Actions",
      "Kubernetes",
      "AWS",
      "OVHcloud",
    ],
  },
  {
    period: "Jul 2025 - Nov 2025",
    role: "Software Engineer Intern",
    company: "Lions Eye Institute, Australia",
    highlights: [
      {
        title: "Internal review application",
        detail:
          "Developed an internal web application using Python and FastAPI with an embedded SQLite database to minimise memory usage and database network I/O overhead on a low-resource server. Reduced the review process from around one hour to approximately ten minutes.",
      },
      {
        title: "Laboratory workflow application",
        detail:
          "Developed an internal web application using Next.js, ASP.NET Core, and PostgreSQL for managing laboratory workflows.",
      },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "SQLite",
      "Next.js",
      "ASP.NET Core",
      "PostgreSQL",
    ],
  },
  {
    period: "Aug 2023 - Oct 2023",
    role: "Software Engineer Intern",
    company: "Samsung Display, Vietnam",
    highlights: [
      {
        title: "Project management application",
        detail:
          "Developed an end-to-end desktop application using .NET and a SQL Server database to manage projects.",
      },
      {
        title: "Display-panel defect detection",
        detail:
          "Deployed an AI model for display-panel defect detection, reducing manual inspection time by 40%.",
      },
    ],
    technologies: ["AI Model", ".NET", "SQL Server"],
  },
  {
    period: "Oct 2022 - Jun 2023",
    role: "Data Engineer",
    company: "VNPT Group, Vietnam",
    highlights: [
      {
        title: "Distributed data platform",
        detail:
          "Developed and migrated large-scale data pipelines processing approximately 100 million records daily using Pandas, Spark, and Hadoop, reducing pipeline runtime by a factor of three.",
      },
      {
        title: "AI service integration",
        detail:
          "Developed backend services in Python and FastAPI to wrap core PyTorch AI models.",
      },
    ],
    technologies: [
      "Python",
      "Pandas",
      "Spark",
      "Hadoop",
      "FastAPI",
      "PyTorch",
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
            Backend and cloud engineering,{" "}
            <span className="font-serif text-primary">grounded in real work.</span>
          </h2>
          <p className="section-copy mt-4">
            Experience building backend services and data pipelines, deploying
            cloud infrastructure, and automating delivery, alongside application
            development and AI integration across research and production.
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
