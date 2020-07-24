import sizes from "./sizes";
const drawerWidth = 400;

const styles = (theme) => ({
  root: { display: "flex" },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none",
    },
    [sizes.down("sm")]: { marginRight: "0.5rem" },
  },
  hide: {
    display: "none",
  },
  button: {
    margin: "0 0.5rem",
    textDecoration: "none !important",
    [sizes.down("xs")]: { margin: 0 },
    [sizes.down("xs")]: { padding: 0 },
  },
});
export default styles;
