import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesList } from '../redux/actions/productActions';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

const MenuDropDown = () => {
    const dispatch = useDispatch();

    const categoryList = useSelector(state => state.productReducer.allCategories);

    useEffect(() => {
        getData();
    }, [dispatch]);

    const getData = async () => {
        dispatch(getCategoriesList())
    };

    return (
        <ul className='menu-drop-down'>
            {categoryList ? categoryList.map(category => {
                return (
                    <li className='menu-drop-down__item' key={category}>
                        <Link to={`/${category}`}>
                            {capitalizeFirstLetter(category)}
                        </Link>
                    </li>
                )
            }) : null}
        </ul>
    )
};

export default MenuDropDown;