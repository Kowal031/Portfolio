import { FC } from "react";
import { CommonTextCentered } from "../../../styles/CommonStyles";
import { SkillsBox, SkillWrapper, StyledChip } from "./SkillsStyledComponents";

interface SkillsContainerProps {
  title: string;
  skills: { name: string; level?: string }[];
}

const SkillsContainer: FC<SkillsContainerProps> = ({ title, skills }) => {
  return (
    <SkillsBox elevation={3}>
      <CommonTextCentered marginRight="1rem">{title}</CommonTextCentered>
      <SkillWrapper>
        {skills.map((skill) => (
          <StyledChip
            key={skill.name}
            label={skill.level ? `${skill.name} (${skill.level})` : skill.name}
            variant="outlined"
          />
        ))}
      </SkillWrapper>
    </SkillsBox>
  );
};

export default SkillsContainer;
