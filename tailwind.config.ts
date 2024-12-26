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
    },
    screens: {
      mobile: "375px", // Your mobile breakpoint
      tablet: "768px", // Your tablet breakpoint
      desktop: "1440px", // Your desktop breakpoint
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px", // Mobile padding
        tablet: "32px", // Tablet and up padding
      },
    },
  },
  plugins: [],
} satisfies Config;
