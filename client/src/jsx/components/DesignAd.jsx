import React from 'react';
import Button from './Button';

const DesignAd = () => {
    return (
        <section className='design-ad'>
            <h2 className='design-ad__text'>Zaprojektuj swój unikalny produkt!</h2>
            <div className='design-ad__button-wrapper'>
                <Button
                    link='creator'
                    variant='design-ad'
                    title='Dowiedz się więcej' />
            </div>
        </section>
    )
}

export default DesignAd;