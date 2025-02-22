import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        geist: "var(--font-geist-sans)",
        geistMono: "var(--font-geist-mono)",
        kanit: ["var(--font-kanit)", "sans-serif"],
        openSans: ["var(--font-openSans)", "sans-serif"],
        exo2: "var(--font-exo-2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
