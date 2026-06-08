import Image from "next/image"
import { PHONE_NUMBER, PHONE_LINK, WHATSAPP_LINK } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt="Mamello Projects logo"
              width={40}
              height={40}
              className="h-9 w-9 rounded-md object-contain"
            />
            <span className="font-heading text-base font-extrabold uppercase tracking-tight text-navy">
              Mamello <span className="text-primary">Projects</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Construction · Welding · General Supply — Vaal Triangle, South Africa
          </p>
          <div className="flex items-center gap-4">
            <a
              href={PHONE_LINK}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {PHONE_NUMBER}
            </a>
            <span className="text-border">|</span>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-whatsapp hover:underline"
            >
              WhatsApp
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mamello Projects. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
