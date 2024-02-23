"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
 {
  title: "Skills",
  id: "skills",
  content: (
   <ul className="list-disc pl-2">
    <li>Next.Js</li>
    <li>React.js</li>
    <li>HTML 5</li>
    <li>CSS3</li>
    <li>JavaScript</li>
    <li>Bootstrap</li>
   </ul>
  ),
 },
 {
  title: "Education",
  id: "education",
  content: (
   <ul className="list-disc pl-2">
    <li>Diploma In Interior Designer</li>
    <li>Hsc</li>
   </ul>
  ),
 },
 {
  title: "Certifications",
  id: "certifications",
  content: (
   <ul className="list-disc pl-2">
    <li>Front-End Web Development Course</li>
    <li>JavaScript & jQuery - Certification Course</li>
    <li>photography-photoshop-course</li>
   </ul>
  ),
 },
];

const AboutSection = () => {
 const [tab, setTab] = useState("skills");
 const [isPending, startTransition] = useTransition();

 const handleTabChange = (id) => {
  startTransition(() => {
   setTab(id);
  });
 }
 return (
  <section className='text-white'>
   <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
    <Image src="/images/about-image.png" width={500} height={500} alt='About-img' priority={false} />

    <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
     <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
     <p className='text-base lg:text-lg'>
      Innovative Front End Developer with 2 year experience building and maintaining responsive websites in
      the recruiting industry. Proficient in HTML5, CSS3, JavaScript plus modern libraries and frameworks.
      Passionate about usability and possess working knowledge of Adobe Photoshop.
     </p>
     <div className='flex flex-row justify-start mt-8'>
      <TabButton
       selectTab={() => handleTabChange("skills")}
       active={tab === "skills"}
      >
       {" "}
       Skills{" "}
      </TabButton>


      <TabButton
       selectTab={() => handleTabChange("education")}
       active={tab === "education"}
      >
       {" "}
       Education{" "}
      </TabButton>
      <TabButton
       selectTab={() => handleTabChange("certifications")}
       active={tab === "certifications"}
      >
       {" "}
       Certifications{" "}
      </TabButton>
     </div>
     <div className="mt-8">
      {TAB_DATA.find((t) => t.id === tab).content}
     </div>
    </div>
   </div>
  </section>
 )
}

export default AboutSection