import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isDesktop } from 'react-device-detect';
import AdminMenu from './AdminMenu';
import Button from './Button';
import leftArrow from '../../assets/icons/left-arrow.svg';
import ok from '../../assets/icons/ok.png';
import reject from '../../assets/icons/reject.png';

const AdminHero = () => {
    const formInitialState = {
        name: '',
        link: ''
    };

    const [heroImages, setHeroImages] = useState([]);
    const [addForm, setAddForm] = useState(formInitialState);
    const [editForm, setEditForm] = useState(formInitialState);
    const [responseMessage, setResponseMessage] = useState({
        alert: '',
        success: null
    });
    const [activeEditImage, setActiveEditImage] = useState(null);
    const [activeDeleteImage, setActiveDeleteImage] = useState(null);

    useEffect(async () => {
        const response = await fetch('https://admin.navrot-szycie.pl/hero');
        const data = await response.json();
        setHeroImages(data);
    }, [heroImages]);

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

    const handleSubmitAddForm = e => {
        e.preventDefault();

        const formData = new FormData();

        for (const value in addForm) {
            formData.append(value, addForm[value]);
        }
        formData.append('image', e.target.image.files[0]);

        fetch('https://admin.navrot-szycie.pl/hero/add', {
            method: 'POST',
            body: formData,
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
        fetch(`https://admin.navrot-szycie.pl/hero/edit/${id}`, {
            method: 'PUT',
            body: JSON.stringify(editForm),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }

    const handleEditImage = (image) => {
        const { _id, name, link } = image;
        if (activeEditImage === _id) {
            setActiveEditImage(null);
            setEditForm(formInitialState);
        } else {
            setActiveEditImage(_id);
            setEditForm({
                name,
                link
            });
        }
    }

    const handleDeleteImage = (id, confirm) => {
        if (activeDeleteImage) {
            setActiveDeleteImage(false);

            if (confirm) {
                fetch(`https://admin.navrot-szycie.pl/hero/delete/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => setResponseMessage(data.message))
            }
        } else {
            setActiveDeleteImage(id);
        }
    }

    const getAddForm = () => {
        const { alert, success } = responseMessage;

        return (
            <form className='admin-hero__add-image'
                id='addHeroImage'
                onSubmit={handleSubmitAddForm}>
                <p className={`admin-hero__add-image__response-message ${success ? 'admin-hero__add-image__response-message--success' : ''}`}>{alert}</p>
                <div className='admin-hero__add-image__data-wrapper'>
                    <label className='admin-hero__add-image__data-wrapper__label'>Nazwa</label>
                    <input className='admin-hero__add-image__data-wrapper__input' type='text' name='name' value={addForm.name} onChange={(e) => handleChangeInput(e, 'add')} />
                </div>
                <div className='admin-hero__add-image__data-wrapper'>
                    <label className='admin-hero__add-image__data-wrapper__label admin-hero__add-image__data-wrapper__label--images'>Obraz</label>
                    <input className='admin-hero__add-image__data-wrapper__input admin-hero__add-image__data-wrapper__input--images' id='image' type='file' name='image' multiple />
                </div>
                <div className='admin-hero__add-image__data-wrapper'>
                    <label className='admin-hero__add-image__data-wrapper__label'>Link</label>
                    <input className='admin-hero__add-image__data-wrapper__input' type='text' name='link' value={addForm.link} onChange={(e) => handleChangeInput(e, 'add')} />
                </div>
                <div className='add-product__button-wrapper'>
                    <Button variant='submit' title='Dodaj obraz' type='submit' form='addHeroImage' />
                </div>
            </form>
        )
    }

    const getEditForm = () => {
        return (
            heroImages.map(image => {
                return (
                    <Fragment key={image._id}>
                        <div className='admin-hero__edit-image__row'>
                            {activeDeleteImage === image._id ?
                                <>
                                    <p className='admin-hero__edit-image__row__name'>{image.name}</p>
                                    <div className='admin-hero__edit-image__row__confirm'>
                                        <img className='admin-hero__edit-image__row__confirm__icon' src={ok} alt='Potwierdź' onClick={() => handleDeleteImage(image._id, true)} />
                                        <p className='admin-hero__edit-image__row__confirm__text'>Na pewno?</p>
                                        <img className='admin-hero__edit-image__row__confirm__icon' src={reject} alt='Zrezygnuj' onClick={() => handleDeleteImage(image._id, false)} />
                                    </div>
                                </> :
                                <>
                                    <p className='admin-hero__edit-image__row__name'>{image.name}</p>
                                    <div className='admin-hero__edit-image__row__button' onClick={() => handleEditImage(image)}>
                                        <Button variant='small' title='Edytuj' />
                                    </div>
                                    <div className='admin-hero__edit-image__row__button' onClick={() => handleDeleteImage(image._id)}>
                                        <Button variant='small' title='Usuń' />
                                    </div>
                                </>
                            }
                        </div>
                        {activeEditImage === image._id ?
                            <form className='admin-hero__edit-image__form'
                                id='editHeroImage'
                                onSubmit={() => handleSubmitEditForm(image._id)}>
                                <div className='admin-hero__edit-image__form__row'>
                                    <label className='admin-hero__edit-image__form__row__label'>Nazwa</label>
                                    <input className='admin-hero__edit-image__form__row__input' type='text' name='name' placeholder={image.name} onChange={(e) => handleChangeInput(e, 'edit')} />
                                </div>
                                <div className='admin-hero__edit-image__form__row'>
                                    <label className='admin-hero__edit-image__form__row__label'>Link</label>
                                    <input className='admin-hero__edit-image__form__row__input' type='text' name='link' placeholder={image.link} onChange={(e) => handleChangeInput(e, 'edit')} />
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
                    {heroImages ? getEditForm() : null}
                    {getAddForm()}
                </div>
            </div>
            :
            <>
                <div className='admin__back-wrapper'>
                    <Link to='/admin'>
                        <img src={leftArrow} alt='wróć' className='admin__back' />
                    </Link>
                    <h1 className='admin__title'>Zdjęcia tytułowe</h1>
                </div>
                <div className='admin-hero'>
                    {heroImages ? getEditForm() : null}
                    {getAddForm()}
                </div>
            </>
    )
};

export default AdminHero;