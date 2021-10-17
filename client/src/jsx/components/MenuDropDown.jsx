import React from 'react';
import { Link } from 'react-router-dom';

const MenuDropDown = () => {
    return (
        <ul className='menu-drop-down'>
            <li className='menu-drop-down__item'>
                <Link to='/torby'>Torby</Link>
            </li>
            <li className='menu-drop-down__item'>
                <Link to='/plecaki'>Plecaki</Link>
            </li>
            <li className='menu-drop-down__item'>
                <Link to='/kominy'>Kominy</Link>
            </li>
        </ul>
    )
};

export default MenuDropDown;