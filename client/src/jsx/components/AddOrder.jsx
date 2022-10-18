import React, { useState } from 'react';
import Button from './Button';

const AddOrder = () => {
    // const formInitialState = {
    //     date: '',
    //     orderNo: '',
    //     firstName: '',
    //     lastName: '',
    //     street: '',
    //     buildingNumber: '',
    //     flatNumber: '',
    //     zipCode: '',
    //     city: '',
    //     deliveryCost: null,
    //     productName: '',
    //     productPrice: null,
    //     productQuantity: null
    // };
    // const [addForm, setAddForm] = useState(formInitialState);
    // const [responseMessage, setResponseMessage] = useState({
    //     alert: '',
    //     success: null
    // });

    // const { alert, success } = responseMessage;

    // const handleChangeInput = e => {
    //     const { name, value } = e.target;
    //     setAddForm(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };

    // const handleSubmitAddForm = e => {
    //     e.preventDefault();

    //     const orderData = {
    //         date: addForm.date,
    //         orderNo: addForm.orderNo,
    //         product: [addForm.productName],
    //         amount: (addForm.productPrice * addForm.productQuantity) + addForm.deliveryCost,
    //         invoice: {
    //             firstName: addForm.firstName,
    //             lastName: addForm.lastName,
    //             street: addForm.street,
    //             buildingNumber: addForm.buildingNumber,
    //             flatNumber: addForm.flatNumber,
    //             city: addForm.zipCode,
    //             items: [
    //                 {
    //                     name: addForm.productName,
    //                     price: addForm.productPrice,
    //                     quantity: addForm.productQuantity
    //                 }
    //             ],
    //             deliveryCost: addForm.deliveryCost,
    //         }
            
    //     }

    //     fetch(`${process.env.REACT_APP_SERVER_ADRESS}orders/add`, {
    //         method: 'POST',
    //         body: JSON.stringify(orderData),
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setResponseMessage({
    //                 alert: data.responseMessage,
    //                 success: data.success
    //             });
    //             if (data.success) setAddForm({
    //                 ...formInitialState,
    //             });
    //         })
    // };

    return (
        // <form className='admin-hero__add-image'
        //     id='addOrder'
        //     onSubmit={handleSubmitAddForm}>
        //     <p className={`admin-hero__add-image__response-message ${success ? 'admin-hero__add-image__response-message--success' : ''}`}>{alert}</p>
        //     <div className='admin-hero__add-image__data-wrapper'>
        //         <label className='admin-hero__add-image__data-wrapper__label'>Data</label>
        //         <input className='admin-hero__add-image__data-wrapper__input' type='text' name='date' value={addForm.date} onChange={(e) => handleChangeInput(e)} />
        //     </div>
        //     <div className='admin-hero__add-image__data-wrapper'>
        //         <label className='admin-hero__add-image__data-wrapper__label'>Numer faktury</label>
        //         <input className='admin-hero__add-image__data-wrapper__input' type='text' name='orderNo' value={addForm.orderNo} onChange={(e) => handleChangeInput(e)} />
        //     </div>
        //     <div className='admin-hero__add-image__data-wrapper'>
        //         <label className='admin-hero__add-image__data-wrapper__label'>Imię</label>
        //         <input className='admin-hero__add-image__data-wrapper__input' type='text' name='firstName' value={addForm.firstName} onChange={(e) => handleChangeInput(e)} />
        //     </div>
        //     <div className='admin-hero__add-image__data-wrapper'>
        //         <label className='admin-hero__add-image__data-wrapper__label'>Nazwisko</label>
        //         <input className='admin-hero__add-image__data-wrapper__input' type='text' name='lastName' value={addForm.lastName} onChange={(e) => handleChangeInput(e)} />
        //     </div>
        //     <div className='admin-hero__add-image__data-wrapper'>
        //         <label className='admin-hero__add-image__data-wrapper__label'>Ulica</label>
        //         <input className='admin-hero__add-image__data-wrapper__input' type='text' name='street' value={addForm.street} onChange={(e) => handleChangeInput(e)} />
        //     </div>
        //     <div className='admin-hero__add-image__data-wrapper'>
        //         <label className='admin-hero__add-image__data-wrapper__label'>Number budynku</label>
        //         <input className='admin-hero__add-image__data-wrapper__input' type='text' name='buildingNumber' value={addForm.buildingNumber} onChange={(e) => handleChangeInput(e)} />
        //     </div>
        //     <div className='admin-hero__add-image__data-wrapper'>
        //         <label className='admin-hero__add-image__data-wrapper__label'>Numer lokalu</label>
        //         <input className='admin-hero__add-image__data-wrapper__input' type='text' name='flatNumber' value={addForm.flatNumber} onChange={(e) => handleChangeInput(e)} />
        //     </div>
        //     <div className='admin-hero__add-image__data-wrapper'>
        //         <label className='admin-hero__add-image__data-wrapper__label'>Kod pocztowy</label>
        //         <input className='admin-hero__add-image__data-wrapper__input' type='text' name='zipCode' value={addForm.zipCode} onChange={(e) => handleChangeInput(e)} />
        //     </div>
        //     <div className='admin-hero__add-image__data-wrapper'>
        //         <label className='admin-hero__add-image__data-wrapper__label'>Miasto</label>
        //         <input className='admin-hero__add-image__data-wrapper__input' type='text' name='city' value={addForm.city} onChange={(e) => handleChangeInput(e)} />
        //     </div>
        //     <div className='admin-hero__add-image__data-wrapper'>
        //         <label className='admin-hero__add-image__data-wrapper__label'>Koszt dostawy</label>
        //         <input className='admin-hero__add-image__data-wrapper__input' type='number' name='deliveryCost' value={addForm.deliveryCost} onChange={(e) => handleChangeInput(e)} />
        //     </div>
        //     <div style={{display: 'flex', justifyContent: 'space-between'}}>
        //         <div className='admin-hero__add-image__data-wrapper' style={{width: '30%'}}>
        //             <label className='admin-hero__add-image__data-wrapper__label'>Produkt</label>
        //             <input className='admin-hero__add-image__data-wrapper__input' type='text' name='productName' value={addForm.productName} onChange={(e) => handleChangeInput(e)} />
        //         </div>
        //         <div className='admin-hero__add-image__data-wrapper' style={{width: '30%'}}>
        //             <label className='admin-hero__add-image__data-wrapper__label'>Cena</label>
        //             <input className='admin-hero__add-image__data-wrapper__input' type='number' name='productPrice' value={addForm.productPrice} onChange={(e) => handleChangeInput(e)} />
        //         </div>
        //         <div className='admin-hero__add-image__data-wrapper' style={{width: '30%'}}>
        //             <label className='admin-hero__add-image__data-wrapper__label'>Ilość</label>
        //             <input className='admin-hero__add-image__data-wrapper__input' type='number' name='productQuantity' value={addForm.productQuantity} onChange={(e) => handleChangeInput(e)} />
        //         </div>
        //     </div>
        //     <div className='add-product__button-wrapper'>
        //         <Button variant='submit' title='Dodaj nowe zamówienie' type='submit' form='addOrder' />
        //     </div>
        // </form>
        <p>Strona w budowie</p>
    )
};

export default AddOrder;