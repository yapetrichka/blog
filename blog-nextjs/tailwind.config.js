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
        // Professional Monochromatic Palette
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          50: '#FAFAFA',   // Lightest background
          100: '#F4F4F5',  // Light background (warmer)
          200: '#E4E4E7',  // Borders (warmer)
          300: '#D4D4D8',  // Hover borders
          400: '#A1A1AA',  // Muted text
          500: '#71717A',  // Secondary text
          600: '#52525B',  // Body text
          700: '#3F3F46',  // Subheadings
          800: '#27272A',  // Dark text
          900: '#18181B',  // Primary text (warmer)
          950: '#09090B',  // Deepest black
        },
        // Semantic colors
        bg: {
          primary: '#FFFFFF',
          secondary: '#FAFAFA',
          tertiary: '#F4F4F5',
          elevated: '#FFFFFF',
          blur: 'rgba(255, 255, 255, 0.97)',
        },
        text: {
          primary: '#18181B',
          secondary: '#52525B',
          tertiary: '#71717A',
          white: '#FFFFFF',
          black: '#000000',
        },
        accent: {
          primary: '#000000',
          hover: '#18181B',
          muted: '#27272A',
        },
        border: {
          primary: '#E4E4E7',
          secondary: '#D4D4D8',
          strong: '#A1A1AA',
          subtle: '#F4F4F5',
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
        // Professional shadows
        'xs': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'sm': '0 1px 3px rgba(0, 0, 0, 0.06)',
        'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)',
        'md': '0 4px 8px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.04)',
        'xl': '0 16px 32px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04)',
        '2xl': '0 24px 48px rgba(0, 0, 0, 0.12)',
        'inner': 'inset 0 1px 2px rgba(0, 0, 0, 0.04)',
        'avatar': '0 0 0 1px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.08)',
        'avatar-hover': '0 0 0 1px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.12)',
        'none': 'none',
      },
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '10px',
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
}