module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed": "#410007",
        "inverse-surface": "#22323e",
        "on-error": "#fafcff",
        "on-tertiary-fixed": "#001e2d",
        "on-error-container": "#93000a",
        "outline": "#737782",
        "surface-tint": "#285dac",
        "secondary": "#bb0027",
        "surface-container-low": "#ebf5ff",
        "primary-fixed-dim": "#acc7ff",
        "on-background": "#0d1d29",
        "on-tertiary-fixed-variant": "#004c6b",
        "tertiary-fixed": "#c6e7ff",
        "surface-container": "#e0f0ff",
        "secondary-container": "#e0283c",
        "on-surface-variant": "#424751",
        "surface-container-lowest": "#f8fbff",
        "surface-variant": "#d4e5f5",
        "on-primary-container": "#95b9ff",
        "outline-variant": "#c3c6d3",
        "on-secondary-fixed-variant": "#92001c",
        "tertiary-container": "#004f6f",
        "on-secondary-container": "#fffbff",
        "surface-container-high": "#d9eafa",
        "secondary-fixed": "#ffdad8",
        "surface": "#f6f9ff",
        "on-primary-fixed-variant": "#004590",
        "surface-container-highest": "#d4e5f5",
        "tertiary-fixed-dim": "#81cfff",
        "on-tertiary": "#fafcff",
        "surface-dim": "#cbdcec",
        "primary-container": "#004795",
        "on-primary": "#fafcff",
        "primary": "#00316b",
        "error-container": "#ffdad6",
        "inverse-on-surface": "#e6f2ff",
        "on-tertiary-container": "#54c3ff",
        "error": "#ba1a1a",
        "primary-fixed": "#d7e2ff",
        "on-primary-fixed": "#001b40",
        "secondary-fixed-dim": "#ffb3b1",
        "on-secondary": "#fafcff",
        "surface-bright": "#f6f9ff",
        "inverse-primary": "#acc7ff",
        "background": "#f6f9ff",
        "tertiary": "#00374f",
        "on-surface": "#0d1d29"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem"
      },
      spacing: {
        "container-max": "1200px",
        gutter: "24px",
        xl: "80px",
        xs: "4px",
        sm: "12px",
        base: "8px",
        lg: "48px",
        md: "24px"
      },
      fontFamily: {
        "headline-xl-mobile": ["Montserrat"],
        "headline-xl": ["Montserrat"],
        "headline-lg-mobile": ["Montserrat"],
        "body-md": ["Inter"],
        "body-lg": ["Inter"],
        "headline-md": ["Montserrat"],
        "label-lg": ["Inter"],
        "headline-lg": ["Montserrat"],
        "label-sm": ["Inter"]
      },
      fontSize: {
        "headline-xl-mobile": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "headline-xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "label-lg": ["14px", { lineHeight: "20px", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "500" }]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
};
