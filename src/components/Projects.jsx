import ProjectCard from './ProjectCard'
import SectionHeader from './SectionHeader'

function Projects() {
  return (
    <div id="projects">
      <SectionHeader title="projects" />
      <div className="flex flex-1 gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}
export default Projects
