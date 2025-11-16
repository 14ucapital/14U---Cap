/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2563EB',    // Blue
          dark: '#1E3A8A',       // Dark Blue
          accent: '#7C3AED',     // Purple
          success: '#10B981',    // Green
          bg: '#F9FAFB',         // Light Grey Background
          surface: '#FFFFFF',    // White
          text: '#111827',       // Dark Text
          muted: '#4B5563',      // Grey Text
          border: '#E5E7EB',     // Border Grey
        }
      },
      // --- ADD THIS BLOCK FOR ANIMATIONS ---
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        // CHANGED: Made animation slower (0.8s) and smoother (ease-in-out)
        // This will create that "getting born" effect instead of a "blink"
        fadeInUp: 'fadeInUp 0.8s ease-in-out forwards', 
      },
      // --- END OF BLOCK ---
    },
  },
  plugins: [],
};