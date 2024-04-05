import React from 'react';

const TitleBanner = () => {
  return (
    // Section container with background image and overlay
    <section style={{ position: 'relative', backgroundImage: `url('./assets/title-banner.png')`, backgroundSize: 'cover', backgroundPosition: 'center', }} className='w-full h-44 p-8 2xl:pl-96 2xl:pr-96 border flex justify-center items-center'>
      {/* Overlay with gradient background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(128,0,128,0.8), rgba(128,0,128,0.3), rgba(128,0,128,0.6))' }}></div>
      {/* Content container */}
      <div className='w-full z-50'>
        {/* Title */}
        <h2 className='text-white text-4xl mb-4 font-bold'>Martin's Movies</h2>
        {/* Navigation links */}
        <ul className='flex text-white font-bold'>
          <li><span className='pr-2'>Home</span></li>
          <li><span className='font-bold pr-2'>|</span></li>
          <li><span className='font-thin pl'>Martin's Movies</span></li>
        </ul>
      </div>
    </section>
  );
};

export default TitleBanner;
