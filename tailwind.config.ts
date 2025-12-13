import type { Config } from "tailwindcss";

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
      "desktop-2": "1760px",
    },
    fontFamily: {
      "noto-ui": ['"Noto Sans Telugu UI"', "sans-serif"],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [],
};

export default config;
