import { MdEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
function SideBar() {
  return (
    <div className="flex flex-row gap-2 items-center">
      <a to="mailto:aakriti1805@gmail.com" target="_blank">
        <MdEmail
          size={18}
          className="text-light-slate hover:text-green cursor-pointer"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/aakritichoudhary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          size={18}
          className="text-light-slate  hover:text-green cursor-pointer"
        />
      </a>
      <a
        href="https://github.com/aakritichoudhary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          size={18}
          className="text-light-slate  hover:text-green cursor-pointer"
        />
      </a>
      <a
        href="https://leetcode.com/u/bad_coder01/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLeetcode
          size={18}
          className="text-light-slate  hover:text-green cursor-pointer"
        />
      </a>
    </div>
  )
}

export default SideBar
