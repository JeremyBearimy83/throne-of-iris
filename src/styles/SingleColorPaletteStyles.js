export default {
  singleColorPalette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  colorBoxContainer: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    opacity: "1",
    backgroundColor: "rgba(69, 69, 169, 0.9)",
    "& div": {
      position: "absolute",
      opacity: "1",
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
      textTransform: "uppercase",
      textAlign: "center",
      opacity: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "&:focus": { border: "none", outline: "none" },
      textDecoration: "none",
      color: "white",
      "& span": {
        color: "white",
      },
    },
  },
  footer: {
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    fontSize: "17px",
    alignItems: "center",
    marginRight: "10px",
  },
  icon: {
    margin: "0px 7px",
    fontSize: "1.5rem",
  },
};