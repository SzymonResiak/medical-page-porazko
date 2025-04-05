import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "360px",
        tablet: "700px",
      },
      fontFamily: {
        noto: ["Noto Sans Telugu", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
