import { Button } from "@mui/material";
import { FC } from "react";
import { appColors } from "../../../styles/colors/appColors";
import {
  ActionButtonsContainer,
  ButtonWrapper,
} from "./StyledHeroSectionComponents";
import cv from "../../../assets/cv/Kowalczyk_Maciej_CV.pdf";

interface HeroActionButtonsProps {
  githubUrl: string;
  githubLabel: string;
  linkedinUrl: string;
  linkedinLabel: string;
  cvLabel: string;
}

const HeroActionButtons: FC<HeroActionButtonsProps> = ({
  githubUrl,
  githubLabel,
  linkedinUrl,
  linkedinLabel,
  cvLabel,
}) => {
  return (
    <ButtonWrapper>
      <ActionButtonsContainer>
        <Button
          variant="contained"
          color="primary"
          href={githubUrl}
          target="_blank"
          sx={{
            background: appColors.background.paper,
            "&:hover": {
              transform: "scale(1.1)",
              background: appColors.custom.persianIndigo,
            },
          }}
          size="large"
        >
          {githubLabel}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href={linkedinUrl}
          target="_blank"
          sx={{
            "&:hover": {
              transform: "scale(1.1)",
              background: appColors.custom.persianIndigo,
            },
          }}
          size="large"
        >
          {linkedinLabel}
        </Button>
      </ActionButtonsContainer>
      <Button
        variant="outlined"
        href={cv}
        download
        sx={{
          color: "text.primary",
          borderColor: "common.white",
          "&:hover": {
            transform: "scale(1.1)",
            background: appColors.custom.persianIndigo,
          },
        }}
        size="large"
      >
        {cvLabel}
      </Button>
    </ButtonWrapper>
  );
};

export default HeroActionButtons;
