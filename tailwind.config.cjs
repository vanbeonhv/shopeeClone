/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/*.{js,ts,jsx,tsx}'],
	corePlugins: {
		container: false
	},
	theme: {
		extend: {
			colors: {
				orange: '#ee4d2d',
				'orange-300': '#F05D40'
			}
		}
	},
	plugins: [
		plugin(function ({ addComponents, theme }) {
			addComponents({
				'.container': {
					maxWidth: theme('colums.7xl'),
					marginLeft: 'auto',
					marginRight: 'auto',
					paddingLeft: theme('spacing.4')
				}
			});
		})
	]
};
