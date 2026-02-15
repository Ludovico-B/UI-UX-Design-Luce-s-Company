import {
  GraduationCap,
  Lightbulb,
  Handshake,
  Clock,
  BadgeCheck,
  TrendingUp,
} from "lucide-react"

const reasons = [
  {
    icon: GraduationCap,
    title: "Formazione Continua",
    description:
      "Il nostro team partecipa regolarmente a corsi di aggiornamento sulle ultime normative e tecnologie del settore impiantistico.",
  },
  {
    icon: Lightbulb,
    title: "Innovazione Tecnologica",
    description:
      "Utilizziamo solo materiali e strumenti di ultima generazione per garantire impianti efficienti, sicuri e duraturi.",
  },
  {
    icon: Handshake,
    title: "Assistenza Dedicata",
    description:
      "Un referente dedicato per ogni progetto, dalla consulenza iniziale alla manutenzione post-installazione.",
  },
  {
    icon: Clock,
    title: "Tempi Certi",
    description:
      "Rispettiamo le tempistiche concordate. Pianifichiamo ogni fase del lavoro per ridurre al minimo i disagi.",
  },
  {
    icon: BadgeCheck,
    title: "Certificazioni a Norma",
    description:
      "Tutti i nostri impianti sono realizzati nel pieno rispetto delle normative vigenti con rilascio di certificazione.",
  },
  {
    icon: TrendingUp,
    title: "Risparmio Energetico",
    description:
      "Progettiamo soluzioni che ottimizzano i consumi e riducono i costi in bolletta, con un occhio alla sostenibilità.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="perche-noi" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Perché Sceglierci
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Un team che investe nel{" "}
              <span className="text-primary">futuro</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            La nostra differenza sta nella preparazione. Investiamo costantemente
            nella formazione del nostro team per portarti il meglio dell&apos;innovazione.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group relative rounded-2xl bg-background p-8 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <reason.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Badge Banner */}
        <div className="mt-16 rounded-2xl bg-primary p-8 sm:p-12">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/20">
              <GraduationCap className="h-10 w-10 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-2xl font-bold text-primary-foreground sm:text-3xl">
                Team Sempre Aggiornato
              </h3>
              <p className="mt-2 max-w-2xl text-primary-foreground/80">
                I nostri tecnici seguono programmi di formazione certificata ogni anno,
                garantendo competenze allineate ai più recenti standard europei.
                Dalla domotica al fotovoltaico di nuova generazione, siamo pronti per ogni sfida.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <div className="flex items-center gap-2 rounded-lg bg-primary-foreground/15 px-4 py-2 text-sm font-semibold text-primary-foreground">
                <BadgeCheck className="h-5 w-5" />
                CEI 64-8
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-primary-foreground/15 px-4 py-2 text-sm font-semibold text-primary-foreground">
                <BadgeCheck className="h-5 w-5" />
                DM 37/08
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
