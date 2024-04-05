import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import NavbarIcons from './NavbarIcons';
import { GiHamburgerMenu } from 'react-icons/gi';
import SearchBar from '../SearchBar';

// NavBar component representing the navigation bar of the page.
const NavBar = ({ setSearchTerm }) => {
  // State variables for mobile responsiveness and search/menu toggles
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect hook for handling window resize events
  useEffect(() => {
    // Function to handle resize events and update isMobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    handleResize();
    // Event listener for window resize
    window.addEventListener('resize', handleResize);
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Navigation bar container
    <nav className='h-16 pl-4 pr-4 w-full flex items-center justify-between'>
      {/* Logo */}
      <a href='/'>
        <img className='h-28' src='../assets/logo.svg'/>
      </a>

      {/* Conditional rendering for mobile */}
      {isMobile ? (
        <div className='flex items-center'>
          <GiHamburgerMenu className='mr-8' size={38} onClick={toggleMenu} />
          {isMenuOpen && (
            <div className="menu-popup">
              <SearchBar setSearchTerm={setSearchTerm} />
            </div>
          )}
        </div>
      ) : (
        <>
          <Navigation />
          <NavbarIcons setSearchTerm={setSearchTerm} />
        </>
      )}
    </nav>
  );
};

export default NavBar;
