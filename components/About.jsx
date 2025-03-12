'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import about from '@/public/1.png'
import { motion } from 'framer-motion';
const About = () => {
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
    <div id='about' className='flex md:flex-row flex-col items-center bg-[#0b3252] py-[80px] md:px-[30px]'>

      <motion.div
        ref={ref}
        initial={{ x: 100, opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='md:w-1/2 w-full md:text-justify text-center md:p-8'>
        <h1 className='text-[45px] text-[#3d87dc] font-semibold text-center'>About Us</h1>
        <h1 className='text-[32px] text-white font-bold mb-6 '>🚀 Elevate Your Digital Presence with farseIT! 🌐</h1>
        <p className='text-[23px] text-white font-semibold leading-8 mb-4'>Discover innovation and expertise at the heart of farseIT's web development solutions. Tailored for your unique needs, we craft powerful e-commerce experiences, streamline school management, and optimize private company operations. At farseIT, we don‘t just build websites; we shape unforgettable digital experiences that propel your success. Explore our portfolio and embark on a journey to transform your vision into a vibrant digital reality. Ready to elevate your online presence? Let’s connect and make it happen! 🚀🌐</p>
      </motion.div>

      <div className='md:w-1/2 w-full flex justify-center '>
        <Image src={about} alt='about image' loading='lazy' />
      </div>

    </div>
  );
};

export default About;