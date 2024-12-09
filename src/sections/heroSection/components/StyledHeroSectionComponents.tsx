import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const HeroImage = styled("img")({
  width: "18rem",
  borderRadius: "9rem",
});

export const ButtonWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginTop: "1rem",
});

export const ActionButtonsContainer = styled(Box)({
  display: "flex",
  gap: "1rem",
});
