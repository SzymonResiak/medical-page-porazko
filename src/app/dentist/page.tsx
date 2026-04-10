import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Contact } from "@/components/Contact";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Location } from "@/components/Location";
import { Opinions } from "@/components/Opinions";
import { FAQ } from "@/components/FAQ";
import { DENTIST_OPINIONS } from "@/data/opinions";
import { DENTIST_FAQ_ITEMS } from "./data/faqItems";
import { DENTIST_FAQ_SCHEMA } from "./data/faqSchema";
import { DENTIST_PAGE_SCHEMA, DENTIST_SERVICES_SCHEMA } from "./data/schema";
import { FAQSchema } from "@/components/FAQSchema";
import { XRay } from "./components/XRay";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Certificates } from "./components/Certificates";
import { ScrollIndicator } from "@/components/ScrollIndicator";

export const metadata: Metadata = {
  title: "Stomatolog Opole - Justyna Porażko | Dentysta",
  description:
    "Stomatolog w Opolu - lek. stom. Justyna Porażko. Leczenie zachowawcze, protetyka, endodoncja, chirurgia stomatologiczna, stomatologia dziecięca. Umów wizytę!",
  keywords: [
    "stomatolog Opole",
    "dentysta Opole",
    "Justyna Porażko",
    "leczenie zębów Opole",
    "protetyka Opole",
    "endodoncja Opole",
    "stomatologia dziecięca Opole",
    "wybielanie zębów Opole",
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Porażko",
    title: "Stomatolog Opole - Justyna Porażko | Dentysta",
    description:
      "Stomatolog w Opolu - lek. stom. Justyna Porażko. Kompleksowa opieka stomatologiczna dla całej rodziny.",
    url: "https://porazko.pl/dentist",
    images: [
      {
        url: "https://porazko.pl/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Porażko - Stomatolog i Nefrolog w Opolu",
      },
    ],
  },
  alternates: {
    canonical: "https://porazko.pl/dentist",
  },
};

export default function DentistPage() {
  return (
    <>
      <h1 className="sr-only">Stomatolog Opole - Justyna Porażko | Dentysta</h1>
      <FAQSchema items={DENTIST_FAQ_SCHEMA} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(DENTIST_PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(DENTIST_SERVICES_SCHEMA) }} />
      <Breadcrumbs
        items={[
          { label: "Strona główna", href: "/" },
          { label: "Stomatolog" },
        ]}
      />
      <ScrollIndicator />
      <div className="flex flex-col gap-[30px] desktop:gap-0">
        <ScrollAnimation>
          <Contact />
        </ScrollAnimation>
        <ScrollAnimation className="desktop:mt-[80px]">
          <XRay />
        </ScrollAnimation>
        <ScrollAnimation className="desktop:mt-[80px]">
          <Services />
        </ScrollAnimation>
        <ScrollAnimation className="desktop:mt-[80px]">
          <About />
        </ScrollAnimation>
        <ScrollAnimation className="desktop:mt-[80px]">
          <Certificates />
        </ScrollAnimation>
        <ScrollAnimation className="desktop:mt-[80px]">
          <Opinions
            title={<>Wasze uśmiechy to moja <span className="font-bold">najlepsza rekomendacja</span></>}
            opinions={DENTIST_OPINIONS}
          />
        </ScrollAnimation>
        <ScrollAnimation className="desktop:mt-[80px]">
          <Location />
        </ScrollAnimation>
        <ScrollAnimation className="desktop:mt-[80px]">
          <FAQ items={DENTIST_FAQ_ITEMS} />
        </ScrollAnimation>
      </div>
    </>
  );
}
