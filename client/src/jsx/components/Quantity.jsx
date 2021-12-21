import React from 'react';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../redux/actions/cartActions';
import plus from '../../assets/icons/plus.svg';
import minus from '../../assets/icons/minus.svg';

const Quantity = ({ id, quantity }) => {
    const dispatch = useDispatch();

    const handleChangeQuantity = (calculation) => {
        dispatch(changeQuantity(id, calculation));
    };

    return (
        <div className='quantity'>
            <img className={`quantity__change-quantity ${quantity < 2 ? 'quantity__change-quantity--grey' : ''}`} onClick={() => handleChangeQuantity('-')} src={minus} alt='odejmij' />
            <div className='quantity__number'>{quantity}</div>
            <img className={`quantity__change-quantity ${quantity > 9 ? 'quantity__change-quantity--grey' : ''}`} onClick={() => handleChangeQuantity('+')} src={plus} alt='dodaj' />
        </div>
    )
};

export default Quantity;