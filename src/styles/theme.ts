import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    blue: "#115D8C",
    orange: "#F25D27",
    title: "#41414D",
    text: "#737380",
    complement: "#A0ACB3",
    shape01: "#FFFFFF",
    shape02: "#DCE2E6",
    red: "#DE3838",
    green: "#51B853",
    greenLow: "#DCF5DD",
    blueLow: "#DDE9F0",
    orangeLow: "#FFA585",
    yellow: "#EFB866",
    background: "#F5F8FA",
  },
  fontSizes: {
    "10": "0.625rem",
    "12": "0.75rem",
    "14": "0.875rem",
    "16": "1rem",
    "20": "1.25rem",
  },
  space: {
    "4": `0.25rem`,
    "8": `0.5rem`,
    "10": "0.625rem",
    "12": `0.75rem`,
    "16": `1rem`,
    "24": `1.5rem`,
    "32": `2rem`,
  },
  radii: {
    "4": "4px",
    "8": "8px",
  },
  device: {
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1400px)",
  },
};
