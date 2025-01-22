import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	// Theme configuration
	theme: {
		extend: {
			colors: {
				primary: "#ffbf43",
				body: "#222222",
			},
			fontFamily: {
				sans: ["var(--font-instrument-sans)"],
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
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
