import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Contact } from "@/components/Contact";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Opinions } from "./components/Opinions";
import { Location } from "@/components/Location";
import { FAQ } from "./components/FAQ";

export const metadata: Metadata = {
  title: "Nefrolog Internista Opole - dr hab. Tomasz Porażko",
  description:
    "Nefrolog i internista w Opolu - dr hab. n. med. Tomasz Porażko. Diagnostyka i leczenie chorób nerek, USG, leczenie nerkozastępcze. Umów wizytę!",
  keywords: [
    "nefrolog Opole",
    "internista Opole",
    "Tomasz Porażko",
    "choroby nerek Opole",
    "USG nerek Opole",
    "dializa Opole",
    "lekarz nefrolog",
    "przewlekła choroba nerek",
  ],
  openGraph: {
    title: "Nefrolog Internista Opole - dr hab. Tomasz Porażko",
    description:
      "Nefrolog i internista w Opolu - dr hab. n. med. Tomasz Porażko. Diagnostyka i leczenie chorób nerek.",
    url: "https://porazko.pl/internist",
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
    canonical: "https://porazko.pl/internist",
  },
};

export default function InternistPage() {
  return (
    <>
      <h1 className="sr-only">Nefrolog Internista Opole - dr hab. Tomasz Porażko</h1>
      <Breadcrumbs
        items={[
          { label: "Strona główna", href: "/" },
          { label: "Internista, Nefrolog" },
        ]}
      />
      <ScrollAnimation>
        <Contact />
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
