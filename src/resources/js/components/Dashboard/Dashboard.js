// #region PACKAGE IMPORTS
import ReactDOM from 'react-dom';
// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  makeStyles,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Grid,
  Container,
} from '@material-ui/core';
// #endregion

// #region COMPONENT IMPORTS
import Header from './Header';
import Sidebar from './Sidebar';
import UserListTbl from './Tables/UserListTbl';
import PostListTbl from './Tables/PostListTbl';
import CategoryListTbl from './Tables/CategoryListTbl';
import TagListTbl from './Tables/TagListTbl';
// #endregion

const theme = createTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126',
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526',
    },
    background: {
      default: '#f4f5fd',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)',
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    // paddingLeft: "320px",
    paddingLeft: '200px',
    width: '100%',
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
});

function Dashboard() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Sidebar />
        <div className={classes.appMain}>
          <Header />
          <Container maxWidth="lg">
            <Grid container spacing={5} className={classes.mainGrid}>
              <Switch>
                <Route exact path="/dashboard">
                  Dashboard
                </Route>
                <Route exact path="/dashboard/users">
                  <UserListTbl />
                </Route>
                <Route exact path="/dashboard/posts">
                  <PostListTbl />
                </Route>
                <Route exact path="/dashboard/categories">
                  <CategoryListTbl />
                </Route>
                <Route exact path="/dashboard/tags">
                  <TagListTbl />
                </Route>
              </Switch>
            </Grid>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default Dashboard;

if (document.getElementById('dashboard')) {
  ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}
