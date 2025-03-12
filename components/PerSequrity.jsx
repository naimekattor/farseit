import React from 'react';
import Image from 'next/image';
import lock from '@/public/LockMain.png'
import lockTop from '@/public/LockTop.png'
import sequrity from '@/public/sequrity.png'

const PerSecurity = () => {
  return (
    <div className="relative  w-full bg-[#040113] py-[100px]">

      {/* Title */}
      <h1 className="text-3xl font-semibold  z-10 text-white container mx-auto text-center p-2">Performance & Security</h1>
      {/* Overlay Content */}
      <div className="flex flex-col items-center justify-between text-center text-white bg-[url('/sequrity.png')] bg-cover bg-no-repeat container mx-auto bg-center h-[400px]">


        {/* Lock Icon (Replace with your icon or an SVG) */}
        <div className="flex flex-col items-center justify-center translate-y-[-50px] mt-36 absolute z-[20] w-auto h-auto">
          {/* You can replace this with an actual icon or SVG */}
          <div className="flex flex-col items-center w-auto h-auto cursor-pointer group">

            <Image src={lockTop} alt='lockTop' className='w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11 text-transparent' />


            <Image src={lock} alt='lock' className='w-[80px] h-[80px] z-10 text-transparent' />

          </div>


        </div>
      </div>
      {/* Subtitle */}
      <p className="text-3xl font-semibold  z-10 text-white container mx-auto text-center p-2">Secure your data with end-to-end encryption</p>

    </div>
  );
};

export default PerSecurity;