import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        foreground: "#F5F5F5",
        card: "#111111",
        primary: "#00F0FF",
        secondary: "#00FF9F",
        highlight: "#C026D3"
      }
    }
  },
  plugins: []
};

export default config;
