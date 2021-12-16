import React from 'react';
import ok from '../../assets/icons/ok.png';

const Summary = () => {
    return (
        <div className='summary'>
            <h1 className='summary__thanks'>Dziękuję za zakup!</h1>
            <img src={ok} alt='sukces' className='summary__image' />
            <p className='summary__text'>Na Twój adres e-mail wysłano podsumowanie zamówienia.</p>
        </div>
    )
}

export default Summary;