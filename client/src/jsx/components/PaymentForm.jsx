import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { removeFromCart } from '../redux/actions/cartActions';
import { calculateTotalPrice } from '../utils/calculateTotalPrice';
import SectionTitle from './SectionTitle';
import Button from './Button';
import Loading from './Loading';
import useWindowDimensions from '../utils/useWindowDimensions';

const PaymentForm = ({ promotion }) => {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cartReducer.cartProducts);
    const { width } = useWindowDimensions();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            'payment_intent_client_secret'
        );

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

        cart.map(product => {
            handleRemoveFromCart(product._id);
        });

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/checkout/summary',
            },
        });

        if (error.type === 'card_error' || error.type === 'validation_error') {
            setMessage(error.message);
            setIsLoading(false);
        } else {
            setMessage('An unexpected error occured.');
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
                {isLoading ? <Loading /> : <Button variant='checkout' title={`Zapłać: ${calculateTotalPrice(cart, promotion)}zł`} />}
            </div>
            {message && <div className='payment-form__message'>{message}</div>}
        </form>
    )
}

export default PaymentForm;