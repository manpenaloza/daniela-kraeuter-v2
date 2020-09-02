module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    fontFamily: {
      display: ['Source\\ Sans\\ Pro', "sans-serif"],
      body: ['Source\\ Sans\\ Pro', "sans-serif"],
      "sans-serif": [
        'Source\\ Sans\\ Pro',
        "-apple-system",
        "BlinkMacSystemFont",
        "sans-serif",
      ],
      serif: ['Playfair\\ Display', "Times", "Georgia", "Cambria", "serif"],
    },
    colors: {
      primary: "#00A2A4", // before: green
      "light-primary": "#89BDBD",
      secondary: "#E89575", // before: violett
      "near-white": "#F6F7F0", // unchanged
      "dark-gray": "#A6A2A6", // unchanged
      "mid-gray": "#D4D0D4", // unchanged
      silver: "#999", // unchanged
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
      fontFamily: {
        handwritten: ['Playfair\\ Display'],
      },
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
