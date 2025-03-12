'use client'

// TestimonialCarousel.jsx
import React from 'react';
import Slider from 'react-slick';

const Testimonial = () => {
  const testimonials = [
    {
      text: 'Working with farse it to develop our school website has been a positive experience overall. The website serves as an effective communication platform between the school, students, and parents, which has greatly...',
      author: 'Shakila Pervin',
    },
    {
      text: 'Our experience with farse it in developing our school website has been mixed. While the website provides essential information about school activities and policies, there are areas where improvements could be made. we....',
      author: 'Afzal Khan',
    },
    {
      text: 'Purchasing an e-commerce website from Farse IT has been a fantastic experience. The user-friendly interface of the website made browsing through products effortless. I highly recommend Farse IT to anyone looki....',
      author: 'Mr. Kabir Hasan',
    },
  ];

  const settings = {
    dots: false, // You can add dots if you want
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Auto-slide every 5 seconds
    arrows: true, // Show navigation arrows
  };

  return (
    <div className="bg-[#1A202C] text-white py-16 px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-[#2D3748] rounded-lg p-6 h-full flex flex-col justify-between">
                <div>
                  <p className="text-lg mb-4">{testimonial.text}</p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;