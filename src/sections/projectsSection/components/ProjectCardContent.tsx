import { FC } from "react";
import { CommonSubText, CommonText } from "../../../styles/CommonStyles";
import { ProjectType } from "../types/projectTypes";
import ProjectChipList from "./ProjectChipList";
import ProjectLinks from "./ProjectLinks";
import { ProjectContentWrapper } from "./ProjectsStyledComponents";

interface ProjectCardContentProps {
  project: ProjectType;
}

const ProjectCardContent: FC<ProjectCardContentProps> = ({ project }) => {
  return (
    <ProjectContentWrapper>
      <CommonText>{project.title}</CommonText>
      <CommonSubText>{project.description}</CommonSubText>
      <ProjectChipList technologies={project.technologies} />
      <ProjectLinks githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
    </ProjectContentWrapper>
  );
};

export default ProjectCardContent;
