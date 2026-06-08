"use client"

import { useState } from "react"
import {
  Hammer,
  Wrench,
  Truck,
  CheckCircle,
  ChevronDown,
  MessageCircle,
} from "lucide-react"
import {
  CONSTRUCTION_SERVICES,
  WELDING_SERVICES,
  SUPPLY_SERVICES,
  WHATSAPP_LINK,
} from "@/lib/site"

const GROUPS = [
  {
    key: "construction",
    icon: Hammer,
    title: "Construction",
    blurb: "New builds, renovations & finishes",
    items: CONSTRUCTION_SERVICES,
  },
  {
    key: "welding",
    icon: Wrench,
    title: "Welding & Steel",
    blurb: "Fabrication, gates & installations",
    items: WELDING_SERVICES,
  },
  {
    key: "supply",
    icon: Truck,
    title: "General Supply",
    blurb: "Gas, charcoal, poles & removal",
    items: SUPPLY_SERVICES,
  },
]

export function Services() {
  const [open, setOpen] = useState<string | null>("construction")

  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2 className="mt-2 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Three service areas. One reliable team.
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            From foundation to finishing, steel to supply — we handle the whole
            job so you only deal with one trusted contractor.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {GROUPS.map((group) => {
            const isOpen = open === group.key
            return (
              <div
                key={group.key}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : group.key)}
                  className="flex items-center justify-between gap-3 p-5 text-left lg:cursor-default"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <group.icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {group.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{group.blurb}</p>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-muted-foreground transition-transform lg:hidden ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-5 pb-5 ${isOpen ? "block" : "hidden"} lg:block`}
                >
                  <div className="grid gap-2 border-t border-border pt-4">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-foreground"
                      >
                        <CheckCircle size={16} className="shrink-0 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3.5 text-base font-semibold text-whatsapp-foreground shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            Get a Free Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
