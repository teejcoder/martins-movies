import React from 'react';
import { LuUser } from "react-icons/lu";

const LoginButton = () => {
  return (
    <button className='w-24 h-10 bg-purple text-sm text-white font-bold rounded flex items-center justify-center'>
        <LuUser />
        <p className='pl-2'>LOGIN</p>
    </button>
  );
};

export default LoginButton