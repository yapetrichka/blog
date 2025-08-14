/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Minimalist Black & White Color Palette
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          50: '#FAFAFA',   // Lightest background
          100: '#F5F5F5',  // Light background (code blocks)
          200: '#E5E5E5',  // Borders
          300: '#D4D4D4',  // Hover borders
          400: '#A3A3A3',  // Disabled text
          500: '#737373',  // Secondary text
          600: '#525252',  // Primary text light
          700: '#404040',  // Heading text light
          800: '#262626',  // Heading text
          900: '#171717',  // Primary text
          950: '#0A0A0A',  // Darkest text
        },
        // Semantic colors for easy migration
        bg: {
          primary: '#FFFFFF',      // White background
          secondary: '#FAFAFA',    // Light gray background
          tertiary: '#F5F5F5',     // Card background
          blur: 'rgba(255, 255, 255, 0.95)', // Blur background
        },
        text: {
          primary: '#171717',      // Dark text
          secondary: '#737373',    // Gray text
          white: '#FFFFFF',        // White (for dark backgrounds)
          black: '#000000',        // Pure black
        },
        accent: {
          primary: '#000000',      // Black accent
          secondary: '#737373',    // Gray accent
        },
        border: {
          primary: '#E5E5E5',      // Light gray borders
          secondary: '#D4D4D4',    // Hover borders
          tertiary: '#F5F5F5',     // Very light borders
        },
      },
      spacing: {
        // 8pt Grid System
        '0': '0',
        '0.5': '4px',    // 0.5x base
        '1': '8px',      // Base unit
        '1.5': '12px',   // 1.5x base
        '2': '16px',     // 2x base
        '3': '24px',     // 3x base
        '4': '32px',     // 4x base
        '5': '40px',     // 5x base
        '6': '48px',     // 6x base
        '7': '56px',     // 7x base
        '8': '64px',     // 8x base
        '9': '72px',     // 9x base
        '10': '80px',    // 10x base
        '11': '88px',    // 11x base
        '12': '96px',    // 12x base
        '14': '112px',   // 14x base
        '16': '128px',   // 16x base
        '20': '160px',   // 20x base
        '24': '192px',   // 24x base
        '28': '224px',   // 28x base
        '32': '256px',   // 32x base
        '36': '288px',   // 36x base
        '40': '320px',   // 40x base
        '44': '352px',   // 44x base
        '48': '384px',   // 48x base
        '52': '416px',   // 52x base
        '56': '448px',   // 56x base
        '60': '480px',   // 60x base
        '64': '512px',   // 64x base
        '72': '576px',   // 72x base
        '80': '640px',   // 80x base
        '96': '768px',   // 96x base
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono',
          'Monaco',
          'Menlo',
          'Consolas',
          'Courier New',
          'monospace'
        ],
        // Keep aliases for compatibility
        terminal: [
          'JetBrains Mono',
          'Monaco', 
          'Menlo',
          'monospace'
        ],
        cyberpunk: [
          'Inter',
          'system-ui',
          'sans-serif'
        ],
        tech: [
          'JetBrains Mono',
          'monospace'
        ],
      },
      fontSize: {
        // 8pt Grid Aligned Typography
        'xs': ['12px', { lineHeight: '16px' }],   // 1.5x base, 2x base line height
        'sm': ['14px', { lineHeight: '24px' }],   // 1.75x base, 3x base line height
        'base': ['16px', { lineHeight: '24px' }], // 2x base, 3x base line height
        'lg': ['18px', { lineHeight: '32px' }],   // 2.25x base, 4x base line height
        'xl': ['20px', { lineHeight: '32px' }],   // 2.5x base, 4x base line height
        '2xl': ['24px', { lineHeight: '32px' }],  // 3x base, 4x base line height
        '3xl': ['32px', { lineHeight: '40px' }],  // 4x base, 5x base line height
        '4xl': ['40px', { lineHeight: '48px' }],  // 5x base, 6x base line height
        '5xl': ['48px', { lineHeight: '56px' }],  // 6x base, 7x base line height
        '6xl': ['64px', { lineHeight: '72px' }],  // 8x base, 9x base line height
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        },
        spin: {
          'to': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        // Minimalist shadows
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      borderRadius: {
        'none': '0',
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}