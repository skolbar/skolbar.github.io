import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AlcateiaPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      <section
        className="relative py-32 md:py-48 px-6 flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/parchment-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold italic text-[#2c1810] mb-6">
            Alcateia
          </h1>
          <p className="text-xl md:text-2xl italic text-[#5a3e2b]">
            Em breve.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
