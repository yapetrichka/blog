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
        // Simplified Cyberpunk 2077 Colors (only yellow and white text)
        bg: {
          primary: '#000000',      // Pure black background
          secondary: '#0A0A0A',    // Very dark background
          tertiary: '#1A1A1A',     // Dark card background
          blur: '#0D0D0D',         // Background for blur effects
        },
        text: {
          primary: '#FFFFFF',      // Pure white text
          secondary: '#FCE300',    // Cyberpunk yellow text
          white: '#FFFFFF',        // Pure white
          yellow: '#FCE300',       // Cyberpunk yellow
        },
        accent: {
          primary: '#FCE300',      // Yellow primary accent
          secondary: '#FFFFFF',    // White secondary accent
          yellow: '#FCE300',       // Cyberpunk yellow
          white: '#FFFFFF',        // Pure white
        },
        border: {
          primary: '#333333',      // Dark gray borders
          secondary: '#FCE300',    // Yellow borders for focus
          tertiary: '#555555',     // Medium gray borders
        },
        // Cyberpunk 2077 Simplified Flat Colors
        cyberpunk: {
          // Base colors
          base: '#000000',         // Pure black background
          dark: '#000000',         // Pure black
          surface: '#0A0A0A',      // Very dark surface
          card: '#1A1A1A',         // Card background
          blur: '#0D0D0D',         // Blur background
          // Only yellow and white
          yellow: '#FCE300',       // Official Cyberpunk yellow
          white: '#FFFFFF',        // Pure white
          // Support colors
          gray: '#333333',         // Dark gray
          darkGray: '#1A1A1A',     // Darker gray
          lightGray: '#555555',    // Light gray for borders
        },
        gray: {
          50: '#FFFFFF',   // White
          100: '#F0F0F0',  // Very light gray
          200: '#CCCCCC',  // Light gray
          300: '#999999',  // Medium-light gray
          400: '#777777',  // Medium gray
          500: '#555555',  // Medium-dark gray
          600: '#333333',  // Dark gray
          700: '#1A1A1A',  // Darker gray
          800: '#0D0D0D',  // Very dark gray
          850: '#0A0A0A',  // Almost black
          900: '#000000',  // Pure black
        }
      },
      fontFamily: {
        sans: [
          'Rajdhani',
          'system-ui',
          'sans-serif'
        ],
        mono: [
          'Orbitron',
          'Monaco',
          'Menlo',
          'Consolas',
          'monospace'
        ],
        terminal: [
          'Orbitron',
          'Monaco', 
          'Menlo',
          'monospace'
        ],
        cyberpunk: [
          'Rajdhani',
          'system-ui',
          'sans-serif'
        ],
        tech: [
          'Orbitron',
          'monospace'
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'terminal-blink': 'terminalBlink 1s infinite',
        'typewriter': 'typewriter 3s steps(40) 1s forwards',
        'cyberpunk-glow': 'cyberpunkGlow 2s ease-in-out infinite alternate',
        'cyberpunk-pulse': 'cyberpunkPulse 2s ease-in-out infinite',
        'cyberpunk-scan': 'cyberpunkScan 3s linear infinite',
        'cyberpunk-glitch': 'cyberpunkGlitch 0.3s linear infinite',
        'neon-flicker': 'neonFlicker 1.5s linear infinite',
        'data-stream': 'dataStream 20s linear infinite',
        // Blue typewriter effects
        'typewriter-glow': 'typewriterGlow 3s ease-in-out infinite alternate',
        'type-line': 'typeLine 4s infinite',
        'cursor-blink': 'cursorBlink 1s infinite',
        'code-fall': 'codeFall 8s linear infinite',
        'blue-scan': 'blueScan 3s linear infinite',
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
        terminalBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        cyberpunkGlow: {
          '0%': { 
            textShadow: '0 0 5px #FCE300, 0 0 10px #FCE300, 0 0 15px #FCE300',
            boxShadow: '0 0 5px rgba(252, 227, 0, 0.3)'
          },
          '100%': { 
            textShadow: '0 0 8px #FCE300, 0 0 16px #FCE300, 0 0 24px #FCE300',
            boxShadow: '0 0 12px rgba(252, 227, 0, 0.5)'
          },
        },
        cyberpunkPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(252, 227, 0, 0.4)',
            borderColor: '#FCE300'
          },
          '50%': { 
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.6)',
            borderColor: '#FFFFFF'
          },
        },
        cyberpunkScan: {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '50%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(100%)',
            opacity: '0'
          },
        },
        cyberpunkGlitch: {
          '0%, 100%': { 
            transform: 'translate(0px, 0px)',
            filter: 'hue-rotate(0deg)'
          },
          '10%': { 
            transform: 'translate(-1px, -1px)',
            filter: 'hue-rotate(90deg)'
          },
          '20%': { 
            transform: 'translate(1px, 1px)',
            filter: 'hue-rotate(180deg)'
          },
          '30%': { 
            transform: 'translate(-1px, 1px)',
            filter: 'hue-rotate(270deg)'
          },
          '40%': { 
            transform: 'translate(1px, -1px)',
            filter: 'hue-rotate(360deg)'
          },
        },
        neonFlicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            opacity: '1',
            textShadow: '0 0 5px #FCE300, 0 0 10px #FCE300, 0 0 15px #FCE300'
          },
          '20%, 24%, 55%': {
            opacity: '0.4',
            textShadow: 'none'
          }
        },
        dataStream: {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        typewriterGlow: {
          '0%': { 
            textShadow: '0 0 5px #FCE300, 0 0 10px #FCE300, 0 0 15px #FCE300',
            boxShadow: '0 0 5px rgba(252, 227, 0, 0.3)'
          },
          '100%': { 
            textShadow: '0 0 8px #FCE300, 0 0 16px #FCE300, 0 0 24px #FCE300',
            boxShadow: '0 0 12px rgba(252, 227, 0, 0.5)'
          },
        },
        typeLine: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        cursorBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        codeFall: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blueScan: {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '50%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(100%)',
            opacity: '0'
          },
        },
      },
      boxShadow: {
        'cyberpunk': '0 0 10px rgba(252, 227, 0, 0.3)',
        'cyberpunk-lg': '0 0 20px rgba(252, 227, 0, 0.4)',
        'cyberpunk-xl': '0 0 30px rgba(252, 227, 0, 0.5)',
        'cyberpunk-yellow': '0 0 15px rgba(252, 227, 0, 0.3)',
        'cyberpunk-white': '0 0 15px rgba(255, 255, 255, 0.3)',
        'neon-yellow': '0 0 5px #FCE300, 0 0 10px #FCE300, 0 0 15px #FCE300',
        'neon-white': '0 0 5px #FFFFFF, 0 0 10px #FFFFFF, 0 0 15px #FFFFFF',
        'glow': '0 0 5px currentColor',
        'inner-glow': 'inset 0 0 10px rgba(252, 227, 0, 0.2)',
        'terminal': '0 0 20px rgba(0, 0, 0, 0.9)',
        'blur-dark': '0 4px 30px rgba(0, 0, 0, 0.8)',
        'blur-heavy': '0 8px 40px rgba(0, 0, 0, 0.9)',
      },
      backdropBlur: {
        'cyberpunk': '10px',
        'heavy': '20px',
        'intense': '30px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}