import Logo from "./Logo";
import SideBar from "./SideBar";

function NavBar() {
  return (
    <div className="flex flex-row justify-evenly items-center py-4 gap-10 fixed top-0 w-full bg-navy z-1030 right-0 text-sm">
      <div className="flex flex-row justify-around items-center gap-8">
        <Logo/>
        <div className="md:flex flex-row text-lightest-slate text-md font-bold gap-4 hidden">
          <a href="#home" className="hover:text-green">
            Home
          </a>
          <a href="#about" className="hover:text-green">
            About
          </a>
          <a href="#experience" className="hover:text-green">
            Experience
          </a>
          <a href="#projects" className="hover:text-green">
            Projects
          </a>
        </div>
      </div>

      <SideBar />
    </div>
  );
}

export default NavBar;
