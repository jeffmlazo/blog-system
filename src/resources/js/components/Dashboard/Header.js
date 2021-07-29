//#region PACKAGE IMPORTS
import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
//#endregion

//#region COMPONENT IMPORTS
// import { Link } from "react-router-dom";
import PostModal from "../Post/PostModal";
import AddUserModal from "../User/AddUserModal";
//#endregion

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  searchInput: {
    opacity: "0.6",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
  appButtonGrp: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <Typography variant="subtitle1" color="textPrimary">
              Welcome {username}
            </Typography>
          </Grid>
          <Grid item sm>
            <Box ml={1} className={classes.appButtonGrp}>
              <Box component="div" display="inline">
                <PostModal />
              </Box>

              <Box component="div" display="inline">
                <AddUserModal />
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <IconButton>
              <AccountCircleIcon fontSize="small" />
            </IconButton>
            <IconButton onClick={() => (window.location = "/logout")}>
              <PowerSettingsNewIcon fontSize="small" />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
