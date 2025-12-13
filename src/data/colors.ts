// System kolorów aplikacji
// Używaj tych stałych zamiast hardcoded wartości hex

export const COLORS = {
  // Neutralne
  white: "#FFFFFF",
  offWhite: "#FCFCFC",
  lightGray: "#EAEAEA",
  gray: "#9c9c9c",
  darkGray: "#2E2E2E",
  darkerGray: "#2A2A2A",

  // Marka / Akcent
  primary: "#338075", // Główny kolor marki (teal/morski)
  primaryDark: "#17554C", // Ciemniejszy teal dla ikon
  accent: "#006AFF", // Niebieski dla przycisków primary

  // Status / Feedback
  success: "#7EE081", // Zielony dla tick/weryfikacji

  // Mapa Google (specyficzne)
  map: {
    water: "#c8d7d4",
    waterAccent: "#46bcec",
    road: "#eeeeee",
    roadText: "#7b7b7b",
    landscape: "#f2f2f2",
    stroke: "#9c9c9c",
  },
} as const;

// Typy dla TypeScript
export type ColorKey = keyof typeof COLORS;
export type MapColorKey = keyof typeof COLORS.map;
