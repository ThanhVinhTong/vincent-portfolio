import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

import { ArrowRight, Download, ChevronDown } from "lucide-react";
import githubIcon from "@/assets/github.svg";
import linkedinIcon from "@/assets/linkedin.svg";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Golang", "Python", "C/C++", "JavaScript/TypeScript", "Java", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["ASP.NET Core", "Next.js", "React", "FastAPI", "Gin", "Flask", "Qt", "PySpark"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["DigitalOcean", "AWS", "Docker", "Kubernetes", "GitHub Actions", "Vercel", "Render", "Supabase", "Upstash"],
  },
  {
    title: "Databases & Tools",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Git", "gRPC", "REST APIs", "Brevo", "Selenium", "Linux", "Unit Testing", "CI/CD"],
  },
];

const heroParticles = Array.from({ length: 18 }, (_, index) => ({
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 53 + 17) % 100}%`,
  driftDuration: `${15 + ((index * 7) % 20)}s`,
  driftDelay: `${(index * 3) % 5}s`,
}));

export const Hero = ({ onTabChange }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {heroParticles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: particle.left,
              top: particle.top,
              animation: `slow-drift ${particle.driftDuration} ease-in-out infinite`,
              animationDelay: particle.driftDelay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • Full Work Rights
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Vincent Tong — a software engineer focused on
                full-stack platforms, AI/computer vision, and data engineering.
                I build practical systems across Go/Gin, Next.js, ASP.NET Core,
                Python, and cloud-native deployment, with full work rights in
                Australia and openness to relocate.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" onClick={() => onTabChange?.("contact")}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>

              <AnimatedBorderButton
                as="a"
                href="/VincentTong_Resume.pdf"
                download="VincentTong_Resume.pdf"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: githubIcon, label: "GitHub", href: "https://github.com/ThanhVinhTong" },
                { icon: linkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/thanh-vinh-tong-b02b5016b/" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<img src={social.icon} alt={social.label} className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0
                rounded-3xl bg-gradient-to-br
                from-primary/30 via-transparent
                to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Vincent Tong"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {skillGroups.map((group, idx) => (
              <div
                key={group.title}
                className="group glass rounded-2xl p-5 border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_30px_rgba(32,178,166,0.2)]"
                style={{
                  animation: `float ${3.6 + (idx % 3) * 0.8}s ease-in-out infinite`,
                  animationDelay: `${idx * 0.45}s`,
                }}
              >
                <h3 className="text-sm uppercase tracking-wider text-primary mb-3 text-center transition-colors duration-300 group-hover:text-primary-foreground">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-surface text-xs font-medium text-muted-foreground border border-border/50 transition-all duration-300 group-hover:border-primary/40 group-hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">About</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
