import SectionHeader from './SectionHeader'
import { useState } from 'react'
import ListItem from './ListItem'

function Experience() {
  const experienceItems = [
    {
      id: 0,
      title: 'Texas Instruments',
      subTitle: 'Software Engineer',
      duration: 'Jul 2024 - Present',
      description: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et facere, rerum eum quod laborum distinctio quae, nam doloribus veniam itaque quos ipsam ad odit maiores fugit inventore facilis quidem.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et facere, rerum eum quod laborum distinctio quae, nam doloribus veniam itaque quos ipsam ad odit maiores fugit inventore facilis quidem.',
      ],
    },
    {
      id: 1,
      title: 'Ninajacart',
      subTitle: 'Software Engineer Intern',
      duration: 'Jan 2024 - Mar 2024',
      description: [
        'Built a content moderation dashboard with a Nest.js backend, React,js frontend, integrating Mastodon APIs for decentralized content review',
        'Implemented role-based access and moderation pipelines to support community-driven governance.',
      ],
    },
    {
      id: 2,
      title: 'Team Green Darbhanga',
      subTitle: 'Co-founder',
      duration: 'Sep 2020 - Sep 2023',
      description: [
        'Officia facilis, quos quasi voluptatem molestias dicta eveniet hic pariatur voluptas sequi error iste recusandae deleniti consectetur tempore perferendis delectus autem nostrum ullam facere nisi totam. Consequuntur saepe voluptatibus culpa.',
        'Officia facilis, quos quasi voluptatem molestias dicta eveniet hic pariatur voluptas sequi error iste recusandae deleniti consectetur tempore perferendis delectus autem nostrum ullam facere nisi totam. Consequuntur saepe voluptatibus culpa.',
      ],
    },
  ]
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div id="experience" className="min-h-screen w-full px-8 scroll-mt-20">
      <SectionHeader title="experience" />
      <div className="flex">
        <TabHeader
          items={experienceItems}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        <TabContent items={experienceItems} activeTab={activeTab} />
      </div>
    </div>
  )
}
export default Experience

function TabHeader({ items, activeTab, setActiveTab }) {
  return (
    <div className="flex flex-col gap-6 justify-evenly border-r border-light-navy mr-4 pr-6 text-xs">
      {items.map((item) => (
        <button
          key={item.id}
          className={`uppercase ${activeTab === item.id ? 'text-green ' : 'text-slate'} hover:cursor-pointer`}
          onClick={() => setActiveTab(item.id)}
        >
          {item.title}
        </button>
      ))}
    </div>
  )
}

function TabContent({ items, activeTab }) {
  return (
    <div className="flex gap-6 flex-col text-sm ml-6">
      <div className="text-lightest-slate text-xl font-bold">
        {/* Using the active index to select a particular data */}
        {items[activeTab].subTitle} @{' '}
        <span className="text-green">{items[activeTab].title}</span>
      </div>
      <div className="uppercase text-slate">{items[activeTab].duration}</div>
      <div className="flex flex-col gap-3">
        {items[activeTab].description.map((desc) => {
          return <ListItem text={desc} />
        })}
      </div>
    </div>
  )
}
