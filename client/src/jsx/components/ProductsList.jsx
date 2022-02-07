import React, { useEffect, useState } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsFromCategory, getCategoriesList } from '../redux/actions/productActions';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import Loading from './Loading';
import LargeCard from './LargeCard';
import Button from './Button';
import arrow from '../../assets/icons/down-arrow.svg'

const ProductsList = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const categoryProducts = useSelector(state => state.productReducer.categoryProducts);
    const categoryList = useSelector(state => state.productReducer.categoryList);

    const [isActiveSort, setIsActiveSort] = useState(false);

    useEffect(() => {
        getData();
    }, [category, dispatch]);

    const getData = async () => {
        dispatch(getProductsFromCategory(category))
        dispatch(getCategoriesList())
    };

    const handleSort = () => {
        setIsActiveSort(!isActiveSort);
    };

    const showDropDown = () => {
        return (
            <div className='sort-drop-down'>
                <button className='sort-drop-down__item' onClick={() => sortBy('cheap')}>
                    Od najtańszych
                </button>
                <button className='sort-drop-down__item' onClick={() => sortBy('expensive')}>
                    Od najdroższych
                </button>
                <button className='sort-drop-down__item' onClick={() => sortBy('alphabetic')}>
                    Alfabetycznie
                </button>
            </div>
        );
    };

    const sortBy = (variant) => {
        switch (variant) {
            case 'cheap':
                categoryProducts.sort((a, b) => a.priceWithPromotion - b.priceWithPromotion);
                break;
            case 'expensive':
                categoryProducts.sort((a, b) => b.priceWithPromotion - a.priceWithPromotion);
                break;
            case 'alphabetic':
                categoryProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                console.log('Brak odpowiedniego argumentu w funkcji sortBy');
        }
    }

    const checkCategory = (categoryList) => {
        const routeExist = categoryList.includes(category);

        if (routeExist) {
            return (
                <section className='products-list'>
                    <div className='products-list__title-row'>
                        <div className='products-list__title-row__names'>
                            <h2>{capitalizeFirstLetter(category)}</h2>
                            {categoryList.map(categoryFromArray => {
                                if (categoryFromArray !== category) {
                                    return <Link to={`${categoryFromArray}`}>{capitalizeFirstLetter(categoryFromArray)}</Link>
                                }
                            })}
                        </div>
                        <div className='products-list__title-row__sort' onClick={handleSort}>
                            <Button variant='empty' title='sortuj wg' />
                            <img src={arrow} alt='arrow' className='products-list__title-row__sort__icon' />
                            {isActiveSort === false ?
                                null :
                                showDropDown()}
                        </div>
                    </div>
                    <div className='products-list__cards'>
                        {categoryProducts.map(product => {
                            const { name, images, price, priceWithPromotion, promotion } = product;
                            return <LargeCard name={name} category={category} image={images[0]} price={price} priceWithPromotion={priceWithPromotion} promotion={promotion} />
                        })}
                    </div>
                </section>
            )
        } else return <Redirect to='/' />
    }

    return categoryList && categoryProducts ? checkCategory(categoryList) : <Loading />
};

export default ProductsList;