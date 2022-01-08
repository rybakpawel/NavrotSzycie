import React from 'react';
import { useParams } from 'react-router';
import Logo from '../components/Logo';
import AdminMenu from '../components/AdminMenu';
import AdminProduct from '../components/AdminProduct';
import AdminSection from '../components/AdminSection';
import AdminPromotion from '../components/AdminPromotion';
import user from '../../assets/icons/user.svg';

const AdminPage = () => {
    const { item, action } = useParams();

    const checkItem = item => {
        switch (item) {
            case 'product':
                return <AdminProduct action={action} />

            case 'section':
                return <AdminSection action={action} />

            case 'promotion':
                return <AdminPromotion action={action} />

            default:
                return <AdminMenu />
        }
    }

    return (
        <div className='admin'>
            <header className='admin__header'>
                <Logo admin={true} />
                <p className='admin__header__text'>Admin</p>
                <div className='admin__header__user'>
                    <img src={user} alt='uzytkownik' />
                    <p>Witaj, Patrycja</p>
                </div>
            </header>
            {checkItem(item)}
        </div>
    )
};

export default AdminPage;