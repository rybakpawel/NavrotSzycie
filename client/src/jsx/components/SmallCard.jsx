import React from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import example from '../../assets/images/example-bag.jpg';
import addToCartIcon from '../../assets/icons/add-to-cart.svg';

const SmallCard = ({ name, category, price }) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(category, name))
    };

    return (
        <div className='small-card'>
            <img
                src={example}
                alt='produkt'
                className='small-card__product-image' />
            <div className='small-card__name-price'>
                <h3 className='small-card__name-price__name'>{name}</h3>
                <h4 className='small-card__name-price__price'>{price}zł</h4>
            </div>
            <div className='small-card__buttons-wrapper'>
                <Button
                    link={`/${category}/${name}`}
                    variant='small'
                    title='Zobacz' />
                <img
                    src={addToCartIcon}
                    alt='dodaj'
                    className='small-card__buttons-wrapper__add-to-cart'
                    onClick={handleAddToCart} />
            </div>
        </div>
    )
}

export default SmallCard