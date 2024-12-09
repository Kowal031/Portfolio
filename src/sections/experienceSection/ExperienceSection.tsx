import { FC } from "react";
import MotionWrapper from "../../components/common/MotinWrapper";
import { COMMON_IDS } from "../../constants/commonConstants";
import { CommonTitle } from "../../styles/CommonStyles";
import TimelineContentBlock from "./components/TimelineContentBlock";
import { EXPERIENCE_CONSTANTS } from "./constants/experienceConstants";
import { experiences } from "./data.json";

const ExperienceSection: FC = () => {
  return (
    <MotionWrapper id={COMMON_IDS.EXPERIENCE}>
      <CommonTitle>{EXPERIENCE_CONSTANTS.TITLE}</CommonTitle>
      <TimelineContentBlock experiences={experiences} />
    </MotionWrapper>
  );
};

export default ExperienceSection;
