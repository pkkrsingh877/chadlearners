import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "class"], // This will enable dark mode based on a class (you can toggle with class="dark")
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'Lato',
  				'sans-serif'
  			],
  			heading: [
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		colors: {
  			darkBackground: '#222831',
  			darkForeground: '#EEEEEE',
  			darkAccent: '#FF5722',
  			darkMuted: '#2D4059',
  			lightBackground: '#F8F9FA',
  			lightForeground: '#495057',
  			lightAccent: '#FF5722',
  			lightMuted: '#343A40',
  			gradientTop: 'linear-gradient(0deg, #fbf5f3ff, #8daa9dff, #522b47ff, #7b0828ff, #0f0e0eff)',
  			gradientRight: 'linear-gradient(90deg, #fbf5f3ff, #8daa9dff, #522b47ff, #7b0828ff, #0f0e0eff)',
  			gradientBottom: 'linear-gradient(180deg, #fbf5f3ff, #8daa9dff, #522b47ff, #7b0828ff, #0f0e0eff)',
  			gradientLeft: 'linear-gradient(270deg, #fbf5f3ff, #8daa9dff, #522b47ff, #7b0828ff, #0f0e0eff)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
