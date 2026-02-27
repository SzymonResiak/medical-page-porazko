export const DENTIST_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "@id": "https://porazko.pl/dentist/#webpage",
  name: "Stomatolog Opole - Justyna Porażko",
  description:
    "Stomatolog w Opolu - lek. stom. Justyna Porażko. Leczenie zachowawcze, protetyka, endodoncja, chirurgia stomatologiczna, stomatologia dziecięca.",
  url: "https://porazko.pl/dentist",
  inLanguage: "pl-PL",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://porazko.pl/#website",
  },
  specialty: "Dentistry",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", "meta[name='description']"],
  },
  about: {
    "@type": "Dentist",
    "@id": "https://porazko.pl/#justyna-porazko",
    name: "lek. stom. Justyna Porażko",
  },
  mainEntity: {
    "@type": "MedicalBusiness",
    "@id": "https://porazko.pl/#clinic",
  },
};

export const DENTIST_SERVICES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Usługi stomatologiczne",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "MedicalProcedure",
        name: "Badania i konsultacje stomatologiczne",
        description: "Kompleksowe badania stomatologiczne z indywidualnym planem leczenia",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "MedicalProcedure",
        name: "Leczenie zachowawcze",
        description: "Leczenie próchnicy, estetyczne wypełnienia kompozytowe",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "MedicalProcedure",
        name: "Profilaktyka i higienizacja",
        description: "Skaling, piaskowanie, fluoryzacja zębów",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "MedicalProcedure",
        name: "Stomatologia dziecięca",
        description: "Leczenie stomatologiczne małych pacjentów",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "MedicalProcedure",
        name: "Stomatologia estetyczna",
        description: "Wybielanie zębów, poprawa estetyki uśmiechu",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "MedicalProcedure",
        name: "Endodoncja",
        description: "Leczenie kanałowe w powiększeniu",
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "MedicalProcedure",
        name: "Chirurgia stomatologiczna",
        description: "Ekstrakcje zębów i zabiegi chirurgiczne jamy ustnej",
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "MedicalProcedure",
        name: "Protetyka",
        description: "Korony, mosty, protezy stałe i ruchome",
      },
    },
  ],
};
