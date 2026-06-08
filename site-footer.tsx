import { Phone, MessageCircle } from "lucide-react"
import { PHONE_LINK, WHATSAPP_LINK } from "@/lib/site"

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-border bg-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:hidden">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-whatsapp py-3.5 text-sm font-semibold text-whatsapp-foreground"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
      <a
        href={PHONE_LINK}
        className="flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-semibold text-primary-foreground"
      >
        <Phone size={18} />
        Call Now
      </a>
    </div>
  )
}
