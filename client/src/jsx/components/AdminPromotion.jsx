import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isDesktop } from 'react-device-detect';
import AdminMenu from './AdminMenu';
import Button from './Button';
import leftArrow from '../../assets/icons/left-arrow.svg';
import ok from '../../assets/icons/ok.png';
import reject from '../../assets/icons/reject.png';

const AdminPromotion = () => {
    const formInitialState = {
        name: '',
        code: '',
        discount: 0,
        active: true
    };

    const [promotions, setPromotions] = useState([]);
    const [addForm, setAddForm] = useState(formInitialState);
    const [editForm, setEditForm] = useState(formInitialState);
    const [responseMessage, setResponseMessage] = useState({
        alert: '',
        success: null
    });
    const [activeEditPromotion, setActiveEditPromotion] = useState(null);
    const [activeDeletePromotion, setActiveDeletePromotion] = useState(null);

    useEffect(async () => {
        const response = await fetch('http://localhost:5000/promotion/all');
        const data = await response.json();
        setPromotions(data);
    }, [promotions]);

    const handleChangeInput = (e, variant) => {
        const { name, value } = e.target;
        if (variant === 'add') {
            setAddForm(prevState => ({
                ...prevState,
                [name]: value
            }));
        } else if (variant === 'edit') {
            setEditForm(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleCheckbox = e => {
        setEditForm(prevState => ({
            ...prevState,
            active: e.target.checked
        }));
    };

    const handleSubmitAddForm = e => {
        e.preventDefault();

        fetch('http://localhost:5000/promotion/add', {
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

    const handleSubmitEditForm = id => {
        fetch(`http://localhost:5000/promotion/edit/${id}`, {
            method: 'PUT',
            body: JSON.stringify(editForm),
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
            if (data.success) setEditForm({
                ...formInitialState,
            });
        })
    }

    const handleEditPromotion = (promotion) => {
        const { _id, name, code, discount, active } = promotion;
        if (activeEditPromotion === _id) {
            setActiveEditPromotion(null);
            setEditForm(formInitialState);
        } else {
            setActiveEditPromotion(_id);
            setEditForm({
                name,
                code,
                discount,
                active
            });
        }
    }

    const handleDeletePromotion = (id, confirm) => {
        if (activeDeletePromotion) {
            setActiveDeletePromotion(false);

            if (confirm) {
                fetch(`http://localhost:5000/promotion/delete/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => setResponseMessage({
                        alert: data.responseMessage,
                        success: data.success
                    }));
            }
        } else {
            setActiveDeletePromotion(id);
        }
    }

    const getAddForm = () => {
        const { alert, success } = responseMessage;

        return (
            <form className='admin-hero__add-image'
                id='addPromotion'
                onSubmit={handleSubmitAddForm}>
                <p className={`admin-hero__add-image__response-message ${success ? 'admin-hero__add-image__response-message--success' : ''}`}>{alert}</p>
                <div className='admin-hero__add-image__data-wrapper'>
                    <label className='admin-hero__add-image__data-wrapper__label'>Nazwa</label>
                    <input className='admin-hero__add-image__data-wrapper__input' type='text' name='name' value={addForm.name} onChange={(e) => handleChangeInput(e, 'add')} />
                </div>
                <div className='admin-hero__add-image__data-wrapper'>
                    <label className='admin-hero__add-image__data-wrapper__label'>Kod</label>
                    <input className='admin-hero__add-image__data-wrapper__input' type='text' name='code' value={addForm.code} onChange={(e) => handleChangeInput(e, 'add')} />
                </div>
                <div className='admin-hero__add-image__data-wrapper'>
                    <label className='admin-hero__add-image__data-wrapper__label'>Zniżka</label>
                    <input className='admin-hero__add-image__data-wrapper__input' type='number' name='discount' value={addForm.discount} onChange={(e) => handleChangeInput(e, 'add')} />
                </div>
                <div className='add-product__button-wrapper'>
                    <Button variant='submit' title='Dodaj nową promocję' type='submit' form='addPromotion' />
                </div>
            </form>
        )
    }
    
    const getEditForm = () => {
        return (
            promotions.map(promotion => {
                return (
                    <Fragment key={promotion._id}>
                        <div className='admin-hero__edit-image__row'>
                            {activeDeletePromotion === promotion._id ?
                                <>
                                    <p className='admin-hero__edit-image__row__name'>{promotion.name}</p>
                                    <div className='admin-hero__edit-image__row__confirm'>
                                        <img className='admin-hero__edit-image__row__confirm__icon' src={ok} alt='Potwierdź' onClick={() => handleDeletePromotion(promotion._id, true)} />
                                        <p className='admin-hero__edit-image__row__confirm__text'>Na pewno?</p>
                                        <img className='admin-hero__edit-image__row__confirm__icon' src={reject} alt='Zrezygnuj' onClick={() => handleDeletePromotion(promotion._id, false)} />
                                    </div>
                                </> :
                                <>
                                    <p className='admin-hero__edit-image__row__name'>{promotion.name}</p>
                                    <div className='admin-hero__edit-image__row__button' onClick={() => handleEditPromotion(promotion)}>
                                        <Button variant='small' title='Edytuj' />
                                    </div>
                                    <div className='admin-hero__edit-image__row__button' onClick={() => handleDeletePromotion(promotion._id)}>
                                        <Button variant='small' title='Usuń' />
                                    </div>
                                </>
                            }
                        </div>
                        {activeEditPromotion === promotion._id ?
                            <form className='admin-hero__edit-image__form'
                                id='editHeroImage'
                                onSubmit={() => handleSubmitEditForm(promotion._id)}>
                                <div className='admin-hero__edit-image__form__row'>
                                    <label className='admin-hero__edit-image__form__row__label'>Nazwa</label>
                                    <input className='admin-hero__edit-image__form__row__input' type='text' name='name' placeholder={promotion.name} onChange={(e) => handleChangeInput(e, 'edit')} />
                                </div>
                                <div className='admin-hero__edit-image__form__row'>
                                    <label className='admin-hero__edit-image__form__row__label'>Kod</label>
                                    <input className='admin-hero__edit-image__form__row__input' type='text' name='code' placeholder={promotion.code} onChange={(e) => handleChangeInput(e, 'edit')} />
                                </div>
                                <div className='admin-hero__edit-image__form__row'>
                                    <label className='admin-hero__edit-image__form__row__label'>Zniżka</label>
                                    <input className='admin-hero__edit-image__form__row__input' type='text' name='discount' placeholder={promotion.discount} onChange={(e) => handleChangeInput(e, 'edit')} />
                                </div>
                                <div className='admin-hero__edit-image__form__row'>
                                    <label className='admin-hero__edit-image__form__row__label'>Aktywna</label>
                                    <input className='admin-hero__edit-image__form__row__input' type='checkbox' name='active' checked={editForm.active} onChange={handleCheckbox} />
                                </div>
                                <div className='admin-hero__edit-image__form__button-wrapper'>
                                    <Button variant='small' title='Zatwierdź zmiany' type='submit' form='editHeroImage' />
                                </div>
                            </form> : null}
                    </Fragment>
                )
            })
        )
    }

    return (
        isDesktop ?
            <div className='admin__overall-wrapper'>
                <AdminMenu />
                <div className='admin-hero'>
                    {promotions ? getEditForm() : null}
                    {getAddForm()}
                </div>
            </div>
            :
            <>
                <div className='admin__back-wrapper'>
                    <Link to='/admin'>
                        <img src={leftArrow} alt='wróć' className='admin__back' />
                    </Link>
                    <h1 className='admin__title'>Promocje</h1>
                </div>
                <div className='admin-hero'>
                    {promotions ? getEditForm() : null}
                    {getAddForm()}
                </div>
            </>
    )
};

export default AdminPromotion;