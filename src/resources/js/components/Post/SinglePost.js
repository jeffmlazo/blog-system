import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { create } from 'apisauce';
import {
  makeStyles, Typography, Grid, Paper, Button,
} from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import parse from 'html-react-parser';
import Tags from '../Tag/Tags';
import EditPostModal from './EditPostModal';
import DeletePostModal from './DeletePostModal';

const useStyles = makeStyles(() => ({
  cover: {
    width: 800,
    height: 500,
  },
}));

// Get the token
const token = document.head
  .querySelector('meta[name="csrf-token"]')
  .getAttribute('content');

// API base Url
const api = create({
  // eslint-disable-next-line no-undef
  baseURL: baseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': token,
  },
});

function SinglePost() {
  const classes = useStyles();
  const { slug } = useParams();
  const [post, setPost] = useState([]);

  const getPost = async () => {
    // 2. apisauce will fetch from the server asynchronously
    const resPost = await api.get(`/post/${slug}`);
    // 3. on awaiting successfully the next code will run
    if (resPost.ok && resPost.data) {
      setPost(resPost.data);
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
          {post.map((postCol) => (
            <Grid container spacing={5} key={postCol.id}>
              <Grid item xs={12} md={12}>
                <Typography key={postCol.id} variant="h6" gutterBottom>
                  {postCol.title}
                </Typography>
                <Paper variant="outlined">
                  <img src={postCol.img_url} className={classes.cover} />
                </Paper>
                <Typography variant="subtitle1" gutterBottom>
                  {postCol.published_at}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {parse(postCol.content)}
                </Typography>
                <Tags tags={postCol.tag} />
              </Grid>
              <Grid item xs={12} md={12}>
                <EditPostModal postId={postCol.id} />
                <DeletePostModal postId={postCol.id} />
              </Grid>
            </Grid>
          ))}
        </div>
      </SnackbarProvider>
    </>
  );
}

export default SinglePost;
