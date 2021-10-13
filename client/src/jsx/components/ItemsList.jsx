import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isDesktop, isTablet, withOrientationChange } from 'react-device-detect';
import { getNewProducts } from '../redux/actions/productActions';
import useWindowDimensions from '../utils/useWindowDimenstions';
import SmallCard from './SmallCard';
import LargeCard from './LargeCard';
import Loading from './Loading';

let ItemsList = ({ isLandscape, cardsVariant, productsType }) => {
    const dispatch = useDispatch();
    const newProducts = useSelector(state => state.productReducer.newProducts);

    useEffect(() => {
        getData();
    }, [dispatch]);

    const getData = async () => {
        dispatch(getNewProducts())
    };

    const { width } = useWindowDimensions();

    let productsAmount;
    if (isTablet && width < 1200) productsAmount = 3;
    else if (isDesktop || (isTablet && isLandscape && width > 1200)) productsAmount = 5;
    else productsAmount = 2;

    return (
        newProducts ?
            <div className='items-list'>
                {newProducts.slice(0, productsAmount).map(product => {
                    const { name, price } = product;
                    let card;
                    if (cardsVariant === 'small') card = <SmallCard name={name} price={price} />;
                    else if (cardsVariant === 'large') card = <LargeCard name={name} price={price} />;
                    return card;
                })}
            </div>
            : <Loading />
    )
}

ItemsList = withOrientationChange(ItemsList);

export default ItemsList