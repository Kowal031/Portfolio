import { FC } from "react";
import { ProjectChipContainer, ProjectsChip } from "./ProjectsStyledComponents";

interface ProjectChipListProps {
  technologies: string[];
}

const ProjectChipList: FC<ProjectChipListProps> = ({ technologies }) => {
  return (
    <ProjectChipContainer>
      {technologies.map((tech, techIndex) => (
        <ProjectsChip key={techIndex} label={tech} variant="outlined" />
      ))}
    </ProjectChipContainer>
  );
};

export default ProjectChipList;
