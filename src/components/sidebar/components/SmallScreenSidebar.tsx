import { FC } from "react";
import HamburgerMenuBtn from "./HamburgerMenuBtn";
import SidebarNavItems from "./SidebarNavItems";
import { StyledSidebarPaper } from "./SidebarStyledComponents";

interface SmallScreenSidebarProps {
  open: boolean;
  toggleMenu: () => void;
}

const SmallScreenSidebar: FC<SmallScreenSidebarProps> = ({
  open,
  toggleMenu,
}) => (
  <>
    <HamburgerMenuBtn open={open} toggleMenu={toggleMenu} />
    <StyledSidebarPaper open={open} elevation={24}>
      <SidebarNavItems closeMenu={toggleMenu} />
    </StyledSidebarPaper>
  </>
);

export default SmallScreenSidebar;
