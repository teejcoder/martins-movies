import React from 'react'
import Navigation from './Navigation'
import NavbarIcons from './NavbarIcons'

const NavBar = () => {
  return (
    <div className='h-16 pl-4 pr-4 flex items-center justify-between'>

      <div className='flex'>
        <h1 className='text-4xl font-bold'>Martin's Movies</h1>
      </div>

      <div className='p-2'>
        <Navigation />
      </div>

      <div className='p-2'>
        <NavbarIcons />
      </div>
    </div>
  );
};

export default NavBar