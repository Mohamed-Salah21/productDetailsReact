/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  content: [
    "./pages/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        lightPrimary: "var(--lightPrimary)",
        lightDark: "var(--lightDark)",
        grayTint: "var(--grayTint)",
        gold: "var(--gold)",
      },
    },
  },
  plugins: [],
};
