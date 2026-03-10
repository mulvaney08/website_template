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
          navy: '#0F2747',
          slate: '#334155',
          blue: '#1D7ACB',
          light: '#EAF4FF',
          cloud: '#F5F8FC'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 39, 71, 0.08)'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: []
};

export default config;
