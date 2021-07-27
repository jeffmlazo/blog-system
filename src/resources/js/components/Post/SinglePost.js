import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { create } from "apisauce";
import { makeStyles, Typography, Grid, Paper, Button } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import parse from "html-react-parser";
import Tags from "../Tag/Tags";
import EditPostModal from "../Post/EditPostModal";
import DeletePostModal from "../Post/DeletePostModal";

const useStyles = makeStyles((theme) => ({
  cover: {
    width: 800,
    height: 500,
  },
}));

// Get the token
const token = document.head
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content");

// API base Url
const api = create({
  baseURL: "http://localhost/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": token,
  },
});

function SinglePost() {
  const classes = useStyles();
  const { slug } = useParams();
  const [post, setPost] = useState([]);

  const getPost = async () => {
    // 2. apisauce will fetch from the server asynchronously
    const post = await api.get(`/post/${slug}`);
    // 3. on awaiting successfully the next code will run
    if (post.ok && post.data) {
      setPost(post.data);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <SnackbarProvider>
        <div className="blog-details">
          <Link to="/">
            <Button variant="contained" color="primary">
              Go Back Home
            </Button>
          </Link>
          {post.map((post) => (
            <Grid container spacing={5}>
              <Grid item xs={12} md={12}>
                <Typography key={post.id} variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Paper variant="outlined">
                  <img src={post.img_url} className={classes.cover} />
                </Paper>
                <Typography variant="subtitle1" gutterBottom>
                  {post.published_at}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {parse(post.content)}
                </Typography>
                <Tags tags={post.tag} />
              </Grid>
              <Grid item xs={12} md={12}>
                <EditPostModal postId={post.id} />
                <DeletePostModal postId={post.id} />
              </Grid>
            </Grid>
          ))}
        </div>
      </SnackbarProvider>
    </>
  );
}

export default SinglePost;
