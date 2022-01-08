import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesList } from '../redux/actions/productActions';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import Button from './Button';

const AddProduct = () => {
    const [isActivePromotion, setIsActivePromotion] = useState(false);
    const [newCategory, setNewCategory] = useState(false);
    // const [responseMessage, setResponseMessage] = useState(null);

    const dispatch = useDispatch();

    const categoryList = useSelector(state => state.productReducer.categoryList);

    useEffect(() => {
        getData();
    }, [dispatch]);

    const getData = async () => {
        dispatch(getCategoriesList());
    };

    const handleNewCategory = () => {
        setNewCategory(!newCategory);
    }

    const handleCheckbox = () => {
        setIsActivePromotion(!isActivePromotion);
    };

    // const handleSubmitForm = e => {
    //     e.preventDefault();

    //     fetch('http://localhost:5000/products/add', {
    //         method: 'POST',
    //         body: JSON.stringify('elko'),
    //         headers: { 'Content-Type': 'multipart/form-data' },
    //     })
    //         .then(res => res.json())
    //         .then(data => setResponseMessage(data))
    // };

    return (
        <form className='add-product'
            id='addProductForm'
            action='http://localhost:5000/products/add'
            method='POST'
            encType='multipart/form-data'
        // onSubmit={handleSubmitForm} 
        >
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Nazwa</label>
                <input className='add-product__data-wrapper__input' type='text' name='name' />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Kategoria</label>
                <div className='add-product__data-wrapper__select-wrapper' >
                    {!newCategory ?
                        <select className='add-product__data-wrapper__input add-product__data-wrapper__input--category' name='category' form='addProductForm'>
                            {categoryList ? categoryList.map(category => {
                                return <option value={category}>{capitalizeFirstLetter(category)}</option>
                            }) : null}
                        </select>
                        : <input className='add-product__data-wrapper__input' type='text' name='category' />}
                    <div className='add-product__data-wrapper__button' onClick={handleNewCategory}>
                        <Button variant='admin-add' title={!newCategory ? 'Nowa kategoria' : 'Lista kategorii'} type='button' />
                    </div>
                </div>
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Cena</label>
                <input className='add-product__data-wrapper__input' type='number' step={0.01} name='price' />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label add-product__data-wrapper__label--images'>Wczytaj zdjęcia</label>
                <input className='add-product__data-wrapper__input add-product__data-wrapper__input--images' id='image' type='file' name='image' multiple />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Opis</label>
                <input className='add-product__data-wrapper__input' type='text' name='description' />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Wysokość</label>
                <input className='add-product__data-wrapper__input' type='number' name='height' />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Szerokość</label>
                <input className='add-product__data-wrapper__input' type='number' name='width' />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Materiały</label>
                <input className='add-product__data-wrapper__input' type='text' name='materials' />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Pielęgnacja</label>
                <input className='add-product__data-wrapper__input' type='text' name='care' />
            </div>
            <div className='add-product__data-wrapper add-product__data-wrapper--checkbox'>
                <label className='add-product__data-wrapper__label add-product__data-wrapper__label--checkbox'>Promocja</label>
                <input className='add-product__data-wrapper__input' type='checkbox' name='promotion' onChange={handleCheckbox} />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Wielkość promocji</label>
                <input className='add-product__data-wrapper__input' type='number' name='promotionSize' disabled={isActivePromotion ? false : true} />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Dostępna ilość</label>
                <input className='add-product__data-wrapper__input' type='number' name='quantity' />
            </div>
            <div className='add-product__button-wrapper'>
                <Button variant='submit' title='Dodaj produkt' type='submit' form='addProductForm' />
            </div>
        </form>
    )
};

export default AddProduct;