"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle, Facebook, Instagram, Loader2 } from "lucide-react"
import Image from "next/image"
import { sendContactEmail } from "@/app/actions"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setSubmitted(true)
      } else {
        setError(result.error || "Errore nell'invio del messaggio. Riprova più tardi.")
      }
    } catch (err) {
      setError("Si è verificato un errore imprevisto. Riprova più tardi.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contatti" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
            Contattaci
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">
              Parliamo del tuo{" "}
              <span className="text-primary">progetto</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Compila il modulo per ricevere una consulenza gratuita e un preventivo
            personalizzato senza alcun impegno.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                Informazioni di Contatto
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Siamo a Crevoladossola e operiamo in tutta la Val d&apos;Ossola e
                provincia di Verbania. Contattaci per qualsiasi informazione.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sede Operativa</p>
                  <p className="text-sm text-muted-foreground">
                    Via Sempione, 35<br />
                    28865 Crevoladossola (VB)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Telefono</p>
                  <p className="text-sm text-muted-foreground">+39 0324 346315</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MessageCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">
                    +39 351 7262779
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">
                    amministrazione@luceconnessaimpianti.it
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
                <div>
                  <p className="font-semibold text-foreground">Instagram</p>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    @luceconnessaimpianti
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
                <div>
                  <p className="font-semibold text-foreground">Facebook</p>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    @luceconnessaimpianti
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Orari di Apertura</p>
                  <p className="text-sm text-muted-foreground">
                    Lunedì - Venerdì: 8:00 - 12:00 / 13:30 - 17:30
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-8 lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>

                <h3 className="font-heading text-2xl font-bold text-card-foreground">
                  Richiesta Inviata!
                </h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Grazie per averci contattato. Ti risponderemo entro 24 ore lavorative.
                </p>

                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mt-6"
                >
                  Invia un&apos;altra richiesta
                </Button>
                <div className="mt-8 mb-4">
                  <Image
                    src="/images/logo-lci.jpg"
                    alt="Logo Luce Connessa Impianti"
                    width={180}
                    height={60}
                    className="h-auto w-auto rounded-lg shadow-sm"
                  />
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm font-medium">
                    {error}
                  </div>
                )}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-card-foreground">Nome *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      placeholder="Mario"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cognome" className="text-card-foreground">Cognome *</Label>
                    <Input
                      id="cognome"
                      name="cognome"
                      placeholder="Rossi"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="mario@esempio.it"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-card-foreground">Telefono</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      placeholder="+39 333 123 4567"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="servizio" className="text-card-foreground">Servizio di Interesse</Label>
                  <select
                    id="servizio"
                    name="servizio"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Seleziona un servizio
                    </option>
                    <option value="Impianti Elettrici">Impianti Elettrici</option>
                    <option value="Fotovoltaico">Fotovoltaico</option>
                    <option value="Climatizzazione">Climatizzazione</option>
                    <option value="Sistemi di Sicurezza">Sistemi di Sicurezza</option>
                    <option value="Videosorveglianza">Videosorveglianza</option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="messaggio" className="text-card-foreground">Messaggio *</Label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    rows={4}
                    placeholder="Descrivi brevemente il tuo progetto o la tua esigenza..."
                    required
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Richiedi Preventivo Gratuito
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Compilando questo modulo acconsenti al trattamento dei tuoi dati
                  personali ai sensi del GDPR.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
