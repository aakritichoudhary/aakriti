import SectionHeader from "./SectionHeader";
import { useState } from "react";
import ListItem from "./ListItem";

function Experience() {
  const experienceItems = [
    {
      id: 0,
      title: "Texas Instruments",
      link: "https://www.ti.com/",
      subTitle: "Software Engineer",
      duration: "Jul 2024 - Present",
      description: [
        "Architected and built a full-stack AI governance platform enabling 300+ AI project teams to self-serve provisioning across Active Directory, LiteLLM, and Elasticsearch with transactional rollback, RBAC, and automated budget alerting.Reduced manual IT overhead by designing multi-step orchestration APIs, real-time spend analytics, and a Kubernetes-safe daily notification scheduler with Oracle-backed deduplication — cutting project onboarding from days to minutes.",
        "Developed an agentic RAG-based chatbot platform supporting multi-source data querying, scaled to 6000+ users and improving team efficiency by 50%.",
      ],
    },
    {
      id: 1,
      title: "Ninajacart",
      link: "https://ninjacart.com/",
      subTitle: "Software Engineer Intern",
      duration: "Jan 2024 - Mar 2024",
      description: [
        "Developed a full-stack content moderation platform using React and NestJS, enabling role-based workflows and decentralized content review via external API integrations.",
        "Delivered and successfully rolled out the product, contributing to improved moderation efficiency and receiving a full-time offer based on performance.",
      ],
    },
    {
      id: 2,
      title: "Team Green Darbhanga",
      link: "https://www.instagram.com/teamgreendbg?igsh=MXA5bnpxeXIzeWxzMg==",
      subTitle: "Co-founder",
      duration: "Sep 2019- Sep 2022",
      description: [
        "Co-founded and led a youth-driven initiative foxused on environmental awareness, organizing community activities and campaigns to drive local impact.",
        "Managed outreach and coordination efforts, building engagement and participation across volunteers and stakeholders.",
      ],
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div id="experience" className="min-h-[90vh] w-full px-8 scroll-mt-20">
      <SectionHeader title="experience" />
      <div className="flex md:flex-row flex-col">
        <TabHeader
          items={experienceItems}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        <TabContent items={experienceItems} activeTab={activeTab} />
      </div>
    </div>
  );
}
export default Experience;

function TabHeader({ items, activeTab, setActiveTab }) {
  return (
    <div className="flex md:flex-col gap-6 justify-evenly md:border-r border-light-navy mr-4 md:pr-6 text-xs pb-6 border-b">
      {items.map((item) => (
        <button
          key={item.id}
          className={`uppercase ${activeTab === item.id ? "text-green " : "text-slate"} hover:cursor-pointer`}
          onClick={() => setActiveTab(item.id)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}

function TabContent({ items, activeTab }) {
  return (
    <div className="flex gap-6 flex-col md:ml-6 mt-6 text-justify">
      <div className="text-lightest-slate text-xl font-bold">
        {/* Using the active index to select a particular data */}
        {items[activeTab].subTitle} @{" "}
        <a className="text-green" href={items[activeTab].link} target="_blank">{items[activeTab].title}</a>
      </div>
      <div className="uppercase text-slate">{items[activeTab].duration}</div>
      <div className="flex flex-col gap-3">
        {items[activeTab].description.map((desc) => {
          return <ListItem text={desc} />;
        })}
      </div>
    </div>
  );
}
