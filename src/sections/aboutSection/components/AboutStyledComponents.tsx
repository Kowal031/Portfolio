import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";
import { appColors } from "../../../styles/colors/appColors";
import { commonMediaQueries } from "../../../styles/commonMediaQuery";

export const InfoBoxWrapper = styled(Box)({
  marginTop: "1.5rem",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  [commonMediaQueries.mediumScreen]: {
    maxWidth: "35rem",
  },
  [commonMediaQueries.smallScreen]: {
    maxWidth: "40rem",
  },
  [commonMediaQueries.extraSmallScreen]: {
    maxWidth: "40rem",
    justifyContent: "center",
    gap: "1.5rem",
  },
});

export const ContactOptionPaper = styled(Paper)({
  borderRadius: "4rem",
  background: appColors.primary.main,
  backdropFilter: "blur(10px)",
  cursor: "default",
  padding: "0.5rem",
  "&:hover": {
    transition: "all 0.3s ease",
    transform: "scale(1.1)",
    background: appColors.custom.persianIndigo,
  },
  flexBasis: "30%",
  [commonMediaQueries.extraSmallScreen]: {
    flexBasis: "90%",
  },
});
