import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
		},
		fontFamily: {
			roboto: ["Roboto", "sans-serif"],
			ubuntu: ["Ubuntu", "sans-serif"],
			lobster: ["Lobster", "sans-serif"],
			mont: ["Montserrat", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"primary-bg": "var(--primary-bg)",
				"secondary-bg": "var(--secondary-bg)",
				border: "var(--divider)",
				highlight: "var(--highlight)",
				"primary-fg": "var(--primary-fg)",
				"secondary-fg": "var(--secondary-fg)",
				from:"var(--from)",
				to:"var(--to)",
				via:"var(--via)"
			},
		},
	},
	plugins: [],
};
export default config;
