/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          bg: '#070711',
          'bg-2': '#0D0D1A',
          surface: '#12121E',
          'surface-2': '#1A1A2E',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-bright': 'rgba(0, 212, 255, 0.2)',
          primary: '#00D4FF',
          'primary-dark': '#0099CC',
          secondary: '#7B2FBE',
          accent: '#FF6B6B',
          green: '#00FF88',
          'text-muted': '#8A8AA0',
          'text-dim': '#5A5A7A',
        },
        // Semantic shortcuts
        cyan: {
          400: '#00D4FF',
          500: '#00B8E6',
          600: '#0099CC',
        },
        purple: {
          500: '#7B2FBE',
          600: '#6B27A8',
          400: '#9B4FDE',
        },
        emerald: {
          400: '#00FF88',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #00D4FF, #7B2FBE)',
        'grad-blue': 'linear-gradient(135deg, #00D4FF, #0066FF)',
        'grad-hero': 'linear-gradient(135deg, #070711 0%, #0D0D2A 50%, #1A0A2E 100%)',
        'grad-card': 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(123,47,190,0.05))',
        'grad-glow': 'radial-gradient(circle at 50% 50%, rgba(0,212,255,0.15), transparent 70%)',
        'grid-pattern': `linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)`,
        'grid-purple': `linear-gradient(rgba(123, 47, 190, 0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(123, 47, 190, 0.04) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '60px 60px',
        'grid-sm': '40px 40px',
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(0, 212, 255, 0.2)',
        'glow-cyan-lg': '0 0 60px rgba(0, 212, 255, 0.3)',
        'glow-purple': '0 0 30px rgba(123, 47, 190, 0.2)',
        'glow-purple-lg': '0 0 60px rgba(123, 47, 190, 0.3)',
        'glow-green': '0 0 20px rgba(0, 255, 136, 0.2)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 16px 64px rgba(0, 0, 0, 0.5)',
        'btn-primary': '0 4px 20px rgba(0, 212, 255, 0.25)',
        'btn-primary-hover': '0 8px 32px rgba(0, 212, 255, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(0,212,255,0.5)' },
        },
        'border-rotate': {
          'from': { backgroundPosition: '0% 0%' },
          'to': { backgroundPosition: '200% 200%' },
        },
        'loading-bar': {
          '0%': { width: '0%' },
          '50%': { width: '80%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'slide-up': 'slide-up 0.6s ease forwards',
        'fade-in': 'fade-in 0.4s ease forwards',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'loading-bar': 'loading-bar 1.5s ease-in-out infinite',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
