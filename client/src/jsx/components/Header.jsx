import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <Link to='/cart'>
                    <div className='header__cart'>
                        <img
                            src={cart}
                            alt='koszyk'
                            className='cart-icon' />
                    </div>
                </Link>
                <Menu />
            </div>
            {isPortrait ? <Search /> : null}
        </header>
    )
}

const getLargeView = () => {
    const [isActiveSmallCart, setIsActiveSmallCart] = useState(false);

    const handleSmallCart = () => {
        setIsActiveSmallCart(!isActiveSmallCart);
    }

    return (
        <header className='header'>
            <Logo />
            <Menu largeView={true} />
            <Search />
            <div className='header__cart'
                onMouseEnter={handleSmallCart}
                onMouseLeave={handleSmallCart}>
                <img
                    src={cart}
                    alt='koszyk'
                    className='cart-icon' />
                {isActiveSmallCart ? <SmallCart /> : null}
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