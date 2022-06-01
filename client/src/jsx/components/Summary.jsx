import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';
import ok from '../../assets/icons/ok.png';

const Summary = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer.cartProducts);

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    useEffect(() => {
        cart.map(product => {
            handleRemoveFromCart(product._id);
            fetch(`${process.env.REACT_APP_SERVER_ADRESS}products/edit/quantity/${product._id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
        });
    }, []);

    useEffect(() => {
        
    })

    return (
        <div className='summary'>
            <h1 className='summary__thanks'>Dziękuję za zakup!</h1>
            <img src={ok} alt='sukces' className='summary__image' />
            <p className='summary__text'>Na Twój adres e-mail wysłano podsumowanie zamówienia.</p>
        </div>
    )
}

export default Summary;