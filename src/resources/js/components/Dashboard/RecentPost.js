import { Link, Typography } from "@material-ui/core";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function RecentPost() {
  return (
    <>
      <Title>Recent Post</Title>
      <Typography component="p" variant="h4">
        Pellentesque non blandit dui
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on July 2, 2021
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View post
        </Link>
      </div>
    </>
  );
}
