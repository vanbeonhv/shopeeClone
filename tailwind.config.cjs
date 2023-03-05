/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				orange: '#ee4d2d',
				'orange-300': '#F05D40'
			}
		}
	},
	plugins: []
};
