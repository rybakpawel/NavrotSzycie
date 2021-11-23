import React from 'react';
import ProgressBar from '../components/ProgressBar';
import DeliveryForm from './DeliveryForm';
import useWindowDimensions from '../utils/useWindowDimensions';

const Checkout = () => {
    const { width } = useWindowDimensions();
    return (
        <>
            {width >= 992 ? <ProgressBar /> : null}
            <DeliveryForm />
        </>
    )
}

export default Checkout;