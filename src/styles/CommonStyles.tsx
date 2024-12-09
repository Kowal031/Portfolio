import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { appColors } from "./colors/appColors";
import { commonMediaQueries } from "./commonMediaQuery";

export const CommonContainer = styled(Box)({
  minHeight: "100vh",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  boxSizing: "border-box",
  [commonMediaQueries.smallScreen]: {
    minHeight: "60vh",
  },
  [commonMediaQueries.extraSmallScreen]: {
    minHeight: "100vh",
  },
});

export const CommonTitle = styled(Typography)({
  fontWeight: 500,
  textAlign: "center",
  fontSize: "4rem",
  color: appColors.text.primary,
  [commonMediaQueries.mediumScreen]: {
    fontSize: "3.75rem",
    maxWidth: "35rem",
  },

  [commonMediaQueries.smallScreen]: {
    maxWidth: "40rem",
  },
});

export const CommonSubTitle = styled(Typography)({
  fontWeight: 400,
  fontSize: "2.5rem",
  textAlign: "center",
  color: appColors.text.secondary,
  [commonMediaQueries.mediumScreen]: {
    fontSize: "2.25rem",
  },
});

export const CommonDescription = styled(Typography)({
  fontSize: "1.5rem",
  textAlign: "center",
  fontWeight: 400,
  maxWidth: "50rem",
  marginBottom: "1rem",
  [commonMediaQueries.mediumScreen]: {
    maxWidth: "35rem",
    fontSize: "1.25rem",
  },
  [commonMediaQueries.smallScreen]: {
    maxWidth: "40rem",
  },
});

export const CommonTextCentered = styled(Typography)({
  fontSize: "1.5rem",
  textAlign: "center",
  fontWeight: 400,
  marginBottom: "1rem",
  color: appColors.text.primary,
  [commonMediaQueries.mediumScreen]: {
    fontSize: "1.25rem",
  },
});

export const CommonText = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: 400,
  marginBottom: "0.5rem",
  color: appColors.text.primary,
  [commonMediaQueries.mediumScreen]: {
    fontSize: "1.25rem",
  },
});

export const CommonSubTextCentered = styled(Typography)({
  fontSize: "1rem",
  textAlign: "center",
  fontWeight: 400,
  marginBottom: "1rem",
  color: appColors.text.tertiary,
  [commonMediaQueries.mediumScreen]: {
    fontSize: "0.75rem",
  },
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

export const CommonWrapper = styled(Box)({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "50rem",
  [commonMediaQueries.mediumScreen]: {
    maxWidth: "35rem",
  },
  [commonMediaQueries.smallScreen]: {
    maxWidth: "40rem",
  },
});
