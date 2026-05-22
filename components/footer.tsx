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

export default function Footer() {
  return (
    <footer className="bg-[#4a3928] py-10 sm:py-14 px-4 sm:px-6 border-t-4 border-[#8b6914]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-start text-center md:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#f5e6c8] italic">
            Lord Bottino
          </h3>
          <p className="text-base sm:text-lg text-[#d4a843] italic mt-2">
            Uma voz, uma identidade, uma experiência.
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg sm:text-xl font-semibold text-[#f5e6c8] italic mb-2 sm:mb-3">
            E-mail para contato:
          </h4>
          <a
            href="mailto:contato@josebottino.com.br"
            className="text-base sm:text-lg text-[#d4a843] italic hover:text-[#f5e6c8] transition-colors underline underline-offset-4 decoration-[#d4a843]/40 break-all"
          >
            contato@josebottino.com.br
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="text-lg sm:text-xl font-semibold text-[#f5e6c8] italic mb-3 sm:mb-4">
            Me siga nas redes sociais:
          </h4>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://www.youtube.com/@LordBottino"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@lord.bottino?_t=ZM-8uMRoKVq5x9&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#222] flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(105,201,208,0.5)] transition-all duration-300"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61567495576946&rdid=ZPTKCaXICcusnq47#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(24,119,242,0.5)] transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/lord.bottino"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(228,64,95,0.5)] transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
