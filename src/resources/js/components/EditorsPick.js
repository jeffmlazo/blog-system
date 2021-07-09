import PropTypes from "prop-types";
import {
  makeStyles,
  Typography,
  Grid,
  Divider,
  Box,
  Paper,
} from "@material-ui/core";
import EditorsPickPost from "./EditorsPickPost";
import AboutUs from "./AboutUs";

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
    <>
      <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>
          Editor's Pick
        </Typography>
        <Divider />
        {editorsPickPosts.map((post) => (
          <EditorsPickPost key={post.id} post={post} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <AboutUs />
      </Grid>
    </>
  );
}

EditorsPick.propTypes = {
  editorsPickPosts: PropTypes.array,
};
