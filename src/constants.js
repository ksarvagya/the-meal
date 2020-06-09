// Durations
export const API_BASE = `${process.env.NODE_ENV === 'production' 
  ? 'http://api.havethemeal.com'
  : 'https://174.138.71.44/havethemeal'}/wp-json/wp/v2`

export const BANNER_TIMEOUT = 4000
export const COURSES_FETCH_TIMEOUT = 5000

export const colors = {
  red: '#F07777',
  blue: '#728CA5',
  taupe: '#A19074',
  white: '#FFFFFF'
}

export const themeColors = [
  colors.red,
  colors.blue,
  colors.taupe
]
