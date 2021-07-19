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
  firstName,
  middleName,
  lastName,
  username,
  userType,
  emailAddress,
  mobile,
  dateRegister
) {
  return {
    id,
    firstName,
    middleName,
    lastName,
    username,
    userType,
    emailAddress,
    mobile,
    dateRegister,
  };
}

const rows = [
  createData(
    0,
    "Elvis",
    "Press",
    "Kenly",
    "elvis2021",
    "user",
    "elvispress@yagoo.com",
    094654413245,
    "July 23, 2021",
  ),
  createData(
    1,
    "John",
    "Galiberd",
    "henry",
    "elvis2021",
    "author",
    "elvigaliberd@yagoo.com",
    094654413885,
    "July 23, 2021",
  ),
  createData(
    2,
    "James",
    "Henry",
    "Clarkson",
    "jameshenry2021",
    "author",
    "jameshenry@gmail.com",
    0911654413245,
    "July 25, 2021",
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Users() {
  return (
    <React.Fragment>
      <Title>List of Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
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
    </React.Fragment>
  );
}
