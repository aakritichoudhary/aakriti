import { MdEmail } from 'react-icons/md'
function Home() {
  return (
    <div id="home" className='flex gap-8 scroll-mt-20'>
      <div className="text-2xl">image aaye idhar</div>
      <div>
        <div>
          hi, <b>aakriti</b> here.
        </div>
        <div>
          I'm a software engineer based in Bangalore, India. I work on AI
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
