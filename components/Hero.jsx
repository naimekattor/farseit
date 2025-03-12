"use client";
import React, { useEffect, useRef, useState } from 'react';
import asp from '@/public/Asp.png'
import next from '@/public/next.png'
import nestjs from '@/public/nestjs.png'
import postgre from '@/public/postgre.png'
import react from '@/public/react.png'
import Image from 'next/image';
import { motion } from 'framer-motion';
const Hero = () => {
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
    <div className='container mx-auto bg-[url("@/public/home.jpg")] bg-center bg-no-repeat bg-cover md:py-58 py-16'>
      <div className='flex md:flex-row flex-col-reverse  items-center md:justify-center justify-end'>
        <div className=' flex-1 p-8'>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className=' md:text-[72px] text-[48px] font-[800] text-[#4280ee]'>Farse IT</h1>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className=' text-[30px] my-[16px] text-white font-bold'>Find a Robust Sustainable E-platfrom</h3>
          </motion.div>
          <hr className='text-white ' />
          <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className='text-[18px] mt-[12px] text-white font-serif'>Elevating Your Digital Experience! 🚀
              FarseIT's innovative web solutions. Specializing in web development, we offer expertise and a client-centric approach for businesses. Partner with us for cutting-edge solutions in e-commerce, school management, and private company operations.</p>
          </motion.div>
        </div>
        <div className='grid place-items-center relative flex-1'>
          <motion.div
            className='md:w-[288px] w-[144px] md:h-[288px] h-[144px] bg-white rounded-full relative grid place-items-center z-10'
            animate={isVisible ? { rotate: 360 } : {}}
            transition={{ duration: 1, ease: "linear" }}
          >
            <div className='w-[96px] h-[96px] rounded-full bg-white   absolute z-10 grid transition-transform duration-1000 ease-in-out bg-border dark:bg-border place-items-center group md:transform-[rotate(0deg)_translate(144px)_rotate(0deg)] transform-[rotate(0deg)_translate(72px)_rotate(0deg)]' >
              <div className=' border-[5px] border-[#cacaca] grid place-items-center w-full h-full rounded-full'>
                <Image src={nestjs} alt='next' className=' w-[50px]' loading='lazy' />
              </div>
            </div>
            <div className='w-[96px] h-[96px] rounded-full bg-white   absolute z-10 grid transition-transform duration-1000 ease-in-out bg-border dark:bg-border place-items-center group md:transform-[rotate(90deg)_translate(144px)_rotate(-90deg)] transform-[rotate(90deg)_translate(72px)_rotate(-90deg)]' >
              <div className=' border-[5px] border-[#cacaca] grid place-items-center w-full h-full rounded-full'>
                <Image src={postgre} alt='next' className=' w-[50px]' loading='lazy' />
              </div>
            </div>
            <div className='w-[96px] h-[96px] rounded-full bg-white absolute '>
              <div className=' border-[5px] border-[#cacaca] grid place-items-center w-full h-full rounded-full'>
                <Image src={next} alt='next' className=' w-[50px]' loading='lazy' />
              </div>
            </div>
            <div className='w-[96px] h-[96px] rounded-full bg-white   absolute z-10 grid transition-transform duration-1000 ease-in-out bg-border dark:bg-border place-items-center group md:transform-[rotate(180deg)_translate(144px)_rotate(-180deg)] transform-[rotate(180deg)_translate(72px)_rotate(-180deg)]'>
              <div className=' border-[5px] border-[#cacaca] grid place-items-center w-full h-full rounded-full'>
                <Image src={asp} alt='next' className=' w-[50px]' loading='lazy' />
              </div>
            </div>
            <div className='w-[96px] h-[96px] rounded-full bg-white   absolute z-10 grid transition-transform duration-1000 ease-in-out bg-border dark:bg-border place-items-center group md:transform-[rotate(270deg)_translate(144px)_rotate(-270deg)] transform-[rotate(270deg)_translate(72px)_rotate(-270deg)]' >
              <div className=' border-[5px] border-[#cacaca] grid place-items-center w-full h-full rounded-full'>
                <Image src={react} alt='next' className=' w-[50px]' loading='lazy' />
              </div>
            </div>
          </motion.div>
          <motion.div
            className=' md:w-[208px]  w-[96px] md:h-[208px] h-[96px] bg-[#f5c343] rounded-full absolute translate-x-[20%] translate-y-[50%] translate-z-[0px]'
            animate={isVisible ? { translateX: '30%' } : {}}
            transition={{ duration: 1, ease: "linear" }}
          ></motion.div>
          <motion.div
            className=' md:w-[208px] w-[96px] md:h-[208px] h-[96px] bg-[#1f85e1] rounded-full absolute translate-x-[20%] translate-y-[-50%] translate-z-[0px]'
            animate={isVisible ? { translateX: '30%' } : {}}
            transition={{ duration: 1, ease: "linear" }}
          ></motion.div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;