"use client"

import { Volume2, VolumeX } from "lucide-react"

interface MuteButtonProps {
  isMuted: boolean
  onToggle: () => void
}

export default function MuteButton({ isMuted, onToggle }: MuteButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#2c1810]/60 hover:bg-[#2c1810]/80 backdrop-blur-sm rounded-full text-[#e8d5b7] transition-all duration-300 border border-[#8b6914]/40 cursor-pointer"
      aria-label={isMuted ? "Ativar som" : "Desativar som"}
    >
      {isMuted ? <VolumeX size={18} className="sm:hidden" /> : <Volume2 size={18} className="sm:hidden" />}
      {isMuted ? <VolumeX size={22} className="hidden sm:block" /> : <Volume2 size={22} className="hidden sm:block" />}
    </button>
  )
}
