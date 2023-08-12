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
        shadowColor: "rgba(30, 30, 30, 0.4)",
      },
      width: {
        landingWidth: "750px",
        semiLandingWidth: "500px",
        aboutWidth: "370px",
        semiAboutWidth: "270px",
        servicesHeaderTextWidth: "600px",
        servicesWidth: "300px",
        semiServicesWidth: "200px",
        galleryPortWidth: "200px",
      },
      height: {
        landingHeight: "685px",
        semiLandingHeight: "485px",
        aboutHeight: "250px",
        semiAboutHeight: "200px",
        servicesHeaderHeight: "400px",
        servicesHeaderSemiHeight: "250px",
        servicesHeight: "400px",
        semiServicesHeight: "300px",
        galleryLandHeight: "150px",
      },
      backgroundImage: {
        landingPage: "url('../public/LandingPage/landingpagebg.svg')",
        servicesPage: "url('../public/ServicesPage/servicespagebg.svg')",
        servicesHeader: "url('../public/ServicesPage/headerbg.png')",
        galleryPage: "url('../public/GalleryPage/gallerypagebg.svg')",
        galleryHeader: "url('../public/GalleryPage/headerbg.png')",
      },
      padding: {
        universal: "50px",
        semiUniversal: "25px",
      },
      boxShadow: {
        leftButtonShadow: "-5px 5px 0px 0px",
        rightButtonShadow: "5px 5px 0px 0px",
        leftLetterShadow: "-8px 8px 0px 0px",
        rightLetterShadow: "8px 8px 0px 0px",
        centerLetterShadow: "0px 5px 0px 5px",

        buttons: "0 4px 4px 0",
        headers: "0 15px 22px 22px",
      },
      borderRadius: {
        buttons: "15px",
        form: "50px",
      },
    },
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1279px" },

      lg: { max: "1024px" },

      md: { max: "700px" },

      sm: { max: "425px" },
    },
  },
  plugins: [],
};
export default config;
