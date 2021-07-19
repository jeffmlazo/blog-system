import ReactDOM from "react-dom";
import { makeStyles, CssBaseline, Grid, Container } from "@material-ui/core";
import MainFeaturedPost from "./Post/MainFeaturedPost";
import FeaturedPost from "./Post/FeaturedPost";
import EditorsPick from "./Post/EditorsPick";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const categories = [
  { id: 1, title: "Technology", slug: "technology", url: "#" },
  { id: 2, title: "Design", slug: "design", url: "#" },
  { id: 3, title: "Culture", slug: "culture", url: "#" },
  { id: 4, title: "Business", slug: "business", url: "#" },
  { id: 5, title: "Politics", slug: "politics", url: "#" },
  { id: 6, title: "Opinion", slug: "opinion", url: "#" },
  { id: 7, title: "Science", slug: "science", url: "#" },
  { id: 8, title: "Health", slug: "health", url: "#" },
  { id: 9, title: "Style", slug: "style", url: "#" },
  { id: 10, title: "Travel", slug: "travel", url: "#" },
];

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

const editorsPickPosts = [
  {
    id: 4,
    title: "Passages of Lorem Ipsum available",
    slug: "passages-of-lorem-ipsum-available",
    imageUrl: "https://source.unsplash.com/user/erondu/800x600",
    imgText: "Nullam nec faucibus risus. Integer rutrum metus ut est convallis",
  },
  {
    id: 3,
    title: "Discovered The Undoubtable Source",
    slug: "discovered-the-undoubtable-source",
    imageUrl: "https://placeimg.com/800/600/tech",
    imgText: "Morbi ut augue quis nunc scelerisque rhoncus sed ut justo",
  },
  {
    id: 2,
    title: "Making This The First True Generator",
    slug: "making-this-the-first-true-generator",
    imageUrl: "https://placeimg.com/800/600/nature",
    imgText: "Morbi ut augue quis nunc scelerisque rhoncus sed ut justo",
  },
  {
    id: 1,
    title: "Sed Do Eiusmod Tempor Incididunt Ut Labore",
    slug: "sed-do-eiusmod-tempor-incididunt-ut-labore",
    imageUrl: "https://placeimg.com/800/600/people",
    imgText: "Morbi ut augue quis nunc scelerisque rhoncus sed ut justo",
  },
];

function Main() {
  const classes = useStyles();

  // Registration variables
  // const [users, setUsers] = useState([]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog System" categories={categories} />
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <MainFeaturedPost post={mainFeaturedPost} />
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.id} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <EditorsPick editorsPickPosts={editorsPickPosts} />
          </Grid>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default Main;

if (document.getElementById("app")) {
  ReactDOM.render(<Main />, document.getElementById("app"));
}
