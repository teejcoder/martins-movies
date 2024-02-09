import React from 'react';
import NavItem from './NavItem';

// Navigation component representing the navigation links in the navbar.
const Navigation = () => {
  return (
    // Navigation container
    <nav>
      {/* Navigation list */}
      <ul className='w-full h-full flex items-center justify-center text-base'>
        {/* Navigation items */}
        <NavItem title="Home" href="#" />
        <NavItem title="Pages" href="#" />
        <NavItem title="Movies & TV Shows" href="#" />
        <NavItem title="Blog" href="#" />
        {/* Contact Us link */}
        <li className='pl-4 pr-4'>
          <a href="#">
            <p className='text-base font-thin'>Contact Us</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
