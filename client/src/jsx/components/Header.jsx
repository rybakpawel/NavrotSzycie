import React from 'react';
import { isMobileOnly, withOrientationChange } from 'react-device-detect';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import SmallCart from './SmallCart';
import cart from '../../assets/icons/shopping-cart.svg';

const getSmallView = (isPortrait) => {
    return (
        <header className='header'>
            <Logo />
            {isPortrait ? null : <Search />}
            <div className='header__cart-menu-icons'>
                <div className='header__cart'>
                    <img
                        src={cart}
                        alt='koszyk'
                        className='cart-icon' />
                </div>
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
            <div className='header__cart'>
                <img
                    src={cart}
                    alt='koszyk'
                    className='cart-icon' />
                <SmallCart />
            </div>
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