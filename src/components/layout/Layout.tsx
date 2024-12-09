import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC, ReactNode } from "react";
import theme from "../../styles/themes/theme";
import Sidebar from "../sidebar/Sidebar";
import StarsBackground from "../starsBackground/StarsBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StarsBackground />
      <Sidebar />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
