import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import NavbarIcons from './NavbarIcons';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize(); // Check initial width
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='pl-4 pr-4 h-16 flex items-center justify-between'>
      {/* Logo */}
      <div className='flex items-center justify-start'>
        <h1 className='text-4xl font-bold'>Martin's Movies</h1>
      </div>

      {/* Navigation or Hamburger Menu */}
      {isMobile ? (
        <div className='flex items-center justify-end'>
          <GiHamburgerMenu className='cursor-pointer' size={28}/>
        </div>
      ) : (
        <div className='hidden md:flex md:items-center md:justify-center'>
          <Navigation />
        </div>
      )}

      {/* Navbar Icons or Hamburger Menu */}
      {!isMobile ? (
        <div className='flex items-center justify-end'>
          <NavbarIcons />
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
