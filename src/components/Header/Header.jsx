import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'


const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='link'>
                <a href="/shope">Shope</a>
                <a href="/order">Order</a>
                <a href="/about">About</a>
                <a href="/login">LogIn</a>
            </div>
        </nav>
    );
};

export default Header;