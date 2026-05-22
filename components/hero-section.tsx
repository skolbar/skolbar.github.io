"use client"

import { useEffect, useState, type CSSProperties, type RefObject } from "react"

interface HeroSectionProps {
  isMuted: boolean
  videoRef: RefObject<HTMLIFrameElement | null>
}

const frameCanvasStyle: CSSProperties = {
  aspectRatio: "1534 / 852",
  width: "min(100%, calc(100vw - 16px))",
  filter: "drop-shadow(0 24px 34px rgba(31, 16, 4, 0.5))",
}

const videoOpeningStyle: CSSProperties = {
  top: "13.6%",
  right: "8.3%",
  bottom: "13.8%",
  left: "8.3%",
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
      <div className="relative mx-1 sm:mx-3 md:mx-8 lg:mx-14 xl:mx-20">
        <div className="relative mx-auto" style={frameCanvasStyle}>
          <div className="absolute overflow-hidden bg-black" style={videoOpeningStyle}>
            {origin && (
              <iframe
                ref={videoRef}
                src={`https://www.youtube.com/embed/Ve8FH2B5k4U?autoplay=1&mute=1&loop=1&playlist=Ve8FH2B5k4U&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${origin}`}
                className="absolute inset-0 h-full w-full"
                style={{ border: "none" }}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Lord Bottino Video"
              />
            )}

            <div className="absolute inset-0 bg-black/15 pointer-events-none z-10" />

            <div className="absolute bottom-3 left-2 right-3 z-30 hidden text-right sm:bottom-5 sm:left-auto sm:right-6 sm:block sm:w-[78%] md:bottom-8 md:right-10 lg:bottom-12 lg:right-14">
              <p
                className="text-[22px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#fff8e7] drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] leading-tight"
                style={{ fontFamily: "var(--font-pinyon), cursive" }}
              >
                Lord Bottino
              </p>
              <p
                className="text-[9px] sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#fff8e7]/90 tracking-wide mt-1 sm:mt-2 md:mt-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                style={{ fontWeight: 300 }}
              >
                Uma voz, uma identidade, uma experiência
              </p>
            </div>
          </div>

          <div
            className="absolute inset-0 z-20 pointer-events-none bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-vintage-frame.png')" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
