import { DataGrid } from "@material-ui/data-grid";
import { Typography, Divider, makeStyles } from "@material-ui/core";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First Name",
    width: 150,
    editable: true,
  },
  {
    field: "middleName",
    headerName: "Middle Name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 150,
    editable: true,
  },
  {
    field: "username",
    headerName: "Username",
    width: 110,
    editable: true,
  },
  {
    field: "userType",
    headerName: "User Type",
    width: 110,
    editable: true,
  },
  {
    field: "emailAddress",
    headerName: "Email Address",
    width: 110,
    editable: true,
  },
  {
    field: "mobile",
    headerName: "Mobile",
    width: 110,
    editable: true,
  },
  {
    field: "dateRegister",
    headerName: "Date Registered",
    width: 110,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    firstName: "Jon",
    middleName: "Tywin",
    lastName: "Snow",
    username: "john snow",
    userType: "author",
    emailAddress: "johnsnow@yahoo.com",
    mobile: "09014954284",
    dateRegister: "2021-07-19 02:16:33",
  },
  {
    id: 2,
    firstName: "Jon",
    middleName: "Tywin",
    lastName: "Snow",
    username: "john snow",
    userType: "author",
    emailAddress: "johnsnow@yahoo.com",
    mobile: "09014954284",
    dateRegister: "2021-07-19 02:16:33",
  },
  {
    id: 3,
    firstName: "Jon",
    middleName: "Tywin",
    lastName: "Snow",
    username: "john snow",
    userType: "author",
    emailAddress: "johnsnow@yahoo.com",
    mobile: "09014954284",
    dateRegister: "2021-07-19 02:16:33",
  },
  {
    id: 4,
    firstName: "Jon",
    middleName: "Tywin",
    lastName: "Snow",
    username: "john snow",
    userType: "author",
    emailAddress: "johnsnow@yahoo.com",
    mobile: "09014954284",
    dateRegister: "2021-07-19 02:16:33",
  },
  {
    id: 5,
    firstName: "Jon",
    middleName: "Tywin",
    lastName: "Snow",
    username: "john snow",
    userType: "author",
    emailAddress: "johnsnow@yahoo.com",
    mobile: "09014954284",
    dateRegister: "2021-07-19 02:16:33",
  },
  {
    id: 6,
    firstName: "Jon",
    middleName: "Tywin",
    lastName: "Snow",
    username: "john snow",
    userType: "author",
    emailAddress: "johnsnow@yahoo.com",
    mobile: "09014954284",
    dateRegister: "2021-07-19 02:16:33",
  },
  {
    id: 7,
    firstName: "Jon",
    middleName: "Tywin",
    lastName: "Snow",
    username: "john snow",
    userType: "author",
    emailAddress: "johnsnow@yahoo.com",
    mobile: "09014954284",
    dateRegister: "2021-07-19 02:16:33",
  },
  {
    id: 8,
    firstName: "Jon",
    middleName: "Tywin",
    lastName: "Snow",
    username: "john snow",
    userType: "author",
    emailAddress: "johnsnow@yahoo.com",
    mobile: "09014954284",
    dateRegister: "2021-07-19 02:16:33",
  },
  {
    id: 9,
    firstName: "Jon",
    middleName: "Tywin",
    lastName: "Snow",
    username: "john snow",
    userType: "author",
    emailAddress: "johnsnow@yahoo.com",
    mobile: "09014954284",
    dateRegister: "2021-07-19 02:16:33",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "20px",
  },
  tableHeaders: {
    textTransform: "uppercase",
  },
}));

export default function TagListTbl() {
  const classes = useStyles();

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Typography variant="h6" gutterBottom className={classes.tableHeaders}>
        list of tags
      </Typography>
      <Divider className={classes.root} />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
