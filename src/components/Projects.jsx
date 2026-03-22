import ProjectCard from './ProjectCard'
import SectionHeader from './SectionHeader'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Library Management System',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quasi. Nam tenetur officia consequatur maxime dolores.',
      techstack: ['Java', 'NetBeans', 'JDBC'],
      githubUrl: 'abc.github.com',
      projectUrl: 'xyz.project.com',
      hasProjectUrl: false,
    },
    {
      id: 2,
      title: 'Habit Tracker',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quasi. Nam tenetur officia consequatur maxime dolores.',
      techstack: ['Java', 'NetBeans', 'JDBC'],
      githubUrl: 'abc.github.com',
      projectUrl: 'xyz.project.com',
      hasProjectUrl: true,
    },
    {
      id: 3,
      title: 'Sorting Visualizer',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quasi. Nam tenetur officia consequatur maxime dolores.',
      techstack: ['Java', 'NetBeans', 'JDBC'],
      githubUrl: 'abc.github.com',
      projectUrl: 'xyz.project.com',
      hasProjectUrl: true,
    },
    {
      id: 4,
      title: 'Outfir Generator',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quasi. Nam tenetur officia consequatur maxime dolores.',
      techstack: ['Java', 'NetBeans', 'JDBC'],
      githubUrl: 'abc.github.com',
      projectUrl: 'xyz.project.com',
      hasProjectUrl: true,
    },
    {
      id: 5,
      title: 'Portfolio',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quasi. Nam tenetur officia consequatur maxime dolores.',
      techstack: ['Java', 'NetBeans', 'JDBC'],
      githubUrl: 'abc.github.com',
      projectUrl: 'xyz.project.com',
      hasProjectUrl: true,
    },
    {
      id: 6,
      title: 'Notification System',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quasi. Nam tenetur officia consequatur maxime dolores.',
      techstack: ['Java', 'NetBeans', 'JDBC'],
      githubUrl: 'abc.github.com',
      projectUrl: 'xyz.project.com',
      hasProjectUrl: true,
    },
    {
      id: 7,
      title: 'Blah blah',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quasi. Nam tenetur officia consequatur maxime dolores.',
      techstack: ['Java', 'NetBeans', 'JDBC'],
      githubUrl: 'abc.github.com',
      projectUrl: 'xyz.project.com',
      hasProjectUrl: false,
    }
  ]
  return (
    <div id="projects" className='min-h-90vh px-8 w-full scroll-mt-20'>
      <SectionHeader title="projects" />
      <div className="flex flex-1 gap-10">
        {projects.map((project) => <ProjectCard title={project.title} description={project.description} techStack={project.techstack} githubUrl={project.githubUrl} projectUrl={project.projectUrl} hasProjectUrl={project.hasProjectUrl}/>)}
      </div>
    </div>
  )
}
export default Projects
