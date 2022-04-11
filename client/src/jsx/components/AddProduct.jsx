import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesList } from '../redux/actions/productActions';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import Button from './Button';

const AddProduct = () => {
    const formInitialState = {
        name: '',
        price: '',
        description: '',
        height: '',
        width: '',
        circuit: '',
        depth: '',
        materials: '',
        care: '',
        promotion: false,
        promotionSize: '',
        quantity: ''
    };
    const [form, setForm] = useState(formInitialState);
    const [newCategory, setNewCategory] = useState(false);
    const [responseMessage, setResponseMessage] = useState({
        alert: '',
        success: null
    });

    const dispatch = useDispatch();

    const categoryList = useSelector(state => state.productReducer.allCategories);

    useEffect(() => {
        getData();
    }, [dispatch]);

    useEffect(() => {
        setForm(prevState => ({
            ...prevState,
            category: categoryList ? categoryList[0] : ''
        }));
    }, [categoryList, newCategory]);

    const getData = async () => {
        dispatch(getCategoriesList());
    };

    const handleNewCategory = () => {
        setNewCategory(!newCategory);
    }

    const handleCheckbox = e => {
        setForm(prevState => ({
            ...prevState,
            promotion: e.target.checked
        }));
    };

    const handleChangeInput = e => {
        const { name, value } = e.target;

        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmitForm = e => {
        e.preventDefault();

        const formData = new FormData();

        for (const value in form) {
            formData.append(value, form[value]);
        }

        for (let i = 0; i < e.target.image.files.length; i++) {
            formData.append('image', e.target.image.files[i]);
        }

        fetch('http://localhost:5000/products/add', {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                setResponseMessage({
                    alert: data.responseMessage,
                    success: data.success
                });
                if (data.success) setForm({
                    ...formInitialState,
                    category: categoryList ? categoryList[0] : ''
                });
                window.scrollTo(0, 0);
            })
    };

    const { alert, success } = responseMessage;

    return (
        <form className='add-product'
            id='addProductForm'
            onSubmit={handleSubmitForm} >
            <p className={`add-product__response-message ${success ? 'add-product__response-message--success' : ''}`}>{alert}</p>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Nazwa</label>
                <input className='add-product__data-wrapper__input' type='text' name='name' value={form.name} onChange={handleChangeInput} />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Kategoria</label>
                <div className='add-product__data-wrapper__select-wrapper' >
                    {!newCategory ?
                        <select className='add-product__data-wrapper__input add-product__data-wrapper__input--category' name='category' form='addProductForm' onChange={handleChangeInput}>
                            {categoryList ? categoryList.map(category => {
                                return <option key={category} value={category}>{capitalizeFirstLetter(category)}</option>
                            }) : null}
                        </select>
                        : <input className='add-product__data-wrapper__input add-product__data-wrapper__input--with-button' type='text' name='category' onChange={handleChangeInput} />}
                    <div className='add-product__data-wrapper__button' onClick={handleNewCategory}>
                        <Button variant='admin-add' title={!newCategory ? 'Nowa kategoria' : 'Lista kategorii'} type='button' />
                    </div>
                </div>
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Cena</label>
                <input className='add-product__data-wrapper__input' type='number' step={0.01} name='price' value={form.price} onChange={handleChangeInput} />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label add-product__data-wrapper__label--images'>Wczytaj zdjęcia</label>
                <input className='add-product__data-wrapper__input add-product__data-wrapper__input--images' id='image' type='file' name='image' multiple />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Opis</label>
                <textarea className='add-product__data-wrapper__input' rows={4} type='text' name='description' value={form.description} onChange={handleChangeInput} />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Wysokość</label>
                <input className='add-product__data-wrapper__input' type='number' name='height' value={form.height} onChange={handleChangeInput} />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Szerokość</label>
                <input className='add-product__data-wrapper__input' type='number' name='width' value={form.width} onChange={handleChangeInput} />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Obwód</label>
                <input className='add-product__data-wrapper__input' type='number' name='circuit' value={form.circuit} onChange={handleChangeInput} />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Głębokość</label>
                <input className='add-product__data-wrapper__input' type='number' name='depth' value={form.depth} onChange={handleChangeInput} />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Materiały</label>
                <textarea className='add-product__data-wrapper__input' rows={4} type='text' name='materials' value={form.materials} onChange={handleChangeInput} />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Pielęgnacja</label>
                <textarea className='add-product__data-wrapper__input' rows={4} type='text' name='care' value={form.care} onChange={handleChangeInput} />
            </div>
            <div className='add-product__data-wrapper add-product__data-wrapper--checkbox'>
                <label className='add-product__data-wrapper__label add-product__data-wrapper__label--checkbox'>Promocja</label>
                <input className='add-product__data-wrapper__input' type='checkbox' name='promotion' checked={form.promotion} onChange={handleCheckbox} />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Wielkość promocji</label>
                <input className='add-product__data-wrapper__input' type='number' name='promotionSize' value={form.promotionSize} onChange={handleChangeInput} disabled={form.promotion ? false : true} />
            </div>
            <div className='add-product__data-wrapper'>
                <label className='add-product__data-wrapper__label'>Dostępna ilość</label>
                <input className='add-product__data-wrapper__input' type='number' name='quantity' value={form.quantity} onChange={handleChangeInput} />
            </div>
            <div className='add-product__button-wrapper'>
                <Button variant='submit' title='Dodaj produkt' type='submit' form='addProductForm' />
            </div>
        </form>
    )
};

export default AddProduct;