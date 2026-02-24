const experiences = [
  {
    period: "Jul 2025 — Oct 2025",
    role: "Software Engineering Intern",
    company: "LIONS EYE INSTITUTE • Perth, Australia",
    highlights: [
      {
        title: "Medical Imaging Desktop Application",
        detail:
          "Co-developed a cross-platform medical imaging desktop application using C/C++, Python, Qt, and SQLite, harmonizing retinal microvasculature images from multiple ophthalmic instruments for consistent clinical and research analysis.",
      },
      {
        title: "Retinal Image Segmentation (Deep Learning)",
        detail:
          "Adapted and fine-tuned a pre-trained Attention U-Net (OCTA-500) to segment retinal structures (artery, vein, capillary, FAZ, large vessels), using custom preprocessing, data augmentation, and mIoU-based evaluation across heterogeneous datasets.",
      },
      {
        title: "Project Nexus",
        detail:
          "Built a full-stack project and task management platform with secure authentication and persistent storage using Next.js, ASP.NET (C#), and PostgreSQL.",
      },
    ],
    technologies: [
      "C/C++",
      "Python",
      "Qt",
      "SQLite",
      "Attention U-Net",
      "Deep Learning",
      "Next.js",
      "ASP.NET (C#)",
      "PostgreSQL",
    ],
    current: false,
  },
  {
    period: "Aug 2023 — Oct 2023",
    role: "Intern AI Software Engineer",
    company: "SAMSUNG DISPLAY VIETNAM • Bac Ninh, Vietnam",
    highlights: [
      {
        title: "Automated Defect Detection (Computer Vision)",
        detail:
          "Designed and deployed a custom-trained U-Net model to detect surface defects in display panels, reducing manual quality inspection time by 40% and improving consistency in live production.",
      },
      {
        title: "Internal Project Management Application",
        detail:
          "Developed an internal WPF desktop application using C#/.NET and SQL Server for real-time project and task tracking, replacing spreadsheet-based workflows and improving operational visibility.",
      },
      {
        title: "Wine-Cart Recommender System",
        detail:
          "Developed a backend-driven recommendation system with Selenium data crawling/cleaning, MongoDB persistence, FastAPI REST services, and a Next.js frontend supporting search, filtering, and similar-item recommendations.",
      },
    ],
    technologies: [
      "U-Net",
      "Computer Vision",
      "Python",
      "WPF",
      "C#/.NET",
      "SQL Server",
      "Selenium",
      "MongoDB",
      "FastAPI",
      "Next.js",
    ],
    current: false,
  },
  {
    period: "Oct 2022 — Jun 2023",
    role: "Data Engineer",
    company: "VNPT-MEDIA • Ha Noi, Vietnam",
    highlights: [
      {
        title: "Data Platform",
        detail:
          "Designed and maintained three batch-processing pipelines analyzing 100+ million telecom records for customer behavior insights and anomaly detection, achieving up to 2x performance gains by migrating legacy Pandas workflows to PySpark.",
      },
    ],
    technologies: ["Python", "PySpark", "Pandas", "Data Pipelines", "Batch Processing"],
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