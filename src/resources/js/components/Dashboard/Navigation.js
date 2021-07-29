import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";
// import PostAddIcon from '@material-ui/icons/PostAdd';
import BallotIcon from "@material-ui/icons/Ballot";
import PictureInPictureIcon from "@material-ui/icons/PictureInPicture";
import { NavLink } from "react-router-dom";

export const mainListItems = (
  <div>
    <NavLink to={"/dashboard"}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </NavLink>
    <NavLink
      to={"/dashboard/users"}
      // activeClassName="selected"
      activeStyle={{
        fontWeight: "bold",
        color: "red",
      }}
    >
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
    </NavLink>
    <NavLink to={"/dashboard/posts"}>
      <ListItem button>
        <ListItemIcon>
          <BallotIcon />
        </ListItemIcon>
        <ListItemText primary="Posts" />
      </ListItem>
    </NavLink>
    <NavLink to={"/dashboard/categories"}>
      <ListItem button>
        <ListItemIcon>
          <PictureInPictureIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
      </ListItem>
    </NavLink>
    <NavLink to={"/dashboard/tags"}>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Tags" />
      </ListItem>
    </NavLink>
  </div>
);

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );
