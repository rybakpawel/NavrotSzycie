import React, { useEffect, useState } from 'react';
import Button from './Button';

const ContactForm = () => {
    const [statusMessage, setStatusMessage] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await fetch('/contact');
        const data = await response.json();
        setStatusMessage(data);
    }

    if (statusMessage) console.log(statusMessage);

    return (
        <section className='contact-form'>
            <h2 className='contact-form__label'>Kontakt</h2>
            <form className='contact-form__form' action='http://localhost:5000/contact' method='POST' id='contactForm' >
                <input className='contact-form__form__email' type='email' name='email' placeholder='Twój e-mail' />
                <textarea className='contact-form__form__message' name='message' placeholder='Treść wiadomości'></textarea>
            </form>
            <Button variant='submit' title='Wyślij wiadomość' type='submit' form='contactForm' />
        </section>
    )
};

export default ContactForm