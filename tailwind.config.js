module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    fontFamily: {
      "sans-serif": [
        "Karla",
        "-apple-system",
        "BlinkMacSystemFont",
        "sans-serif",
      ],
      serif: ["Lora", "Georgia", "Cambria", "serif"],
    },
    colors: {
      green: "rgb(77 146 22)",
      violett: "rgb(182 0 100)",
      "near-white": "#f4f4f4",
      "dark-gray": "#333",
      "mid-gray": "#555",
      silver: "#999",
    },
    borderWidth: {
      default: "1px",
      "0": "0",
      "2": "2px",
      "4": "4px",
    },
    container: {
      center: true,
      padding: {
        default: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      spacing: {
        "96": "24rem",
        "128": "32rem",
      },
      opacity: {
        "10": ".1",
        "85": "0.85",
        "90": "0.9",
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6.2rem",
      },
      scale: {
        "97": ".97",
      },
      height: {
        half: "50vh",
      },
      inset: {
        "1/2": "50%",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover"],
  },
};
