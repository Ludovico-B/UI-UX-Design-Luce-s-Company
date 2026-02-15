# Luce Connessa Impianti — Landing Page

Una landing page moderna, performante e completamente responsive realizzata per **Azienda Luce Connessa Impianti**. Il sito presenta i servizi dell'azienda (impianti elettrici, fotovoltaico, climatizzazione e sicurezza) con un design premium orientato alla conversione e alla fiducia del cliente.

## 🚀 Tecnologie Utilizzate

Il progetto è costruito con le tecnologie web più moderne per garantire velocità, scalabilità e manutenibilità:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Componenti UI**: [Radix UI](https://www.radix-ui.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Iconografia**: [Lucide React](https://lucide.dev/)
- **Animazioni**: Tailwind Animate & Custom CSS Transitions
- **Linguaggio**: [TypeScript](https://www.typescriptlang.org/)

---

## 🛠️ Guida per gli Sviluppatori

### Requisiti
- **Node.js**: versione 20.x o superiore
- **npm** o **pnpm**

### Installazione Locale

1. **Clona la repository**:
   ```bash
   git clone <repository-url>
   cd "Edo Azienda Luce Connessa Impianti"
   ```

2. **Installa le dipendenze**:
   > [!IMPORTANT]
   > A causa di alcuni conflitti di peer dependencies tra librerie UI (come `react-day-picker`), è necessario utilizzare il flag `--legacy-peer-deps`.
   
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Avvia il server di sviluppo**:
   ```bash
   npm run dev
   ```
   Il sito sarà disponibile all'indirizzo `http://localhost:3000`.

### Script Disponibili
- `npm run dev`: Avvia il server di sviluppo con Turbopack.
- `npm run build`: Crea la build di produzione ottimizzata.
- `npm run start`: Avvia l'applicazione in modalità produzione.
- `npm run lint`: Esegue il controllo della qualità del codice.

---

## 🎨 Scelte di Design UI & UX

### Visione e Obiettivo
L'obiettivo principale del design è trasmettere **professionalità, innovazione energetica e sicurezza**. La scelta di un'estetica pulita e premium serve a differenziare l'azienda nel settore impiantistico.

### 🧩 Design System & Estetica
- **Color Palete**:
  - **Blu Elettrico (`primary`)**: Rappresenta l'energia, la tecnologia e la competenza.
  - **Arancione Energia (`secondary`)**: Utilizzato per accenti e richiami visivi, richiama il calore, il sole (fotovoltaico) e l'attenzione.
  - **Dark Mode Optimized**: Il layout utilizza una palette scura sofisticata per ridurre l'affaticamento visivo e dare un senso di modernità "high-tech".
- **Typografia**: Utilizzo di font "heading" audaci per i titoli per comunicare solidità e font sans-serif puliti per i contenuti testuali per massimizzare la leggibilità.
- **Glassmorphism**: Utilizzo di effetti di sfocatura (backdrop-blur) sulla Navbar e sulle card per un look contemporaneo e stratificato.

### 📱 User Experience (UX)
- **Approccio Mobile-First**: Ogni sezione è stata progettata per essere perfettamente fruibile su smartphone, con elementi che si impilano verticalmente e font che scalano dinamicamente per evitare overflow.
- **Micro-interazioni**: Hover effects sulle card dei servizi e pulsanti interattivi per fornire feedback immediato all'utente.
- **Gerarchia Visiva**: Uso strategico dei contrasti e delle Trust Badges (Certificati, Garanzia, Formazione) posizionate nella Hero per convertire rapidamente l'utente.
- **Prestazioni**: Sfrutta il caching di Next.js e l'ottimizzazione delle immagini per tempi di caricamento istantanei.

---

## 📁 Struttura del Progetto

```text
├── app/              # Routing e pagine principali
├── components/       # Componenti UI riutilizzabili (Hero, Services, Form, ecc.)
├── public/           # Asset statici (Immagini, Loghi)
├── styles/           # Configurazioni CSS globali
└── tailwind.config.ts # Configurazione del tema e dei colori
```

---

Realizzato con ❤️ per **Luce Connessa Impianti**.
