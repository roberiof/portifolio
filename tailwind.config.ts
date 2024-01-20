import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        backgroundExternal: "#0D0A12",
        backgroundInternal: { 100: "#0C0A10", 300: "#09070D" },
        grayLight: "#54525a",
        grayDark: "#848386",
        pinkDark: "#B520CF",
        pinkLight: "#ffb1da",
        purple: "#7100ff  "
      }
    }
  },
  plugins: []
};
export default config;
