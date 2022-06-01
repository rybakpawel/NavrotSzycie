import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { calculateTotalPrice } from '../utils/calculateTotalPrice';
import SectionTitle from './SectionTitle';
import Button from './Button';
import Loading from './Loading';
import useWindowDimensions from '../utils/useWindowDimensions';

const PaymentForm = ({ promotion, delivery }) => {
    const stripe = useStripe();
    const elements = useElements();
    const cart = useSelector((state) => state.cartReducer.cartProducts);
    const { width } = useWindowDimensions();

    const [isLoading, setIsLoading] = useState(true);

    const deliveryCost = delivery.provider === 'pocztex' ? 15.99 : 13.99

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            'payment_intent_client_secret'
        );

        setTimeout(() => {
            setIsLoading(false)
        }, 2500)

        if (!clientSecret) {
            return;
        }
   
        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case 'succeeded':
                    setMessage('Płatność zakończona sukcesem!');
                    break;
                case 'processing':
                    setMessage('Płatność w toku.');
                    break;
                case 'requires_payment_method':
                    setMessage('Nie udało się dokonać płatności. Spróbuj ponownie.');
                    break;
                default:
                    setMessage('Coś poszło nie tak.');
                    break;
            }
        });
        
    }, [stripe]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${process.env.REACT_APP_CLIENT_ADRESS}checkout/summary`,
            },
        });

        if (error.type === 'card_error' || error.type === 'validation_error') {
            setIsLoading(false);
        }
    };
    
    return (
        <form className='payment-form' onSubmit={handleSubmit}>
            {width >= 992 ?
                <h1 className='payment-form__title'>Płatność</h1>
                :
                <SectionTitle title='Płatność' />
            }
            <div className="payment-form__form">
                <div className="payment-form__form__payment-element-wrapper">
                    <PaymentElement />
                </div>
                {isLoading ? <Loading /> : <Button variant='checkout' title={`Zapłać: ${(parseFloat(calculateTotalPrice(cart, promotion)) + parseFloat(deliveryCost)).toFixed(2)}zł`} />}
            </div>
        </form>
    )
}

export default PaymentForm;