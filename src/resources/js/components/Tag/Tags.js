// import {} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

function Tags(props) {
  const classes = useStyles();
  const { tags } = props;
  const arrTags = () => {
    return tags.split(",");
  };
  return (
    <div className={classes.root}>
      {arrTags().map((data, index) => {
        return <Chip key={index} label={data} />;
      })}
    </div>
  );
}

export default Tags;
