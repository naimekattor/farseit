'use client'
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
const Experience = () => {
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
    <div id='projects' className="bg-[#1A202C] text-white py-16 px-8 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <h2 className="text-3xl font-semibold mb-6">Results You Can Trust</h2>
          <p className="text-lg mb-8">
            In today's fast-paced digital era, businesses require cutting-edge solutions to thrive. Our team of experts specializes in crafting bespoke IT solutions tailored to meet your unique needs. Whether it's streamlining operations, enhancing cybersecurity measures, or implementing advanced technologies, we deliver results you can rely on.
          </p>
          <div className="flex items-center mb-4">
            <div className="bg-[#4C51BF] rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span className="text-2xl font-semibold">1+</span>
            </div>
            <div>
              <h3 className="font-semibold">Years of Experience</h3>
              <p className="text-sm">Delivering reliable solutions since 2022.</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-[#4C51BF] rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <span className="text-2xl font-semibold">9+</span>
            </div>
            <div>
              <h3 className="font-semibold">Projects Done</h3>
              <p className="text-sm">Delivering quality solutions for diverse clients.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          ref={ref}
          initial={{ x: 100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <h2 className="text-3xl font-semibold mb-6">Delivering IT Solutions Globally</h2>
          <p className="text-lg mb-8">
            Our global reach enables us to provide top-notch IT solutions to businesses worldwide. We understand the diverse challenges faced by organizations across different industries and regions, and our expertise allows us to tailor our solutions to meet their specific needs.
          </p>
          <p className="text-lg">
            With a strong commitment to innovation and excellence, we stay ahead of the curve, leveraging the latest technologies and best practices to provide cutting-edge solutions that drive business growth and success.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;