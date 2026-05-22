"use client"

import { Facebook, Instagram, Youtube } from "lucide-react"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.17a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.6z" />
    </svg>
  )
}

interface VinylRecordProps {
  icon: React.ReactNode
  iconColor: string
  glowColor: string
  href: string
  label: string
}

function VinylRecord({ icon, iconColor, glowColor, href, label }: VinylRecordProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center gap-3 sm:gap-4"
      aria-label={label}
    >
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 transition-transform duration-500 group-hover:scale-110 group-active:scale-95">
        {/* Outer glow on hover */}
        <div
          className="absolute -inset-3 sm:-inset-4 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-xl sm:blur-2xl"
          style={{ backgroundColor: glowColor }}
        />

        {/* Vinyl body */}
        <div className="absolute inset-0 rounded-full shadow-2xl group-hover:shadow-[0_0_50px_rgba(0,0,0,0.7)] transition-all duration-500 vinyl-spin-on-hover overflow-hidden"
          style={{
            background: `
              radial-gradient(circle at center, transparent 22%, #111 23%, #111 24%, transparent 25%),
              radial-gradient(circle at center, transparent 27%, #1a1a1a 27.5%, #222 28%, transparent 28.5%),
              radial-gradient(circle at center, transparent 32%, #111 32.5%, #1e1e1e 33%, transparent 33.5%),
              radial-gradient(circle at center, transparent 37%, #1a1a1a 37.5%, #222 38%, transparent 38.5%),
              radial-gradient(circle at center, transparent 42%, #111 42.5%, #1e1e1e 43%, transparent 43.5%),
              radial-gradient(circle at center, transparent 47%, #1a1a1a 47.5%, #222 48%, transparent 48.5%),
              radial-gradient(circle at center, transparent 52%, #111 52.5%, #1e1e1e 53%, transparent 53.5%),
              radial-gradient(circle at center, transparent 57%, #1a1a1a 57.5%, #222 58%, transparent 58.5%),
              radial-gradient(circle at center, transparent 62%, #111 62.5%, #1e1e1e 63%, transparent 63.5%),
              radial-gradient(circle at center, transparent 67%, #1a1a1a 67.5%, #222 68%, transparent 68.5%),
              radial-gradient(circle at center, transparent 72%, #111 72.5%, #1e1e1e 73%, transparent 73.5%),
              radial-gradient(circle at center, transparent 78%, #1a1a1a 78.5%, #222 79%, transparent 79.5%),
              radial-gradient(circle at center, transparent 84%, #111 84.5%, #1e1e1e 85%, transparent 85.5%),
              radial-gradient(circle at center, transparent 90%, #1a1a1a 90.5%, #222 91%, transparent 91.5%),
              radial-gradient(circle at center, transparent 95%, #111 95.5%, #1e1e1e 96%, transparent 96.5%),
              radial-gradient(circle, #1a1a1a 100%, transparent 100%)
            `
          }}
        >
          {/* Subtle rainbow sheen on the surface */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: "conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.04) 10%, transparent 20%, rgba(255,255,255,0.06) 30%, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%, rgba(255,255,255,0.05) 70%, transparent 80%, rgba(255,255,255,0.04) 90%, transparent 100%)"
            }}
          />

          {/* Light reflection sweep */}
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div
              className="absolute -top-1/2 left-1/2 w-[2px] h-[200%] -translate-x-1/2 rotate-[30deg]"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 60%, transparent 100%)"
              }}
            />
          </div>

          {/* Outer rim highlight */}
          <div className="absolute inset-0 rounded-full border-2 border-[#333] group-hover:border-[#555] transition-colors duration-500" />
          <div className="absolute inset-[3px] rounded-full border border-[#222] group-hover:border-[#444] transition-colors duration-500" />
        </div>

        {/* Center label disc */}
        <div
          className="absolute inset-0 m-auto w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center z-10 transition-all duration-500 group-hover:shadow-[0_0_20px_var(--glow)] border-2 border-black/30"
          style={{
            backgroundColor: iconColor,
            "--glow": glowColor
          } as React.CSSProperties}
        >
          {/* Subtle radial texture on label */}
          <div className="absolute inset-0 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.4), transparent 60%)"
            }}
          />
          <div className="relative text-white w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {icon}
          </div>
        </div>
      </div>

      {/* Label that appears on hover */}
      <span className="text-base sm:text-lg md:text-xl font-semibold italic text-[#2c1810] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
        {label}
      </span>
    </a>
  )
}

export default function SocialSection() {
  return (
    <section
      id="redes-sociais"
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-items-center">
          <VinylRecord
            icon={<Facebook className="w-full h-full" />}
            iconColor="#1877F2"
            glowColor="#1877F2"
            href="https://www.facebook.com/profile.php?id=61567495576946&rdid=ZPTKCaXICcusnq47#"
            label="Facebook"
          />
          <VinylRecord
            icon={<Instagram className="w-full h-full" />}
            iconColor="#E4405F"
            glowColor="#E4405F"
            href="https://www.instagram.com/lord.bottino"
            label="Instagram"
          />
          <VinylRecord
            icon={<TikTokIcon className="w-full h-full" />}
            iconColor="#010101"
            glowColor="#69C9D0"
            href="https://www.tiktok.com/@lord.bottino?_t=ZM-8uMRoKVq5x9&_r=1"
            label="TikTok"
          />
          <VinylRecord
            icon={<Youtube className="w-full h-full" />}
            iconColor="#FF0000"
            glowColor="#FF0000"
            href="https://www.youtube.com/@LordBottino"
            label="YouTube"
          />
        </div>
      </div>
    </section>
  )
}
