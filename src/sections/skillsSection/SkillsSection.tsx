import { FC } from "react";
import MotionWrapper from "../../components/common/MotinWrapper";
import { COMMON_IDS } from "../../constants/commonConstants";
import { CommonTitle } from "../../styles/CommonStyles";
import SkillsContainer from "./components/SkillsContainer";
import { SkillsWrapper } from "./components/SkillsStyledComponents";
import { SKILLS_CONSTANTS } from "./constants/skillsConstants";
import { skillsData } from "./data.json";

const SkillsSection: FC = () => {
  return (
    <MotionWrapper id={COMMON_IDS.SKILLS}>
      <CommonTitle>{SKILLS_CONSTANTS.TITLE}</CommonTitle>
      <SkillsWrapper>
        {skillsData.map((category) => (
          <SkillsContainer
            key={category.category}
            title={category.category}
            skills={category.skills}
          />
        ))}
      </SkillsWrapper>
    </MotionWrapper>
  );
};

export default SkillsSection;
