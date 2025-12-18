import { ExternalLink, Github, Wifi } from "lucide-react"
import Link from "next/link"

// ================================================
// EDIT THIS FILE TO ADD YOUR PROJECTS
// ================================================

const projects = [
  {
    title: "Wifusion",
    description:
      "Wi-Fi Attack Tool Using ESP32 presented at TECH-EX 2023, organized by Softwarica College of IT and E-Commerce.",
    details: [
      "Demonstrated strong proficiency in wireless network security through self-built devices",
      "Received positive feedback from attendees for the innovative and practical approach",
      "Contributed to enhancing the college's reputation in technology and cybersecurity",
    ],
    tags: ["ESP32", "Wi-Fi Security", "Hardware", "Wireless"],
    github: "https://github.com/AnonyAK",
    demo: null,
    icon: Wifi,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6 bg-[#161b22]/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <div className="w-14 h-px bg-gradient-to-r from-primary to-accent" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest">Projects</h2>
        </div>

        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-14 tracking-tight">Featured Work</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={index}
                className="group p-7 rounded-2xl bg-[#0d1117] border border-[#2a313a] glow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="text-primary" size={26} />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="p-2 rounded-lg bg-[#161b22] border border-[#2a313a] text-[#7d8590] hover:text-primary hover:border-primary/50 transition-all duration-300"
                        aria-label="View GitHub repository"
                      >
                        <Github size={18} />
                      </Link>
                    )}
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="p-2 rounded-lg bg-[#161b22] border border-[#2a313a] text-[#7d8590] hover:text-primary hover:border-primary/50 transition-all duration-300"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={18} />
                      </Link>
                    )}
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-[#9ba7b4] mb-5">{project.description}</p>

                {project.details && (
                  <ul className="space-y-2 mb-5">
                    {project.details.map((detail, i) => (
                      <li key={i} className="text-xs text-[#7d8590] flex items-start gap-2">
                        <span className="text-primary mt-0.5">▹</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-mono rounded-lg bg-[#161b22] border border-[#2a313a] text-[#7d8590]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
