import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                    <li className='menu__list__item'>
                        <Link to='/'>Strona główna</Link>
                    </li>
                    <li className='menu__list__item'>
                        <Link to='products'>Produkty</Link>
                    </li>
                    <li className='menu__list__item'>
                        <Link to='creator'>Kreator</Link>
                    </li>
                    <li className='menu__list__item'>
                        <Link to='aboutme'>O mnie</Link>
                    </li>
                    <li className='menu__list__item'>
                        <Link to='contact'>Kontakt</Link>
                    </li>
                </ul>
            </nav>
        )
    };

    return (
        <nav className='menu menu--large'>
            <ul className='menu__list'>
                <li className='menu__list__item'>
                    <Link to='/'>Strona główna</Link>
                </li>
                <li className='menu__list__item'>
                    <Link to='products'>Produkty</Link>
                </li>
                <li className='menu__list__item'>
                    <Link to='creator'>Kreator</Link>
                </li>
                <li className='menu__list__item'>
                    <Link to='aboutme'>O mnie</Link>
                </li>
                <li className='menu__list__item'>
                    <Link to='contact'>Kontakt</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Menu;