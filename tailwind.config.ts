import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          base: "#EA5E19",
          dark: "#903000",
        },
        white: {
          base: "#FFFFFF",
        },
        gray: {
          base: "#636463",
          light: "#a3a3a3",
          lighter: "#E6E6E6",
        },
        black: {
          base: "#000000",
          light: "#7B7B7B",
          dark: "#212221",
        },
        green: {
          light: "#b5deba",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        8: "8px",
        10: "10px",
        11: "11px",
        28: "28px",
        34: "34px",
        200: "200px",
      },
      lineHeight: {
        1.5: "150%",
      },
      spacing: {
        4.5: "18px",
        15: "60px",
        22.5: "90px",
        25: "100px",
        30: "120px",
        37.5: "150px",
        86: "344px",
        100: "400px",
        112.5: "450px",
        150: "600px",
        "1/2": "50%",
      },
      borderRadius: {
        10: "10px",
      },
      maxWidth: {
        25: "100px",
        30: "120px",
        147: "588px",
        177.5: "710px",
        360: "1440px",
        372: "1488px",
        480: "1920px",
      },
      minWidth: {
        22.5: "90px",
        102.5: "410px",
      },
      screens: {
        xs: "450px",
        sm: "720px",
        md: "900px",
        lg: "1076px",
        xl: "1300px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
      gridTemplateColumns: {
        "0fr": "0fr",
      },
      gridTemplateRows: {
        "0fr": "0fr",
        "1fr": "1fr",
      },
    },
  },
  plugins: [],
};
export default config;
