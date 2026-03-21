import { MdEmail } from 'react-icons/md'
import Typewriter from 'typewriter-effect'

function Home() {
  return (
    <div id="home" className="flex gap-8 scroll-mt-20">
      {/* tudu: add cool animation here */}
      <div className="text-2xl">Some cool animation</div>
      <div>
        <div>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  '<span style="font-size: 3rem; color: #ccd6f6">hi, <span style="color: #64ffda; font-weight: 600">aakriti</span> here.</span>',
                )
                .start()
            }}
            options={{
              cursorClassName: 'text-green text-5xl animate-blink',
            }}
          />
        </div>
        <div className="text-slate text-sm my-3 mb-3">
          I'm a software engineer and an artist based in India. I work on AI
          platforms and full-stack systems, focusing on tools that make complex
          technology easier to use.
        </div>
        <a
          href="mailto:aakriti1805@gmail.com"
          className="flex flex-row text-green items-center gap-2 justify-center border-solid border-2 rounded-md max-w-25 p-1 py-2 hover:bg-lightest-navy"
        >
          <span>
            <MdEmail />
          </span>
          Say hi!
        </a>
      </div>
    </div>
  )
}
export default Home
