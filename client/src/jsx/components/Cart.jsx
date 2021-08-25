import React from 'react';
import cart from '../../assets/shopping-cart.svg'

const Cart = () => {
    return (
        <div className='cart'>
            <img
                src={cart}
                alt='koszyk'
                className='cart-icon' />
        </div>
    )
};

export default Cart;