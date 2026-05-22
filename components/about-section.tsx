import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="sobre" className="relative overflow-x-hidden">
      <div className="relative py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-20 items-center lg:items-start">
          {/* Artist Photo - already has frame in the image */}
          <div className="flex-shrink-0 mx-auto lg:mx-0 mt-4">
            <Image
              src="/images/cantor-moldura.png"
              alt="Lord Bottino"
              width={400}
              height={500}
              className="w-[260px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic text-[#2c1810] mb-6 sm:mb-8 md:mb-10 text-center">
              Minha história
            </h2>
            <div className="space-y-5 sm:space-y-7 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-[#2c1810] text-justify italic">
              <p>
                Desde cedo, a música correu em minhas veias como um chamado inevitável. Com uma mistura de influência clássica e contemporânea, trilhei meu caminho na arte, explorando melodias, harmonias e histórias que ressoam além do tempo. Meu estilo carrega a essência da sofisticação e da rebeldia, equilibrando intensidade e emoção em cada nota.
              </p>
              <p>
                {"Atualmente, além da minha jornada como cantor, também me aprofundo no universo da enologia, buscando sensações e experiências que convergem entre a música e o vinho \u2013 ambos com o poder de marcar momentos inesquecíveis."}
              </p>
              <p>
                Minha missão é transformar cada performance em uma experiência única, onde som e presença criam uma conexão real com quem me ouve. Seja nos palcos, nas plataformas digitais ou nos bastidores da criação, estou sempre em busca de autenticidade e excelência.
              </p>
              <p className="font-semibold mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Se chegou até aqui, bem-vindo ao meu mundo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
