// #region PACKAGE IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import {
  createTheme,
  ThemeProvider as ThemeProvide,
} from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
// #endregion

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: '#324a5f',
    },
  },
});

export default function ThemeProvider({ children }) {
  return <ThemeProvide theme={theme}>{children}</ThemeProvide>;
}

ThemeProvider.propTypes = {
  children: PropTypes.object,
};
