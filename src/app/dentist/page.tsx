import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Contact } from "../../components/Contact";
import { XRay } from "./components/XRay";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Certificates } from "./components/Certificates";
import { Opinions } from "./components/Opinions";
import { Location } from "../../components/Location";
import { FAQ } from "./components/FAQ";
import { ScrollAnimation } from "../../components/ScrollAnimation";

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
  },
  alternates: {
    canonical: "/dentist",
  },
};

export default function DentistPage() {
  return (
    <>
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
      {/* About section - hidden on tablet+ where it's shown in the card */}
      <div className="tablet:hidden">
        <ScrollAnimation>
          <About />
        </ScrollAnimation>
      </div>
      <ScrollAnimation>
        <Certificates />
      </ScrollAnimation>
      <ScrollAnimation>
        <Opinions />
      </ScrollAnimation>
      <ScrollAnimation>
        <Location />
      </ScrollAnimation>
      <ScrollAnimation>
        <FAQ />
      </ScrollAnimation>
    </>
  );
}
