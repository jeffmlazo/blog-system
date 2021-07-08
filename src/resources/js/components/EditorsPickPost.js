import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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
  const { post } = props;

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="https://source.unsplash.com/user/skyangel79/800x600"
          title="Aliquam id pretium metus. Sed lorem ante, ullamcorper"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6">
              {post.title}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </React.Fragment>
  );
}

EditorsPick.propTypes = {
  post: PropTypes.object,
};
