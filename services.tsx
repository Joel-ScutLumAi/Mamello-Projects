import Image from "next/image"
import { Phone, MessageCircle, ShieldCheck, Star } from "lucide-react"
import { PHONE_NUMBER, PHONE_LINK, WHATSAPP_LINK, STATS } from "@/lib/site"

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Mamello Projects construction site in the Vaal Triangle"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-primary/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            <ShieldCheck size={14} className="text-whatsapp" />
            Trusted across the Vaal Triangle since 2012
          </div>

          <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Construction, Welding &amp; General Supply done right.
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
            Professional building, steel fabrication, roofing, paving, gate
            installations and reliable supply services. One local team that
            shows up and finishes the job.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3.5 text-base font-semibold text-whatsapp-foreground shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              WhatsApp Us Now
            </a>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-navy shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
            >
              <Phone size={20} />
              {PHONE_NUMBER}
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
            <div className="flex text-whatsapp">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span>Rated 5/5 by local homeowners &amp; businesses</span>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-navy/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="py-5 text-center sm:py-6">
              <div className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-white/70 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
