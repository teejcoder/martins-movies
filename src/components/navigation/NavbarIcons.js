import React from 'react';
import { IoSearch } from "react-icons/io5";
import { TiWorld } from "react-icons/ti";
import LoginButton from '../buttons/LoginButton';

const NavbarIcons = () => {
  return (
    <div className='flex'>
        <ul className='flex justify-center items-center'>            
            <li className='pl-4 pr-4'>
                <IoSearch size={18} />
            </li>
            <li className='pl-4 pr-4'>
                <TiWorld size={18}/>
            </li>
            <li className='pl-4 pr-4'>
                <LoginButton />
            </li>
        </ul>
    </div>
  );
};

export default NavbarIcons;