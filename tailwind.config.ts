import type { Config } from "tailwindcss";

import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#1e3765",
          secondary: "#007fa3",
          info: "#6fc7ea",
        },
      },
    ],
  },
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgb(var(--color-base-content) / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--color-base-content) / 0.1) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid-pattern': '4rem 4rem',
      },
    },
  },
  plugins: [typography, daisyui],
};
export default config;
