import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#101A2B',
          slate: '#3B475A',
          blue: '#0A7CFF',
          amber: '#F2B705',
          charcoal: '#0D1117',
          light: '#EEF5FF',
          cloud: '#F3F6FB'
        }
      },
      boxShadow: {
        soft: '0 16px 40px rgba(16, 26, 43, 0.12)'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: []
};

export default config;
