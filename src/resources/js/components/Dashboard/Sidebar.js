// import React from 'react'
import { withStyles, List } from "@material-ui/core";
import { mainListItems } from "./Navigation";

const style = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    // width: "320px",
    width: "200px",
    height: "100%",
    backgroundColor: "#b6c5dd",
  },
};

const Sidebar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.sideMenu}>
      <List>{mainListItems}</List>
    </div>
  );
};

export default withStyles(style)(Sidebar);
