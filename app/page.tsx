import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"

export default function Page() {
  return (
    <main>
      <StructuredData />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  )
}
