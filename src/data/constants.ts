// Stałe aplikacji - centralne miejsce dla danych kontaktowych i konfiguracji

export const CONTACT = {
  phone: "+48 735 239 795",
  phoneLink: "tel:+48735239795",
  email: "kontakt@procorde.pl",
  address: {
    street: "ul. Piłsudskiego 11A",
    city: "45-706 Opole",
    full: "ul. Piłsudskiego 11A, 45-706 Opole",
  },
  workingHours: "Pon–Pt: 9:00–18:00",
} as const;

export const CLINIC = {
  name: "Dom Medyczny Pro Corde",
  shortName: "Pro Corde",
} as const;

export const MAP = {
  coordinates: {
    lat: 50.6696645,
    lng: 17.9138753,
  },
  zoom: 16,
  googleMapsUrl:
    "https://www.google.com/maps/search/OPOLE%20PL.%20J%C3%93ZEFA%20PI%C5%81SUDSKIEGO%2011A",
} as const;

export const BREAKPOINTS = {
  TABLET: 768,
  DESKTOP: 1024,
  DESKTOP_LG: 1280,
} as const;
