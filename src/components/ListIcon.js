import React, { useState } from 'react';
import { HiOutlineViewList } from "react-icons/hi";
import { CgMenuGridR } from "react-icons/cg";
import OrderDropDown from './OrderDropDown';

const ListIcon = () => {
    const [selectedIcon, setSelectedIcon] = useState(false);

    // Function to handle click event and toggle the selectedIcon state
    function handleClick() {
        setSelectedIcon(!selectedIcon);
    };

  return (
    // Section container for list icons and order dropdown
    <section className='h-40 mb-14 lg:mb-8 pt-16 pb-10 md:flex items-center justify-between color-background'>

        {/* Container for list icons */}
        <div className='flex mb-6 lg:mb-2'>
            {/* List view icon */}
            <div onClick={handleClick} className='w-8 h-8 mr-4 rounded-xl flex items-center justify-center list-icon'>
                <HiOutlineViewList className='icon' color={'#999'} size={20}/>
            </div>
            {/* Grid view icon */}
            <div className='w-8 h-8 mb-2 md:mb-0 bg-purple rounded-xl flex items-center justify-center list-icon'>
                <CgMenuGridR className='icon' color={'white'} size={20}/>
            </div>
        </div>

        {/* Order dropdown component */}
        <OrderDropDown/>
    </section>
  );
};

export default ListIcon;
