import { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import { makeStyles, Collapse } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  alertBox: {
    margin: theme.spacing(2),
  },
}));

export default function AlertDisplay(props) {
  const classes = useStyles();
  //   console.log(props);
  const { showAlertBox, severity, alertMessage } = props;
  //   console.log(severity);
  console.log(alertMessage);
  console.log(typeof alertMessage);
  return (
    <>
      <Collapse in={showAlertBox}>
        {/* {

          }

        <Alert severity="error" className={classes.alertBox}>
          You have successfully registered!
        </Alert>
        <Alert severity="error" className={classes.alertBox}>
          You have successfully registered!
        </Alert>
        <Alert severity="error" className={classes.alertBox}>
          You have successfully registered!
        </Alert>
        <Alert severity="error" className={classes.alertBox}>
          You have successfully registered!
        </Alert>

        <Alert severity="success" className={classes.alertBox}>
          You have successfully registered!
        </Alert> */}
      </Collapse>
    </>
  );
}

AlertDisplay.propTypes = {
  messageAlert: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
