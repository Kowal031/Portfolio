import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";
import {
  StyledCloseIconButton,
  StyledIconButton,
} from "./SidebarStyledComponents";

interface HamburgerMenuBtnProps {
  open: boolean;
  toggleMenu: () => void;
}

const HamburgerMenuBtn: FC<HamburgerMenuBtnProps> = ({ open, toggleMenu }) =>
  open ? (
    <StyledCloseIconButton onClick={toggleMenu}>
      <CloseIcon />
    </StyledCloseIconButton>
  ) : (
    <StyledIconButton onClick={toggleMenu}>
      <MenuIcon />
    </StyledIconButton>
  );
export default HamburgerMenuBtn;
