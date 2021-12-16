import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import DeliveryForm from './DeliveryForm';
import StripeContainer from './StripeContainer';
import Summary from './Summary';
import useWindowDimensions from '../utils/useWindowDimensions';

const Checkout = ({ step }) => {
    const { state } = useLocation();
    const { width } = useWindowDimensions();

    if (!state && step !== 'summary') {
        return <Redirect to='/cart' />;
    }

    const checkForm = (step) => {
        let page;
        switch (step) {
            case 'delivery':
                page = <DeliveryForm promotion={state.promotion} />;
                break;

            case 'payment':
                page = <StripeContainer delivery={state.formInputs} promotion={state.promotion} />
                break;

            case 'summary':
                page = <Summary />
                break;

            default:
                break;
        }
        return page;
    };

    return (
        <>
            {width >= 992 ? <ProgressBar step={step} /> : null}
            {checkForm(step)}
        </>
    )
}

export default Checkout;