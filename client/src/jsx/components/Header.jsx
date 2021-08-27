import React from 'react';
import { isMobileOnly, withOrientationChange } from 'react-device-detect';
import Logo from './Logo';
import Search from './Search';
import Cart from './Cart';
import Menu from './Menu';

const getSmallView = (isPortrait) => {
    return (
        <header className='header'>
            <Logo />
            {isPortrait ? null : <Search />}
            <div className='header__cart-menu-icons'>
                <Cart />
                <Menu />
            </div>
            {isPortrait ? <Search /> : null}
        </header>
    )
}

const getLargeView = () => {
    return (
        <header className='header'>
            <Logo />
            <Menu largeView={true} />
            <Search />
            <Cart />
        </header>
    )
}

let Header = ({ isPortrait }) => {
    return (
        <>
            {isMobileOnly ? getSmallView(isPortrait) : getLargeView()};
        </>
    )
};

Header = withOrientationChange(Header);

export default Header;