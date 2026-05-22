"use client"

import { useEffect, useState, type CSSProperties, type RefObject } from "react"

interface HeroSectionProps {
  isMuted: boolean
  videoRef: RefObject<HTMLIFrameElement | null>
}

const outerFrameStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(135deg, #f7e7a5 0%, #8b5f20 15%, #f0d47a 28%, #5e3614 48%, #c49a46 64%, #fff0b7 78%, #6c4217 100%)",
  boxShadow:
    "0 26px 55px rgba(31, 17, 5, 0.52), inset 0 0 0 2px rgba(255, 244, 186, 0.95), inset 0 0 0 6px rgba(91, 54, 18, 0.72), inset 0 0 28px rgba(35, 18, 4, 0.62)",
}

const carvedRailStyle: CSSProperties = {
  backgroundImage:
    "radial-gradient(ellipse at center, rgba(255, 242, 179, 0.92) 0 18%, rgba(151, 95, 27, 0.96) 19% 38%, transparent 40%), linear-gradient(90deg, rgba(74, 42, 12, 0.95), rgba(235, 196, 91, 0.9), rgba(92, 54, 17, 0.96))",
  backgroundSize: "24px 100%, 100% 100%",
  backgroundRepeat: "repeat-x, no-repeat",
  boxShadow:
    "inset 0 1px 0 rgba(255, 249, 205, 0.9), inset 0 -1px 0 rgba(70, 38, 12, 0.9), 0 1px 4px rgba(41, 22, 6, 0.35)",
}

const carvedSideStyle: CSSProperties = {
  backgroundImage:
    "radial-gradient(ellipse at center, rgba(255, 242, 179, 0.92) 0 18%, rgba(151, 95, 27, 0.96) 19% 38%, transparent 40%), linear-gradient(180deg, rgba(74, 42, 12, 0.95), rgba(235, 196, 91, 0.9), rgba(92, 54, 17, 0.96))",
  backgroundSize: "100% 24px, 100% 100%",
  backgroundRepeat: "repeat-y, no-repeat",
  boxShadow:
    "inset 1px 0 0 rgba(255, 249, 205, 0.9), inset -1px 0 0 rgba(70, 38, 12, 0.9), 1px 0 4px rgba(41, 22, 6, 0.35)",
}

const bevelStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(145deg, #2a1708 0%, #8b5c1d 18%, #f2d985 34%, #7a4b17 52%, #2b1708 70%, #d5aa4a 100%)",
  boxShadow:
    "inset 0 0 0 1px rgba(255, 239, 166, 0.7), inset 0 10px 24px rgba(255, 242, 174, 0.16), inset 0 -18px 28px rgba(25, 11, 3, 0.5)",
}

const beadedRailStyle: CSSProperties = {
  backgroundImage: "radial-gradient(circle, #ffe9a0 0 2px, #6b3f12 2.6px 4px, transparent 4.5px)",
  backgroundSize: "13px 100%",
  backgroundRepeat: "repeat-x",
}

const beadedSideStyle: CSSProperties = {
  backgroundImage: "radial-gradient(circle, #ffe9a0 0 2px, #6b3f12 2.6px 4px, transparent 4.5px)",
  backgroundSize: "100% 13px",
  backgroundRepeat: "repeat-y",
}

function FrameCorner({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <div
      className={`absolute h-12 w-12 sm:h-16 sm:w-16 md:h-24 md:w-24 pointer-events-none z-20 ${className}`}
      style={style}
      aria-hidden="true"
    >
      <svg viewBox="0 0 96 96" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h88v18C54 23 23 54 22 92H4z" fill="#3b210b" />
        <path d="M9 9h77v9C51 21 21 51 18 86H9z" fill="#b38335" />
        <path d="M17 17h62c-30 7-55 32-62 62z" fill="#f7df8b" opacity="0.72" />
        <path
          d="M18 58c14-3 19-14 15-24 12 7 24 5 31-7 3 16-3 30-18 38-9 5-19 6-28 3z"
          fill="none"
          stroke="#4b2b0d"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M27 59c11-3 21-12 27-27"
          fill="none"
          stroke="#fff1ac"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx="24" cy="24" r="5" fill="#f4dc86" />
      </svg>
    </div>
  )
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
      <div className="relative mx-2 sm:mx-4 md:mx-8 lg:mx-14 xl:mx-20">
        <div className="relative p-[10px] sm:p-[14px] md:p-[22px] lg:p-[28px]" style={outerFrameStyle}>
          <div className="absolute left-4 right-4 top-2 h-3 sm:h-4 md:top-3 md:h-5" style={carvedRailStyle} />
          <div className="absolute bottom-2 left-4 right-4 h-3 sm:h-4 md:bottom-3 md:h-5" style={carvedRailStyle} />
          <div className="absolute bottom-4 left-2 top-4 w-3 sm:w-4 md:left-3 md:w-5" style={carvedSideStyle} />
          <div className="absolute bottom-4 right-2 top-4 w-3 sm:w-4 md:right-3 md:w-5" style={carvedSideStyle} />

          <FrameCorner className="left-0 top-0" />
          <FrameCorner className="right-0 top-0" style={{ transform: "scaleX(-1)" }} />
          <FrameCorner className="bottom-0 left-0" style={{ transform: "scaleY(-1)" }} />
          <FrameCorner className="bottom-0 right-0" style={{ transform: "scale(-1, -1)" }} />

          <div className="relative p-[7px] sm:p-[10px] md:p-[14px]" style={bevelStyle}>
            <div className="absolute left-4 right-4 top-[5px] h-[8px] sm:top-[7px] sm:h-[10px]" style={beadedRailStyle} />
            <div
              className="absolute bottom-[5px] left-4 right-4 h-[8px] sm:bottom-[7px] sm:h-[10px]"
              style={beadedRailStyle}
            />
            <div className="absolute bottom-4 left-[5px] top-4 w-[8px] sm:left-[7px] sm:w-[10px]" style={beadedSideStyle} />
            <div
              className="absolute bottom-4 right-[5px] top-4 w-[8px] sm:right-[7px] sm:w-[10px]"
              style={beadedSideStyle}
            />

            <div className="relative bg-[#120a04] p-[3px] sm:p-[5px] shadow-[inset_0_0_18px_rgba(0,0,0,0.85)]">
              <div className="relative aspect-video w-full overflow-hidden bg-black shadow-[0_0_0_1px_rgba(255,226,139,0.45),inset_0_0_26px_rgba(0,0,0,0.85)]">
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

                <div className="absolute bottom-4 right-4 z-20 text-right sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16">
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
      </div>
    </section>
  )
}
