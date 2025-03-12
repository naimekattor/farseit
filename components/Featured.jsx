"use client"
import feature1 from '@/public/feature1.png';
import feature2 from '@/public/feature2.png';
import feature3 from '@/public/feature3.png';
import feature4 from '@/public/feature4.png';
import Image from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const cardData = [
  {
    image: feature1,
    heading: 'Innovative Solutions, Tailored for You',
    description: 'At farseIT, we thrive on innovation. Our team of experts stays at the forefront of technology to deliver web solutions that not only meet today standards but anticipate tomorrow needs. We tailor our solutions to your unique requirements, ensuring your digital presence is as distinctive as your business.',
  },
  {
    image: feature2,
    heading: 'Seamless E-Commerce Experiences',
    description: 'For e-commerce ventures, a strong online presence is paramount. farseIT crafts powerful, user-friendly e-commerce platforms that go beyond transactions—they create memorable customer journeys. From secure payment gateways to personalized shopping experiences, we optimize every detail to drive your online success.',
  },
  {
    image: feature3,
    heading: 'Efficient Private Company Operations',
    description: 'Company OperationsIn the competitive landscape of private companies, efficiency is key. farseIT develops customized web applications that streamline internal processes, boost collaboration, and provide actionable insights. Experience seamless operations with our tailored solutions.',
  },
  {
    image: feature4,
    heading: 'Streamlined School Management',
    description: 'Educational institutions face unique challenges, and farseIT is here to simplify them. Our school management systems are designed to streamline administrative tasks, enhance communication, and elevate overall efficiency. Transform your institution with our intuitive and comprehensive solutions.',
  },
];

export default function Featured() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      console.log('Cards are in view');
    }
  }, [inView]);

  return (
    <motion.div id='service' className='bg-[#111826] py-[80px]' ref={ref}>
      <div className='container mx-auto '>
        <h1 className='text-[36px] text-white font-bold text-center'>Our Featured Solutions</h1>
        <div className="min-h-screen flex items-center justify-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ delay: inView ? (index + 1) * 1 : 0, duration: 0.5 }}
              >
                <Image src={card.image} alt={card.heading} loading='lazy' className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{card.heading}</h2>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
