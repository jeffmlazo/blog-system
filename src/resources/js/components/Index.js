import React from "react";
import ReactDOM from "react-dom";
// import { IconButton } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
// import MainFeaturedPost from './MainFeaturedPost';
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: "Technology", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

// const mainFeaturedPost = {
//   title: "Title of a longer featured blog post",
//   description:
//     "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
//   image: "https://source.unsplash.com/random",
//   imgText: "main image description",
//   linkText: "Continue reading…",
// };

function Index() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog System" sections={sections} />
        <main>
          {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
          <Grid container spacing={5} className={classes.mainGrid}></Grid>
        </main>
      </Container>
      <Footer
      // title="Footer"
      // description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}

export default Index;

if (document.getElementById("app")) {
  ReactDOM.render(<Index />, document.getElementById("app"));
}
