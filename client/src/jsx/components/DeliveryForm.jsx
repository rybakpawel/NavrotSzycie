import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import SectionTitle from './SectionTitle';
import useWindowDimensions from '../utils/useWindowDimensions';
import useDebouncedEffect from '../utils/useDebouncedEffect';
import { sortByKey } from '../utils/sortByKey';

const DeliveryForm = ({ promotion }) => {
    const history = useHistory();
    const { width } = useWindowDimensions();
    const [formInputs, setFormInputs] = useState({
        confirmation: 'receipt',
        provider: 'inpost',
        inpostPoint: ''
    });
    const [points, setPoints] = useState({
        city: null,
        allPoints: []
    });
    const [responseMessage, setResponseMessage] = useState(null);

    useDebouncedEffect(() => {
        const fetchData = async () => {
            if (points.city) {
                let allData = [];
                let morePagesAvailable = true;
                let currentPage = 0;

                while (morePagesAvailable) {
                    currentPage++;
                    const res = await fetch(`https://api-shipx-pl.easypack24.net/v1/points/?city=${points.city}&page=${currentPage}&per_page=100&type=parcel_locker_only`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    })
                    const { items, total_pages } = await res.json();

                    items.forEach(item => allData.push(item));
                    morePagesAvailable = currentPage < total_pages;
                }
                setFormInputs({
                    ...formInputs,
                    inpostPoint: allData[0].name
                })
                setPoints({
                    ...points,
                    allPoints: allData
                });
            }
        }
        fetchData();
    }, 300, [points.city]);

    const handleZipCode = input => {
        if (input) {
            let chars = input.split('');
  
            if (chars.length > 2 && chars[2] !== '-') {
                chars.splice(2, 0, '-');
                const num = chars.join('');
                return num;
            }
        }
        
        return input
    }

    const handleChange = e => {
        const { name, value } = e.target;

        setFormInputs({
            ...formInputs,
            [name]: name !== 'zipCode' ? value : handleZipCode(value)
        });
    };

    const handleChangePoints = e => {
        const city = e.target.value.split(" ");

        let fullCity = city.map(word => { 
            if (word[0]) {
                return word[0].toUpperCase() + word.substring(1); 
            }
        }).join(" ");

        fullCity = fullCity.replace(/\-[a-z]/g, match => match.toUpperCase());

        setPoints({
            ...points,
            city: fullCity
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
            phoneNumber: '',
            confirmation: 'receipt',
            nip: '',
            companyName: '',
            provider: 'inpost',
            inpostPoint: ''
        })

        fetch(`${process.env.REACT_APP_SERVER_ADRESS}delivery`, {
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
                    <label className='delivery-form__customer-data__wrapper__label'>E-mail</label>
                    <input
                        type='email'
                        name='email'
                        className='delivery-form__customer-data__wrapper__input'
                        value={formInputs.email}
                        onChange={handleChange} />
                </div>
                <div className='delivery-form__customer-data__wrapper'>
                    <label className='delivery-form__customer-data__wrapper__label'>Imię</label>
                    <input
                        type='text'
                        name='firstName'
                        className='delivery-form__customer-data__wrapper__input'
                        value={formInputs.firstName}
                        onChange={handleChange} />
                </div>
                <div className='delivery-form__customer-data__wrapper'>
                    <label className='delivery-form__customer-data__wrapper__label'>Nazwisko</label>
                    <input
                        type='text'
                        name='lastName'
                        className='delivery-form__customer-data__wrapper__input'
                        value={formInputs.lastName}
                        onChange={handleChange} />
                </div>
                <div className='delivery-form__customer-data__wrapper'>
                    <label className='delivery-form__customer-data__wrapper__label'>Ulica</label>
                    <input
                        type='text'
                        name='street'
                        className='delivery-form__customer-data__wrapper__input'
                        value={formInputs.street}
                        onChange={handleChange} />
                </div>
                <div className='delivery-form__customer-data__collection'>
                    <div className='delivery-form__customer-data__wrapper delivery-form__customer-data__wrapper--short'>
                        <label className='delivery-form__customer-data__wrapper__label'>Numer domu</label>
                        <input
                            type='text'
                            name='buildingNumber'
                            className='delivery-form__customer-data__wrapper__input'
                            value={formInputs.buildingNumber}
                            onChange={handleChange} />
                    </div>
                    <div className='delivery-form__customer-data__wrapper delivery-form__customer-data__wrapper--short'>
                        <label className='delivery-form__customer-data__wrapper__label'>Numer lokalu</label>
                        <input
                            type='text'
                            name='flatNumber'
                            className='delivery-form__customer-data__wrapper__input'
                            value={formInputs.flatNumber}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className='delivery-form__customer-data__wrapper delivery-form__customer-data__wrapper--short'>
                    <label className='delivery-form__customer-data__wrapper__label'>Kod pocztowy</label>
                    <input
                        type='text'
                        name='zipCode'
                        className='delivery-form__customer-data__wrapper__input'
                        value={formInputs.zipCode}
                        maxlength='6'
                        onChange={handleChange} />
                </div>
                <div className='delivery-form__customer-data__wrapper'>
                    <label className='delivery-form__customer-data__wrapper__label'>Miejscowość</label>
                    <input
                        type='text'
                        name='city'
                        className='delivery-form__customer-data__wrapper__input'
                        value={formInputs.city}
                        onChange={handleChange} />
                </div>
                <div className='delivery-form__customer-data__wrapper'>
                    <label className='delivery-form__customer-data__wrapper__label'>Numer telefonu</label>
                    <input
                        type='text'
                        name='phoneNumber'
                        className='delivery-form__customer-data__wrapper__input'
                        value={formInputs.phoneNumber}
                        onChange={handleChange} />
                </div>
                <div className='delivery-form__customer-data__wrapper'>
                    <label className='delivery-form__customer-data__wrapper__label'>Potwierdzenie zakupu</label>
                    <div className='delivery-form__customer-data__wrapper__radio'>
                        <input
                            type='radio'
                            id='receipt'
                            name='confirmation'
                            value='receipt'
                            onChange={handleChange}
                            checked={formInputs.confirmation === 'receipt'}
                        />
                        <label htmlFor='receipt'>Paragon</label>
                    </div>
                    <div className='delivery-form__customer-data__wrapper__radio'>
                        <input
                            type='radio'
                            id='invoice-private'
                            name='confirmation'
                            value='invoice-private'
                            onChange={handleChange}
                            checked={formInputs.confirmation === 'invoice-private'}
                        />
                        <label htmlFor='invoice-private'>Faktura na osobę</label>
                    </div>
                    <div className='delivery-form__customer-data__wrapper__radio'>
                        <input
                            type='radio'
                            id='invoice-company'
                            name='confirmation'
                            value='invoice-company'
                            checked={formInputs.confirmation === 'invoice-company'}
                            onChange={handleChange}
                        />
                        <label htmlFor='invoice-company'>Faktura na firmę</label>
                    </div>
                </div>
                {formInputs.confirmation === 'invoice-company' ?
                    <>
                        <div className='delivery-form__customer-data__wrapper'>
                            <label className='delivery-form__customer-data__wrapper__label'>NIP</label>
                            <input
                                type='number'
                                name='nip'
                                className='delivery-form__customer-data__wrapper__input'
                                value={formInputs.nip}
                                onChange={handleChange} />
                        </div>
                        <div className='delivery-form__customer-data__wrapper'>
                            <label className='delivery-form__customer-data__wrapper__label'>Nazwa firmy</label>
                            <input
                                type='text'
                                name='company-name'
                                className='delivery-form__customer-data__wrapper__input'
                                value={formInputs.companyName}
                                onChange={handleChange} />
                        </div>
                    </> :
                    null}
            </div>

            <div className='delivery-form__provider'>
                <div className='delivery-form__customer-data__title-wrapper'>
                    {width >= 992 ?
                        <h1 className='delivery-form__title'>Forma dostawy</h1>
                        :
                        <SectionTitle title='Sposób dostawy' />
                    }
                </div>
                {/* <div className='delivery-form__provider__pocztex'>
                    <input
                        type='radio'
                        id='pocztex'
                        name='provider'
                        value='pocztex'
                        checked={formInputs.provider === 'pocztex'}
                        onChange={handleChange} />
                    <label htmlFor='pocztex'>Kurier Pocztex - <strong>15,99zł</strong></label>
                </div> */}
                <div className='delivery-form__provider__inpost'>
                    <input
                        type='radio'
                        id='inpost'
                        name='provider'
                        value='inpost'
                        checked={formInputs.provider === 'inpost'}
                        onChange={handleChange} />
                    <label htmlFor='inpost'>Paczkomat InPost - <strong>13,99zł</strong></label>
                </div>
                {formInputs.provider === 'inpost' ?
                    <div className='delivery-form__provider__points'>
                        <label className='delivery-form__provider__points__label'>Paczkomat</label>
                        <input className='delivery-form__provider__points__input' type='text' placeholder='Wprowadź miasto' onChange={(e) => handleChangePoints(e)}></input>
                        <select className='delivery-form__provider__points__input' name='inpostPoint' onChange={handleChange}>
                            {points.allPoints ? sortByKey(points.allPoints, 'address', 'line1').map(point => {
                                return <option key={point.name} value={point.name}>{point.address.line1}, {point.address.line2}, {point.name}</option>
                            }) : null}
                        </select>
                    </div> : null}
                <div className='delivery-form__provider__button'>
                    <Button variant='checkout' title='Przejdź do płatności' type='submit' form='deliveryForm' />
                </div>
            </div>

        </form>
    )
}

export default DeliveryForm;