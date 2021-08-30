import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fff",
      contrastText: "#000",
    },
    secondary: {
      main: "#0363ff",
      contrastText: "#000",
    },
    accent: {
      main: "#00ff00",
    },
  },

  text: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#000",
    },
  },

  typography: {
    fontFamily: "'Titillium Web', sans-serif",
  },
});

export default theme