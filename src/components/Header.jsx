import React, { useState } from 'react';
import { LOGO_URL } from '../utils/constants';

export default () => {
    const [varValue, setvarValue] = useState("Login");
    return (
        <div>
            <img src={LOGO_URL} alt='res-logo'/>
            <ol>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Cart
                </li>
            </ol>
        </div>
    )
};



