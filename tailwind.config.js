/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				xs: '535px',
			},
			backgroundImage: {
				'desktop-dark': "url('/bg-desktop-dark.jpg')",
				'desktop-light': "url('/bg-desktop-light.jpg')",
				'mobile-light': "url('/bg-mobile-light.jpg')",
				'mobile-dark': "url('/bg-mobile-dark.jpg')",
			},
		},
	},
	plugins: [],
};
