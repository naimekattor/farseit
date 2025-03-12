'use client'
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdLocalPhone, MdFacebook, MdSend, MdLocationOn } from 'react-icons/md';
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log('Form data submitted:', formData);

    // Reset form fields after submission (optional)
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

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
    <div id='contact' className='bg-[#111826] py-[60px]'>
      <div className="container mx-auto  bg-gray-900  flex md:flex-row flex-col gap-12">
        <motion.div
          ref={ref}
          initial={{ x: 100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='grid place-items-center'>
          <div className="contact-info flex-1 bg-gray-800 p-10 flex flex-col rounded-md">
            <div>
              <h2 className="text-4xl font-semibold mb-5 text-white">Contact Us</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Have questions or need assistance? Feel free to reach out to us using the contact form or the
                information below.
              </p>
            </div>
            <div className="contact-details mb-4">
              <div className="flex items-center mb-4">
                <MdEmail className="mr-3 text-2xl text-white" />
                <span className="text-gray-300">Email: info@farseit.com</span>
              </div>
              <div className="flex items-center mb-4">
                <MdLocalPhone className="mr-3 text-3xl text-white" />
                <span className="text-gray-300">Phone: 01761402081</span>
              </div>
              <div className="flex items-center mb-2">

                <span className="text-white text-xl">Connect with us on social media:</span>
              </div>
            </div>
            <div className="social-icons flex items-center text-[#f8fafc] ">
              <a href="#" className="mr-5  hover:text-white">
                <MdFacebook size={24} />
              </a>
              <a href="#" className="mr-5  hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="mr-5  hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="mr-5  hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="contact-form flex-1 bg-gray-800 rounded-md p-10">
          <h2 className="text-[16px] tracking-wider leading-none font-semibold text-white">Get In Touch With Us</h2>
          <p className="text-gray-400 mt-2 mb-6">Use the form below to send us a message or ask any questions.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full  text-white border border-gray-600 rounded-md py-3 px-4 mb-5 focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full  text-white border border-gray-600 rounded-md py-3 px-4 mb-5 focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full  text-white border border-gray-600 rounded-md py-3 px-4 mb-8 resize-none focus:outline-none focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="bg-white hover:bg-blue-700 text-black flex items-center gap-4 py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
            >
              Send Message
              <MdSend className="w-4 h-4" size={24} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>

  );
};

export default Contact;