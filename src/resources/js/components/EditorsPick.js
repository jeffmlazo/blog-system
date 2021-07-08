import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import EditorsPickPost from "./EditorsPickPost";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "55%",
  },
  boxBgColor: {
    background: "rgb(213, 216, 223)",
  },
}));

export default function EditorsPick(props) {
  const classes = useStyles();
  const { editorsPickPosts } = props;

  // console.log(editorsPickPosts);
  return (
    <React.Fragment>
      <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>
          Latest Posts
        </Typography>
        <Divider />
        {editorsPickPosts.map((post) => (
          <EditorsPickPost key={post.id} post={post} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={1} sx={{ p: 2, bgcolor: "grey.200" }}>
          <Box p={2}>
            <Typography component="h6" variant="h6">
              About Us
            </Typography>
          </Box>
          <Box px={4} pb={4}>
            <Typography paragraph>
              Morbi risus nunc, condimentum a urna vitae, ullamcorper pulvinar
              eros. Morbi ut augue quis nunc scelerisque rhoncus sed ut justo.
              Pellentesque vitae tempor purus. Duis suscipit tellus venenatis,
              varius ex id, dignissim felis.
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

EditorsPick.propTypes = {
  editorsPickPosts: PropTypes.array,
};
