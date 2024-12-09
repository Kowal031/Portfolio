import styled from "@emotion/styled";
import { List, ListItemText, Paper, Typography } from "@mui/material";
import { appColors } from "../../../styles/colors/appColors";
import { commonMediaQueries } from "../../../styles/commonMediaQuery";

export const ExperienceCardContainer = styled(Paper)({
  width: "650px",
  borderRadius: "1rem",
  padding: "0.75rem 1rem",
  background: appColors.primary.main,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    background: appColors.custom.persianIndigo,
  },
  [commonMediaQueries.mediumScreen]: {
    width: "425px",
  },
  [commonMediaQueries.smallScreen]: {
    width: "475px",
  },
  [commonMediaQueries.extraSmallScreen]: {
    width: "100%",
  },
});

export const ExperienceCardTitle = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: 600,
  color: appColors.text.primary,
  [commonMediaQueries.mediumScreen]: {
    fontSize: "1.25rem",
  },
});

export const ExperienceSubTitle = styled(Typography)({
  fontSize: "1rem",
  fontWeight: 500,
  color: appColors.text.primary,
  [commonMediaQueries.mediumScreen]: {
    fontSize: "0.75rem",
  },
});
export const ExperienceDescription = styled(Typography)({
  fontSize: "1rem",
  fontWeight: "bold",
  color: appColors.text.primary,
  marginBottom: "0.25rem",
  [commonMediaQueries.mediumScreen]: {
    fontSize: "0.75rem",
  },
});

export const CustomDescription = styled(ListItemText)({
  display: "flex",
  width: "100%",
  fontSize: "1rem",
  fontWeight: 400,
  color: appColors.text.tertiary,
  marginBottom: "0.625rem",
  [commonMediaQueries.mediumScreen]: {
    fontSize: "0.75rem",
  },
});

export const SubDescriptionContainer = styled(List)({
  marginTop: "5px",
  color: appColors.text.primary,
  marginLeft: "1.25rem",
});

export const CommonSubText = styled(Typography)({
  fontSize: "1rem",
  fontWeight: 400,
  marginBottom: "1rem",
  color: appColors.text.tertiary,
  [commonMediaQueries.mediumScreen]: {
    fontSize: "0.75rem",
  },
});
