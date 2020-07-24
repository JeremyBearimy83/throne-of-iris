import sizes from "./sizes";
export default {
  Navbar: {
    height: "6vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  sliderContainer: {
    fontSize: "16px",
    letterSpacing: "1px",
    margin: "0px 9px",
    textTransform: "uppercase",
  },
  hide: {
    display: "none",
  },
  brand: {
    backgroundColor: "#eceff1",
    height: "100%",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    padding: "0 13px",
    margin: "0px 5px",
    fontFamily: "MedievalSharp",
    color: "black",
    textDecoration: "none",
    [sizes.down("xs")]: {
      display: "none",
    },
  },
  slider: {
    width: "200px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-rail": { height: "15px" },
    "& .rc-slider-track": { backgroundColor: "transparent" },
    "& .rc-slider-handle,.rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover": {
      backgroundColor: "#79e4e4",
      outline: "none",
      border: "2px solid #79e4e4",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: -"7px",
      marginTop: -"3px",
      padding: "8px",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "20px",
  },
};
