import { ExternalLink, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Book Borrow",
    period: "August 2025 - November 2025",
    description:
      "Engineered and delivered a production-ready P2P marketplace for a non-profit book reader organisation in Western Australia as part of an eight-person team, using FastAPI and Next.js with integrated Stripe payments, Google OAuth, and AWS RDS.",
    image: "/projects/book-borrow.jpg",
    tags: ["FastAPI", "Next.js", "Stripe", "Google OAuth", "AWS RDS"],
    link: "https://github.com/ChienAnTu/Bookhive",
    github: "https://github.com/ChienAnTu/Bookhive",
  },
  {
    title: "Project Nexus",
    description:
      "A full-stack project and task management application with secure authentication and persistent storage for structured team workflows.",
    image: "/projects/project-nexus.jpg",
    tags: ["Next.js", "ASP.NET Core", "C#", "PostgreSQL", "Supabase"],
    link: "https://thanhvinhtong.github.io/project-nexus",
    github: "https://github.com/ThanhVinhTong/project-nexus",
  },
  {
    title: "Wine-Cart Recommender System",
    description:
      "Engineered a full-stack recommendation engine using FastAPI, Next.js, MongoDB, and Selenium pipelines to suggest real-time alternatives for out-of-stock items.",
    image: "/projects/wine-cart.jpg",
    tags: ["Python", "FastAPI", "Selenium", "MongoDB", "Next.js", "Recommendation Engine"],
    link: "https://wine-cart.vercel.app/",
    github: "https://github.com/ThanhVinhTong/wine-cart-project",
  },
];

export const Projects = () => {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="section-shell border-b border-border/70">
      <div className="container mx-auto px-6">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <div>
            <div className="section-kicker">Featured work</div>
            <h2 className="section-title-sm mt-4">
              Real products and{" "}
              <span className="font-serif text-primary">working systems.</span>
            </h2>
          </div>
          <p className="section-copy max-w-3xl lg:justify-self-end">
            Selected project work beyond the primary experience timeline,
            spanning marketplace software, internal tools, and data-driven
            applications.
          </p>
        </div>

        <article className="panel overflow-hidden">
          <div className="grid gap-px bg-border lg:grid-cols-[1.12fr_0.88fr]">
            <a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden bg-card"
            >
              <img
                src={featured.image}
                alt={`${featured.title} project preview`}
                loading="lazy"
                decoding="async"
                className="aspect-video h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              />
            </a>

            <div className="bg-card p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-primary">{featured.period}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{featured.title}</h3>
                </div>
                <div className="flex gap-2">
                  <a
                    href={featured.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-button"
                    aria-label={`${featured.title} live project`}
                    title="Live project"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={featured.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-button"
                    aria-label={`${featured.title} GitHub repository`}
                    title="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {featured.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span key={tag} className="chip text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {rest.map((project) => (
            <article key={project.title} className="panel flex min-h-full flex-col overflow-hidden">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden border-b border-border"
              >
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
              </a>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {project.period && (
                      <p className="text-xs font-medium text-primary">{project.period}</p>
                    )}
                    <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-button h-9 w-9"
                      aria-label={`${project.title} live project`}
                      title="Live project"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-button h-9 w-9"
                      aria-label={`${project.title} GitHub repository`}
                      title="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <AnimatedBorderButton
            as="a"
            href="https://github.com/ThanhVinhTong?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all projects
            <ExternalLink className="h-5 w-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
