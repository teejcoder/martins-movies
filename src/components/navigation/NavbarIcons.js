import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { TiWorld } from "react-icons/ti";
import LoginButton from '../buttons/LoginButton';
import SearchBar from '../SearchBar';

const NavbarIcons = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className='flex'>
      <ul className='flex justify-center items-center'>
        {/* Search Bar */}
        {isSearchOpen && (
          <li className='pl-4 pr-4'>
            {/* Here you can add your search bar component */}
            <SearchBar/>
          </li>
        )}

        {/* Search Icon */}
        <li className='pl-4 pr-4 cursor-pointer' onClick={toggleSearch}>
          <IoSearch size={18} />
        </li>

        {/* World Icon */}
        <li className='pl-4 pr-4'>
          <TiWorld size={18}/>
        </li>

        {/* Login Button */}
        <li className='pl-4 pr-4'>
          <LoginButton />
        </li>
      </ul>
    </div>
  );
};

export default NavbarIcons;
