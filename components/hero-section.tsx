"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const roles = ["Security Researcher", "Offensive Security", "Bug Bounty"]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-gradient-to-r from-primary to-accent" />
            <p className="text-primary font-mono text-sm tracking-wider">Hello, I&apos;m</p>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-tight">Anish Shah</h1>

          <div className="h-10 flex items-center">
            <span className="text-2xl md:text-3xl text-[#9ba7b4]">{displayText}</span>
            <span className="w-0.5 h-7 bg-primary ml-1 animate-pulse" />
          </div>

          <p className="text-[#9ba7b4] leading-relaxed max-w-lg text-lg">
            An enthusiastic individual with a strong passion for cybersecurity who enjoys staying up-to-date on the
            latest industry trends, technologies, and threats.
          </p>

          <div className="flex items-center gap-4 pt-6">
            <Link
              href="https://github.com/AnonyAK"
              target="_blank"
              className="p-3.5 rounded-xl bg-[#161b22] border border-[#2a313a] hover:border-primary/50 hover:bg-[#1e242c] transition-all duration-300 glow-hover"
              aria-label="GitHub"
            >
              <Github size={22} className="text-[#9ba7b4] hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/anish-shah-29a020274/"
              target="_blank"
              className="p-3.5 rounded-xl bg-[#161b22] border border-[#2a313a] hover:border-primary/50 hover:bg-[#1e242c] transition-all duration-300 glow-hover"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} className="text-[#9ba7b4] hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://bugcrowd.com/Navfufun"
              target="_blank"
              className="p-3.5 rounded-xl bg-[#161b22] border border-[#2a313a] hover:border-primary/50 hover:bg-[#1e242c] transition-all duration-300 glow-hover"
              aria-label="Bugcrowd"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#9ba7b4]" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182a9.818 9.818 0 110 19.636 9.818 9.818 0 010-19.636zm0 3.273a6.545 6.545 0 100 13.09 6.545 6.545 0 000-13.09zm0 2.181a4.364 4.364 0 110 8.728 4.364 4.364 0 010-8.728z" />
              </svg>
            </Link>
            <Link
              href="mailto:sahanish35@gmail.com"
              className="p-3.5 rounded-xl bg-[#161b22] border border-[#2a313a] hover:border-primary/50 hover:bg-[#1e242c] transition-all duration-300 glow-hover"
              aria-label="Email"
            >
              <Mail size={22} className="text-[#9ba7b4] hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/10 blur-2xl animate-pulse" />
            <div className="absolute inset-0 rounded-full border border-[#2a313a]" />
            <div className="absolute inset-4 rounded-full bg-[#161b22] border border-[#2a313a] flex items-center justify-center">
              <span className="text-7xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                AS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
