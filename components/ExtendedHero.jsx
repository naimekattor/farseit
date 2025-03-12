'use client'
import React, { useEffect, useRef, useState } from 'react';
import { SiDotnet, SiNestjs, SiPhp, SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiBootstrap, SiTailwindcss, SiArangodb, SiMysql, SiPostgresql, SiApachekafka, SiWordpress, SiJetbrains } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa6";
import { motion } from 'framer-motion';
const techName = ['Frontend', 'Backend', 'Database', 'CMS', 'Tools'];
const tech = [{
  category: 'Frontend',
  title: 'Front-End Prowess',
  des: 'Our skilled front-end team excels in building modern, responsive, and interactive user interfaces using the latest frameworks and best practices.',
  Icon: [SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiBootstrap, SiTailwindcss],
},
{
  category: 'Backend',
  title: 'Robust Back-End Solutions',
  des: 'Our back-end experts specialize in developing secure, scalable, and high-performance server-side applications tailored to your needs.',
  Icon: [SiDotnet, SiNestjs, SiPhp, TbBrandCSharp],
},
{
  category: 'Database',
  title: 'Data Management Mastery',
  des: 'We leverage both relational and NoSQL databases to efficiently store, manage, and retrieve data for our clients applications.',
  Icon: [SiArangodb, SiMysql, SiPostgresql, SiApachekafka],
},
{
  category: 'CMS',
  title: 'Content Creation Simplified',
  des: 'Our team is well-versed in popular content management systems, enabling seamless content creation, management, and publishing.',
  Icon: [SiWordpress],
},
{
  category: 'Tools',
  title: 'Streamlined Development Cycles',
  des: 'We utilize industry-standard tools and automation to enhance collaboration, optimize processes, and ensure efficient development workflows.',
  Icon: [VscVscode, VscVscode, SiJetbrains, FaGithub],
},
]
const ExtendedHero = () => {
  const [techItems, setTechItems] = useState(tech);
  const [category, setCategory] = useState('Frontend');
  const handleTech = (techName) => {
    const updatedTech = tech.filter((tech) => tech.category === techName);
    setTechItems(updatedTech)
    setCategory(techName);
    console.log(category, techName);

  }

  useEffect(() => {

    setTechItems(tech.filter((item) => item.category === 'Frontend'))


  }, [])


  // For animation
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div className='container mx-auto px-40 bg-[url("@/public/aa.jpg")] pb-8 bg-cover bg-no-repeat bg-center'>
      <h2 className='text-xl leading-7 text-white pb-6 pt-8'>We harness the essence of Web 3.0 and emerging technologies to architect inventive, intelligent, and sustainable web development solutions and services. As a leading IT service provider and software company, our forte lies in ideation, skillfully connecting the dots to shape a more advanced and audacious digital future.</h2>
      <motion.div
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <ul className='grid grid-cols-5 rounded-md p-2 gap-4 justify-between bg-[#111826] text-white'>
            {
              techName.map((name) => (
                <li key={name} onClick={() => handleTech(name)} className={`${category === name ? 'bg-[#1f2937]' : ''} inline-flex items-center justify-center px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap`}>{name}</li>
              ))
            }
          </ul>

        </div>
        <div className='bg-[#1f2937] p-[24px] mt-4 rounded-md '>
          {
            techItems.map((tech) => (
              <div key={tech.title}>
                <h1 className='text-[16px] font-semibold text-white'>{tech.title}
                </h1>
                <p className='text-[14px] text-[#7c8b9c]'>{tech.des}</p>
                <div className='flex  gap-4 items-center text-7xl flex-wrap mt-[24px] text-white '>
                  {
                    tech.Icon.map((IconItem, index) => (

                      <span key={index} className="p-2 text-white rounded-lg">
                        < IconItem />
                      </span>


                    ))

                  }

                </div>
              </div>
            ))
          }
        </div>
      </motion.div>

    </div>
  );
};

export default ExtendedHero;