import { Theme, useMediaQuery } from "@mui/material";
import { FC, useEffect, useState } from "react";
import SidebarNavItems from "./components/SidebarNavItems";
import { SidebarContainer } from "./components/SidebarStyledComponents";
import SmallScreenSidebar from "./components/SmallScreenSidebar";

const Sidebar: FC = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down(1025)
  );

  const isLargeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up(1024)
  );

  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    setOpenHamburgerMenu((prevState) => !prevState);
  };

  useEffect(() => {
    if (isLargeScreen) setOpenHamburgerMenu(false);
  }, [isLargeScreen]);

  if (isSmallScreen) {
    return (
      <SmallScreenSidebar
        open={openHamburgerMenu}
        toggleMenu={toggleHamburgerMenu}
      />
    );
  }

  return (
    <SidebarContainer>
      <SidebarNavItems />
    </SidebarContainer>
  );
};

export default Sidebar;
