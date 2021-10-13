import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFromCategory, getCategoriesList } from '../redux/actions/productActions';
import Loading from './Loading';
import LargeCard from './LargeCard';
import Button from './Button';
import arrow from '../../assets/icons/down-arrow.svg'

const ProductsList = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const categoryProducts = useSelector(state => state.productReducer.categoryProducts);
    const categoryList = useSelector(state => state.productReducer.categoryList);

    useEffect(() => {
        getData();
    }, [category, dispatch]);

    const getData = async () => {
        dispatch(getProductsFromCategory(category))
        dispatch(getCategoriesList())
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        categoryList && categoryProducts ?
            <section className='products-list'>
                <div className='products-list__title-row'>
                    <div className='products-list__title-row__names'>
                        <h2>{capitalizeFirstLetter(category)}</h2>
                        {categoryList.map(categoryFromArray => {
                            if (categoryFromArray !== category) {
                                return <Link to={`${categoryFromArray}`}>{categoryFromArray}</Link>
                            }
                        })}
                    </div>
                    <div className='products-list__title-row__sort'>
                        <Button variant='empty' title='sortuj wg' />
                        <img src={arrow} alt='arrow' className='products-list__title-row__sort__icon' />
                    </div>
                </div>
                <div className='products-list__cards'>
                    {categoryProducts.map(product => {
                        const { name, price } = product;
                        return <LargeCard name={name} price={price} />
                    })}
                </div>
            </section>
            : <Loading />
    )
};

export default ProductsList;