import SectionHeader from './SectionHeader'
import aakritiImg from '../assets/aakriti.jpg'
import ListItem from './ListItem'
function About() {
  return (
    <div
      id="about"
      className="min-h-screen w-full items-center justify-center px-8 scroll-mt-20"
    >
      <SectionHeader title="about me" />
      <div className="flex gap-8">
        <div className="flex flex-col gap-4 text-slate">
          <div className="leading-8">
            I am currently a <b>Software Engineer</b> at{' '}
            <a
              href="https://www.ti.com/"
              target="_blank"
              className="text-green font-bold"
            >
              Texas Instruments
            </a>
            , where I build scalable <b>full-stack platforms </b>- powering
            enterprise applications, with a focus on <b>AI-driven systems</b>.
            Previously, I worked at{' '}
            <a
              href="https://ninjacart.com/"
              target="_blank"
              className="text-green font-bold"
            >
              Ninjacart
            </a>
            , developing a{' '}
            <b>
              full-stack content moderation platform with role-based workflows
            </b>
            .
          </div>

          <div>Here are some technologies I have been working with:</div>
          <div className="flex gap-8">
            <div>
              <ListItem text="Node.js" />
              <ListItem text="React.js" />
              <ListItem text="Javascript ES6+" />
            </div>
            <div>
              <ListItem text="TypeScript" />
              <ListItem text="Java" />
              <ListItem text="Python" />
            </div>
          </div>
          <div>
            Outside of work, you'll probably find me painting, dancing, or
            exploring something creative - because life shouldn't just compile,
            it should <i>flow.</i>
          </div>
        </div>
        <div className="max-w-md hidden md:block">
          <img src={aakritiImg} className="rounded-xl w-full h-auto" />
        </div>
      </div>
    </div>
  )
}
export default About
