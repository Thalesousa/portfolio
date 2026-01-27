/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#151616",
        space: {
          dark: "#030712",
          deep: "#0c1222",
          nebula: "#1a0a2e",
          void: "#020617",
        },
        cosmic: {
          cyan: "#00d4ff",
          blue: "#4f9cf9",
          purple: "#8b5cf6",
          pink: "#f472b6",
        },
        stellar: {
          gold: "#fbbf24",
          amber: "#f59e0b",
          orange: "#fb923c",
          warm: "#fde68a",
        },
        stardust: "#e0e7ff",
        navigator: {
          grid: "rgba(251, 191, 36, 0.08)",
          line: "rgba(251, 191, 36, 0.15)",
          glow: "rgba(251, 191, 36, 0.3)",
        },
      },
      maxWidth: {
        container: "1366px",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "system-ui", "sans-serif"],
        dm: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(251, 191, 36, 0.2), 0 0 40px rgba(0, 212, 255, 0.1)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(251, 191, 36, 0.4), 0 0 60px rgba(0, 212, 255, 0.2)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        "border-dance": {
          "0%, 100%": { borderColor: "rgba(251, 191, 36, 0.4)" },
          "50%": { borderColor: "rgba(0, 212, 255, 0.4)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(60px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "orbit": {
          "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(100px) rotate(-360deg)" },
        },
        "grid-pulse": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "text-reveal": {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        "magnetic-float": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-8px) scale(1.02)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        fadeIn: "fadeIn 0.6s ease-out forwards",
        scaleIn: "scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        glow: "glow 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "border-dance": "border-dance 4s ease-in-out infinite",
        slideInLeft: "slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        slideInRight: "slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "rotate-slow": "rotate-slow 25s linear infinite",
        "orbit": "orbit 20s linear infinite",
        "grid-pulse": "grid-pulse 4s ease-in-out infinite",
        "scan-line": "scan-line 8s linear infinite",
        "text-reveal": "text-reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards",
        "magnetic-float": "magnetic-float 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cosmic-gradient": "linear-gradient(135deg, #fbbf24 0%, #00d4ff 50%, #8b5cf6 100%)",
        "nebula-gradient": "linear-gradient(135deg, #030712 0%, #0c1222 50%, #1a0a2e 100%)",
        "navigator-grid": `
          linear-gradient(rgba(251, 191, 36, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(251, 191, 36, 0.03) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        "grid-sm": "20px 20px",
        "grid-md": "40px 40px",
        "grid-lg": "80px 80px",
      },
      boxShadow: {
        cosmic: "0 0 30px rgba(251, 191, 36, 0.2), 0 0 60px rgba(0, 212, 255, 0.1)",
        "cosmic-lg": "0 0 50px rgba(251, 191, 36, 0.3), 0 0 100px rgba(0, 212, 255, 0.15)",
        "glow-gold": "0 0 30px rgba(251, 191, 36, 0.4)",
        "glow-cyan": "0 0 30px rgba(0, 212, 255, 0.4)",
        "glow-purple": "0 0 30px rgba(139, 92, 246, 0.4)",
        "inner-glow": "inset 0 0 60px rgba(251, 191, 36, 0.1)",
      },
    },
  },
};

export default config;
