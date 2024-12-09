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
      <a href={githubUrl} target="_blank">
        <StyledGithubButton variant="contained">
          {PROJECTS_CONSTANTS.BUTTONS_LABELS.GITHUB}
        </StyledGithubButton>
      </a>
      {liveUrl && (
        <a href={githubUrl} target="_blank">
          <StyledLiveDemoButton variant="outlined" href={liveUrl}>
            {PROJECTS_CONSTANTS.BUTTONS_LABELS.LIVE_DEMO}
          </StyledLiveDemoButton>
        </a>
      )}
    </ButtonWrapper>
  );
};

export default ProjectLinks;
