import React from 'react';
import { Link } from 'react-router-dom';
import { isDesktop } from 'react-device-detect';
import AdminMenu from './AdminMenu';
import leftArrow from '../../assets/icons/left-arrow.svg';

const AdminAboutMe = () => {
    return (
        isDesktop ?
            <div className='admin__overall-wrapper'>
                <AdminMenu />
                <div>
                    ABOUT ME
                </div>
            </div>
            :
            <>
                <div className='admin__back-wrapper'>
                    <Link to='/admin'>
                        <img src={leftArrow} alt='wróć' className='admin__back' />
                    </Link>
                    <h1 className='admin__title'>O mnie</h1>
                </div>
                <div>
                    ABOUT ME
                </div>
            </>
    )
};

export default AdminAboutMe;