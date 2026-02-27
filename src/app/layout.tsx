import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: {
    default: "Porażko | Stomatolog i Nefrolog w Opolu - Gabinet Lekarski",
    template: "%s | Porażko",
  },
  description:
    "Gabinet stomatologiczny i nefrologiczny w Opolu. Justyna Porażko - dentysta. Tomasz Porażko - nefrolog, internista. Umów wizytę!",
  keywords: [
    "stomatolog Opole",
    "dentysta Opole",
    "nefrolog Opole",
    "internista Opole",
    "Porażko",
    "Justyna Porażko",
    "Tomasz Porażko",
    "leczenie zębów Opole",
    "choroby nerek Opole",
  ],
  authors: [{ name: "Porażko" }],
  creator: "Porażko",
  publisher: "Porażko",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Porażko",
    title: "Porażko | Stomatolog i Nefrolog w Opolu - Gabinet Lekarski",
    description:
      "Gabinet stomatologiczny i nefrologiczny w Opolu. Justyna Porażko - dentysta. Tomasz Porażko - nefrolog, internista.",
    images: [
      {
        url: "https://porazko.pl/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Porażko - Gabinet Stomatologiczny i Nefrologiczny w Opolu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Porażko | Stomatolog i Nefrolog w Opolu",
    description: "Gabinet stomatologiczny i nefrologiczny w Opolu. Justyna i Tomasz Porażko.",
    images: ["https://porazko.pl/images/og-image.png"],
  },
  alternates: {
    canonical: "https://porazko.pl/",
  },
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FCFCFC",
  viewportFit: "cover",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

// Global structured data — rendered on every page (Organization + WebSite + Persons)
const globalStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://porazko.pl/#clinic",
      "name": "Porażko - Stomatologia i Nefrologia",
      "alternateName": ["Porażko", "Gabinet Porażko"],
      "description": "Profesjonalne usługi stomatologiczne i nefrologiczne w Opolu. Justyna Porażko — stomatolog. Tomasz Porażko — nefrolog, internista.",
      "url": "https://porazko.pl",
      "telephone": "+48 735 239 795",
      "email": "porazko@poczta.onet.pl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://porazko.pl/images/og-image.png",
        "width": 1200,
        "height": 630
      },
      "image": "https://porazko.pl/images/og-image.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "plac Piłsudskiego 11A",
        "addressLocality": "Opole",
        "postalCode": "45-706",
        "addressRegion": "opolskie",
        "addressCountry": "PL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.6696645,
        "longitude": 17.9138753
      },
      "areaServed": {
        "@type": "City",
        "name": "Opole"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      ],
      "priceRange": "$$",
      "currenciesAccepted": "PLN",
      "paymentAccepted": "Karta płatnicza, Przelew",
      "medicalSpecialty": ["Dentistry", "Nephrology", "Internal Medicine"],
      "employee": [
        { "@id": "https://porazko.pl/#tomasz-porazko" },
        { "@id": "https://porazko.pl/#justyna-porazko" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "6",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Maciej" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "Pani Doktor to najlepszy stomatolog jakiego znam - pełen profesjonalizm wykonywanych zabiegów! Bardzo miła atmosfera, podejście pełne życzliwości, zrozumienia oraz cierpliwości do pacjenta."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Beata" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "Gorąco polecam Pana Doktora - cierpliwy, skoncentrowany na pacjencie, zainteresowany ogólnym stanem zdrowia, a przede wszystkim bardzo kompetentny."
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://porazko.pl/#website",
      "name": "Porażko - Stomatologia i Nefrologia",
      "url": "https://porazko.pl",
      "description": "Gabinet stomatologiczny i nefrologiczny w Opolu. Justyna Porażko — dentysta. Tomasz Porażko — nefrolog, internista.",
      "publisher": { "@id": "https://porazko.pl/#clinic" },
      "inLanguage": "pl-PL"
    },
    {
      "@type": "Physician",
      "@id": "https://porazko.pl/#tomasz-porazko",
      "name": "dr hab. n. med. Tomasz Porażko",
      "jobTitle": "Nefrolog, Internista",
      "description": "Specjalista nefrolog i internista. Profesor Uniwersytetu Opolskiego, kierownik Oddziału i Kliniki Nefrologii USK w Opolu.",
      "medicalSpecialty": ["Nephrology", "Internal Medicine"],
      "worksFor": { "@id": "https://porazko.pl/#clinic" },
      "sameAs": [
        "https://share.google/RBch228XyzpVrXjYr",
        "https://www.researchgate.net/profile/Tomasz-Porazko",
        "https://www.znanylekarz.pl/tomasz-porazko-2/nefrolog-internista",
        "https://www.mp.pl/lekarz/tomasz.porazko",
        "https://www.usk.opole.pl/659/dr-hab-n-med-tomasz-porazko-prof-uniwersytetu-opolskiego-kierownikiem-oddzialu-i-kliniki-nefrologii.html",
        "https://radio.opole.pl/528,563,dr-n-med-tomaszem-porazko-o-tym-jak-dbac-o-nerki",
        "https://nto.pl/opolski-nefrolog-z-tytulem-doktora-habilitowanego-to-wielki-sukces-naszego-szpitala/ar/c14-16437753",
        "https://kcp.pl/lekarz/tomasz-porazko/internista-nefrolog/opole/",
        "https://eurologia.pl/lekarz/1306/tomasz-porazko-nefrolog"
      ]
    },
    {
      "@type": "Dentist",
      "@id": "https://porazko.pl/#justyna-porazko",
      "name": "lek. stom. Justyna Porażko",
      "jobTitle": "Stomatolog",
      "description": "Lekarz dentysta specjalizujący się w stomatologii zachowawczej, protetyce i chirurgii stomatologicznej.",
      "medicalSpecialty": ["Dentistry"],
      "worksFor": { "@id": "https://porazko.pl/#clinic" },
      "sameAs": [
        "https://share.google/rlKke20h6BIi3VZOV",
        "https://www.znanylekarz.pl/justyna-porazko/stomatolog/opole",
        "https://panaceum.opole.pl/zespol/",
        "https://swiatprzychodni.pl/lekarz/1563612/",
        "https://panoramafirm.pl/opolskie,,opole,pu%C5%BCaka,9/justyna_porazko-zjbbkb_sj.html"
      ]
    }
  ]
};

// Landing page structured data — CollectionPage with speakable + significantLinks
const landingPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://porazko.pl/#homepage",
  "name": "Porażko | Stomatolog i Nefrolog w Opolu - Gabinet Lekarski",
  "url": "https://porazko.pl",
  "description": "Gabinet stomatologiczny i nefrologiczny w Opolu. Justyna Porażko - dentysta. Tomasz Porażko - nefrolog, internista. Umów wizytę!",
  "inLanguage": "pl-PL",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://porazko.pl/#website"
  },
  "publisher": {
    "@id": "https://porazko.pl/#clinic"
  },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://porazko.pl/images/og-image.png",
    "width": 1200,
    "height": 630
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2", "meta[name='description']"]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strona główna",
        "item": "https://porazko.pl"
      }
    ]
  },
  "significantLink": [
    "https://porazko.pl/dentist",
    "https://porazko.pl/internist"
  ],
  "mainEntity": { "@id": "https://porazko.pl/#clinic" }
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2LCW13SRS2" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2LCW13SRS2');
            `,
          }}
        />
        {/* Schema.org — Global (Organization + WebSite + Persons) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalStructuredData) }}
        />
        {/* Schema.org — Landing Page (CollectionPage) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }}
        />
      </head>
      <body className="antialiased">
        <main>
          <ClientLayout>{children}</ClientLayout>
        </main>
      </body>
    </html>
  );
}
