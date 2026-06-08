import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { WhyChoose } from "@/components/why-choose"
import { Testimonials } from "@/components/testimonials"
import { Areas } from "@/components/areas"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { MobileContactBar } from "@/components/mobile-contact-bar"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pb-14 sm:pb-0">
        <Hero />
        <Services />
        <Gallery />
        <WhyChoose />
        <Testimonials />
        <Areas />
        <Contact />
      </main>
      <SiteFooter />
      <MobileContactBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "Mamello Projects",
            description:
              "Construction, welding, steel fabrication and general supply services in the Vaal Triangle.",
            telephone: "+27 71 933 1311",
            areaServed: [
              "Vaal Triangle",
              "Vanderbijlpark",
              "Vereeniging",
              "Sasolburg",
              "Vaal Marina",
            ],
            address: {
              "@type": "PostalAddress",
              addressRegion: "Gauteng",
              addressCountry: "ZA",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "3",
            },
          }),
        }}
      />
    </div>
  )
}
