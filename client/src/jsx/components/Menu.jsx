import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesList } from '../redux/actions/productActions';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import Button from '../components/Button';
import MenuDropDown from './MenuDropDown';
import bars from '../../assets/icons/menu-bars.svg';
import close from '../../assets/icons/close.svg';

const Menu = ({ largeView }) => {
    const dispatch = useDispatch();

    const categoryList = useSelector(state => state.productReducer.allCategories);

    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const [isActiveProducts, setIsActiveProducts] = useState(false);

    useEffect(() => {
        getData();
    }, [dispatch]);

    const getData = async () => {
        dispatch(getCategoriesList())
    };

    const handleMenuBars = () => {
        setIsActiveMenu(!isActiveMenu);
    };

    const handleProductsButton = () => {
        setIsActiveProducts(!isActiveProducts);
    }

    if (!largeView) {
        return (
            <nav className='menu'>
                <img
                    src={bars}
                    alt='menu'
                    className='menu__bars-icon'
                    onClick={handleMenuBars} />
                {
                    isActiveProducts === false ?
                        <ul className={`menu__list ${isActiveMenu ? 'menu__list--active' : ''}`}>
                            <img
                                src={close}
                                alt='zamknij'
                                className='menu__list__close'
                                onClick={handleMenuBars} />
                            <li className='menu__list__item'>
                                <Link to='/'>Strona główna</Link>
                            </li>
                            <li className='menu__list__item'
                                onClick={handleProductsButton}>
                                <Button
                                    variant='menu'
                                    title='Produkty'
                                />
                            </li>
                            {/* <li className='menu__list__item'>
                                <Link to='/creator'>Kreator</Link>
                            </li> */}
                            <li className='menu__list__item'>
                                <Link to='/aboutme'>O mnie</Link>
                            </li>
                            <li className='menu__list__item'>
                                <Link to='/contact'>Kontakt</Link>
                            </li>
                        </ul>
                        :
                        <ul className='menu__list menu__list--active'>
                            <img
                                src={close}
                                alt='zamknij'
                                className='menu__list__close'
                                onClick={() => {
                                    handleMenuBars();
                                    handleProductsButton();
                                }} />
                            {categoryList ? categoryList.map(category => {
                                return (
                                    <li className='menu__list__item'>
                                        <Link to={`/${category}`}
                                            onClick={() => {
                                                handleMenuBars();
                                                handleProductsButton();
                                            }}>
                                            {capitalizeFirstLetter(category)}
                                        </Link>
                                    </li>
                                )
                            }) : null}
                        </ul>
                }
            </nav>
        )
    };

    return (
        <nav className='menu menu--large'>
            <ul className='menu__list'>
                <li className='menu__list__item'>
                    <Link to='/'>Strona główna</Link>
                </li>
                <li className='menu__list__item'
                    onClick={isActiveProducts === true ? null : handleProductsButton}
                    onMouseEnter={handleProductsButton}
                    onMouseLeave={handleProductsButton}>
                    <Button
                        variant='menu'
                        title='Produkty'
                    />
                    {isActiveProducts === false ?
                        null :
                        <MenuDropDown />}
                </li>
                {/* <li className='menu__list__item'>
                    <Link to='/creator'>Kreator</Link>
                </li> */}
                <li className='menu__list__item'>
                    <Link to='/aboutme'>O mnie</Link>
                </li>
                <li className='menu__list__item'>
                    <Link to='/contact'>Kontakt</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Menu;