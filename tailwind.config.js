/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "serif"],
      },
      backgroundImage: () => ({
        "plan-desktop": "url('/assets/plan/desktop/bg-order-summary.png')",
        "plan-mobile": "url('/assets/plan/mobile/bg-order-summary.png')",
        "plan-modal": "url('/assets/plan/desktop/bg-steps.png')",
      }),
      backgroundColor: {
        primary: "#0e8784",
      },
    },
  },
  plugins: [],
};
