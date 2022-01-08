import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import SectionTitle from './SectionTitle';
import useWindowDimensions from '../utils/useWindowDimensions';

const DeliveryForm = ({ promotion }) => {
    const history = useHistory();
    const { width } = useWindowDimensions();
    const [formInputs, setFormInputs] = useState({
        email: '',
        firstName: '',
        lastName: '',
        street: '',
        buildingNumber: '',
        flatNumber: '',
        zipCode: '',
        city: '',
        provider: ''
    });
    const [responseMessage, setResponseMessage] = useState(null);

    const handleChange = e => {
        const value = e.target.value;
        setFormInputs({
            ...formInputs,
            [e.target.name]: value
        });
    };

    const handleSubmitForm = e => {
        e.preventDefault();

        setFormInputs({
            email: '',
            firstName: '',
            lastName: '',
            street: '',
            buildingNumber: '',
            flatNumber: '',
            zipCode: '',
            city: '',
            provider: 'pocztex'
        })

        fetch('http://localhost:5000/delivery', {
            method: 'POST',
            body: JSON.stringify(formInputs),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                if (res.ok) history.push({
                    pathname: '/checkout/payment',
                    state: {
                        fromApp: true,
                        formInputs,
                        promotion
                    }
                });
                else return res.json();
            })
            .then(data => {
                setResponseMessage(data.message);
            })
    };

    return (
        <form className='delivery-form' id='deliveryForm' onSubmit={handleSubmitForm}>

            <div className='delivery-form__customer-data'>
                <div className='delivery-form__customer-data__title-wrapper'>
                    {width >= 992 ?
                        <h1 className='delivery-form__title'>Dane do wysyłki</h1>
                        :
                        <SectionTitle title='Dane do wysyłki' />
                    }
                </div>
                <p className='delivery-form__customer-data__response-message'>{responseMessage}</p>
                <div className='delivery-form__customer-data__wrapper'>
                    <label htmlFor="" className='delivery-form__customer-data__wrapper__label'>E-mail</label>
                    <input
                        type='email'
                        name='email'
                        className='delivery-form__customer-data__wrapper__input'
                        value={formInputs.email}
                        onChange={handleChange} />
                </div>
                <div className='delivery-form__customer-data__wrapper'>
                    <label htmlFor="" className='delivery-form__customer-data__wrapper__label'>Imię</label>
                    <input
                        type='text'
                        name='firstName'
                        className='delivery-form__customer-data__wrapper__input'
                        value={formInputs.firstName}
                        onChange={handleChange} />
                </div>
                <div className='delivery-form__customer-data__wrapper'>
                    <label htmlFor="" className='delivery-form__customer-data__wrapper__label'>Nazwisko</label>
                    <input
                        type='text'
                        name='lastName'
                        className='delivery-form__customer-data__wrapper__input'
                        value={formInputs.lastName}
                        onChange={handleChange} />
                </div>
                <div className='delivery-form__customer-data__wrapper'>
                    <label htmlFor="" className='delivery-form__customer-data__wrapper__label'>Ulica</label>
                    <input
                        type='text'
                        name='street'
                        className='delivery-form__customer-data__wrapper__input'
                        value={formInputs.street}
                        onChange={handleChange} />
                </div>
                <div className='delivery-form__customer-data__collection'>
                    <div className='delivery-form__customer-data__wrapper delivery-form__customer-data__wrapper--short'>
                        <label htmlFor="" className='delivery-form__customer-data__wrapper__label'>Numer domu</label>
                        <input
                            type='text'
                            name='buildingNumber'
                            className='delivery-form__customer-data__wrapper__input'
                            value={formInputs.buildingNumber}
                            onChange={handleChange} />
                    </div>
                    <div className='delivery-form__customer-data__wrapper delivery-form__customer-data__wrapper--short'>
                        <label htmlFor="" className='delivery-form__customer-data__wrapper__label'>Numer lokalu</label>
                        <input
                            type='text'
                            name='flatNumber'
                            className='delivery-form__customer-data__wrapper__input'
                            value={formInputs.flatNumber}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className='delivery-form__customer-data__wrapper delivery-form__customer-data__wrapper--short'>
                    <label htmlFor="" className='delivery-form__customer-data__wrapper__label'>Kod pocztowy</label>
                    <input
                        type='number'
                        name='zipCode'
                        className='delivery-form__customer-data__wrapper__input'
                        value={formInputs.zipCode}
                        onChange={handleChange} />
                </div>
                <div className='delivery-form__customer-data__wrapper'>
                    <label htmlFor="" className='delivery-form__customer-data__wrapper__label'>Miejscowość</label>
                    <input
                        type='text'
                        name='city'
                        className='delivery-form__customer-data__wrapper__input'
                        value={formInputs.city}
                        onChange={handleChange} />
                </div>

            </div>

            <div className='delivery-form__provider'>
                <div className='delivery-form__customer-data__title-wrapper'>
                    {width >= 992 ?
                        <h1 className='delivery-form__title'>Forma dostawy</h1>
                        :
                        <SectionTitle title='Sposób dostawy' />
                    }
                </div>
                <div className='delivery-form__provider__pocztex'>
                    <input
                        type='radio'
                        id='pocztex'
                        name='provider'
                        value='pocztex'
                        checked={formInputs.provider === 'pocztex'}
                        onChange={handleChange} />
                    <label htmlFor='pocztex'>Kurier Pocztex - <strong>15,60zł</strong></label>
                </div>
                <div className='delivery-form__provider__inpost'>
                    <input
                        type='radio'
                        id='inpost'
                        name='provider'
                        value='inpost'
                        checked={formInputs.provider === 'inpost'}
                        onChange={handleChange} />
                    <label htmlFor='inpost'>Paczkomat InPost - <strong>9,95zł</strong></label>
                </div>
                <div className='delivery-form__provider__button'>
                    <Button variant='checkout' title='Przejdź do płatności' type='submit' form='deliveryForm' />
                </div>
            </div>

        </form>
    )
}

export default DeliveryForm;