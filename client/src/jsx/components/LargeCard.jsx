import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import example from '../../assets/images/example-bag.jpg';
import addToCartIcon from '../../assets/icons/add-to-cart.svg';

const LargeCard = ({ name, category, price }) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(category, name))
    };

    return (
        <div className='large-card'>
            <Link to={`/${category}/${name}`}>
                <img
                    src={example}
                    alt='produkt'
                    className='large-card__product-image' />
                <div className='large-card__informations'>
                    <h3 className='large-card__informations__name'>{name}</h3>
                    <h4 className='large-card__informations__price'>{price}zł</h4>
                </div>
            </Link>
            <img
                src={addToCartIcon}
                alt='dodaj'
                className='large-card__add-to-cart'
                onClick={handleAddToCart} />
        </div>
    )
};

export default LargeCard;