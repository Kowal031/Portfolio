import { Chip, Paper } from "@mui/material";
import { Box, styled } from "@mui/system";
import { appColors } from "../../../styles/colors/appColors";
import { commonMediaQueries } from "../../../styles/commonMediaQuery";

export const StyledChip = styled(Chip)({
  fontSize: "1rem",
  padding: `1rem 1rem`,
  marginTop: "1rem",
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
    fontSize: "0.85rem",
  },
  [commonMediaQueries.smallScreen]: {
    fontSize: "0.75rem",
  },
});

export const SkillsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  maxWidth: "50rem",
  margin: "0 auto",
  [commonMediaQueries.mediumScreen]: {
    maxWidth: "35rem",
  },
  [commonMediaQueries.smallScreen]: {
    maxWidth: "40rem",
  },
});

export const SkillsBox = styled(Paper)({
  display: "flex",

  alignItems: "baseline",
  borderRadius: "2rem",
  background: appColors.primary.main,
  backdropFilter: "blur(10px)",
  padding: "1.5rem",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },

  [commonMediaQueries.extraSmallScreen]: {
    flexWrap: "wrap",
  },
});

export const SkillWrapper = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
});
