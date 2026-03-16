import { FaRegFolder } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

function ProjectCard({ title, description, techStack, projectUrl, githubUrl }) {
  return (
    <div className="p-2 bg-light-navy max-w-xs rounded-md flex flex-col gap-4">
      <div className="bg-navy flex flex-row gap-4 items-center p-3 justify-between rounded-md py-5">
        <FaRegFolder size={24} className="text-green" />
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkSquareAlt />
        </a>
      </div>
      <div className="flex gap-3 flex-col text-light-slate">
        <h3 className=" text-lg text-bold text-white">Library Management System</h3>
        <p className='text-sm'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quasi.
          Nam tenetur officia consequatur maxime dolores, fugiat adipisci
          numquam ea iusto suscipit dolorem. Iste esse voluptatem quas veniam
          nihil numquam. Esse optio eligendi odio porro sequi quas molestia.
        </p>
        <div className='text-sm'>Java, JDBC, NetBeans</div>
      </div>
    </div>
  )
}
export default ProjectCard
