import { FC } from "react";
import MotionWrapper from "../../components/common/MotinWrapper";
import { COMMON_IDS } from "../../constants/commonConstants";
import { CommonTitle } from "../../styles/CommonStyles";
import ProjectCard from "./components/ProjectCard";
import { ProjectsGrid } from "./components/ProjectsStyledComponents";
import { PROJECTS_CONSTANTS } from "./constants/projectConstants";
import { projects } from "./data.json";

const ProjectsSection: FC = () => {
  return (
    <MotionWrapper id={COMMON_IDS.PROJECTS}>
      <CommonTitle>{PROJECTS_CONSTANTS.PERSONAL_TITLE}</CommonTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectsGrid>
    </MotionWrapper>
  );
};

export default ProjectsSection;
