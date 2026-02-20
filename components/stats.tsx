import Image from "next/image"

const brands = [
  {
    name: "Samsung",
    logo: "/images/samsung-logo.jpg",
    className: "scale-90"
  },
  {
    name: "Vimar",
    logo: "/images/vimar-logo.png",
    className: "scale-150"
  },
  {
    name: "Solax Power",
    logo: "/images/solax-logo.png",
    className: "scale-150"
  },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="mb-12 text-center text-sm font-semibold uppercase tracking-widest text-secondary">
          I Nostri Brand principali
        </h3>
        <div className="grid grid-cols-1 items-center justify-items-center gap-12 sm:grid-cols-3">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="relative flex h-20 w-full items-center justify-center grayscale transition-all hover:grayscale-0"
            >
              <div className={`relative h-full w-48 transition-transform duration-300 ${brand.className}`}>
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
