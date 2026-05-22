"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Redes sociais", href: "/redes-sociais" },
  { label: "Contato", href: "/contato" },
  { label: "Alcateia", href: "/alcateia" },
  { label: "Banda", href: "/banda" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [menuOpen])

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (menuOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      {/* Mobile overlay backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
        <div
          className={`flex items-center px-4 py-2 md:px-8 md:py-3 transition-all duration-500 ${
            scrolled
              ? "bg-[#c4a67a]/90 backdrop-blur-sm shadow-md"
              : "bg-transparent"
          }`}
        >
          {/* Logo + name toggle button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center gap-2 md:gap-3 cursor-pointer group flex-shrink-0"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="w-9 h-9 md:w-14 md:h-14 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/logo-ankh.png"
                alt="Lord Bottino Logo"
                width={56}
                height={56}
                className="object-contain w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
              />
            </div>
            <span className="text-xl md:text-3xl italic font-bold text-[#fff8e7] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] transition-colors duration-300 group-hover:text-[#d4a843]">
              Lord Bottino
            </span>
          </button>

          {/* Desktop: Inline nav links - same row, expand to the right */}
          <nav
            className={`hidden md:flex items-center ml-auto overflow-hidden transition-all duration-500 ease-in-out ${
              menuOpen ? "max-w-[900px] opacity-100" : "max-w-0 opacity-0"
            }`}
          >
            <div className="flex items-center gap-1 lg:gap-2 flex-nowrap">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2 lg:px-5 lg:py-2 text-lg lg:text-xl italic text-[#fff8e7] whitespace-nowrap hover:text-[#d4a843] transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Mobile: Left-side sliding drawer */}
        <nav
          className={`md:hidden fixed top-0 left-0 h-full w-64 bg-[#2c1810]/95 backdrop-blur-md shadow-2xl z-50 transform transition-transform duration-400 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer header with close button */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#8b6914]/30">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex-shrink-0">
                <Image
                  src="/images/logo-ankh.png"
                  alt="Lord Bottino Logo"
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-lg italic font-bold text-[#f5e6c8]">
                Lord Bottino
              </span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-[#e8d5b7] hover:text-[#d4a843] transition-colors cursor-pointer"
              aria-label="Fechar menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer nav links */}
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-6 py-4 text-xl italic text-[#e8d5b7] hover:text-[#d4a843] hover:bg-[#3a2518]/60 transition-all duration-300 border-b border-[#8b6914]/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}
