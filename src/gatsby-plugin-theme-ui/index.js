export default {
  breakpoints: ["420px", "768px", "1440px"],
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
    soft: 200,
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
  text: {
    menu: { 
      fontWeight: "bold",
      fontSize: [20, 22, 22], 
    },
    tagline: {
      fontWeight: "soft",
      fontSize: [14, 18, 18],
    },
    caption: {
      fontWeight: "soft",
      fontSize: [12, 14, 14],
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      h1: {
        fontSize: [34, 60, 60],
        fontFamily: "heading",
        fontWeight: "heading",
        color: "primary",
        mt: 4,
        mb: 2,
      },
      h2: {
        fontSize: [32, 50, 50],
        fontFamily: "heading",
        fontWeight: "heading",
        color: "primary",
        mt: 4,
        mb: 2,
      },
      h3: {
        fontSize: [28, 40, 40],
        fontFamily: "heading",
        fontWeight: "heading",
        color: "primary",
        mt: 4,
        mb: 2,
      },
      h4: {
        fontSize: [24, 30, 30],
        fontFamily: "heading",
        fontWeight: "heading",
        color: "primary",
        mt: 4,
        mb: 2,
      },
      p: {
        fontSize: [17, 20, 20],
        fontFamily: "body",
        fontWeight: "body",
        color: "text",
      },
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
  buttons: { 
    icon: { 
      width: "auto", 
      height: "auto", 
      cursor: "pointer",
    }
  },
  links: {
    primary: {
      textDecoration: `none`,
      p: "10px 20px",
      borderRadius: 5,
      "&:active": {
        color: "primary2",
      },
    },
  },
}
