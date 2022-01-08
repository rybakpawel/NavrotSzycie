import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminMenu = () => {
    const [activeItem, setActiveItem] = useState([]);

    const handleClick = e => {
        if (!activeItem.includes(e.currentTarget.id)) setActiveItem([...activeItem, e.currentTarget.id]);
        else setActiveItem(activeItem.filter((item) => item !== e.currentTarget.id));
    };

    const checkActive = (id) => {
        if (!activeItem.includes(id)) return false;
        else return true;
    };

    return (
        <div className='admin-menu'>
            <ul className='admin-menu__list'>
                <li className={`admin-menu__list__item ${checkActive('1') ? 'admin-menu__list__item--active' : ''}`}
                    onClick={handleClick}
                    id={1}>
                    Zarządzaj produktami
                    {checkActive('1') ?
                        <ul className='admin-menu__list'>
                            <li className='admin-menu__list__item admin-menu__list__item--second'>
                                <Link to='/admin/product/list'>Lista produktów</Link>
                            </li>
                            <li className='admin-menu__list__item admin-menu__list__item--second'>
                                <Link to='/admin/product/add'>Dodaj produkt</Link>
                            </li>
                            <li className='admin-menu__list__item admin-menu__list__item--second'>
                                <Link to='/admin/product/edit'>Edytuj produkt</Link>
                            </li>
                            <li className='admin-menu__list__item admin-menu__list__item--second'>
                                <Link to='/admin/product/delete'>Usuń produkt</Link>
                            </li>
                        </ul> : null}
                </li>
                <li className={`admin-menu__list__item ${checkActive('2') ? 'admin-menu__list__item--active' : ''}`}
                    onClick={handleClick}
                    id={2}>
                    Zarządzaj sekcjami
                    {checkActive('2') ?
                        <ul className='admin-menu__list'>
                            <li className='admin-menu__list__item admin-menu__list__item--second'>
                                <Link to='/admin/section/hero'>Edytuj 'Hero image'</Link>
                            </li>
                            <li className='admin-menu__list__item admin-menu__list__item--second'>
                                <Link to='/admin/section/aboutme'>Edytuj 'O mnie'</Link>
                            </li>
                        </ul> : null}
                </li>
                <li className={`admin-menu__list__item ${checkActive('3') ? 'admin-menu__list__item--active' : ''}`}
                    onClick={handleClick}
                    id={3}>
                    Zarządzaj promocjami
                    {checkActive('3') ?
                        <ul className='admin-menu__list'>
                            <li className='admin-menu__list__item admin-menu__list__item--second'>
                                <Link to='/admin/promotion/list'>Lista promocji</Link>
                            </li>
                            <li className='admin-menu__list__item admin-menu__list__item--second'>
                                <Link to='/admin/promotion/add'>Dodaj promocję</Link>
                            </li>
                            <li className='admin-menu__list__item admin-menu__list__item--second'>
                                <Link to='/admin/promotion/edit'>Edytuj promocję</Link>
                            </li>
                            <li className='admin-menu__list__item admin-menu__list__item--second'>
                                <Link to='/admin/promotion/delete'>Usuń promocję</Link>
                            </li>
                        </ul> : null}
                </li>
                <li className='admin-menu__list__item'>Wiadomości</li>
                <li className='admin-menu__list__item'>Wyloguj</li>
            </ul>
        </div>
    )
};

export default AdminMenu;