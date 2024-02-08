import React from 'react';
import { FaChevronDown } from "react-icons/fa6";

// NavItem component for individual navigation items
const NavItem = ({ title, href }) => {
  return (
    <li className='pl-4 pr-4'>
      <a href={href} className='flex items-center'>
        <p className='pr-2 text-base font-thin'>{title}</p>
        <FaChevronDown size={12}/>
      </a>
    </li>
  );
};


export default NavItem;