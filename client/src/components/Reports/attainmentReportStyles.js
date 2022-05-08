import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
  },
  pageContent: {
    padding: theme.spacing(5),
    margin: theme.spacing(5),
    width: "100%",
  },
  typoText: {
    fontFamily: "Raleway",
    color: "#8083c9",
    fontWeight: "bold",
    marginLeft: 10,
  },
  mapping: {
    margin: theme.spacing(2),
  },
  //   radio: {
  //     marginLeft: 100,
  //   },
}));