import { type Config } from 'tailwindcss'

export default {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
        primary: '#3571B8',
        primaryLight: '#DAEBFF',
        secondary: '#49B050',
        customRed: '#ED1C24',
        customGrey: '#2C2C2C',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
} satisfies Config
