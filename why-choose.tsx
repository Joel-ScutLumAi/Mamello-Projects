import { Quote, Star } from "lucide-react"
import { TESTIMONIALS } from "@/lib/site"

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Reviews
          </p>
          <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            What customers say
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Real feedback from clients across the Vaal Triangle.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote size={26} className="text-primary/40" />
              <blockquote className="mt-3 flex-1 text-pretty leading-relaxed text-foreground">
                {`"${t.text}"`}
              </blockquote>
              <div
                className="mt-5 flex gap-0.5 text-primary"
                aria-label="5 star rating"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <figcaption className="mt-2 text-sm font-semibold text-foreground">
                {t.name}
                <span className="block text-xs font-normal text-muted-foreground">
                  {t.area}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
