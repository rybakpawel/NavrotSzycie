import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { isDesktop } from 'react-device-detect';
import AdminMenu from './AdminMenu';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import leftArrow from '../../assets/icons/left-arrow.svg';

const AdminProduct = ({ action }) => {
    const [title, setTitle] = useState('');

    const checkAction = action => {
        switch (action) {
            case 'add':
                if (!title) setTitle('Dodaj produkt');
                return <AddProduct />

            case 'edit':
                if (!title) setTitle('Edytuj produkt');
                return <EditProduct />

            default:
                break;
        }
    };

    return (
        isDesktop ?
            <div className='admin__overall-wrapper'>
                <AdminMenu />
                {checkAction(action)}
            </div>
            :
            <>
                <div className='admin__back-wrapper'>
                    <Link to='/admin'>
                        <img src={leftArrow} alt='wróć' className='admin__back' />
                    </Link>
                    <h1 className='admin__title'>{title}</h1>
                </div>
                {checkAction(action)}
            </>
    )
};

export default AdminProduct;