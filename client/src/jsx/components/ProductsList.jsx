import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import getProductList from '../redux/actions/productActions';
import LargeCard from './LargeCard';
import Button from './Button';
import arrow from '../../assets/icons/down-arrow.svg'

const ProductsList = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productReducer.productsList);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        dispatch(getProductList());
    };

    if (productList) {
        console.log(productList)
        console.log('zaladowane')
    }

    return (
        <section className='products-list'>
            <div className='products-list__title-row'>
                <div className='products-list__title-row__names'>
                    <h2>{category}</h2>
                    <Button variant='empty' title={category} />
                    <Button variant='empty' title={category} />
                </div>
                <div className='products-list__title-row__sort'>
                    <Button variant='empty' title='sortuj wg' />
                    <img src={arrow} alt='arrow' className='products-list__title-row__sort__icon' />
                </div>
            </div>

            <div className='products-list__cards'>
                <LargeCard />
                <LargeCard />
                <LargeCard />
                <LargeCard />
                <LargeCard />
                <LargeCard />
                <LargeCard />
                <LargeCard />
                <LargeCard />
                <LargeCard />
            </div>

        </section>
    )
};

export default ProductsList;