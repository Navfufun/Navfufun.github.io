"use client"

import type React from "react"

import { useState } from "react"
import { Send, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <section id="contact" className="py-28 px-6 bg-[#161b22]/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <div className="w-14 h-px bg-gradient-to-r from-primary to-accent" />
          <h2 className="text-sm font-mono text-primary uppercase tracking-widest">Contact</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Get In Touch</h3>
            <p className="text-[#9ba7b4] leading-relaxed text-lg">
              Have a security concern or interested in collaboration? Feel free to reach out. I&apos;m always open to
              discussing new projects and opportunities.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-5 p-4 rounded-xl bg-[#0d1117] border border-[#2a313a] glow-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <span className="text-[#9ba7b4]">sahanish35@gmail.com</span>
              </div>
              <div className="flex items-center gap-5 p-4 rounded-xl bg-[#0d1117] border border-[#2a313a] glow-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone size={20} className="text-primary" />
                </div>
                <span className="text-[#9ba7b4]">+977 9762873817</span>
              </div>
              <div className="flex items-center gap-5 p-4 rounded-xl bg-[#0d1117] border border-[#2a313a] glow-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <span className="text-[#9ba7b4]">Balaju, Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl bg-[#0d1117] border border-[#2a313a]">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-[#161b22] border-[#2a313a] focus:border-primary/50 rounded-xl h-12"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-[#161b22] border-[#2a313a] focus:border-primary/50 rounded-xl h-12"
              />
            </div>
            <Textarea
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-[#161b22] border-[#2a313a] focus:border-primary/50 rounded-xl resize-none"
            />
            <Button
              type="submit"
              className="gap-2 btn-glow bg-primary hover:bg-primary/90 transition-all duration-300 h-12 px-8"
            >
              <Send size={18} />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
