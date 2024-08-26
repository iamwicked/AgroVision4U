/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#f5f2f8",
        midnightblue: "#3a1757",
        white: "#fff",
        black: "#000",
        "primary-gary": "#4d4755",
        "dark-purple": "#1d0532",
        strokeborder: "#d1ccd6",
        blueviolet: {
          "100": "#a142eb",
          "200": "#7a1dc5",
        },
        orange: "#f9bb05",
        gray: {
          "100": "#8a8491",
          "200": "rgba(255, 255, 255, 0.97)",
        },
        dimgray: {
          "100": "#70677b",
          "200": "#6e6776",
        },
        gold: "#fec31c",
        darkgoldenrod: "#cc8f00",
        darkmagenta: "#8b008e",
        slategray: {
          "100": "#87808f",
          "200": "rgba(135, 128, 143, 0.09)",
        },
        darkslateblue: "#4c286a",
        lightslategray: "#8b8294",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
        "12xs": "1px",
        "6xl": "25px",
        "11xl": "30px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      sm: "14px",
      "9xl": "28px",
      "3xl": "22px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      xs: "12px",
      "21xl": "40px",
      "5xl": "24px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
