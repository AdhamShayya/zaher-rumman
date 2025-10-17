export const theme = {
  colors: {
    primary: '#E31F55',
    secondary: '#20A3A4',
    accent: '#E75B6A',
    dark: '#027380',
    light: '#A9D7D6',
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      100: '#f7fafc',
      200: '#edf2f7',
      300: '#e2e8f0',
      400: '#cbd5e0',
      500: '#a0aec0',
      600: '#718096',
      700: '#4a5568',
      800: '#2d3748',
      900: '#1a202c'
    }
  },
  typography: {
    arabic: {
      primary: 'Frutiger LT Arabic, Arial, sans-serif',
      secondary: 'Dubai, Tahoma, sans-serif'
    },
    latin: {
      primary: 'Arial, sans-serif',
      secondary: 'Georgia, serif'
    }
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem'
  }
} as const;

export type Theme = typeof theme;