'use client'
import Image from 'next/image';
import { useState } from 'react';
import logo from '@/public/logo.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
const Header = () => {
  const [activeLink, setActiveLink] = useState('HOME');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-[#001118] sticky top-0 z-50'>
      <div className='flex items-center gap-4 justify-between p-2 container mx-auto'>
        <div>
          <Image src={logo} alt='farse it' className='w-[144px] h-[59px]' />
        </div>
        <nav className='hidden md:block'>
          <ul className='flex items-center gap-4 text-white bg-[#101d26] rounded-full p-3 cursor-pointer text-[18px] font-semibold'>
            {['HOME', 'ABOUT', 'SERVICES', 'PROJECTS', 'CONTACT'].map((link) => (
              <li key={link} className='relative'>
                <Link href={`/${link === 'HOME' ? '' : `#${link.toLowerCase()}`}`} onClick={() => setActiveLink(link)}>
                  {link}
                </Link>
                {activeLink === link && (
                  <div className="dark:bg-[#f2f2f2] bg-white absolute rounded-sm -bottom-1.5 md:bottom-0 w-full h-1 shadow-[0_-2px_25px_2px_#fff]" style={{ transform: 'none', transformOrigin: '50% 50% 0px' }}></div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex items-center gap-4 text-white text-[20px] cursor-pointer'>
          <span><FaFacebook /></span>
          <span><FaTwitter /></span>
          <span><FaInstagram /></span>
          <span><FaLinkedin /></span>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-white'>
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className='md:hidden bg-[#ffffff] p-3'>
          <ul className='flex flex-col items-center gap-4 text-black text-[18px] font-semibold'>
            {['HOME', 'ABOUT', 'SERVICES', 'PROJECTS', 'CONTACT'].map((link) => (
              <li key={link} className='relative'>
                <Link href={`/${link === 'HOME' ? '' : `#${link.toLowerCase()}`}`} onClick={() => { setActiveLink(link); setIsMenuOpen(false); }}>
                  {link}
                </Link>
                {activeLink === link && (
                  <div className="dark:bg-[#f2f2f2] bg-white absolute rounded-sm -bottom-1.5 md:bottom-0 w-full h-1 shadow-[0_-2px_25px_2px_#fff]" style={{ transform: 'none', transformOrigin: '50% 50% 0px' }}></div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;