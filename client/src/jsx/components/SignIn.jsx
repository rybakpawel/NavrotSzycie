import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../redux/actions/authActions';
import Button from '../components/Button';

const SignIn = () => {
    const [form, setForm] = useState('');
    const [responseMessage, setResponseMessage] = useState({
        alert: '',
        success: null
    });

    const dispatch = useDispatch();

    const handleSubmitForm = (e) => {
        e.preventDefault();

        dispatch(signIn(form.email, form.password));
        setForm({
            email: '',
            password: ''
        });
    };

    const handleChangeInput = e => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    };

    return (
        <form className='sign-in'
            id='sign-in'
            onSubmit={handleSubmitForm}>
            <p className={`sign-in__response-message ${responseMessage.success ? 'sign-in__response-message--success' : ''}`}>{responseMessage.alert}</p>
            <div className='sign-in__data-wrapper'>
                <label className='sign-in__data-wrapper__label'>E-mail</label>
                <input className='sign-in__data-wrapper__input' type='email' name='email' onChange={(e) => handleChangeInput(e)} />
            </div>
            <div className='sign-in__data-wrapper'>
                <label className='sign-in__data-wrapper__label'>Hasło</label>
                <input className='sign-in__data-wrapper__input' type='password' name='password' onChange={(e) => handleChangeInput(e)} />
            </div>
            <div className='sign-in__button-wrapper'>
                <Button variant='submit' title='Zaloguj się' type='submit' form='sign-in' />
            </div>
        </form>
    )
};

export default SignIn;