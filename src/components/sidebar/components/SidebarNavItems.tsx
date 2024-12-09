import { FC } from "react";
import { Link } from "react-scroll";
import { appColors } from "../../../styles/colors/appColors";
import { SIDEBAR_NAV_ITEMS } from "../constants/sidebarConstants";
import {
  NavItemBox,
  NavItemLabel,
  StyledSidebarNavItemsContainer,
} from "./SidebarStyledComponents";

interface SidebarNavItemsProps {
  closeMenu?: () => void;
}

const navItemStyles = {
  textDecoration: "none",
  width: "100%",
  padding: "10px 12.5px",
  display: "block",
  color: "black",
  transition: "all 0.3s ease",
};

const SidebarNavItems: FC<SidebarNavItemsProps> = ({ closeMenu }) => {
  const borderStyle = `2px solid ${appColors.custom.gloomyPurple}`;

  const activeStyle = {
    borderLeft: borderStyle,
    borderBottom: "none",
    transition: "all 0.3s ease",
  };

  return (
    <StyledSidebarNavItemsContainer>
      {SIDEBAR_NAV_ITEMS.map((section) => (
        <Link
          key={section.id}
          to={section.id}
          smooth={true}
          duration={500}
          spy={true}
          activeStyle={activeStyle}
          style={navItemStyles}
          onClick={closeMenu}
        >
          <NavItemBox>
            <NavItemLabel variant="body1">{section.label}</NavItemLabel>
          </NavItemBox>
        </Link>
      ))}
    </StyledSidebarNavItemsContainer>
  );
};

export default SidebarNavItems;
