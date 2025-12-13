import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "320px",
      "mobile-2": "390px",
      "mobile-3": "430px",
      tablet: "700px",
      desktop: "1024px",
      "desktop-lg": "1280px",
      "desktop-2": "1440px",
      "desktop-3": "2560px",
    },
    fontFamily: {
      "noto-ui": ['"Noto Sans Telugu UI"', "sans-serif"],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // Tablet landscape (tablet width + landscape + min height to exclude phones)
      addVariant("tablet-landscape", "@media (min-width: 700px) and (orientation: landscape) and (min-height: 500px)");
      // Tablet portrait (tablet width + portrait orientation)
      addVariant("tablet-portrait", "@media (min-width: 700px) and (orientation: portrait)");
      // Phone landscape (landscape + short height = phone rotated)
      addVariant("phone-landscape", "@media (orientation: landscape) and (max-height: 500px)");
    }),
  ],
};

export default config;
