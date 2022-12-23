import React from 'react';
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <ul>
                <li><NavLink to='test'>Test</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/register'>Register</NavLink></li>
                <li><NavLink to='/forgotpass'>Forgot Pass</NavLink></li>
                <li><NavLink to='/createnewpass'>Create New Pass</NavLink></li>
                <li><NavLink to='/checkemail'>Forgot Password Check Email</NavLink></li>
            </ul>
        </>
    );
};

