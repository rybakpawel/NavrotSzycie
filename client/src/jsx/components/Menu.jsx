import React from 'react';
import bars from '../../assets/menu-bars.svg';

const Menu = () => {
    return (
        <nav className='menu'>
            <img
                src={bars}
                alt='menu'
                className />
            {/* <ul className='menu'>
                <li className='menu__item'>Strona główna</li>
                <li className='menu__item'>Produkty</li>
                <li className='menu__item'>Kreator</li>
                <li className='menu__item'>O mnie</li>
                <li className='menu__item'>Kontakt</li>
            </ul> */}
        </nav>
    )
};

export default Menu;