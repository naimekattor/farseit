import Image from 'next/image';
import React from 'react';
import help from '@/public/help.png'
const Help = () => {
  return (
    <div className='bg-[#1f2936] p-8'>
      <div className="bg-[#111826] text-white  relative container mx-auto">
        <div className=" flex items-center justify-center p-4">
          {/* Left Section (Text) */}
          <div className=" ">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3db0e1]">
              Ready to Start the Journey with Farse IT?
            </h2>
            <p className="text-lg md:text-[35px] mt-[8px] font-bold">
              How can we help you?
            </p>

          </div>

          {/* Right Section (Image) */}
          <div className=" lg:block lg:w-1/2 ">
            <div className="relative flex justify-center">
              <Image
                src={help}
                alt="Farse IT Illustration"
                loading='lazy'
                className="w-[400px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Help;