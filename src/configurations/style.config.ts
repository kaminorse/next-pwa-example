
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#73D2E6",
    },
    secondary: {
      main: "#D18AE6",
    },
    error: {
      main: "#e5da76",
    },
    warning: {
      main: "#E6D85C",
    },
    info: {
      main: "#7697e5",
    },
    success: {
      main: "#94dd4b",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const styleConfig = {
  theme: theme,
};

export default styleConfig;
