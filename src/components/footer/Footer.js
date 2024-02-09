import React from 'react';

const Footer = () => {
  return (
    <section className='w-full min-h-24 2xl:pl-96 2xl:pr-96 lg:h-24 px-4 lg:px-24 border-t border-gray-200 border-opacity-20 bg-footer text-white flex flex-col lg:flex-row justify-center lg:justify-between items-center'>

      <div className='flex items-center justify-center lg:justify-start mb-4 lg:mb-0'>
        <ul className='flex'>
          <li className='mx-2'>
            <a href="#"><p>Privacy & Cookies</p></a>
          </li>
          <li className='mx-2'>
            <a href="#"><p>Terms & Conditions</p></a>
          </li>
          <li className='mx-2'>
            <a href="#"><p>Legal Disclaimer</p></a>
          </li>
          <li className='mx-2'>
            <a href="#"><p>Community</p></a>
          </li>
        </ul>
      </div>

      <div className='flex items-center justify-center'>
        <p className='text-center lg:text-left'>All Right Reserved Martin's Movies</p>
      </div>

    </section>
  );
};

export default Footer;
