"use client"

import { useState, useRef } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SocialSection from "@/components/social-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import MuteButton from "@/components/mute-button"
import { OrnamentDivider } from "@/components/section-transition"


export default function Home() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLIFrameElement>(null)

  const handleToggleMute = () => {
    setIsMuted((prev) => {
      const newMuted = !prev
      if (videoRef.current?.contentWindow) {
        const command = newMuted ? "mute" : "unMute"
        videoRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: command,
            args: [],
          }),
          "*"
        )
      }
      return newMuted
    })
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      {/* Single continuous parchment wrapper - hero + all content */}
      <div
        className="relative"
        style={{
          backgroundImage: "url('/images/parchment-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "local",
        }}
      >
        <HeroSection isMuted={isMuted} videoRef={videoRef} />

        <OrnamentDivider />

        <AboutSection />

        <OrnamentDivider />

        <SocialSection />

        <OrnamentDivider />

        <ContactSection />
      </div>

      <Footer />
      <MuteButton isMuted={isMuted} onToggle={handleToggleMute} />
    </main>
  )
}
