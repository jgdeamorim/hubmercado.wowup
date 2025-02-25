import { createTheme } from "@mui/material/styles";
import palette from "./palette";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: palette.light.primary },
    secondary: { main: palette.light.secondary },
    background: { default: palette.light.background },
  },
});

export default theme;
