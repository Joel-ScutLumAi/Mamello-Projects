"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, MessageCircle, Menu, X } from "lucide-react"
import { PHONE_NUMBER, PHONE_LINK, WHATSAPP_LINK } from "@/lib/site"

const NAV = [
  { label: "Services", id: "services" },
  { label: "Work", id: "gallery" },
  { label: "Why Us", id: "why-us" },
  { label: "Areas", id: "areas" },
  { label: "Contact", id: "contact" },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5"
          aria-label="Mamello Projects home"
        >
          <Image
            src="/images/logo.png"
            alt="Mamello Projects logo"
            width={44}
            height={44}
            className="h-10 w-10 rounded-md object-contain"
            priority
          />
          <span className="font-heading text-lg font-extrabold uppercase tracking-tight text-navy">
            Mamello <span className="text-primary">Projects</span>
          </span>
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-md bg-whatsapp px-3.5 py-2 text-xs font-semibold text-whatsapp-foreground transition-colors hover:opacity-90 sm:inline-flex"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
          <a
            href={PHONE_LINK}
            className="hidden items-center gap-1.5 rounded-md bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            <Phone size={15} />
            Call
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-card px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="rounded-md px-2 py-2.5 text-left text-sm font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-whatsapp px-3 py-2.5 text-sm font-semibold text-whatsapp-foreground"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href={PHONE_LINK}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground">{PHONE_NUMBER}</p>
        </div>
      )}
    </header>
  )
}
