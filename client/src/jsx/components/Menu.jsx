import React, { useState } from 'react';
import bars from '../../assets/icons/menu-bars.svg';
import close from '../../assets/icons/close.svg';

const Menu = ({ largeView }) => {
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const handleMenuBars = () => {
        setIsActiveMenu(!isActiveMenu);
    };

    if (!largeView) {
        return (
            <nav className='menu'>
                <img
                    src={bars}
                    alt='menu'
                    className='menu__bars-icon'
                    onClick={handleMenuBars} />
                <ul className={`menu__list ${isActiveMenu ? 'menu__list--active' : ''}`}>
                    <img
                        src={close}
                        alt='zamknij'
                        className='menu__list__close'
                        onClick={handleMenuBars} />
                    <li className='menu__list__item'><a href="">Strona główna</a></li>
                    <li className='menu__list__item'><a href="">Produkty</a></li>
                    <li className='menu__list__item'><a href="">Kreator</a></li>
                    <li className='menu__list__item'><a href="">O mnie</a></li>
                    <li className='menu__list__item'><a href="">Kontakt</a></li>
                </ul>
            </nav>
        )
    };

    return (
        <nav className='menu menu--large'>
            <ul className='menu__list'>
                <li className='menu__list__item'><a href="">Strona główna</a></li>
                <li className='menu__list__item'><a href="">Produkty</a></li>
                <li className='menu__list__item'><a href="">Kreator</a></li>
                <li className='menu__list__item'><a href="">O mnie</a></li>
                <li className='menu__list__item'><a href="">Kontakt</a></li>
            </ul>
        </nav>
    )
};

export default Menu;