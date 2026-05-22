"use client"

import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    mensagem: "",
  })

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    setFormData((prev) => ({ ...prev, telefone: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Mensagem enviada com sucesso!")
    setFormData({ nome: "", telefone: "", mensagem: "" })
  }

  return (
    <section
      id="contato"
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic text-[#2c1810] mb-8 sm:mb-10 md:mb-12 text-center">
          Contate-nos
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* Nome */}
          <div>
            <label
              htmlFor="nome"
              className="block text-lg sm:text-xl md:text-2xl font-bold italic text-[#2c1810] mb-2 sm:mb-3"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, nome: e.target.value }))
              }
              className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-[#c4a67a] rounded-md text-[#2c1810] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#8b6914] italic text-base sm:text-lg md:text-xl"
              required
            />
          </div>

          {/* Telefone */}
          <div>
            <label
              htmlFor="telefone"
              className="block text-lg sm:text-xl md:text-2xl font-bold italic text-[#2c1810] mb-2 sm:mb-3"
            >
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handlePhoneChange}
              className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-[#c4a67a] rounded-md text-[#2c1810] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#8b6914] italic text-base sm:text-lg md:text-xl"
            />
            <p className="text-sm sm:text-base italic text-[#5a3e2b] mt-1.5 sm:mt-2">
              Digite apenas números.
            </p>
          </div>

          {/* Mensagem */}
          <div>
            <label
              htmlFor="mensagem"
              className="block text-lg sm:text-xl md:text-2xl font-bold italic text-[#2c1810] mb-2 sm:mb-3"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              placeholder="Mensagem"
              value={formData.mensagem}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, mensagem: e.target.value }))
              }
              rows={5}
              className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-[#c4a67a] rounded-md text-[#2c1810] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#8b6914] italic text-base sm:text-lg md:text-xl resize-y"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 sm:px-14 py-3 sm:py-4 bg-[#a0855c] hover:bg-[#8b6914] text-white font-semibold italic text-lg sm:text-xl rounded-md transition-colors duration-300 cursor-pointer"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
