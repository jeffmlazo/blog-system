import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Title from "./Title";

// Generate User Data
function createData(
  id,
  author,
  title,
  slug,
  summary,
  content,
  imgUrl,
  imgText,
  publishedAt,
  tags,
  category,
  registerDate
) {
  return {
    id,
    author,
    title,
    slug,
    summary,
    content,
    imgUrl,
    imgText,
    publishedAt,
    tags,
    category,
    registerDate,
  };
}

const rows = [
  createData(
    0,
    "Hanso Naginawi",
    "Quisque tempus aliquet turpis",
    "quisque-tempus-aliquet-turpis",
    "Egestas urna ac, feugiat sapien. Duis convallis justo velit, at rhoncus justo imperdiet ut. <em>Phasellus</em> in varius tortor.",
    "Cras facilisis risus sit amet placerat tincidunt. <strong>Donec et ex accumsan</strong>, egestas urna ac, feugiat sapien. Duis convallis justo velit, at rhoncus justo imperdiet ut. <em>Phasellus</em> in varius tortor.",
    "https://source.unsplash.com/user/erondu/800x600",
    "Nullam nec faucibus risus. Integer rutrum metus ut est convallis",
    "risus, sit, amet, placerat, tincidunt",
    "business",
    "July 23, 2021"
  ),
  createData(
    1,
    "Hanso Naginawi",
    "Quisque tempus aliquet turpis",
    "quisque-tempus-aliquet-turpis",
    "Egestas urna ac, feugiat sapien. Duis convallis justo velit, at rhoncus justo imperdiet ut. <em>Phasellus</em> in varius tortor.",
    "Cras facilisis risus sit amet placerat tincidunt. <strong>Donec et ex accumsan</strong>, egestas urna ac, feugiat sapien. Duis convallis justo velit, at rhoncus justo imperdiet ut. <em>Phasellus</em> in varius tortor.",
    "https://source.unsplash.com/user/erondu/800x600",
    "Nullam nec faucibus risus. Integer rutrum metus ut est convallis",
    "risus, sit, amet, placerat, tincidunt",
    "business",
    "July 23, 2021"
  ),
  createData(
    2,
    "Hanso Naginawi",
    "Quisque tempus aliquet turpis",
    "quisque-tempus-aliquet-turpis",
    "Egestas urna ac, feugiat sapien. Duis convallis justo velit, at rhoncus justo imperdiet ut. <em>Phasellus</em> in varius tortor.",
    "Cras facilisis risus sit amet placerat tincidunt. <strong>Donec et ex accumsan</strong>, egestas urna ac, feugiat sapien. Duis convallis justo velit, at rhoncus justo imperdiet ut. <em>Phasellus</em> in varius tortor.",
    "https://source.unsplash.com/user/erondu/800x600",
    "Nullam nec faucibus risus. Integer rutrum metus ut est convallis",
    "risus, sit, amet, placerat, tincidunt",
    "business",
    "July 23, 2021"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Posts() {
  return (
    <>
      <Title>List of Posts</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Slug</TableCell>
            <TableCell>Summary</TableCell>
            <TableCell>Content</TableCell>
            <TableCell>Image Url</TableCell>
            <TableCell>Image Text</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Date Published</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </>
  );
}
