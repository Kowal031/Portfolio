import { FC } from "react";
import { PROJECTS_CONSTANTS } from "../constants/projectConstants";
import {
  ButtonWrapper,
  StyledGithubButton,
  StyledLiveDemoButton,
} from "./ProjectsStyledComponents";

interface ProjectLinksProps {
  githubUrl: string;
  liveUrl?: string;
}

const ProjectLinks: FC<ProjectLinksProps> = ({ githubUrl, liveUrl }) => {
  return (
    <ButtonWrapper>
      <StyledGithubButton variant="contained" href={githubUrl}>
        {PROJECTS_CONSTANTS.BUTTONS_LABELS.GITHUB}
      </StyledGithubButton>
      {liveUrl && (
        <StyledLiveDemoButton variant="outlined" href={liveUrl}>
          {PROJECTS_CONSTANTS.BUTTONS_LABELS.LIVE_DEMO}
        </StyledLiveDemoButton>
      )}
    </ButtonWrapper>
  );
};

export default ProjectLinks;
