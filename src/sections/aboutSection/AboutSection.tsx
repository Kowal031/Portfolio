import { FC } from "react";
import GenericTitleDescriptionBlock from "../../components/common/GenericTitleDescriptionBlock";
import MotionWrapper from "../../components/common/MotinWrapper";
import { COMMON_IDS } from "../../constants/commonConstants";
import InfoBox from "./components/InfoBox";
import { ABOUT_CONSTANTS } from "./constants/aboutConstants";
import { aboutData } from "./data.json";

const AboutSection: FC = () => {
  return (
    <MotionWrapper id={COMMON_IDS.ABOUT}>
      <GenericTitleDescriptionBlock
        title={ABOUT_CONSTANTS.TITLE}
        description={aboutData.description}
        useDangerouslySetHTML
      />
      <InfoBox data={aboutData.info} />
    </MotionWrapper>
  );
};

export default AboutSection;
