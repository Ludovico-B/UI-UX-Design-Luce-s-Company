import { Zap } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  servizi: [
    { label: "Impianti Elettrici", href: "/#servizi" },
    { label: "Fotovoltaico", href: "/#servizi" },
    { label: "Climatizzazione", href: "/#servizi" },
    { label: "Sistemi di Sicurezza", href: "/#servizi" },
    { label: "Videosorveglianza", href: "/#servizi" },
  ],
  azienda: [
    { label: "Chi Siamo", href: "/#perche-noi" },
    { label: "Il Nostro Team", href: "/#perche-noi" },
    { label: "Certificazioni", href: "/#perche-noi" },
    { label: "Contatti", href: "/#contatti" },
  ],
  legale: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Termini e Condizioni", href: "/terms-and-conditions" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold leading-tight text-[hsl(0,0%,100%)]">
                  Luce Connessa Impianti
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[hsl(210,20%,70%)]">
              Energia, comfort e sicurezza. Soluzioni impiantistiche innovative
              con un team sempre aggiornato sulle ultime tecnologie.
            </p>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-[hsl(0,0%,100%)]">
              Servizi
            </h4>
            <ul className="space-y-3">
              {footerLinks.servizi.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[hsl(210,20%,70%)] transition-colors hover:text-[hsl(0,0%,100%)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Azienda */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-[hsl(0,0%,100%)]">
              Azienda
            </h4>
            <ul className="space-y-3">
              {footerLinks.azienda.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[hsl(210,20%,70%)] transition-colors hover:text-[hsl(0,0%,100%)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legale */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-[hsl(0,0%,100%)]">
              Legale
            </h4>
            <ul className="space-y-3">
              {footerLinks.legale.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[hsl(210,20%,70%)] transition-colors hover:text-[hsl(0,0%,100%)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-[hsl(215,20%,25%)] pt-8 text-center">
          <p className="text-sm text-[hsl(210,20%,70%)]">
            &copy; {new Date().getFullYear()} Luce Connessa Impianti. Tutti i diritti riservati.
            P.IVA: 01808380032
          </p>
        </div>
      </div>
    </footer>
  )
}
