import React from 'react';
import Button from './Button';

const ContactForm = () => {
    return (
        <section className='contact-form'>
            <h2 className='contact-form__label'>Kontakt</h2>
            <form className='contact-form__form' action="" >
                <input className='contact-form__form__email' type='email' placeholder='Twój e-mail' />
                <textarea className='contact-form__form__message' name='message' id="" placeholder='Treść wiadomości'></textarea>
            </form>
            <Button variant='submit' title='Wyślij wiadomość' />
        </section>
    )
};

export default ContactForm