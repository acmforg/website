import { JWT } from 'google-auth-library'

const auth = new JWT({
  email: process.env.GOOGLE_CLIENT_MAIL,
  key: process.env.GOOGLE_CLIENT_KEY?.replace(/\\n/gm, '\n'),
  scopes: [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/calendar',
  ],
})

auth.authorize()

export default auth
