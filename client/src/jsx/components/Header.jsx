import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isMobileOnly, withOrientationChange } from 'react-device-detect';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';
import SmallCart from './SmallCart';
import cart from '../../assets/icons/shopping-cart.svg';

const getSmallView = (isPortrait, cartLength) => {
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
                        {cartLength ?
                            <div className='header__cart__quantity'>
                                <p>{cartLength}</p>
                            </div> : null}
                    </div>
                </Link>
                <Menu />
            </div>
            {isPortrait ? <Search /> : null}
        </header>
    )
}

const getLargeView = (cartLength) => {
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
                {cartLength ?
                    <div className='header__cart__quantity'>
                        <p>{cartLength}</p>
                    </div> : null}
                {isActiveSmallCart ? <SmallCart /> : null}
            </div>
        </header>
    )
}

let Header = ({ isPortrait }) => {
    const cart = useSelector((state) => state.cartReducer.cartProducts);

    return (
        <>
            {isMobileOnly ? getSmallView(isPortrait, cart.length) : getLargeView(cart.length)}
        </>
    )
};

Header = withOrientationChange(Header);

export default Header;