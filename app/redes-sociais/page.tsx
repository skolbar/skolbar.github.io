"use client"

import { useState } from "react"
import Header from "@/components/header"
import SocialSection from "@/components/social-section"
import Footer from "@/components/footer"
import MuteButton from "@/components/mute-button"

export default function RedesSociaisPage() {
  const [isMuted, setIsMuted] = useState(true)

  const handleToggleMute = () => {
    setIsMuted((prev) => !prev)
  }

  return (
    <main className="min-h-screen pt-16">
      <Header />
      <SocialSection />
      <Footer />
      <MuteButton isMuted={isMuted} onToggle={handleToggleMute} />
    </main>
  )
}
