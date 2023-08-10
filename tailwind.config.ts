import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00CC99",
        secondary: "#2b2b2b",
        accent: "#fff",
      },
      width: {
        landingWidth: "600px",
      },
      height: {
        landingHeight: "600px",
      },
    },
  },
  plugins: [],
};
export default config;
