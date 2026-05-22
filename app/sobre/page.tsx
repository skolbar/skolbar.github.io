"use client"

import { useState, useRef } from "react"
import Header from "@/components/header"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"
import MuteButton from "@/components/mute-button"

export default function SobrePage() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLIFrameElement>(null)

  const handleToggleMute = () => {
    setIsMuted((prev) => !prev)
  }

  return (
    <main className="min-h-screen pt-16">
      <Header />
      <AboutSection />
      <Footer />
      <MuteButton isMuted={isMuted} onToggle={handleToggleMute} />
    </main>
  )
}
