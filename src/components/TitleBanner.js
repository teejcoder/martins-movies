import React from 'react';

const TitleBanner = () => {
  return (
    <section style={{ backgroundImage: `url('./assets/title-banner.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='w-full h-44 border flex justify-center items-center'>
      <div className='w-full'>
        <h2 className='text-white text-4xl mb-4 font-bold'>Martin's Movies</h2>
        <ul className='flex text-white font-bold'>
          <li className='pr-1'>Home</li>
          <li>|  Martin's Movies</li>
        </ul>
      </div>
    </section>
  );
};

export default TitleBanner;


// <div className='w-full h-full relative' >
// <div className='w-full h-full absolute inset-0 flex items-center justify-start pl-96 pr-96'>

//   <div className='absolute inset-0'></div>
// </div>
// </div>