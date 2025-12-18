// ================================================
// EDIT THIS FILE TO ADD YOUR TOOLS
// ================================================

const tools = [
  {
    name: "Burp Suite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg",
    color: "#ff6633",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    color: "#FCC624",
  },
  { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", color: "#4EAA25" },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
  },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED",
  },
  {
    name: "Windows Server",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    color: "#0078D6",
  },
  {
    name: "Active Directory",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    color: "#0078D4",
  },
]

// Custom icons for security tools (no devicon available)
const securityTools = [
  { name: "Nuclei", initial: "Nu" },
  { name: "FFUF", initial: "FF" },
  { name: "Subfinder", initial: "Sf" },
  { name: "Nmap", initial: "Nm" },
  { name: "Wireshark", initial: "Ws" },
  { name: "Metasploit", initial: "Ms" },
  { name: "Crowdstrike", initial: "Cs" },
  { name: "Splashtop", initial: "Sp" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#161b22]/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <div className="w-14 h-px bg-gradient-to-r from-primary to-accent" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest">Skills</h2>
        </div>

        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-5 tracking-tight">Tools & Technologies</h3>
        <p className="text-[#9ba7b4] mb-14 max-w-2xl text-lg">
          Industry-standard tools I use for penetration testing, vulnerability assessment, and system administration.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#0d1117] border border-[#2a313a] glow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={tool.icon || "/placeholder.svg"}
                  alt={tool.name}
                  className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  crossOrigin="anonymous"
                />
              </div>
              <span className="text-xs text-center text-[#7d8590] group-hover:text-foreground transition-colors font-mono">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        <h4 className="text-2xl font-semibold text-foreground mt-16 mb-8">Security Tools</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {securityTools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#0d1117] border border-[#2a313a] glow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-mono font-bold text-sm group-hover:scale-110 transition-transform">
                  {tool.initial}
                </span>
              </div>
              <span className="text-xs text-center text-[#7d8590] group-hover:text-foreground transition-colors font-mono">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
