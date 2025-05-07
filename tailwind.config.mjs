import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Geist", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        olive: '#A3BCB6',
        leaf: '#39603D',
        grey: '#3C403D',
        tanly: '#DADED4',
        primary: {
          50: '#DADED4',  // tanly
          100: '#C1D1C8', // lighter olive
          200: '#A3BCB6', // olive
          300: '#8AA79F', // darker olive
          400: '#718F88', // even darker olive
          500: '#39603D', // leaf
          600: '#3C403D', // grey
          700: '#334334', // darker grey
          800: '#2A362B', // even darker grey
          900: '#212922', // darkest grey
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "rgb(55, 65, 81)",
            lineHeight: "1.75",
            p: {
              marginTop: "1.5em",
              marginBottom: "1.5em",
            },
            h1: {
              fontWeight: "700",
              marginTop: "2em",
              marginBottom: "1em",
              fontSize: "2.25em",
              lineHeight: "1.2",
            },
            h2: {
              fontWeight: "600",
              marginTop: "2em",
              marginBottom: "1em",
              fontSize: "1.5em",
              lineHeight: "1.3",
            },
            h3: {
              fontWeight: "600",
              marginTop: "1.5em",
              marginBottom: "0.75em",
              fontSize: "1.25em",
              lineHeight: "1.4",
            },
            a: {
              color: "rgb(99, 102, 241)",
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            code: {
              backgroundColor: "rgb(243, 244, 246)",
              padding: "0.2em 0.4em",
              borderRadius: "0.25em",
              fontSize: "0.875em",
            },
          },
        },
      },
      rotate: {
        "45": "45deg",
        "135": "135deg",
        "225": "225deg",
        "315": "315deg",
      },
      animation: {
        twinkle: "twinkle 2s ease-in-out forwards",
        meteor: "meteor 3s ease-in-out forwards",
      },
      keyframes: {
        twinkle: {
          "0%": { 
            opacity: 0, 
            transform: "rotate(0deg)" 
          },
          "50%": { 
            opacity: 1,
            transform: "rotate(180deg)" 
          },
          "100%": { 
            opacity: 0, 
            transform: "rotate(360deg)" 
          },
        },
        meteor: {
          "0%": { 
            opacity: 0, 
            transform: "translateY(200%)" 
          },
          "50%": { 
            opacity: 1  
          },
          "100%": { 
            opacity: 0, 
            transform: "translateY(0)" 
          },
        },
      },
      colors: {
        dark: {
          DEFAULT: '#0f172a', // Slate 900
          foreground: '#f8fafc', // Slate 50
          muted: '#94a3b8', // Slate 400
          accent: '#3b82f6', // Blue 500
          border: '#334155', // Slate 700
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
