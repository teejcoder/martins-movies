import React, { useState } from 'react';
import { HiOutlineViewList } from "react-icons/hi";
import { CgMenuGridR } from "react-icons/cg";
import OrderDropDown from './OrderDropDown';

const ListIcon = () => {
    const [selectedIcon, setSelectedIcon] = useState(false);

    function handleClick() {
        setSelectedIcon(!selectedIcon); // Toggle the value of selectedIcon
    };

  return (
    <section className='h-40 pt-16 flex items-center justify-between color-background'>

        <div className='flex'>
            <div onClick={handleClick} className='w-10 h-10 mr-2 rounded-xl flex items-center justify-center list-icon'>
                <HiOutlineViewList className='icon' color={'#999'} size={20}/>
            </div>
            <div className='w-10 h-10 bg-purple rounded-xl flex items-center justify-center list-icon'>
                <CgMenuGridR className='icon' color={'white'} size={20}/>
            </div>
        </div>

        <OrderDropDown/>
    </section>
  );
};

export default ListIcon;
