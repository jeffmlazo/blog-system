import ReactDOM from "react-dom";
import { makeStyles, CssBaseline, Grid, Container } from "@material-ui/core";
import { create } from "apisauce";
import MainFeaturedPost from "../Post/MainFeaturedPost";
import FeaturedPost from "../Post/FeaturedPost";
import EditorsPick from "../Post/EditorsPick";
import SinglePost from "../Post/SinglePost";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

// API base Url
const api = create({
  baseURL: "http://localhost/api",
  headers: { "Content-Type": "application/json" },
});

const mainFeaturedPost = {
  id: 1,
  authorId: 11,
  title: "Lorem ipsum dolor sit amet",
  slug: "lorem-ipsum-dolor-sit-amet",
  summary:
    "Cras facilisis risus sit amet placerat tincidunt. Donec et ex accumsan, egestas urna ac, feugiat sapien. Duis convallis justo velit, at rhoncus justo imperdiet ut. Phasellus in varius tortor. Quisque tempus aliquet turpis",
  content:
    "Cras facilisis risus sit amet placerat tincidunt. <strong>Donec et ex accumsan</strong>, egestas urna ac, feugiat sapien. Duis convallis justo velit, at rhoncus justo imperdiet ut. <em>Phasellus</em> in varius tortor. Quisque tempus aliquet turpis, eu feugiat odio ornare sed. Integer suscipit urna elit, at rhoncus mauris dignissim sit amet. Vestibulum nec condimentum lacus.",
  imageUrl: "https://source.unsplash.com/random/800x600",
  imgText: "Nullam nec faucibus risus. Integer rutrum metus ut est convallis",
  date: "July 23, 2021",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    id: 2,
    authorId: 22,
    title: "Pellentesque non blandit dui",
    slug: "pellentesque-non-blandit-dui",
    summary:
      "Etiam quis ligula ut nibh vestibulum mollis. Etiam arcu elit, ultrices nec diam vehicula, feugiat vestibulum enim. Quisque vehicula placerat odio sit amet bibendum. Aliquam id pretium metus.",
    content:
      "Aliquam id pretium metus. Sed lorem ante, ullamcorper at <strong>scelerisque vel</strong>, suscipit a massa. Integer luctus ligula dui, vel fringilla enim hendrerit et.",
    imageUrl: "https://placeimg.com/800/600/tech",
    imgText: "Morbi ut augue quis nunc scelerisque rhoncus sed ut justo",
    date: "July 2, 2021",
    linkText: "Continue reading…",
  },
  {
    id: 3,
    authorId: 33,
    title: "Pellentesque non blandit dui",
    slug: "pellentesque-non-blandit-dui",
    summary:
      "Cras facilisis risus sit amet placerat tincidunt. Donec et ex accumsan, egestas urna ac, feugiat sapien. Duis convallis justo velit, at rhoncus justo imperdiet ut. Phasellus in varius tortor. Quisque tempus aliquet turpis",
    content:
      "Cras facilisis risus sit amet placerat tincidunt. <strong>Donec et ex accumsan</strong>, egestas urna ac, feugiat sapien. Duis convallis justo velit, at rhoncus justo imperdiet ut. <em>Phasellus</em> in varius tortor. Quisque tempus aliquet turpis, eu feugiat odio ornare sed. Integer suscipit urna elit, at rhoncus mauris dignissim sit amet. Vestibulum nec condimentum lacus.",
    imageUrl: "https://source.unsplash.com/user/erondu/800x600",
    imgText: "Nullam nec faucibus risus. Integer rutrum metus ut est convallis",
    date: "June 6, 2021",
    linkText: "Continue reading…",
  },
];

function Main() {
  const classes = useStyles();
  const [editorPickPosts, setEditorPickPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  //#region FUNCTIONS
  const getCategories = async () => {
    // 2. apisauce will fetch from the server asynchronously
    const categories = await api.get("/category");
    // 3. on awaiting successfully the next code will run
    if (categories.ok && categories.data) {
      setCategories(categories.data);
    }
  };

  const getEditorPickPosts = async () => {
    // 2. apisauce will fetch from the server asynchronously
    const posts = await api.get("/post");
    // 3. on awaiting successfully the next code will run
    if (posts.ok && posts.data) {
      setEditorPickPosts(posts.data);
    }
  };

  useEffect(() => {
    // 1. editorPickPosts will run once on page load
    getEditorPickPosts();
    getCategories();
  }, []);
  //#endregion

  return (
    <>
      <CssBaseline />
      <Router>
        <Container maxWidth="lg">
          <Header title="Blog System" categories={categories} />
          <main>
            <Switch>
              <Route exact path="/">
                <Grid container spacing={5} className={classes.mainGrid}>
                  <MainFeaturedPost post={mainFeaturedPost} />
                  {featuredPosts.map((post) => (
                    <FeaturedPost key={post.id} post={post} />
                  ))}
                </Grid>
                <Grid container spacing={5} className={classes.mainGrid}>
                  <EditorsPick editorsPickPosts={editorPickPosts} />
                </Grid>
              </Route>
              <Route path="/post/:slug">
                <SinglePost />
              </Route>
            </Switch>
          </main>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default Main;

if (document.getElementById("app")) {
  ReactDOM.render(<Main />, document.getElementById("app"));
}
