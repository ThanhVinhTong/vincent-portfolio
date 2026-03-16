import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Rate Pulse",
    description:
      "Built an end-to-end FX intelligence platform that combines exchange-rate tracking, market-news signals, and personalization into one workflow. Engineered a Go/Gin + gRPC backend with Redis caching, PostgreSQL, a Next.js dashboard, and Python/Selenium data pipelines, then deployed it through GitHub Actions, Docker Hub, and Kubernetes on DigitalOcean.",
    image: "/projects/rate-pulse.jpg",
    tags: [
      "Golang",
      "Gin",
      "gRPC",
      "PostgreSQL",
      "Redis",
      "Next.js",
      "Python",
      "Selenium",
      "GitHub Actions",
      "Kubernetes",
      "DigitalOcean",
    ],
    link: "https://rate-pulse.me",
    github: "https://github.com/ThanhVinhTong/rate-pulse",
  },
  {
    title: "Book Borrow",
    description:
      "Engineered and delivered a production-ready P2P marketplace for a non-profit book reader community in Western Australia using FastAPI and Next.js, with Stripe payments, Google OAuth, and AWS RDS.",
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
    tags: ["Next.js", "ASP.NET", "C#", "PostgreSQL", "Supabase"],
    link: "https://thanhvinhtong.github.io/project-nexus",
    github: "https://github.com/ThanhVinhTong/project-nexus",
  },
  {
    title: "Wine-Cart Recommender System",
    description:
      "Engineered a full-stack recommendation engine using FastAPI, Next.js, MongoDB, a ResNet50 model, and Selenium pipelines to suggest real-time alternatives for out-of-stock items.",
    image: "/projects/wine-cart.jpg",
    tags: ["Python", "FastAPI", "Selenium", "MongoDB", "Next.js", "ResNet50"],
    link: "https://wine-cart.vercel.app/",
    github: "https://github.com/ThanhVinhTong/wine-cart-project",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of projects from my resume, spanning cloud-native
            systems, full-stack platforms, and data-driven applications with
            real-world impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"
                  />
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </a>
              {/* Content */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="p-4 space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="w-5 h-5 
                    text-muted-foreground group-hover:text-primary
                    group-hover:translate-x-1 
                    group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                  <p className="text-muted-foreground text-[13px] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-0.5 rounded-full bg-surface text-[11px] font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/ThanhVinhTong?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};