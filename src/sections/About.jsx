import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "AI & Computer Vision",
    description:
      "Built pretrained-model pipelines for retinal imaging and display defect detection in research and manufacturing settings.",
  },
  {
    icon: Rocket,
    title: "Full-Stack Delivery",
    description:
      "Delivered operational and user-facing platforms with Go/Gin, ASP.NET Core, Next.js, FastAPI, PostgreSQL, and SQL Server.",
  },
  {
    icon: Users,
    title: "Impact in Teams",
    description:
      "Worked across research, manufacturing, and product teams to turn real workflow pain points into maintainable software.",
  },
  {
    icon: Lightbulb,
    title: "Data & Cloud Engineering",
    description:
      "Built distributed data pipelines with PySpark and Hadoop, then shipped cloud-native systems with Docker, Kubernetes, GitHub Actions, and DigitalOcean.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building impactful products,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one solution at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a software engineer who graduated with a Master of
                Information Technology from UWA, with hands-on experience across
                full-stack development, AI/computer vision, and data
                engineering. I enjoy building practical products that solve
                real problems and scale reliably.
              </p>
              <p>
                I work best at the intersection of people and technology. Having
                collaborated with clinicians, researchers, engineers, and
                stakeholders across research institutes and industry teams, I am
                comfortable navigating different perspectives and translating
                loosely defined problems into clear, actionable solutions. I
                value ownership and accountability, often taking initiative to
                improve workflows or bridge gaps between technical and
                non-technical stakeholders. My experience studying and working
                across Vietnam and Australia has strengthened my adaptability,
                cultural awareness, and communication style. I approach
                feedback with an open mindset, learn quickly from setbacks, and
                consistently focus on
                delivering outcomes that are both technically sound and meaningful to end users.
              </p>
              <p>
                Outside of coding, I enjoy gaming — long-time League of Legends player,
                along with Valorant and Warcraft II — and staying active through gym training
                and calisthenics. These keep my mind sharp, fresh and body strong.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build reliable, user-focused software that
                creates real-world impact — from intelligent AI systems to
                scalable full-stack applications. I always balance cost and
                performance to deliver the most suitable outcome."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
