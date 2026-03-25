import SectionHeader from "./SectionHeader";
import aakritiImg from "../assets/aakriti.jpg";
import ListItem from "./ListItem";

function About() {
  return (
    <div id="about" className="min-h-screen w-full px-6 md:px-8 scroll-mt-20">
      <SectionHeader title="about me" />

      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-[80px]">
        {/* Text */}
        <div className="w-full md:w-1/3 lg:w-2/3 flex flex-col gap-4 text-slate leading-7 text-justify order-2 md:order-1">
          <div>
            I am currently a <b>Software Engineer</b> at{" "}
            <a
              href="https://www.ti.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green font-bold"
            >
              Texas Instruments
            </a>
            , where I build scalable <b>full-stack platforms</b> powering
            enterprise applications, with a focus on <b>AI-driven systems</b>.
            Previously, I worked at{" "}
            <a
              href="https://ninjacart.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green font-bold"
            >
              Ninjacart
            </a>
            , developing a{" "}
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
            exploring something creative — because life shouldn't just compile,
            it should <i>flow.</i>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/3 max-w-md min-w-[250px] flex-shrink-0 self-start order-1 md:order-2 lg:order-3">
          <img
            src={aakritiImg}
            alt="Aakriti"
            className="shadow-xl/30 rounded-xl w-full h-auto shadow-lg transition duration-500 hover:scale-105"
          />
        </div>

        {/* Spacer for centering image on md */}
        <div className="hidden md:block md:w-1/3 lg:hidden order-3"></div>
      </div>
    </div>
  );
}

export default About;
