import React from 'react';
import cart from '../../assets/shopping-cart.svg'

const Cart = () => {
    return (
        <div className='cart'>
            <img src={cart} alt='koszyk' />
        </div>
    )
};

export default Cart;