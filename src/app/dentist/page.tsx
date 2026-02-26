import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Contact } from "@/components/Contact";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Location } from "@/components/Location";
import { Opinions } from "@/components/Opinions";
import { FAQ } from "@/components/FAQ";
import { DENTIST_OPINIONS } from "@/data/opinions";
import { DENTIST_FAQ_ITEMS } from "./data/faqItems";
import { XRay } from "./components/XRay";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Certificates } from "./components/Certificates";

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
      <Breadcrumbs
        items={[
          { label: "Strona główna", href: "/" },
          { label: "Stomatolog" },
        ]}
      />
      <ScrollAnimation>
        <Contact />
      </ScrollAnimation>
      <ScrollAnimation>
        <XRay />
      </ScrollAnimation>
      <ScrollAnimation>
        <Services />
      </ScrollAnimation>
      <div className="tablet:hidden">
        <ScrollAnimation>
          <About />
        </ScrollAnimation>
      </div>
      <ScrollAnimation>
        <Certificates />
      </ScrollAnimation>
      <ScrollAnimation>
        <Opinions
          title={<>Wasze uśmiechy to <br /> moja{" "}<span className="font-bold">najlepsza rekomendacja</span></>}
          opinions={DENTIST_OPINIONS}
        />
      </ScrollAnimation>
      <ScrollAnimation>
        <Location />
      </ScrollAnimation>
      <ScrollAnimation>
        <FAQ items={DENTIST_FAQ_ITEMS} />
      </ScrollAnimation>
    </>
  );
}
