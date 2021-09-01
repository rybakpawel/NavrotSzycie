import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const DesignAd = () => {
    return (
        <section className='design-ad'>
            <h2 className='design-ad__text'>Zaprojektuj swój unikalny produkt!</h2>
            <div className='design-ad__button-wrapper'>
                <Link to='creator'>
                    <Button
                        variant='design-ad'
                        title='Dowiedz się więcej' />
                </Link>
            </div>
        </section>
    )
}

export default DesignAd;