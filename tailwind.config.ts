import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	// Theme configuration
	theme: {
		extend: {
			colors: {
				primary: "#FFBF43", // Green color from header
				secondary: "#000957", // Dark blue from hero section
				accent: "#000000", // Black used in various places
			},
			fontFamily: {
				sans: ["var(--font-geist-sans)"],
				mono: ["var(--font-geist-mono)"],
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
					"2xl": "6rem",
				},
				screens: {
					sm: "640px",
					md: "768px",
					lg: "1024px",
					xl: "1280px",
					"2xl": "1536px",
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
