import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/actions/authActions';

const AdminMenu = () => {
    const [activeItem, setActiveItem] = useState([]);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = e => {
        if (!activeItem.includes(e.currentTarget.id)) setActiveItem([...activeItem, e.currentTarget.id]);
        else setActiveItem(activeItem.filter((item) => item !== e.currentTarget.id));
    };

    const checkActive = (id) => {
        if (!activeItem.includes(id)) return false;
        else return true;
    };

    const handleLogout = () => {
        dispatch(logOut());
        history.push('/admin');
    }

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
                                <Link to='/admin/product/add'>Dodaj produkt</Link>
                            </li>
                            <li className='admin-menu__list__item admin-menu__list__item--second'>
                                <Link to='/admin/product/edit'>Edytuj produkt</Link>
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
                                <Link to='/admin/hero'>Edytuj 'Hero image'</Link>
                            </li>
                            <li className='admin-menu__list__item admin-menu__list__item--second'>
                                <Link to='/admin/aboutme'>Edytuj 'O mnie'</Link>
                            </li>
                        </ul> : null}
                </li>
                <li className='admin-menu__list__item'>
                    <Link to='/admin/promotion'>Zarządzaj promocjami</Link>
                </li>
                <li className={`admin-menu__list__item ${checkActive('3') ? 'admin-menu__list__item--active' : ''}`}
                    onClick={handleClick}
                    id={3}>
                    Zarządzaj zamówieniami
                    {checkActive('3') ?
                        <ul className='admin-menu__list'>
                            <li className='admin-menu__list__item admin-menu__list__item--second'>
                                <Link to='/admin/orders/add'>Dodaj zamówienie</Link>
                            </li>
                            <li className='admin-menu__list__item admin-menu__list__item--second'>
                                <Link to='/admin/orders'>Przeglądaj zamówienia</Link>
                            </li>
                        </ul> : null}
                </li>
                <li className='admin-menu__list__item'>
                    <Link to='/admin/messages'>Wiadomości</Link>
                </li>
                <li className='admin-menu__list__item' onClick={handleLogout}>Wyloguj</li>
            </ul>
        </div>
    )
};

export default AdminMenu;