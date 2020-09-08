export default {
  breakpoints: ["375px", "768px", "1440px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    text: "black",
    text2: "white",
    background: "#F2F6FF",
    primary: "#8352FD",
    primary2: "#3913B8",
    secondary: "#00CFFD",
    secondary2: "#2FB5FC",
    naturalDark: "#1A2151",
    naturalLight: "#E3E8FF",
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Georgia, serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 60, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      fontSize: "60px",
      fontFamily: "heading",
      fontWeight: "heading",
      color: "primary",
      mt: 4,
      mb: 2,
    },
  },
  layout: {
    header: {
      color: "text",
      margin: 4,
    },
    main: {
      margin: 4,
    },
    footer: {
      color: "text",
      margin: 4,
      width: ["80%", "80%", `100%`],
      padding: `0`,
    },
  },
  links: {
    primary: {
      textDecoration: `none`,
    },
  },
}
