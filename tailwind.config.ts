import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
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
        // AI Interface specific colors
        "chat-input": "hsl(var(--chat-input))",
        "chat-input-border": "hsl(var(--chat-input-border))",
        "sidebar-bg": "hsl(var(--sidebar-bg))",
        "suggestion-card": "hsl(var(--suggestion-card))",
        "suggestion-card-hover": "hsl(var(--suggestion-card-hover))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "float": "float 6s ease-in-out infinite",
          "pulse-glow": "pulse-glow 3s ease-in-out infinite",
          "slide-up": "slide-up 0.4s ease-out",
          "slide-in-left": "slide-in-left 0.3s ease-out",
          "typing": "typing 1.5s steps(30) infinite, blink 1s infinite",
          "bulge": "bulge 1.5s ease-in-out infinite",
          "slide-down": "slide-down 0.5s ease-out forwards",
          "color-shift": "color-shift 2s ease-in-out infinite",
        },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-bg": "var(--gradient-bg)",
        "gradient-card": "var(--gradient-card)",
      },
      boxShadow: {
        "ai": "var(--shadow-ai)",
        "card-ai": "var(--shadow-card)",
        "glow": "var(--shadow-glow)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
