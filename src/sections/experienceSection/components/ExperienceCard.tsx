import { Box } from "@mui/material";
import { FC } from "react";
import { ExperienceType } from "../types/experienceTypes";
import ExperienceCardListItem from "./ExperienceCardListItem";
import {
  ExperienceCardContainer,
  ExperienceCardTitle,
  ExperienceDescription,
  ExperienceSubTitle,
  SubDescriptionContainer,
} from "./ExperienceStyledComponents";

interface ExperienceCardProps {
  experience: ExperienceType;
}

const ExperienceCard: FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <ExperienceCardContainer elevation={3}>
      <Box>
        <ExperienceCardTitle>{experience.title}</ExperienceCardTitle>
        <ExperienceSubTitle>{experience.company}</ExperienceSubTitle>
      </Box>
      {experience.subDescription && (
        <SubDescriptionContainer>
          <ExperienceDescription>
            {experience.description}
          </ExperienceDescription>
          {experience.subDescription.map((project, index) => (
            <ExperienceCardListItem project={project} index={index} />
          ))}
        </SubDescriptionContainer>
      )}
    </ExperienceCardContainer>
  );
};

export default ExperienceCard;
