import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = 'pk_test_51JzgkOAilfEJpBjvqaH91ZjVfk07tUUwekop2UgwFOmW8RYZ6vphxK4Fa2gMCN13xOlaXcJ5UXeqvcvjsXyyTUwq005uuQmWJo';
const stripePromise = loadStripe(PUBLIC_KEY);

const StripeContainer = ({ delivery, promotion }) => {
    const cart = useSelector((state) => state.cartReducer.cartProducts);

    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: cart,
                delivery,
                promotion
            }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const options = {
        clientSecret,
        appearance: {
            theme: 'stripe',
            variables: {
                fontFamily: ' "Questrial", sans-serif',
                borderRadius: '0px',
                colorPrimary: '#555',
                colorText: '#555',
            },
        }
    }

    return (
        <>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <PaymentForm promotion={promotion} />
                </Elements>
            )}
        </>
    )
}

export default StripeContainer;