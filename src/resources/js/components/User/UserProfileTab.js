import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserProfileForm from './UserProfileForm';
import UserAccountForm from './UserAccountForm';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`user-profile-tabpanel-${index}`}
      aria-labelledby={`user-profile-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `user-profile-tab-${index}`,
    'aria-controls': `user-profile-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function UserProfileTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { onClose, isLoading, setLoading } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Profile" {...a11yProps(0)} disabled={isLoading} />
          <Tab label="Account" {...a11yProps(1)} disabled={isLoading} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <UserProfileForm
          isLoading={isLoading}
          setLoading={setLoading}
          onClose={onClose}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserAccountForm
          isLoading={isLoading}
          setLoading={setLoading}
          onClose={onClose}
        />
      </TabPanel>
    </div>
  );
}
