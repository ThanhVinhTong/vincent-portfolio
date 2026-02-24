import { ArrowUpRight } from "lucide-react";

const credentialGroups = [
  {
    title: "Certification",
    entries: [
      {
        name: "AWS Developer Associate",
        issuer: "Amazon Web Services",
        date: "Feb 2026",
        link: "https://www.credly.com/badges/dcf40059-b515-4312-aab4-f47cc08f48b4/public_url",
      },
      {
        name: "Deep Learning Specialization",
        issuer: "Coursera",
        date: "Mar 2024",
        link: "https://www.coursera.org/account/accomplishments/specialization/5ZF39MDLLA26",
      },
    ],
  },
  {
    title: "Awards",
    entries: [
      {
        name: "Out of The Box Award",
        issuer: "VIETNAMESE AUSSIES IN IT",
        date: "2025",
        link: "https://github.com/ThanhVinhTong/Certificates/blob/main/VAIT%20Hackathon%20Award/thanhvinhtong_vait_hackathon_2025_out_of_the_box.pdf",
      },
      {
        name: "Best Trainee in Samsung Display Vietnam's internship",
        issuer: "SAMSUNG DISPLAY VIETNAM",
        date: "2023",
        link: "https://github.com/ThanhVinhTong/Certificates/blob/main/SDV's%20Internship%20Award/TongThanhVinh_Award_SamsungDisplayVietnam.pdf",
      },
    ],
  },
];

export const Certifications = () => {
  return (
    <section id="credentials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Certification &
            <span className="font-serif italic font-normal text-white">
              {" "}
              achievements.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A dedicated overview of certification, recognitions, and measurable
            achievements from projects and workplaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
          {credentialGroups.map((group, idx) => (
            <article
              key={idx}
              className="glass rounded-2xl p-6 border border-primary/30 animate-fade-in h-full"
              style={{ animationDelay: `${(idx + 1) * 120}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
              <div className="space-y-4">
                {group.entries.map((entry, entryIdx) => (
                  <div
                    key={entryIdx}
                    className="rounded-xl border border-border/60 bg-surface/40 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-medium text-foreground">{entry.name}</h4>
                      <a
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline whitespace-nowrap"
                      >
                        View <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {entry.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{entry.date}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
