import { MdEmail } from 'react-icons/md'
import Typewriter from 'typewriter-effect'
import memeImg from '../assets/meme.jfif'
function Home() {
  return (
    <div id="home" className="flex flex-col gap-[120px] min-h-screen w-full items-center justify-center md:px-8 md:flex-row scroll-mt-20">
      {/* tudu: add cool animation here */}
      <div className="max-w-md flex-shrink-0"><img src={memeImg} className="shadow-xl/30 w-full h-auto min-w-[250px]"/></div>
      <div className='flex flex-col items-center md:items-start text-center md:text-left max-w-md gap-8'>
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
              wrapperClassName: 'font-code'
            }}
          />
        <div className="text-slate text-sm">
          I'm a software engineer and an artist based in India. I work on AI
          platforms and full-stack systems, focusing on tools that make complex
          technology easier to use.
        </div>
        <a
          href="mailto:aakriti1805@gmail.com"
          className="flex flex-row text-green items-center gap-2 justify-center border-solid border-2 rounded-md max-w-30 px-4 p-2 hover:bg-lightest-navy"
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
