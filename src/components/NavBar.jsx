import Logo from './Logo'
import SideBar from './SideBar'
// import { HashLink } from 'react-router-hash-link'
function NavBar() {
  return (
    <div>
      <div>
        <Logo />
        {/* <HashLink smooth to="/#home">
          Home
        </HashLink>
        <HashLink smooth to="/#about">
          About
        </HashLink>
        <HashLink smooth to="/#projects">
          Experience
        </HashLink>
        <HashLink smooth to="/#contact">
          Projects
        </HashLink> */}
      </div>
      <div>
        <div>
          <SideBar />
        </div>
      </div>
    </div>
  )
}

export default NavBar
