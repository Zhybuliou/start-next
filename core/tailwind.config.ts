import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./@/components/**/*.{ts,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        my_bg_image: "url('/background/gray.png')",
        my_bg_yellow: "url('/background/yellow.png')",
        my_bg_black: "url('/background/download.png')",
        my_bg_dots: "url('/icons/noise.png')",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      fontSize: {
        heading01: [
          "50px",
          {
            lineHeight: "130%",
            letterSpacing: "0%",
            fontWeight: "600",
          },
        ],
        "heading-02": [
          "45px",
          {
            lineHeight: "130%",
            letterSpacing: "0%",
            fontWeight: "600",
          },
        ],
        "heading-03": [
          "40px",
          {
            lineHeight: "130%",
            letterSpacing: "0%",
            fontWeight: "600",
          },
        ],
        "heading-04": [
          "35px",
          {
            lineHeight: "130%",
            letterSpacing: "0%",
            fontWeight: "600",
          },
        ],
        "heading-05": [
          "30px",
          {
            lineHeight: "130%",
            letterSpacing: "0%",
            fontWeight: "600",
          },
        ],
        "heading-06": [
          "25px",
          {
            lineHeight: "130%",
            letterSpacing: "0%",
            fontWeight: "600",
          },
        ],
        paragraph: [
          "16px",
          {
            lineHeight: "147.5%",
            letterSpacing: "0%",
            fontWeight: "400",
          },
        ],
        quotes: [
          "32px",
          {
            lineHeight: "140%",
            letterSpacing: "0%",
            fontWeight: "400",
          },
        ],
        button: [
          "18px",
          {
            lineHeight: "160%",
            letterSpacing: "0%",
            fontWeight: "600",
          },
        ],
        navbar: [
          "18px",
          {
            lineHeight: "160%",
            letterSpacing: "0%",
            fontWeight: "400",
          },
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        primary01: "#FFCC4A",
        primary02: "rgb(78, 175, 78)",
        primary03: "rgb(24, 24, 24)",
        primary04: "rgb(245, 245, 245)",
        primary05: "rgb(228, 228, 228)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        button: "42px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
