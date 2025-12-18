import { Briefcase, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

// ================================================
// EDIT THIS FILE TO ADD YOUR EXPERIENCE
// Also update the CV_URL below with your CV link
// ================================================

const CV_URL = "/cv.pdf" // Update this with your actual CV URL

const experiences = [
  {
    title: "System Engineer",
    company: "Raechal Enterprises Pvt. Ltd.",
    location: "Gairidhara, Kathmandu",
    duration: "Nov 2025 - Present",
    achievements: [
      "Deployed and managed full Active Directory environments, including DNS configuration, user/group creation, GPO setups, and joining Windows clients to the domain",
      "Troubleshot network, DNS, and system issues (incorrect DNS pointing, domain-join failures, host-only/bridged networking, time sync, replication errors)",
      "Installed and configured remote access tools (Splashtop, Crowdstrike etc.), tested connectivity, and maintained stable remote support infrastructure",
    ],
  },
  {
    title: "News Analyst",
    company: "SecurityPal",
    location: "Kathmandu",
    duration: "Feb 2025 - May 2025",
    achievements: [
      "Learned core GRC domains (Governance, Risk, Compliance) and supported policy, risk, and control evaluations for client organizations",
      "Performed data analytics on GRC datasets, identifying patterns in risk scores, compliance gaps, and control effectiveness",
      "Completed GRC questionnaires and assessment forms, verified evidence, and prepared summarized insights",
    ],
  },
  {
    title: "Web Penetration Tester",
    company: "Danson Solutions",
    location: "Gairidhara, Kathmandu",
    duration: "Sep 2024 - Dec 2024",
    achievements: [
      "Performed end-to-end Vulnerability Assessment & Penetration Testing (VAPT) on web applications",
      "Discovered and responsibly disclosed high-severity vulnerabilities with clear technical reports",
      "Conducted comprehensive recon, threat modeling, and risk analysis using industry-standard tools (Burp Suite, Nuclei, FFUF, Subfinder, etc.)",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-14">
          <div className="flex items-center gap-4">
            <div className="w-14 h-px bg-gradient-to-r from-primary to-accent" />
            <h2 className="text-sm font-mono text-primary uppercase tracking-widest">Experience</h2>
          </div>

          <Button asChild className="gap-2 btn-glow bg-primary hover:bg-primary/90 transition-all duration-300">
            <a href={CV_URL} download>
              <Download size={16} />
              Download CV
            </a>
          </Button>
        </div>

        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-14 tracking-tight">Professional Journey</h3>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-10 border-l-2 border-[#2a313a] hover:border-primary/50 transition-colors duration-300"
            >
              <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-[#161b22] border-2 border-primary flex items-center justify-center">
                <Briefcase size={12} className="text-primary" />
              </div>
              <div className="p-7 rounded-2xl bg-[#161b22] border border-[#2a313a] glow-hover transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-primary mt-1">{exp.company}</p>
                    <p className="text-sm text-[#7d8590]">{exp.location}</p>
                  </div>
                  <span className="text-sm text-[#7d8590] font-mono px-3 py-1.5 rounded-lg bg-[#0d1117] border border-[#2a313a] whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-[#9ba7b4] flex items-start gap-3">
                      <span className="text-primary mt-1">▹</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
