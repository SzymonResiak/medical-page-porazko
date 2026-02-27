export const INTERNIST_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": "https://porazko.pl/internist/#webpage",
  name: "Nefrolog Internista Opole - dr hab. Tomasz Porażko",
  description:
    "Nefrolog i internista w Opolu - dr hab. n. med. Tomasz Porażko. Diagnostyka i leczenie chorób nerek, USG, leczenie nerkozastępcze.",
  url: "https://porazko.pl/internist",
  inLanguage: "pl-PL",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://porazko.pl/#website",
  },
  specialty: ["Nephrology", "InternalMedicine"],
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", "meta[name='description']"],
  },
  about: {
    "@type": "Physician",
    "@id": "https://porazko.pl/#tomasz-porazko",
    name: "dr hab. n. med. Tomasz Porażko",
  },
  mainEntity: {
    "@type": "MedicalBusiness",
    "@id": "https://porazko.pl/#clinic",
  },
};

export const INTERNIST_SERVICES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Usługi nefrologiczne i internistyczne",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "MedicalProcedure",
        name: "Diagnostyka i leczenie chorób nerek",
        description:
          "Kompleksowa diagnostyka nefrologiczna, leczenie chorób nerek i układu moczowego",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "MedicalProcedure",
        name: "Diagnostyka USG",
        description:
          "Badanie USG jamy brzusznej obejmujące nerki, drogi moczowe, płuca, naczynia oraz przetoki i grafty do hemodializ",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "MedicalProcedure",
        name: "Leczenie nerkozastępcze",
        description:
          "Kwalifikacja i prowadzenie pacjentów w programie leczenia nerkozastępczego",
      },
    },
  ],
};
