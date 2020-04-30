module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    fontFamily: {
      "sans-serif": ["Karla", "-apple-system", "BlinkMacSystemFont"],
      serif: ["Lora", "Georgia", "Cambria"],
      body: ["Karla", "sans-serif"],
      display: ["Lora", "serif"],
    },
    colors: {
      green: "rgb(77 146 22)",
      violett: "rgb(182 0 100)",
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
    },
    extend: {
      spacing: {
        "96": "24rem",
        "128": "32rem",
      },
      opacity: {
        "85": "0.85",
        "90": "0.9",
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6.2rem",
      },
      scale: {
        "97": ".97"
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover"],
  },
};
