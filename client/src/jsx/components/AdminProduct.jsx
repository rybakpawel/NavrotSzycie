import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct';
import leftArrow from '../../assets/icons/left-arrow.svg';

const AdminProduct = ({ action }) => {
    const [title, setTitle] = useState('');

    const checkAction = action => {
        switch (action) {
            case 'list':
                if (!title) setTitle('Lista produktów');
                return

            case 'add':
                if (!title) setTitle('Dodaj produkt');
                return <AddProduct />

            case 'edit':
                if (!title) setTitle('Edytuj produkt');
                return

            case 'delete':
                if (!title) setTitle('Usuń produkt');
                return

            default:
                break;
        }
    };

    return (
        <>
            <div className='admin__wrapper'>
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