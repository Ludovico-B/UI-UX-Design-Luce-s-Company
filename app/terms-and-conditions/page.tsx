import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsAndConditions() {
    return (
        <main>
            <Navbar />
            <div className="mx-auto max-w-4xl px-6 py-24">
                <h1 className="mb-8 font-heading text-4xl font-bold">Termini e Condizioni</h1>
                <div className="prose prose-slate max-w-none">
                    <p className="mb-4">
                        Accedendo a questo sito web, l'utente accetta di essere vincolato dai presenti Termini e Condizioni di utilizzo.
                    </p>
                    <h2 className="mb-4 mt-8 text-2xl font-bold">1. Utilizzo del Sito</h2>
                    <p className="mb-4">
                        Il contenuto di questo sito è fornito a scopo informativo generale. Luce Connessa Impianti si riserva il diritto di modificare i contenuti in qualsiasi momento.
                    </p>
                    <h2 className="mb-4 mt-8 text-2xl font-bold">2. Proprietà Intellettuale</h2>
                    <p className="mb-4">
                        Tutti i contenuti presenti sul sito (testi, immagini, loghi) sono proprietà di Luce Connessa Impianti o dei rispettivi licenziatari.
                    </p>
                    <h2 className="mb-4 mt-8 text-2xl font-bold">3. Limitazione di Responsabilità</h2>
                    <p className="mb-4">
                        Luce Connessa Impianti non è responsabile per eventuali danni derivanti dall'uso o dall'impossibilità di utilizzare questo sito.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    )
}
