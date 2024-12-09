import { FC } from "react";
import photo from "../../assets/Hero.png";
import MotionWrapper from "../../components/common/MotinWrapper";
import { COMMON_IDS } from "../../constants/commonConstants";
import { CommonSubTitle, CommonTitle } from "../../styles/CommonStyles";
import HeroActionButtons from "./components/HeroActionButtons";
import { HeroImage } from "./components/StyledHeroSectionComponents";
import { HERO_CONSTANTS } from "./constants/heroConstants";

const HeroSection: FC = () => {
  const {
    TITLE,
    SUBTITLE,
    GITHUB_URL,
    GITHUB_BUTTON_LABEL,
    LINKEDIN_URL,
    LINKEDIN_BUTTON_LABEL,
    CV_DOWNLOAD_LABEL,
  } = HERO_CONSTANTS;

  return (
    <MotionWrapper id={COMMON_IDS.HERO}>
      <HeroImage src={photo} alt="My Photo" />
      <CommonTitle>{TITLE}</CommonTitle>
      <CommonSubTitle>{SUBTITLE}</CommonSubTitle>
      <HeroActionButtons
        githubUrl={GITHUB_URL}
        githubLabel={GITHUB_BUTTON_LABEL}
        linkedinUrl={LINKEDIN_URL}
        linkedinLabel={LINKEDIN_BUTTON_LABEL}
        cvLabel={CV_DOWNLOAD_LABEL}
      />
    </MotionWrapper>
  );
};

export default HeroSection;
