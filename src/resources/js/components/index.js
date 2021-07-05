import React from "react";
import ReactDOM from "react-dom";
import { IconButton } from "@material-ui/core";
import {
  Apple as AppleIcon,
  BusinessCenter as BusinessIcon,
} from "@material-ui/icons";

function Index() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Index Component Hoyaah!</div>
            <IconButton aria-label="settings">
              <AppleIcon />
            </IconButton>
            <IconButton aria-label="settings">
              <BusinessIcon />
            </IconButton>
            <div className="card-body">I'm an Index component!s</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

if (document.getElementById("app")) {
  ReactDOM.render(<Index />, document.getElementById("app"));
}
