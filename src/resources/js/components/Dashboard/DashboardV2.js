import ReactDOM from "react-dom";
// import { Redirect } from "react-router-dom";

function DashboardV2({ authorized }) {
  // if (!authorized) {
  //   return <Redirect to="/" />;
  // }
  return <div>Hi I am a dashboard</div>;
}

export default DashboardV2;

if (document.getElementById("dashboard")) {
  ReactDOM.render(<DashboardV2 />, document.getElementById("dashboard"));
}
