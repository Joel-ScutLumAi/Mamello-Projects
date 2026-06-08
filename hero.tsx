import { Phone, MessageCircle, Clock, MapPin } from "lucide-react"
import { PHONE_NUMBER, PHONE_LINK, WHATSAPP_LINK } from "@/lib/site"

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-3xl bg-navy">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:p-16">
            <div>
              <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to start your project?
              </h2>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-white/80">
                Call or WhatsApp us now for a free, no-obligation quote.
                We&apos;re available and we respond fast.
              </p>

              <div className="mt-8 space-y-4 text-sm text-white/85">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <Clock size={18} className="text-whatsapp" />
                  </div>
                  <span>Mon–Sat, 7:00 – 18:00 · Quotes within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <MapPin size={18} className="text-whatsapp" />
                  </div>
                  <span>Vaal Triangle, Gauteng &amp; Free State, South Africa</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-4 text-lg font-semibold text-whatsapp-foreground shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle size={22} />
                Message us on WhatsApp
              </a>
              <a
                href={PHONE_LINK}
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-lg font-semibold text-navy shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <Phone size={22} />
                {PHONE_NUMBER}
              </a>
              <p className="mt-1 text-center text-xs text-white/60">
                Prefer email? Reply to any WhatsApp message and we&apos;ll sort
                it out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
