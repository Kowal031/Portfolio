import styled from "@emotion/styled";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { appColors } from "../../../styles/colors/appColors";
import theme from "../../../styles/themes/theme";

const flexCenter = {
  display: "flex",
  alignItems: "center",
};

const transitionAll = {
  transition: "all 0.3s ease",
};

const spacingXXS = "0.25rem";
const spacingXS = "0.5rem";
const spacingSM = "1rem";

const commonHoverStyles = {
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.2)",
  },
};

const commonTransparentBorder = `${spacingXXS} solid transparent`;

export const SidebarContainer = styled(Box)({
  position: "fixed",
  top: "50%",
  left: 0,
  transform: "translateY(-50%)",
  backgroundColor: theme.palette.background.paper,
  borderRadius: `0 ${spacingXS} ${spacingXS} 0`,
  zIndex: 1300,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: spacingSM,
  width: "auto",
});

export const NavItemBox = styled(Box)({
  ...flexCenter,
  ...transitionAll,
  ...commonHoverStyles,
  padding: spacingXS,
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  borderLeft: commonTransparentBorder,
  borderBottom: commonTransparentBorder,

  "@media (max-width: 1000px)": {
    width: "auto",
    borderLeft: "none",
    borderBottom: commonTransparentBorder,
  },
});

export const NavItemLabel = styled(Typography)({
  fontWeight: 500,
  fontSize: spacingSM,
});

export const StyledIconButton = styled(IconButton)({
  position: "fixed",
  top: spacingSM,
  right: spacingSM,
  zIndex: 1400,
  color: appColors.custom.gloomyPurple,
  opacity: 1,
  fontWeight: 700,
  boxShadow: `0px 4px 12px ${appColors.custom.gloomyPurple}80`,
  textShadow: `0px 0px 8px ${appColors.custom.gloomyPurple}`,
  backgroundColor: `${appColors.primary.main}`,
  borderRadius: "50%",
  padding: "10px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    color: appColors.custom.white,
    backgroundColor: `${appColors.custom.persianIndigo}CC`,
    boxShadow: `0px 6px 20px ${appColors.custom.gloomyPurple}`,
    transform: "scale(1.1)",
  },
});
export const StyledCloseIconButton = styled(IconButton)({
  position: "fixed",
  top: spacingSM,
  right: spacingSM,
  zIndex: 1400,
  color: appColors.custom.gloomyPurple,
  fontWeight: 700,
  borderRadius: "50%",
  padding: "10px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    color: appColors.custom.white,
    backgroundColor: `${appColors.custom.persianIndigo}CC`,
    boxShadow: `0px 6px 20px ${appColors.custom.gloomyPurple}`,
    transform: "scale(1.1)",
  },
});

interface StyledSidebarPaperProps {
  open: boolean;
}

export const StyledSidebarPaper = styled(Paper)<StyledSidebarPaperProps>(
  ({ open }) => ({
    position: "fixed",
    top: "10px",
    right: "10px",
    width: "250px",
    height: "auto",
    overflow: "auto",
    padding: spacingSM,
    backgroundColor: appColors.background.paper,
    borderRadius: spacingSM,
    zIndex: 1300,
    display: open ? "block" : "none",
  })
);

export const StyledSidebarNavItemsContainer = styled(Box)({
  ...transitionAll,
  textDecoration: "none",
  width: "100%",
  padding: "0 0.375rem",
  display: "flex",
  color: "black",
  flexDirection: "column",
  alignItems: "center",
});
