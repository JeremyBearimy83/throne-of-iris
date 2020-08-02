import sizes from "./sizes";
import bg from "./bg.svg";
export default {
  "@global": {
    ".fade-exit": { opacity: 1 },
    ".fade-exit-active": { opacity: 0, transition: "all 500ms ease-out" },
  },

  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#00b7ff",
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    overflow: "auto",
  },
  heading: {
    fontSize: "2rem",
    fontFamily: "MedievalSharp",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: { width: "60%" },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": { color: "white", textDecoration: "none" },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: { gridTemplateColumns: "repeat(2, 50%)" },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem",
    },
  },
};
