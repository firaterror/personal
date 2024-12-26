import { Inter } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bordercolor: "var(--border-color)",
        buttonbackground: "#1b1b1b",
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
