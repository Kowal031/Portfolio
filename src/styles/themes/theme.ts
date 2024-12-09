import { createTheme } from "@mui/material/styles";
import { appColors } from "../colors/appColors";

const theme = createTheme({
  palette: {
    primary: appColors.primary,
    secondary: appColors.secondary,
    background: appColors.background,
    text: appColors.text,
    action: appColors.action,
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
