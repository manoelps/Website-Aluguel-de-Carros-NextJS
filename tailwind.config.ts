import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1300px'
    },
    extend: {
      colors: {
        primary: '#101828',
        secondary: '#667085',
        accent: {
          DEFAULT: '#ed1d24',
          hover: '#dd242a'
        },
        body: '#dedede'
      }
    }
  },
  plugins: []
};
export default config;
