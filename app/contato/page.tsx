"use client"

import { useState } from "react"
import Header from "@/components/header"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import MuteButton from "@/components/mute-button"
import { papyrusBackground } from "@/lib/papyrus-background"

export default function ContatoPage() {
  const [isMuted, setIsMuted] = useState(true)

  const handleToggleMute = () => {
    setIsMuted((prev) => !prev)
  }

  return (
    <main className="min-h-screen pt-16" style={papyrusBackground}>
      <Header />
      <ContactSection />
      <Footer />
      <MuteButton isMuted={isMuted} onToggle={handleToggleMute} />
    </main>
  )
}
