import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { useSelector } from "react-redux";
import { isDesktop } from 'react-device-detect';
import { useDispatch } from 'react-redux';
import { loadUser, logOut } from '../redux/actions/authActions';
import Logo from '../components/Logo';
import SignIn from '../components/SignIn';
import AdminMenu from '../components/AdminMenu';
import AdminProduct from '../components/AdminProduct';
import AdminHero from '../components/AdminHero';
import AdminAboutMe from '../components/AdminAboutMe';
import AdminPromotion from '../components/AdminPromotion';
import Messages from '../components/Messages';
import user from '../../assets/icons/user.svg';

const AdminPage = () => {
    const { item, action } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const auth = useSelector((state) => state.authReducer.isAuthenticate);

    useEffect(() => {
        dispatch(loadUser())
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(logOut());
        history.push('/admin');
    }

    const checkItem = item => {
        switch (item) {
            case 'product':
                return <AdminProduct action={action} />

            case 'hero':
                return <AdminHero />

            case 'aboutme':
                return <AdminAboutMe />

            case 'promotion':
                return <AdminPromotion />

            case 'messages':
                return <Messages />

            default:
                return isDesktop ?
                    <div className='admin__overall-wrapper'>
                        <AdminMenu />
                        <h1 className='admin__welcome-text'>Centrum zarządzania treścią strony Navrot Szycie</h1>
                    </div>
                    : <AdminMenu />
        }
    }

    return (
        <div className='admin'>
            <header className='admin__header'>
                <Logo admin={true} />
                <p className='admin__header__text'>Admin</p>
                {auth ?
                    <div className='admin__header__user'>
                        <img src={user} alt='uzytkownik' />
                        <p onClick={handleLogout}>Wyloguj się</p>
                    </div> : null}
            </header>
            {auth ? checkItem(item) : <SignIn />}
        </div>
    )
};

export default AdminPage;