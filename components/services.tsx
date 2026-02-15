import Image from "next/image"
import { Zap, Sun, Wind, Shield, Camera, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Impianti Elettrici",
    description:
      "Progettazione e realizzazione di impianti elettrici civili e industriali a norma, con soluzioni su misura per ogni esigenza.",
    image: "/images/electrical.png",
    imageAlt: "Impianto elettrico professionale",
  },
  {
    icon: Sun,
    title: "Fotovoltaico",
    description:
      "Installazione di pannelli solari di ultima generazione per massimizzare il risparmio energetico e ridurre l'impatto ambientale.",
    image: "/images/solar.png",
    imageAlt: "Pannelli fotovoltaici installati su tetto",
  },
  {
    icon: Wind,
    title: "Climatizzazione",
    description:
      "Sistemi di climatizzazione e riscaldamento efficienti per il massimo comfort in ogni stagione, con pompe di calore e split.",
    image: "/images/hvac.png",
    imageAlt: "Sistema di climatizzazione moderno",
  },
  {
    icon: Shield,
    title: "Sistemi di Sicurezza",
    description:
      "Allarmi antintrusione, sensori perimetrali e sistemi di controllo accessi per proteggere casa e azienda 24 ore su 24.",
    image: "/images/security.png",
    imageAlt: "Sistema di sicurezza e allarme",
  },
  {
    icon: Camera,
    title: "Videosorveglianza",
    description:
      "Telecamere IP ad alta definizione, registrazione cloud e accesso remoto da smartphone per un controllo totale.",
    image: "/images/security.png",
    imageAlt: "Telecamera di videosorveglianza HD",
  },
]

export function Services() {
  return (
    <section id="servizi" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            I Nostri Servizi
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Soluzioni complete per ogni{" "}
              <span className="text-primary">esigenza impiantistica</span>
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Dalla progettazione alla manutenzione, offriamo servizi integrati
            per impianti elettrici, energia rinnovabile, comfort climatico e sicurezza.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href="#contatti"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Scopri di più
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
