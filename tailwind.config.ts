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
        lightGrey: '#F4F9FF',
        dark: '#616F7F'
      },
    },
  },
  plugins: [],
} satisfies Config
