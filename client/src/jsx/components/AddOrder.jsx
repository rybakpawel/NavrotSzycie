import React, { useState } from 'react';
import Button from './Button';

const AddOrder = () => {
    const formInitialState = {
        products: '',
        date: '',
        orderNo: '',
        amount: ''
    };
    const [addForm, setAddForm] = useState(formInitialState);
    const [responseMessage, setResponseMessage] = useState({
        alert: '',
        success: null
    });

    const { alert, success } = responseMessage;

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setAddForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmitAddForm = e => {
        e.preventDefault();

        fetch(`${process.env.REACT_APP_SERVER_ADRESS}orders/add`, {
            method: 'POST',
            body: JSON.stringify(addForm),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setResponseMessage({
                    alert: data.responseMessage,
                    success: data.success
                });
                if (data.success) setAddForm({
                    ...formInitialState,
                });
            })
    };

    return (
        <form className='admin-hero__add-image'
            id='addOrder'
            onSubmit={handleSubmitAddForm}>
            <p className={`admin-hero__add-image__response-message ${success ? 'admin-hero__add-image__response-message--success' : ''}`}>{alert}</p>
            <div className='admin-hero__add-image__data-wrapper'>
                <label className='admin-hero__add-image__data-wrapper__label'>Produkty</label>
                <input className='admin-hero__add-image__data-wrapper__input' type='text' name='products' value={addForm.products} onChange={(e) => handleChangeInput(e)} />
            </div>
            <div className='admin-hero__add-image__data-wrapper'>
                <label className='admin-hero__add-image__data-wrapper__label'>Data</label>
                <input className='admin-hero__add-image__data-wrapper__input' type='text' name='date' value={addForm.date} onChange={(e) => handleChangeInput(e)} />
            </div>
            <div className='admin-hero__add-image__data-wrapper'>
                <label className='admin-hero__add-image__data-wrapper__label'>Faktura</label>
                <input className='admin-hero__add-image__data-wrapper__input' type='text' name='orderNo' value={addForm.orderNo} onChange={(e) => handleChangeInput(e)} />
            </div>
            <div className='admin-hero__add-image__data-wrapper'>
                <label className='admin-hero__add-image__data-wrapper__label'>Kwota</label>
                <input className='admin-hero__add-image__data-wrapper__input' type='number' name='amount' value={addForm.amount} onChange={(e) => handleChangeInput(e)} />
            </div>
            <div className='add-product__button-wrapper'>
                <Button variant='submit' title='Dodaj nowe zamówienie' type='submit' form='addOrder' />
            </div>
        </form>
    )
};

export default AddOrder;