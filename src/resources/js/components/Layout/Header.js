import PropTypes from "prop-types";
import {
  makeStyles,
  Toolbar,
  IconButton,
  Typography,
  Link,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import LoginModal from "../Login/LoginModal";
import RegisterModal from "../Signup/RegisterModal";
import PostModal from "../Post/PostModal";
// import Dashboard from "../Dashboard/Dashboard";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { categories, title, isLoggedIn } = props;

  return (
    <>
      <Toolbar className={classes.toolbar}>
        {isLoggedIn == "1" ? undefined : <LoginModal />}
        <PostModal />

        {/* <Link href="/"> */}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {/* </Link> */}
        <IconButton>
          <SearchIcon />
        </IconButton>
        <RegisterModal />
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {categories.map((category) => (
          <Link
            color="inherit"
            noWrap
            key={category.title}
            variant="body2"
            href={category.url}
            className={classes.toolbarLink}
          >
            {category.title}
          </Link>
        ))}
      </Toolbar>
    </>
  );
}

Header.propTypes = {
  categories: PropTypes.array,
  title: PropTypes.string,
};
