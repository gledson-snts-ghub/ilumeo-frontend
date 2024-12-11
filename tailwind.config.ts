import type { Config } from "tailwindcss";

interface AddComponents {
  (components: Record<string, string | Record<string, string>>): void;
}

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/entry.client.tsx",
    "./app/entry.server.tsx",
    "./app/root.tsx",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        orange: "#fe8a00",
        yellow: "#ffd6a6",
        dark: "#151f2b",
        green: "#29e071",
        red: "#e02939",
        gray: "#cfcfcf",
        blueDark: "#476991",
      },
      backgroundImage: {
        gradient: "linear-gradient(0deg, #476991 0%, #151f2b 100%)",
      },
    },
  },
  plugins: [
    function ({ addComponents }: { addComponents: AddComponents }) {
      addComponents({
        ".btn-hover-effect": {
          transitionProperty: "all",
          transitionDuration: "300ms",
          transitionTimingFunction: "ease-in-out",
        },
      });
    },
  ],
} satisfies Config;
