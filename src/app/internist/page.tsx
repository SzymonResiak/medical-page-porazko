import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Contact } from "@/components/Contact";
import { Location } from "@/components/Location";
import { Opinions } from "@/components/Opinions";
import { FAQ } from "@/components/FAQ";
import { INTERNIST_OPINIONS } from "@/data/opinions";
import { INTERNIST_FAQ_ITEMS } from "./data/faqItems";
import { INTERNIST_FAQ_SCHEMA } from "./data/faqSchema";
import { INTERNIST_PAGE_SCHEMA, INTERNIST_SERVICES_SCHEMA } from "./data/schema";
import { FAQSchema } from "@/components/FAQSchema";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { ScrollIndicator } from "@/components/ScrollIndicator";

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
    type: "website",
    locale: "pl_PL",
    siteName: "Porażko",
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
      <FAQSchema items={INTERNIST_FAQ_SCHEMA} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(INTERNIST_PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(INTERNIST_SERVICES_SCHEMA) }} />
      <Breadcrumbs
        items={[
          { label: "Strona główna", href: "/" },
          { label: "Internista, Nefrolog" },
        ]}
      />
      <ScrollIndicator />
      <div className="flex flex-col gap-[30px] desktop:gap-0">
        <ScrollAnimation>
          <Contact />
        </ScrollAnimation>
        <ScrollAnimation className="desktop:mt-[80px]">
          <Services />
        </ScrollAnimation>
        <ScrollAnimation className="desktop:mt-[80px]">
          <About />
        </ScrollAnimation>
        <ScrollAnimation className="desktop:mt-[80px]">
          <Opinions
            title={<>Opinie pacjentów to moja <span className="font-bold">najlepsza rekomendacja</span></>}
            opinions={INTERNIST_OPINIONS}
          />
        </ScrollAnimation>
        <ScrollAnimation className="desktop:mt-[80px]">
          <Location />
        </ScrollAnimation>
        <ScrollAnimation className="desktop:mt-[80px]">
          <FAQ items={INTERNIST_FAQ_ITEMS} />
        </ScrollAnimation>
      </div>
    </>
  );
}
