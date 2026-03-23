import { FaRegFolder } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'
import ListItem from './ListItem'

function ProjectCard({
  title,
  description,
  techStack,
  projectUrl,
  githubUrl,
  hasProjectUrl,
}) {
  return (
    <div className="w-full max-w-full p-5 rounded-md flex flex-col gap-4 transition duration-300 ease-in-out bg-light-navy hover:bg-lightest-navy">
      <div className="bg-[#00000008] flex flex-row gap-4 items-center p-3 justify-between rounded-md py-5">
        <FaRegFolder size={22} className="text-green" />
        <div className="flex flex-row gap-4 text-lightest-slate">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub size={18} className="hover:text-green hover:cursor-pointer" />
          </a>
          {/* TUDU - Make ProjectURLIcon optional - only when projectURL is there */}
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkSquareAlt size={18} className='hover:text-green hover:cursor-pointer' />
          </a>
        </div>
      </div>
      <div className="flex gap-3 flex-col text-lightest-slate">
        <h3 className=" text-lg text-bold text-white">
          {title}
        </h3>
        <p className="text-sm text-justify">
         {description}
        </p>
        <div className="text-sm mt-8">{techStack.map((tech) => <ListItem text={tech}/>)}</div>
      </div>
    </div>
  )
}
export default ProjectCard
