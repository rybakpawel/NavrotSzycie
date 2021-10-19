import React from 'react';
import SectionTitle from './SectionTitle';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section className='contact'>
            <SectionTitle title='Dane firmowe' />
            <div className='contact__company-data'>
                <p className='contact__company-data__data'><strong>Nazwa:</strong> Navrot Szycie Patrycja Nawrotkiewicz</p>
                <p className='contact__company-data__data'><strong>Adres:</strong> ul. Lubińska 46/8, 53-625 Wrocław</p>
                <p className='contact__company-data__data'><strong>NIP:</strong> 8971843751</p>
                <p className='contact__company-data__data'><strong>REGON:</strong> 368057207</p>
                <p className='contact__company-data__data'><strong>E-mail:</strong> navrot.szycie@gmail.com</p>
            </div>
            <ContactForm />
        </section>
    )
};

export default Contact;