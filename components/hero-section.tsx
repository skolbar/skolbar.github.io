"use client"

import { useEffect, useState } from "react"

interface HeroSectionProps {
  isMuted: boolean
  videoRef: React.RefObject<HTMLIFrameElement | null>
}

export default function HeroSection({ isMuted, videoRef }: HeroSectionProps) {
  const [origin, setOrigin] = useState("")

  useEffect(() => {
    setOrigin(window.location.origin)
  }, [])

  useEffect(() => {
    if (videoRef.current?.contentWindow) {
      const command = isMuted ? "mute" : "unMute"
      videoRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: command,
          args: [],
        }),
        "*"
      )
    }
  }, [isMuted, videoRef])

  return (
    <section id="hero" className="relative w-full pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 md:pb-12">
      {/* Video container - much larger, fills most of the viewport */}
      <div className="relative mx-2 sm:mx-4 md:mx-8 lg:mx-14 xl:mx-20">

        {/* Ornate multi-layered frame */}
        <div className="relative p-[6px] sm:p-2 md:p-3"
          style={{
            background: "linear-gradient(145deg, #8b6914, #c9a84c, #6b4f0e, #a88532, #8b6914)",
          }}
        >
          {/* Dark wood inner border */}
          <div className="relative p-[4px] sm:p-[5px] md:p-[6px]"
            style={{
              background: "linear-gradient(145deg, #1a0e04, #3a2210, #2a1608, #3a2210)",
            }}
          >
            {/* Inner gold trim */}
            <div className="relative p-[3px] sm:p-[4px] md:p-[5px]"
              style={{
                background: "linear-gradient(145deg, #a88532, #d4a843, #8b6914, #c9a84c, #a88532)",
              }}
            >
              {/* Innermost dark edge */}
              <div className="relative p-[2px] sm:p-[3px]"
                style={{
                  background: "linear-gradient(145deg, #2a1608, #1a0e04, #2a1608)",
                }}
              >
                {/* Video wrapper - 16:9 aspect ratio */}
                <div className="relative w-full overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                  {origin && (
                    <iframe
                      ref={videoRef}
                      src={`https://www.youtube.com/embed/Ve8FH2B5k4U?autoplay=1&mute=1&loop=1&playlist=Ve8FH2B5k4U&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${origin}`}
                      className="absolute inset-0 w-full h-full"
                      style={{ border: "none" }}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="Lord Bottino Video"
                    />
                  )}

                  {/* Subtle dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black/15 pointer-events-none z-10" />

                  {/* Text over video - bottom right */}
                  <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 right-4 sm:right-8 md:right-12 lg:right-16 z-20 text-right">
                    <p
                      className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-[#fff8e7] drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] leading-tight"
                      style={{ fontFamily: "var(--font-pinyon), cursive" }}
                    >
                      Lord Bottino
                    </p>
                    <p
                      className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#fff8e7]/90 tracking-wide mt-1 sm:mt-2 md:mt-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                      style={{ fontWeight: 300 }}
                    >
                      Uma voz, uma identidade, uma experiência
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Corner ornaments - top left */}
          <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 z-10 pointer-events-none">
            <svg viewBox="0 0 60 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 L60,0 L60,8 C30,8 8,30 8,60 L0,60 Z" fill="#6b4f0e" />
              <path d="M2,2 L55,2 L55,6 C28,8 8,28 6,55 L2,55 Z" fill="#c9a84c" opacity="0.5" />
              <circle cx="12" cy="12" r="4" fill="#d4a843" opacity="0.7" />
            </svg>
          </div>
          {/* Corner ornaments - top right */}
          <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 z-10 pointer-events-none" style={{ transform: "scaleX(-1)" }}>
            <svg viewBox="0 0 60 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 L60,0 L60,8 C30,8 8,30 8,60 L0,60 Z" fill="#6b4f0e" />
              <path d="M2,2 L55,2 L55,6 C28,8 8,28 6,55 L2,55 Z" fill="#c9a84c" opacity="0.5" />
              <circle cx="12" cy="12" r="4" fill="#d4a843" opacity="0.7" />
            </svg>
          </div>
          {/* Corner ornaments - bottom left */}
          <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 z-10 pointer-events-none" style={{ transform: "scaleY(-1)" }}>
            <svg viewBox="0 0 60 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 L60,0 L60,8 C30,8 8,30 8,60 L0,60 Z" fill="#6b4f0e" />
              <path d="M2,2 L55,2 L55,6 C28,8 8,28 6,55 L2,55 Z" fill="#c9a84c" opacity="0.5" />
              <circle cx="12" cy="12" r="4" fill="#d4a843" opacity="0.7" />
            </svg>
          </div>
          {/* Corner ornaments - bottom right */}
          <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 z-10 pointer-events-none" style={{ transform: "scale(-1,-1)" }}>
            <svg viewBox="0 0 60 60" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 L60,0 L60,8 C30,8 8,30 8,60 L0,60 Z" fill="#6b4f0e" />
              <path d="M2,2 L55,2 L55,6 C28,8 8,28 6,55 L2,55 Z" fill="#c9a84c" opacity="0.5" />
              <circle cx="12" cy="12" r="4" fill="#d4a843" opacity="0.7" />
            </svg>
          </div>

          {/* Outer frame shadow for depth */}
        </div>

        {/* Deep shadow under the entire frame */}
        <div
          className="absolute inset-0 -z-10 rounded-sm"
          style={{
            boxShadow: "0 10px 40px rgba(0,0,0,0.45), 0 4px 12px rgba(0,0,0,0.3), 0 0 80px rgba(139,105,20,0.15)",
          }}
        />
      </div>
    </section>
  )
}
