import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,ts,svelte}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          text: {
            primary: { value: "#222222" },
            secondary: { value: "#777777" },
            black: { value: "#111111" },
          },
          surface: {
            primary: { value: "#EBF3FE" },
            white: { value: "#FFFFFF" },
          },
          border: {
            default: { value: "#E8E8E8" },
            gray: { value: "#DDDDDD" },
          },
          main: {
            50: { value: "#FDF6E9" },
            200: { value: "#ECB14A" },
            300: { value: "#E8A125" },
          },
          label: {
            strong: { value: "#000000" },
            normal: { value: "#171719" },
          },
          static: {
            white: { value: "#FFFFFF" },
            black: { value: "#000000" },
          },
        },
        spacing: {
          "4": { value: "4px" },
          "6": { value: "6px" },
          "10": { value: "10px" },
          "14": { value: "14px" },
          "20": { value: "20px" },
          "24": { value: "24px" },
          "32": { value: "32px" },
          "34": { value: "34px" },
          "200": { value: "200px" },
        },
        fontSizes: {
          "12": { value: "12px" },
          "14": { value: "14px" },
          "18": { value: "18px" },
          "20": { value: "20px" },
          "24": { value: "24px" },
          "28": { value: "28px" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
