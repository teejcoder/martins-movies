import React from 'react';
import BottomBannerRow from './BottomBannerRow';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram } from "react-icons/fa";

// BottomBanner component representing the bottom section of the page.
const BottomBanner = () => {
  return (
    // Container for the bottom banner section
    <section className='w-full p-5 lg:p-20 2xl:pl-96 2xl:pr-96 lg:flex bg-footer text-white'>

      {/* Row for logo and description */}
      <BottomBannerRow>
        {/* Heading for logo */}
        <h4 className='text-xl sm:text-2xl font-bold pb-4'>Martin's Movies</h4>
        {/* Description */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus, atque. Praesentium suscipit provident explicabo dignissimos nostrum numquam deserunt earum accusantium et fugit.
        </p>
      </BottomBannerRow>

      {/* Row for useful links */}
      <BottomBannerRow>
        {/* Heading for useful links */}
        <h4 className='text-xl sm:text-2xl font-bold pb-4'>Useful Links</h4>
        {/* List of useful links */}
        <ul className='leading-8'>
          {/* Each link */}
          <li><a href='#' className='transition-transform hover:translate-x-2 hover:bg-purple-500'>About Martin</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Forum</a></li>
          <li><a href='#'>My Account</a></li>
          <li><a href='#'>Watch List</a></li>
        </ul>
      </BottomBannerRow>

      {/* Row for latest news */}
      <BottomBannerRow>
        {/* Heading for latest news */}
        <h4 className='text-xl sm:text-2xl font-bold pb-4'>Latest News</h4>
        {/* List of latest news */}
        <ul className='leading-8'>
          {/* Each news item */}
          <li>
            <div className='flex flex-col'>
              <a href='#'>Blog Post 1</a>
              <span className='text-xs text-footerText'>JANUARY 13, 2018</span>
            </div>
          </li>
          <li>
            <div className='flex flex-col'>
              <a href='#'>Blog Post 2</a>
              <span className='text-xs text-footerText'>JANUARY 13, 2018</span>
            </div>
          </li>
          <li>
            <div className='flex flex-col'>
              <a href='#'>Blog Post 3</a>
              <span className='text-xs text-footerText'>JANUARY 13, 2018</span>
            </div>
          </li>
        </ul>
      </BottomBannerRow>

      {/* Row for social media icons */}
      <BottomBannerRow>
        {/* Heading for social media */}
        <h4 className='text-xl sm:text-2xl font-bold pb-4'>Follow Us</h4>
        {/* Description */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus, atque.
        </p>
        {/* Social media icons */}
        <div className='flex justify-evenly pt-4'>
          {/* Facebook */}
          <div className='rounded-full border border-gray-200 border-opacity-20 p-2'>
            <a href="#"><FaFacebookF size={16} /></a>
          </div>
          {/* Twitter */}
          <div className='rounded-full border border-gray-200 border-opacity-20 p-2'>
            <a href="#"><FaTwitter size={16} /></a>
          </div>
          {/* Google Plus */}
          <div className='rounded-full border border-gray-200 border-opacity-20 p-2'>
            <a href="#"><FaGooglePlusG size={16} /></a>
          </div>
          {/* Instagram */}
          <div className='rounded-full border border-gray-200 border-opacity-20 p-2'>
            <a href="#"><FaInstagram size={16} /></a>
          </div>
        </div>
      </BottomBannerRow>

    </section>
  );
};

export default BottomBanner;
