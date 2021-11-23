import React, { useState } from 'react';
import Button from './Button';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState(null);

    const handleSubmitForm = e => {
        e.preventDefault();
        const form = { email, message };
        setEmail('');
        setMessage('');

        fetch('http://localhost:5000/contact', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(data => setResponseMessage(data.message))
    };

    return (
        <section className='contact-form'>
            <h2 className='contact-form__label'>Kontakt</h2>
            <p className='contact-form__response-message'>{responseMessage}</p>
            <form className='contact-form__form' id='contactForm' onSubmit={handleSubmitForm}>
                <input
                    className='contact-form__form__email'
                    type='email'
                    name='email'
                    value={email}
                    placeholder='Twój e-mail'
                    onChange={e => setEmail(e.target.value)} />
                <textarea
                    className='contact-form__form__message'
                    name='message'
                    value={message}
                    placeholder='Treść wiadomości'
                    onChange={e => setMessage(e.target.value)}>
                </textarea>
            </form>
            <Button variant='submit' title='Wyślij wiadomość' type='submit' form='contactForm' />
        </section>
    )
};

export default ContactForm