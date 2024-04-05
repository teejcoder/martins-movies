import React from 'react';
import { FaChevronDown } from "react-icons/fa6";

// NavItem component representing an individual navigation item with a title and a link
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
