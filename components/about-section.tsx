import { Shield, Bug, Lock } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <div className="w-14 h-px bg-gradient-to-r from-primary to-accent" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest">About</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">A Security Researcher</h3>
            <p className="text-[#9ba7b4] leading-relaxed text-lg">
              I am an enthusiastic individual with a strong passion for cybersecurity who enjoys staying up-to-date on
              the latest industry trends, technologies, and threats, and always eager to learn more.
            </p>
            <p className="text-[#7d8590] leading-relaxed">
              With hands-on experience in Web Penetration Testing, Vulnerability Assessment, and Security Analysis, I
              help organizations identify and remediate security weaknesses before malicious actors can exploit them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#161b22] border border-[#2a313a] glow-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Offensive Security</h4>
              <p className="text-sm text-[#7d8590]">Penetration testing & vulnerability assessment</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#161b22] border border-[#2a313a] glow-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Bug className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Bug Bounty</h4>
              <p className="text-sm text-[#7d8590]">Active on Bugcrowd platform</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#161b22] border border-[#2a313a] glow-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">GRC</h4>
              <p className="text-sm text-[#7d8590]">Governance, Risk & Compliance analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
