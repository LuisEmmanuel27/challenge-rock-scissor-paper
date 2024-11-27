/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'mainBg': {
					'start': 'hsl(214, 47%, 23%)',
					'end': 'hsl(237, 49%, 15%)'
				},
				'ScissorsGrad': {
					'start': 'hsl(39, 89%, 49%)',
					'end': 'hsl(40, 84%, 53%)'
				},
				'PaperGrad': {
					'start': 'hsl(230, 89%, 62%)',
					'end': 'hsl(230, 89%, 65%)'
				},
				'RockGrad': {
					'start': 'hsl(349, 71%, 52%)',
					'end': 'hsl(349, 70%, 56%)'
				},
				'LizardGrad': {
					'start': 'hsl(261, 73%, 60%)',
					'end': 'hsl(261, 72%, 63%)'
				},
				'SpockGrad': {
					'start': 'hsl(189, 59%, 53%)',
					'end': 'hsl(189, 58%, 57%)'
				},
				'Neutral': {
					'DarkText': 'hsl(229, 25%, 31%)',
					'ScoreText': 'hsl(229, 64%, 46%)',
					'HeaderOutline': 'hsl(217, 16%, 45%)'
				}
			},
			fontFamily: {
				'barlow': ['Barlow Semi Condensed', 'sans-serif']
			},
		},
	},
	plugins: [],
}
