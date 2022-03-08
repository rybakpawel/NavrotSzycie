import React from 'react';
import Button from './Button';

const DesignAd = () => {
    return (
        <section className='design-ad'>
            <h2 className='design-ad__text'>Masz pomysł na wzór? Napisz do mnie!</h2>
            <div className='design-ad__button-wrapper'>
                <Button
                    link='contact'
                    variant='design-ad'
                    title='Kontakt' />
            </div>
        </section>
    )
}

export default DesignAd;