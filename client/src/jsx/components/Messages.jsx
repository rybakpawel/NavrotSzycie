import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isDesktop } from 'react-device-detect';
import AdminMenu from './AdminMenu';
import leftArrow from '../../assets/icons/left-arrow.svg';
import plus from '../../assets/icons/plus.svg';
import minus from '../../assets/icons/minus.svg';

const Messages = () => {
    const [messages, setMessages] = useState('');
    const [activeMessages, setActiveMessages] = useState('');

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch('http://localhost:5000/contact/messages');
        const data = await response.json();
        setMessages(data);
    }

    const handleShowMessage = (index) => {
        if (activeMessages === index) setActiveMessages('');
        else setActiveMessages(index);
    }

    const getMessages = () => {
        const messagesList = messages.map(message => {
            return (
                <>
                    <div className='messages__row' onClick={() => handleShowMessage(message._id)}>
                        <p className={`messages__row__email ${activeMessages === message._id ? 'messages__row__email--bold' : ''}`}>{message.email}</p>
                        <img src={activeMessages === message._id ? minus : plus}
                            alt={activeMessages === message._id ? 'Zwiń wiadomość' : 'Rozwiń wiadomość'}
                            className='messages__row__icon' />
                    </div>
                    <p className={`messages__row__message ${activeMessages === message._id ? '' : 'messages__row__message--inactive'}`}>{message.message}</p>
                </>
            )
        })

        return messagesList;
    }

    return (
        isDesktop ?
            <div className='admin__overall-wrapper'>
                <AdminMenu />
                <div className='messages'>
                    {messages ? getMessages() : null}
                </div>
            </div>
            :
            <>
                <div className='admin__back-wrapper'>
                    <Link to='/admin'>
                        <img src={leftArrow} alt='wróć' className='admin__back' />
                    </Link>
                    <h1 className='admin__title'>Wiadomości</h1>
                </div>
                <div className='messages'>
                    {messages ? getMessages() : null}
                </div>
            </>
    )
};

export default Messages;