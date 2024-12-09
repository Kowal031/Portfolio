import styled from "@emotion/styled";
import { Box, Button, Paper, TextField } from "@mui/material";
import { appColors } from "../../../styles/colors/appColors";
import { commonMediaQueries } from "../../../styles/commonMediaQuery";

export const WhiteBorderTextField = styled(TextField)<{ isError?: boolean }>`
  & label.Mui-focused {
    color: ${(props) =>
      props.isError === true
        ? appColors.inputBorder.error
        : appColors.inputBorder.white};
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${(props) =>
        props.isError === true
          ? appColors.inputBorder.error
          : appColors.inputBorder.white};
    }
  }
`;

export const ContactOptionPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  width: "250px",
  textAlign: "center",
  borderRadius: "3rem",
  background: appColors.primary.main,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    background: appColors.custom.persianIndigo,
  },
});

export const ContactSubmitButton = styled(Button)({
  padding: "1rem",
  fontSize: "1rem",
  background: appColors.background.paper,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: appColors.custom.persianIndigo,
    transform: "translateY(-5px)",
  },
  [commonMediaQueries.mediumScreen]: {
    fontSize: "0.75rem",
  },
});

export const ContactFormBox = styled(Paper)({
  padding: "1rem",
  borderRadius: "1rem",
  maxWidth: "1000px",
  background: appColors.primary.main,
  margin: "2rem auto 0 auto",
  "& .MuiTextField-root": {
    marginBottom: "1rem",
  },
});

export const SocialMediaLinksContainer = styled(Box)({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
});

export const ContactOptionsWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "2rem",
  gap: "1rem",
  flexWrap: "wrap",
  [commonMediaQueries.extraSmallScreen]: {
    flexDirection: "column",
  },
});
