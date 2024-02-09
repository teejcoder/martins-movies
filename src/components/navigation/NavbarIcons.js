import React from 'react';
import { TiWorld } from "react-icons/ti";
import LoginButton from '../buttons/LoginButton';
import SearchBar from '../SearchBar';

// NavbarIcons component representing icons in the navigation bar.
const NavbarIcons = ({ setSearchTerm }) => {
  return (
    // Container for navigation bar icons
    <div className='flex items-center'>
      {/* Search Bar */}
      <div className='pl-4 pr-4 relative'>
        <SearchBar setSearchTerm={setSearchTerm} />
      </div>

      {/* Globe Icon */}
      <div className='pl-4 pr-4'>
        <TiWorld size={18}/>
      </div>

      {/* Login Button */}
      <div className='pl-4 pr-4'>
        <LoginButton />
      </div>
    </div>
  );
};

export default NavbarIcons;
