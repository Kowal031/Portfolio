import { FC } from "react";
import { ProjectType } from "../types/projectTypes";
import { getProjectImg } from "../utils/getProjectImg";
import ProjectCardContent from "./ProjectCardContent";
import { StyledCard, StyledImage } from "./ProjectsStyledComponents";

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <StyledCard elevation={3}>
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
        <StyledImage src={getProjectImg(project.image)} alt={project.title} />
      </a>
      <ProjectCardContent project={project} />
    </StyledCard>
  );
};

export default ProjectCard;
