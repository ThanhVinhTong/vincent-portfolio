import { ExternalLink } from "lucide-react";

const credentialGroups = [
  {
    title: "Certifications",
    entries: [
      {
        name: "AWS Certified Developer - Associate",
        issuer: "Amazon Web Services",
        date: "Feb 2026 - Feb 2029",
        link: "https://www.credly.com/badges/dcf40059-b515-4312-aab4-f47cc08f48b4/public_url",
      },
      {
        name: "Data Structures & Algorithms Certificate",
        issuer: "FUTURE SOFTWARE ENGINEER",
        date: "2025",
        link: "https://github.com/ThanhVinhTong/Certificates/blob/main/FSEDataStructureAlgorithms/FSE_DataStructuresAlgorithms_Certificate.pdf",
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
        name: "Best Trainee in Samsung Display Vietnam internship",
        issuer: "SAMSUNG DISPLAY VIETNAM",
        date: "2023",
        link: "https://github.com/ThanhVinhTong/Certificates/blob/main/SDV's%20Internship%20Award/TongThanhVinh_Award_SamsungDisplayVietnam.pdf",
      },
      {
        name: "Second Place - Samsung Application Development Contest",
        issuer: "Samsung",
        date: "Sep 2022",
        link: "https://github.com/ThanhVinhTong/Certificates",
      },
    ],
  },
];

export const Certifications = () => {
  return (
    <section id="credentials" className="section-shell border-b border-border/70">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <div className="section-kicker">Credentials</div>
          <h2 className="section-title-sm mt-4">
            Certifications and{" "}
            <span className="font-serif text-primary">recognition.</span>
          </h2>
          <p className="section-copy mt-4">
            A focused overview of current credentials and awards that support the
            engineering work shown across the portfolio.
          </p>
        </div>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
          {credentialGroups.map((group) => (
            <article key={group.title} className="panel h-full p-5 md:p-6">
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <div className="mt-5 divide-y divide-border">
                {group.entries.map((entry) => (
                  <div key={entry.name} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-medium text-foreground">{entry.name}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{entry.issuer}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{entry.date}</p>
                      </div>
                      <a
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-button h-9 w-9 shrink-0"
                        aria-label={`View ${entry.name}`}
                        title="View credential"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
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
