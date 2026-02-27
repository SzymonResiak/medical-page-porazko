const landingPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://porazko.pl/#homepage",
  name: "Porażko | Stomatolog i Nefrolog w Opolu - Gabinet Lekarski",
  url: "https://porazko.pl",
  description:
    "Gabinet stomatologiczny i nefrologiczny w Opolu. Justyna Porażko - dentysta. Tomasz Porażko - nefrolog, internista. Umów wizytę!",
  inLanguage: "pl-PL",
  isPartOf: { "@type": "WebSite", "@id": "https://porazko.pl/#website" },
  publisher: { "@id": "https://porazko.pl/#clinic" },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://porazko.pl/images/og-image.png",
    width: 1200,
    height: 630,
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", "meta[name='description']"],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: "https://porazko.pl",
      },
    ],
  },
  significantLink: [
    "https://porazko.pl/dentist",
    "https://porazko.pl/internist",
  ],
  mainEntity: { "@id": "https://porazko.pl/#clinic" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }}
      />
      <div className="hidden tablet:flex py-2 h-[15vh] items-center justify-center flex-shrink-0 landing-heading">
        <h1 className="text-[clamp(1.25rem,4vh,5rem)] font-bold text-center text-dark-gray">
          Jakiego wsparcia zdrowotnego potrzebujesz?
        </h1>
      </div>
    </>
  );
}
