import Image from "next/image"
import { GALLERY } from "@/lib/site"

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Work
          </p>
          <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Recent projects across the Vaal Triangle
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Real builds, real welding, real results — completed for homeowners
            and businesses in your area.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item, i) => (
            <figure
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={768}
                height={576}
                className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
