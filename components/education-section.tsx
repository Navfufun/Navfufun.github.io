import { GraduationCap, Award } from "lucide-react"

// ================================================
// EDIT THIS FILE TO ADD YOUR EDUCATION
// ================================================

const education = [
  {
    degree: "B.Sc (Hons) Ethical Hacking and Cybersecurity",
    institution: "Softwarica College of IT and E-Commerce",
    location: "Kathmandu",
    year: "Sep 2022 - Present",
  },
  {
    degree: "+2 Science (Physical)",
    institution: "Southwestern State College",
    location: "Kathmandu",
    year: "Feb 2020 - Feb 2022",
  },
]

const certifications = [
  { name: "Dante", issuer: "Hack The Box", year: "2025" },
  { name: "Junior Cybersecurity Analyst Career Path", issuer: "Cisco", year: "2024" },
  { name: "Certified Cybersecurity Educator Professional (CCEP)", issuer: "Red Team Leaders", year: "2025" },
  { name: "Fortinet Network Security Expert Level 1", issuer: "Fortinet", year: "2023" },
  { name: "Introduction to CyberSecurity", issuer: "Cisco", year: "2023" },
  { name: "Blue Team Junior Analyst Pathway Bundle", issuer: "Security Blue Team", year: "2023" },
  { name: "Advent of Cyber 2022", issuer: "TryHackMe", year: "2023" },
]

const achievements = ["CTF 1st Position in Softwarica College", "CTF 3rd Position in OWASP Kathmandu"]

export function EducationSection() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <div className="w-14 h-px bg-gradient-to-r from-primary to-accent" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest">Education</h2>
        </div>

        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-14 tracking-tight">Academic Background</h3>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Education */}
          <div className="space-y-8">
            <h4 className="text-xl font-semibold text-foreground flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={20} />
              </div>
              Education
            </h4>
            <div className="space-y-5">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-[#161b22] border border-[#2a313a] glow-hover transition-all duration-300"
                >
                  <span className="text-sm text-primary font-mono">{edu.year}</span>
                  <h5 className="text-lg font-semibold text-foreground mt-2">{edu.degree}</h5>
                  <p className="text-[#7d8590] text-sm mt-1">
                    {edu.institution}, {edu.location}
                  </p>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <h4 className="text-xl font-semibold text-foreground flex items-center gap-3 pt-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="text-primary" size={20} />
              </div>
              Achievements
            </h4>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#161b22] border border-[#2a313a] glow-hover transition-all duration-300"
                >
                  <span className="text-primary text-lg">▹</span>
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h4 className="text-xl font-semibold text-foreground">Certifications</h4>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#161b22] border border-[#2a313a] glow-hover transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h5 className="font-medium text-foreground">{cert.name}</h5>
                      <p className="text-sm text-[#7d8590] mt-1">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-primary font-mono whitespace-nowrap px-2 py-1 rounded-lg bg-primary/10">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
