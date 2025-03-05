import React, { useState } from 'react';
import { LOGO_URL } from '../utils/constants';

export default () => {
    const [varValue, setvarValue] = useState("Login");
    return (
        <div className='flex justify-between m-2 shadow-lg shadow-gray-300'>
            <img className='w-24' src={LOGO_URL} alt='res-logo'/>
            <ol className='flex mx-4 p-8'>
                <li className='text-xl mx-2 scale-100 list-none hover:text-[orangered] cursor-pointer'>
                    Home
                </li>
                <li className='text-xl mx-2 scale-100 list-none hover:text-[orangered] cursor-pointer'>
                    About
                </li>
                <li className='text-xl mx-2 scale-100 list-none hover:text-[orangered] cursor-pointer'>
                    Contact
                </li>
                <li className='text-xl mx-2 scale-100 list-none hover:text-[orangered] cursor-pointer'>
                    Cart
                </li>
            </ol>
        </div>
    )
};



