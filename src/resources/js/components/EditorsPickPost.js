import PropTypes from "prop-types";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

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
    width: 120,
  },
  boxBgColor: {
    background: "rgb(213, 216, 223)",
  },
}));

export default function EditorsPick(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={post.imageUrl}
          title={post.imageTitle}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6">
              {post.title}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </>
  );
}

EditorsPick.propTypes = {
  post: PropTypes.object,
};
