import React from 'react';
import Button from './Button';

const MenuDropDown = () => {
    return (
        <ul className='menu-drop-down'>
            <li className='menu-drop-down__item'>
                <Button
                    variant='menu'
                    title='Torby' />
            </li>
            <li className='menu-drop-down__item'>
                <Button
                    variant='menu'
                    title='Plecaki' />
            </li>
            <li className='menu-drop-down__item'>
                <Button
                    variant='menu'
                    title='Kominy' />
            </li>
        </ul>
    )
};

export default MenuDropDown;