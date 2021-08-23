import React from 'react';
import Logo from './Logo.jsx';
import Search from './Search.jsx';
import Cart from './Cart.jsx';
import Menu from './Menu.jsx';

const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <Cart />
            <Menu />
            <Search />
        </header>
    )
};

export default Header;