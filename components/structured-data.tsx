export function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Electrician",
        "name": "Luce Connessa Impianti",
        "url": "https://www.luceconnessaimpianti.it",
        "logo": "https://www.luceconnessaimpianti.it/images/logo-lci.jpg",
        "image": "https://www.luceconnessaimpianti.it/images/hero-bg.png",
        "description":
            "Impianti elettrici, fotovoltaico, climatizzazione, videosorveglianza e sicurezza a Crevoladossola, Val d'Ossola e provincia di Verbania.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Sempione, 35",
            "addressLocality": "Crevoladossola",
            "addressRegion": "VB",
            "postalCode": "28865",
            "addressCountry": "IT",
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 46.1547,
            "longitude": 8.2986,
        },
        "telephone": ["+393517262779", "+390324346315"],
        "email": "amministrazione@luceconnessaimpianti.it",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "12:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "14:00",
                "closes": "18:00",
            },
        ],
        "areaServed": [
            { "@type": "City", "name": "Crevoladossola" },
            { "@type": "City", "name": "Domodossola" },
            { "@type": "AdministrativeArea", "name": "Val d'Ossola" },
            { "@type": "AdministrativeArea", "name": "Provincia di Verbania" },
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servizi Luce Connessa Impianti",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Impianti Elettrici",
                        "description":
                            "Progettazione e realizzazione di impianti elettrici civili e industriali a norma.",
                    },
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Fotovoltaico",
                        "description":
                            "Installazione di pannelli solari di ultima generazione per il risparmio energetico.",
                    },
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Climatizzazione",
                        "description":
                            "Sistemi di climatizzazione e riscaldamento con pompe di calore e split.",
                    },
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Sistemi di Sicurezza",
                        "description":
                            "Allarmi antintrusione, sensori perimetrali e controllo accessi.",
                    },
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Videosorveglianza",
                        "description":
                            "Telecamere IP ad alta definizione con registrazione cloud e accesso remoto.",
                    },
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Impianti TV-SAT",
                        "description":
                            "Installazione e manutenzione di impianti satellitari e digitali terrestri.",
                    },
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Automatizzazione Cancelli",
                        "description":
                            "Automazione di cancelli, basculanti e barriere per comodità e sicurezza.",
                    },
                },
            ],
        },
        "priceRange": "€€",
        "sameAs": [],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
