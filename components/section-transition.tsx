export function OrnamentDivider({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center py-4 sm:py-6 md:py-8 px-4 ${className ?? ""}`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 w-full max-w-lg mx-auto">
        {/* Left line with fade */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#8b6914]/50 to-[#8b6914]/60" />

        {/* Left scroll */}
        <svg viewBox="0 0 30 20" className="w-5 h-3 sm:w-6 sm:h-4 flex-shrink-0" fill="none">
          <path
            d="M28,10 C24,2 18,2 14,10 C10,2 4,2 0,10"
            stroke="#8b6914"
            strokeWidth="1.5"
            opacity="0.6"
            fill="none"
          />
        </svg>

        {/* Center diamond cluster */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <div className="w-1 h-1 rotate-45 bg-[#8b6914]/50" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rotate-45 bg-[#8b6914]/70 border border-[#8b6914]/40" />
          <div className="w-1 h-1 rotate-45 bg-[#8b6914]/50" />
        </div>

        {/* Right scroll */}
        <svg viewBox="0 0 30 20" className="w-5 h-3 sm:w-6 sm:h-4 flex-shrink-0" fill="none">
          <path
            d="M2,10 C6,2 12,2 16,10 C20,2 26,2 30,10"
            stroke="#8b6914"
            strokeWidth="1.5"
            opacity="0.6"
            fill="none"
          />
        </svg>

        {/* Right line with fade */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#8b6914]/50 to-[#8b6914]/60" />
      </div>
    </div>
  )
}
