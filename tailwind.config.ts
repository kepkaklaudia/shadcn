/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      mini: "380px",
      xs: "420px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1920px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      dropShadow: {
        registration: [
          "0 1px 8px rgba(0, 0, 0, 0.10)",
          "-1px 0 8px rgba(0, 0, 0, 0.10)",
        ],
      },
      boxShadow: {
        map: "0 0px 1px rgba(29, 29, 27, 0.502)",
        trailerMenu: "0px 10px 45px 0px hsla(0, 0%, 18%, 0.122)",
        coloredSection: "0px 4px 4px 0px hsl(0, 0%, 18%) inset",
        subMenu: ["0px 14px 56px 0px rgba(0, 0, 0, 0.14)"],
        products: "inset 0px -70px 23px -40px hsl(0, 0%, 97%)",
        backMenu: [
          "0px 1px 0px 0px rgba(0, 0, 0, 0.02) inset, 0px -1px 0px 0px rgba(255, 255, 255, 0.20) inset",
        ],
        tiles: "0 1px 15px 0 rgba(0, 0, 0, 0.10)",
        inputForm: "inset 0 0 0 100px hsl(240, 11%, 96%)",
      },
      gridTemplateColumns: {
        fr: "1fr",
        inputsFr: "0.7fr 1fr",
        twoFr: "repeat(2,1fr)",
        threeFr: "repeat(3,1fr)",
        fourFr: "repeat(4,1fr)",
      },
      colors: {
        alabaster: "hsl(0, 0%, 97%)",
        alto: "hsl(0, 0%, 85%)",
        grey: "hsl(220, 6%, 80%)",
        white: "hsl(0, 0%, 100%)",
        shaft: "hsl(0, 0%, 18%)",
        shuttle: "hsl(222, 12%, 37%)",
        greyOpacity: "hsla(0, 0%, 100%, 0.208)",
        headerOpacity: "hsla(0, 0%, 85%, 0.459)",
        greyBackground: "hsl(0, 0%, 91%)",
        blackOpacity: "hsla(60, 4%, 11%, 0.502)",
        haze: "hsl(195, 29%, 95%)",
        sky: "hsl(189, 32%, 60%)",
        mist: "hsl(191, 29%, 75%)",
        crimson: "hsl(348, 83%, 47%)",

        black: "hsl(0, 0%, 12%)",

        whiteOpacity: "hsla(0, 0%, 100%, 0.6)",
        red: "hsla(349, 97%, 45%, 1)",
        grafit: "hsla(0, 0%, 0%, 0.302)",
        greyIcons: "hsla(216, 15%, 58%, 1)",
        heather: "hsla(216, 16%, 75%, 1)",
        solitude: "hsl(210deg 33.33% 89.41%)",
        athens: "hsla(210, 18%, 96%, 1)",
        sand: "hsla(0, 0%, 96%, 1)",
        light: "hsl(0, 0%, 94%)",
        mercury: "hsla(0, 0%, 89%, 1)",

        silver: "hsla(0, 0%, 62%, 1)",
        boulder: "hsla(0, 0%, 47%)",
        boulderOpacity: "hsla(0, 0%, 47%, 0.38)",
        carouselOpacity: "hsla(0, 0%, 47%, 0.5)",
        redOpacity: "hsla(349, 97%, 45%, 0.5)",
        greenOpacity: "hsla(120, 100%, 90%, 1)",
        yellowOpacity: "hsla(48, 95%, 45%, 0.4)",
        pink: "hsla(0, 100%, 96%, 1)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        footer: "hsla(210, 14%, 97%, 1)",
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
        xl: "calc(var(--radius) + 2px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        loader: {
          to: { backgroundPosition: "left" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        loader: "loader 1.5s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
