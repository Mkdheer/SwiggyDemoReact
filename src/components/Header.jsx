import React, { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';
import { Link } from 'react-router-dom';

export default () => {
    const isOnline = useOnlineStatus();
    return (
        <div className='flex justify-between m-2 shadow-lg shadow-gray-300'>
            <img className='w-24' src={LOGO_URL} alt='res-logo'/>
            {
                isOnline?<ol className='flex mx-4 p-8'>
                <li className='text-xl mx-2 scale-100 list-none hover:text-[orangered] hover:scale-110 cursor-pointer'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='text-xl mx-2 scale-100 list-none hover:text-[orangered] hover:scale-110 cursor-pointer'>
                    <Link to='/About'>About</Link>
                </li>
                <li className='text-xl mx-2 scale-100 list-none hover:text-[orangered] hover:scale-110 cursor-pointer'>
                <Link to='/Contact'>Contact</Link>
                </li>
                <li className='text-xl mx-2 scale-100 list-none hover:text-[orangered] hover:scale-110 cursor-pointer'>
                <Link to='/Cart'>Cart</Link>
                </li>
            </ol>
            : <p className='text-xl p-4 text-red-500 m-2 font-bold scale-100' >Opps..! you are offline</p>
            }
        </div>
    )
};



