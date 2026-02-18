import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
    return (
        <main>
            <Navbar />
            <div className="mx-auto max-w-4xl px-6 py-24">
                <h1 className="mb-8 font-heading text-4xl font-bold">Privacy Policy</h1>
                <div className="prose prose-slate max-w-none">
                    <p className="mb-4">
                        La presente Privacy Policy descrive come Luce Connessa Impianti raccoglie, utilizza e protegge le informazioni personali degli utenti che visitano il nostro sito web.
                    </p>
                    <h2 className="mb-4 mt-8 text-2xl font-bold">1. Raccolta dei Dati</h2>
                    <p className="mb-4">
                        Raccogliamo informazioni fornite volontariamente dagli utenti tramite i moduli di contatto, come nome, email e numero di telefono.
                    </p>
                    <h2 className="mb-4 mt-8 text-2xl font-bold">2. Utilizzo dei Dati</h2>
                    <p className="mb-4">
                        I dati raccolti vengono utilizzati esclusivamente per rispondere alle richieste di contatto e fornire i servizi richiesti.
                    </p>
                    <h2 className="mb-4 mt-8 text-2xl font-bold">3. Protezione dei Dati</h2>
                    <p className="mb-4">
                        Adottiamo misure di sicurezza appropriate per proteggere i dati personali da accessi non autorizzati o divulgazione.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    )
}
