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
        // Cyberpunk 2077 color scheme
        bg: {
          primary: '#0A0A0A',        // Deep black
          secondary: '#1A1A1A',      // Dark gray
          tertiary: '#2A2A2A',       // Medium gray
          panel: '#0F0F0F',          // Panel background
          glass: 'rgba(26, 26, 26, 0.8)', // Glass effect
        },
        text: {
          primary: '#FFFFFF',        // Pure white
          secondary: '#E0E0E0',      // Light gray
          tertiary: '#B0B0B0',       // Medium gray
          muted: '#808080',          // Muted gray
          cyber: '#FCEE09',          // Cyberpunk yellow
          neon: '#00F5FF',           // Neon cyan
        },
        accent: {
          primary: '#FCEE09',        // Cyberpunk yellow - primary
          secondary: '#00F5FF',      // Neon cyan - secondary
          danger: '#FF003C',         // Cyber red
          success: '#39FF14',        // Cyber green
          warning: '#FFD700',        // Gold yellow
          purple: '#9D00FF',         // Cyber purple
          orange: '#FF6B35',         // Cyber orange
        },
        border: {
          primary: '#FCEE09',        // Yellow borders
          secondary: '#00F5FF',      // Cyan borders
          muted: '#333333',          // Dark borders
          glow: '#FCEE09',           // Glowing borders
        },
        // Cyberpunk specific palette
        cyber: {
          // Background colors
          black: '#0A0A0A',          // Deep black
          dark: '#1A1A1A',           // Dark
          darker: '#0F0F0F',         // Darker
          panel: '#1E1E1E',          // Panel
          glass: 'rgba(26, 26, 26, 0.8)', // Glass panels
          // Text colors
          white: '#FFFFFF',          // Pure white
          gray: '#E0E0E0',           // Light gray
          muted: '#B0B0B0',          // Medium gray
          // Neon colors
          yellow: '#FCEE09',         // Primary yellow
          gold: '#FFD700',           // Gold
          cyan: '#00F5FF',           // Cyan
          blue: '#00D9FF',           // Light blue
          red: '#FF003C',            // Cyber red
          green: '#39FF14',          // Cyber green
          purple: '#9D00FF',         // Cyber purple
          orange: '#FF6B35',         // Cyber orange
          pink: '#FF1493',           // Hot pink
        },
        glow: {
          yellow: 'rgba(252, 238, 9, 0.5)',
          cyan: 'rgba(0, 245, 255, 0.5)',
          red: 'rgba(255, 0, 60, 0.5)',
          green: 'rgba(57, 255, 20, 0.5)',
          purple: 'rgba(157, 0, 255, 0.5)',
        }
      },
      fontFamily: {
        // Cyberpunk-style fonts
        cyber: [
          'Orbitron',
          'Exo 2',
          'Source Code Pro',
          'monospace'
        ],
        mono: [
          'Source Code Pro',
          'Courier New',
          'monospace'
        ],
        sans: [
          'Exo 2',
          'Orbitron',
          'system-ui',
          'sans-serif'
        ],
        display: [
          'Orbitron',
          'Exo 2',
          'sans-serif'
        ]
      },
      animation: {
        // Cyberpunk animations
        'cyber-glow': 'cyberGlow 2s ease-in-out infinite alternate',
        'cyber-pulse': 'cyberPulse 1.5s ease-in-out infinite',
        'cyber-flicker': 'cyberFlicker 0.1s infinite linear',
        'cyber-glitch': 'cyberGlitch 0.3s infinite',
        'cyber-scan': 'cyberScan 3s ease-in-out infinite',
        'cyber-float': 'cyberFloat 4s ease-in-out infinite',
        'cyber-slide': 'cyberSlide 0.5s ease-out',
        'cyber-zoom': 'cyberZoom 0.3s ease-out',
        'neon-border': 'neonBorder 2s ease-in-out infinite alternate',
        'hologram': 'hologram 4s ease-in-out infinite',
        'glitch-text': 'glitchText 2s infinite',
        'data-stream': 'dataStream 1s linear infinite',
      },
      keyframes: {
        cyberGlow: {
          '0%': { 
            boxShadow: '0 0 5px #FCEE09, 0 0 10px #FCEE09, 0 0 15px #FCEE09',
            textShadow: '0 0 5px #FCEE09'
          },
          '100%': { 
            boxShadow: '0 0 10px #FCEE09, 0 0 20px #FCEE09, 0 0 30px #FCEE09',
            textShadow: '0 0 10px #FCEE09'
          },
        },
        cyberPulse: {
          '0%, 100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.05)'
          },
        },
        cyberFlicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        cyberGlitch: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-1px)' },
          '80%': { transform: 'translateX(1px)' },
          '100%': { transform: 'translateX(0)' },
        },
        cyberScan: {
          '0%': { 
            backgroundPosition: '0% 0%',
            opacity: '0.3'
          },
          '50%': { 
            backgroundPosition: '100% 100%',
            opacity: '0.8'
          },
          '100%': { 
            backgroundPosition: '0% 0%',
            opacity: '0.3'
          },
        },
        cyberFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        cyberSlide: {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          },
        },
        cyberZoom: {
          '0%': { 
            transform: 'scale(0.8)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          },
        },
        neonBorder: {
          '0%': { 
            borderColor: '#FCEE09',
            boxShadow: '0 0 5px #FCEE09'
          },
          '50%': { 
            borderColor: '#00F5FF',
            boxShadow: '0 0 15px #00F5FF'
          },
          '100%': { 
            borderColor: '#FCEE09',
            boxShadow: '0 0 5px #FCEE09'
          },
        },
        hologram: {
          '0%, 100%': { 
            opacity: '0.8',
            filter: 'hue-rotate(0deg)'
          },
          '50%': { 
            opacity: '1',
            filter: 'hue-rotate(90deg)'
          },
        },
        glitchText: {
          '0%': { transform: 'translateX(0)' },
          '10%': { transform: 'translateX(-2px) skew(-1deg)' },
          '20%': { transform: 'translateX(2px) skew(1deg)' },
          '30%': { transform: 'translateX(-1px) skew(-0.5deg)' },
          '40%': { transform: 'translateX(1px) skew(0.5deg)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(0)' },
        },
        dataStream: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      boxShadow: {
        'cyber': '0 0 10px rgba(252, 238, 9, 0.5)',
        'cyber-lg': '0 0 20px rgba(252, 238, 9, 0.6)',
        'cyber-xl': '0 0 30px rgba(252, 238, 9, 0.7)',
        'cyber-cyan': '0 0 15px rgba(0, 245, 255, 0.5)',
        'cyber-red': '0 0 15px rgba(255, 0, 60, 0.5)',
        'cyber-green': '0 0 15px rgba(57, 255, 20, 0.5)',
        'cyber-purple': '0 0 15px rgba(157, 0, 255, 0.5)',
        'neon-glow': '0 0 20px currentColor',
        'inner-glow': 'inset 0 0 20px rgba(252, 238, 9, 0.2)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'panel': '0 4px 15px 0 rgba(252, 238, 9, 0.1)',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #FCEE09, #00F5FF, #FF003C)',
        'cyber-gradient-warm': 'linear-gradient(135deg, #FFD700, #FF6B35, #FF003C)',
        'cyber-gradient-cool': 'linear-gradient(135deg, #00F5FF, #9D00FF, #39FF14)',
        'cyber-radial': 'radial-gradient(circle, #FCEE09 0%, #00F5FF 50%, #FF003C 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'cyber-pattern': 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(252, 238, 9, 0.1) 2px, rgba(252, 238, 9, 0.1) 4px)',
        'hex-pattern': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FCEE09" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      backdropBlur: {
        'cyber': '12px',
        'glass': '16px',
      },
      clipPath: {
        'cyber-corner': 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))',
        'cyber-angle': 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)',
        'cyber-hex': 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
      }
    },
  },
  plugins: [],
} 