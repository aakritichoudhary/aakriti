import SectionHeader from './SectionHeader'

function Experience() {
  const experienceItems = {
    TexasInstruments: {
      jobTitle: 'Software Engineer @',
      duration: 'July 2024 - Present',
      desc:[
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      ]
    },
    Ninjacart: {
      jobTitle: 'Software Engineer Intern @',
      duration: 'Jan 2024 - March 2024',
      desc:[
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
      ]
    }
  }
  return (
    <div id="experience" className='h-screen'>
      <SectionHeader title="experience" />
      <TabButtons experienceItems={Object.values(experienceItems)} activeTab={0} setActiveTab={() => {}} />
        <TabContent experienceItems={Object.values(experienceItems)} activeTab={0} />
      <div>
        {Object.keys(experienceItems).map((key) => {
          const item = experienceItems[key]
          return (
            <div key={key} className="mb-6 text-light-slate">
              <h3 className="text-xl font-bold ">{item.jobTitle}</h3>
              <p>{item.duration}</p>
              <ul className="list-disc list-inside mt-2">
                {item.desc.map((point, index) => (
                  <li key={index} >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experience
function TabButtons({experienceItems, activeTab, setActiveTab}) {
  return(
    <div>{experienceItems.map((item, index) => (
      <button
        key={index}
        className={`px-4 py-2 ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
        onClick={() => setActiveTab(index)}
      >
        {item.jobTitle}
      </button>
    ))}</div>
  )
}

function TabContent({experienceItems, activeTab}) {
  const item = experienceItems[activeTab]
  return(
    <div>
      <h3 className="text-xl font-bold">{item.jobTitle}</h3>
      <p>{item.duration}</p>
      <ul className="list-disc list-inside mt-2">
        {item.desc.map((point, index) => (
          <li key={index}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

