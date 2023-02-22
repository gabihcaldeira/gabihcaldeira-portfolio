import ProjectCard from "../projectCard";
import { ProjectsSection } from "./style";

const ProjectsContainer = () => {
  return (
    <ProjectsSection id="section_projects">
      <h2 className="projects_title">Projetos</h2>

      <div className="projects_content">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </ProjectsSection>
  );
};

export default ProjectsContainer;
