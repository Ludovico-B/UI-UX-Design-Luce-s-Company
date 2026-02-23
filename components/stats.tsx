"use client"

import Image from "next/image"
import { motion } from "framer-motion"

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
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="relative flex h-20 w-full items-center justify-center"
            >
              <div className={`relative h-full w-48 ${brand.className}`}>
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
