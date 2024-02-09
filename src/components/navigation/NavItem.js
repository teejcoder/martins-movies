import React from 'react';
import { FaChevronDown } from "react-icons/fa6";

// NavItem component representing an individual navigation item with a title and a link
const NavItem = ({ title, href }) => {
  return (
    // Navigation item container
    <li className='pl-4 pr-4'>
      {/* Navigation item link */}
      <a href={href} className='flex items-center'>
        {/* Navigation item title */}
        <p className='pr-2 text-base font-thin'>{title}</p>
        {/* Chevron down icon */}
        <FaChevronDown size={12}/>
      </a>
    </li>
  );
};

export default NavItem;
