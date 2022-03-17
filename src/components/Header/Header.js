import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome to my react world</h2>
            <nav className='menu-chart'>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about us">About us</a>
            </nav>

        </div>
    );
};

export default Header;