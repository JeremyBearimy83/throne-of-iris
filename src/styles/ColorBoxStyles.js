import chroma from "chroma-js";
import sizes from "./sizes";
export default {
  copyText: {
    color: (props) =>
      chroma(props.color).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
  },
  more: {
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    lineHeight: "30px",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    textTransform: "uppercase",
    padding: "2px 5px",
    color: (props) =>
      chroma(props.color).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
    width: "60px",
    height: "30px",
  },
  colorName: {
    position: "absolute",
    left: "0px",
    bottom: "0px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "12px",
    padding: "10px",
    color: (props) =>
      chroma(props.color).luminance() <= 0.075 ? "white" : "black",
  },
  copyButton: {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: "100px",
    height: "30px",
    display: "inline-block",
    marginLeft: "-50px",
    marginTop: "-15px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    border: "none",
    fontSize: "1rem",
    color: (props) =>
      chroma(props.color).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
    textTransform: "uppercase",
    textAlign: "center",
    opacity: "0",
    "&:focus": { border: "none", outline: "none" },
  },
  colorBox: {
    width: "20%",
    height: (props) => (props.singleColor ? "50%" : "25%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    "&:hover button": { opacity: 1, transition: "0.5s" },
    [sizes.down("lg")]: {
      width: "25%",
      height: (props) => (props.singleColor ? "33.33%" : "20%"),
    },
    [sizes.down("md")]: {
      width: "50%",
      height: (props) => (props.singleColor ? "20%" : "10%"),
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: (props) => (props.singleColor ? "10%" : "5%"),
    },
  },
  copyOverlay: {
    zIndex: "0",
    width: "100%",
    height: "100%",
    opacity: "0",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)",
  },
  show: {
    transform: "scale(50)",
    position: "absolute",
    opacity: "1",
    zIndex: "10",
    overflow: "hidden",
  },
  copyMessage: {
    display: "flex",
    position: "fixed",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transform: "scale(0.001)",
    opacity: 1,
  },
  copyMessageShow: {
    opacity: 1,
    zIndex: 25,
    transform: "scale(1)",
    transition: "0.4s",
    transitionDelay: "0.2s",
    "& h1": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      fontSize: "4rem",
      fontWeight: 600,
      textAlign: "center",
      paddingTop: "30px",
      paddingBottom: "30px",
      textTransform: "uppercase",
      letterSpacing: "4px",
      textShadow: "1px 2px black",
      color: "white",
    },
    "& p": { fontSize: "2rem", fontWeight: "100", letterSpacing: "1px" },
  },
};
