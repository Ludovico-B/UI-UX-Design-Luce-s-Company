import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, GraduationCap, ShieldCheck } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Installazione impianti fotovoltaici professionali"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur-sm">
            <GraduationCap className="h-4 w-4 text-[hsl(35,100%,50%)]" />
            <span className="text-sm font-medium text-[hsl(0,0%,100%)]">
              Team sempre aggiornato sulle ultime tecnologie
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-3xl font-bold leading-tight text-[hsl(0,0%,100%)] sm:text-5xl lg:text-6xl">
            <span className="text-balance">
              Energia, Comfort e Sicurezza per il{" "}
              <span className="text-[hsl(35,100%,50%)]">Tuo Futuro</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[hsl(210,20%,80%)]">
            Impianti elettrici, fotovoltaico, climatizzazione, videosorveglianza e sistemi di allarme.
            Un team di professionisti in costante formazione per offrirti soluzioni
            all&apos;avanguardia.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
              <a href="#contatti">
                Richiedi Preventivo Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[hsl(210,20%,80%)]/30 bg-transparent text-[hsl(0,0%,100%)] hover:bg-[hsl(0,0%,100%)]/10 hover:text-[hsl(0,0%,100%)] text-base px-8">
              <a href="#servizi">Scopri i Servizi</a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm">
                <ShieldCheck className="h-5 w-5 text-[hsl(35,100%,50%)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[hsl(0,0%,100%)]">Certificati</span>
                <span className="text-xs text-[hsl(210,20%,80%)]">Norma CEI</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm">
                <Award className="h-5 w-5 text-[hsl(35,100%,50%)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[hsl(0,0%,100%)]">Garanzia</span>
                <span className="text-xs text-[hsl(210,20%,80%)]">Lavori assicurati</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm">
                <GraduationCap className="h-5 w-5 text-[hsl(35,100%,50%)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[hsl(0,0%,100%)]">Formazione</span>
                <span className="text-xs text-[hsl(210,20%,80%)]">Continua</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
