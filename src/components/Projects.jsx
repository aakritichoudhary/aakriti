import ProjectCard from './ProjectCard'
import SectionHeader from './SectionHeader'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Library Management System',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quasi. Nam tenetur officia consequatur maxime dolores.',
      techStack: ['Java', 'NetBeans', 'JDBC'],
      githubUrl: 'abc.github.com',
      projectUrl: 'xyz.project.com',
      hasProjectUrl: false,
    },
    {
      id: 2,
      title: 'Habit Tracker',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quasi. Nam tenetur officia consequatur maxime dolores.',
      techStack: ['Java', 'NetBeans', 'JDBC'],
      githubUrl: 'abc.github.com',
      projectUrl: 'xyz.project.com',
      hasProjectUrl: true,
    },
    {
      id: 3,
      title: 'Sorting Visualizer',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quasi. Nam tenetur officia consequatur maxime dolores.',
      techStack: ['Java', 'NetBeans', 'JDBC'],
      githubUrl: 'abc.github.com',
      projectUrl: 'xyz.project.com',
      hasProjectUrl: true,
    },
    {
      id: 4,
      title: 'Outfir Generator',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quasi. Nam tenetur officia consequatur maxime dolores.',
      techStack: ['Java', 'NetBeans', 'JDBC'],
      githubUrl: 'abc.github.com',
      projectUrl: 'xyz.project.com',
      hasProjectUrl: true,
    },
    {
      id: 5,
      title: 'Portfolio',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quasi. Nam tenetur officia consequatur maxime dolores.',
      techStack: ['Java', 'NetBeans', 'JDBC'],
      githubUrl: 'abc.github.com',
      projectUrl: 'xyz.project.com',
      hasProjectUrl: true,
    },
    {
      id: 6,
      title: 'Notification System',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quasi. Nam tenetur officia consequatur maxime dolores.',
      techStack: ['Java', 'NetBeans', 'JDBC'],
      githubUrl: 'abc.github.com',
      projectUrl: 'xyz.project.com',
      hasProjectUrl: true,
    },
    {
      id: 7,
      title: 'Blah blah',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quasi. Nam tenetur officia consequatur maxime dolores.',
      techStack: ['Java', 'NetBeans', 'JDBC'],
      githubUrl: 'abc.github.com',
      projectUrl: 'xyz.project.com',
      hasProjectUrl: false,
    }
  ]
  return (
    <div id="projects" className='min-h-90 px-8 w-full scroll-mt-20 flex flex-col justify-center max-w-1000px'>
      <SectionHeader title="projects" />
      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full">
        {projects.map(project => <ProjectCard key={project.id} {...project} />)}
      </div>
    </div>
  )
}
export default Projects
