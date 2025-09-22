/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(222.2 47.4% 11.2%)",
        primary: "hsl(24 95% 53%)",     /* brunchy orange */
        muted: "hsl(24 35% 96%)",
        card: "hsl(0 0% 100%)",
        'card-foreground': "hsl(222.2 47.4% 11.2%)",
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "Arial"],
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [],
}
