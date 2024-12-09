import { Box, Button, Chip, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { appColors } from "../../../styles/colors/appColors";
import { commonMediaQueries } from "../../../styles/commonMediaQuery";

export const ProjectsGrid = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "stretch",
  gap: "2rem",
  marginTop: "1.5rem",
  maxWidth: "50rem",
  [commonMediaQueries.mediumScreen]: {
    maxWidth: "35rem",
    flexDirection: "column",
  },
  [commonMediaQueries.smallScreen]: {
    maxWidth: "40rem",
    flexDirection: "column",
    flexWrap: "nowrap",
  },
}));

export const StyledCard = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  flexBasis: "45%",
  cursor: "default",
  borderRadius: "2rem",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  background: appColors.primary.main,
  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const ProjectContentWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
});

export const ProjectsChip = styled(Chip)({
  fontSize: "1rem",
  textAlign: "center",
  borderRadius: "1rem",
  background: appColors.custom.elementsBackground,
  color: appColors.text.primary,
  backdropFilter: "blur(10px)",
  "&:hover": {
    cursor: "default",
    transform: "scale(1.1)",
    background: appColors.custom.persianIndigo,
  },
  [commonMediaQueries.mediumScreen]: {
    fontSize: "0.75rem",
  },
});

export const ProjectChipContainer = styled(Box)({
  display: "flex",
  gap: "0.75rem",
  flexWrap: "wrap",
  marginBottom: "1rem",
});

export const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  borderRadius: "2rem 2rem 0 0",
  marginBottom: "0.5rem",
  cursor: "pointer",
});

export const ButtonWrapper = styled(Box)({
  margin: "0.25rem",
  display: "flex",
  gap: "1.25rem",
});

export const StyledGithubButton = styled(Button)({
  background: appColors.background.paper,
  "&:hover": {
    transform: "scale(1.1)",
    background: appColors.custom.persianIndigo,
  },
});

export const StyledLiveDemoButton = styled(Button)({
  color: appColors.text.primary,
  borderColor: appColors.custom.white,
  "&:hover": {
    transform: "scale(1.1)",
    background: appColors.custom.persianIndigo,
  },
});
