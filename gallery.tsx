import { MapPin } from "lucide-react"
import { AREAS } from "@/lib/site"

export function Areas() {
  return (
    <section id="areas" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Coverage
          </p>
          <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Areas we serve
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Proudly working across the Vaal Triangle and surrounding towns.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {AREAS.map((area) => (
            <div
              key={area}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-sm"
            >
              <MapPin size={15} className="text-primary" />
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
