import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../redux/actions/productActions';
import { sortByKey } from '../utils/sortByKey';
import Button from './Button';
import ok from '../../assets/icons/ok.png';
import reject from '../../assets/icons/reject.png';

const EditProduct = () => {
    const formInitialState = {
        name: '',
        category: '',
        price: '',
        images: [],
        description: '',
        height: '',
        width: '',
        circuit: '',
        depth: '',
        materials: '',
        care: '',
        promotion: '',
        promotionSize: '',
        quantity: ''
    };
    const [form, setForm] = useState(formInitialState);
    const [responseMessage, setResponseMessage] = useState({
        alert: '',
        success: null
    });
    const [activeEditProduct, setActiveEditProduct] = useState(null);
    const [activeDeleteProduct, setActiveDeleteProduct] = useState(null);

    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.productReducer.allProducts);

    useEffect(() => {
        getData();
    }, [dispatch, allProducts]);

    const getData = async () => {
        dispatch(getProductsList())
    };

    const handleEditProduct = (product) => {
        const { _id, name, category, price, images, description, height, width, circuit, depth, materials, care, promotion, promotionSize, quantity } = product;
        if (activeEditProduct === _id) {
            setActiveEditProduct(null);
            setForm(formInitialState);
        } else {
            setActiveEditProduct(_id);
            setForm({
                name,
                category,
                price,
                images,
                description,
                height,
                width,
                circuit,
                depth,
                materials,
                care,
                promotion,
                promotionSize,
                quantity
            });
        }
    }

    const handleCheckbox = e => {
        setForm(prevState => ({
            ...prevState,
            promotion: e.target.checked
        }));
    };

    const handleChangeInput = (e, product) => {
        const { name, value } = e.target;

        setForm(prevState => ({
            ...prevState,
            [name]: !value ? product : value,
        }));
    };

    const handleDeleteImage = (img) => {
        const images = form.images.filter(item => {
            return item != img
        })
        
        setForm(prevState => ({
            ...prevState,
            images
        }));
    }

    const handleDeleteProduct = (id, confirm) => {
        if (activeDeleteProduct) {
            setActiveDeleteProduct(false);

            if (confirm) {
                fetch(`${process.env.REACT_APP_SERVER_ADRESS}products/delete/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => setResponseMessage({
                        alert: data.message,
                        success: data.success
                    }))
            }
        } else {
            setActiveDeleteProduct(id);
        }
    };

    const handleSubmitForm = (e, id) => {
        e.preventDefault();

        const formData = new FormData();

        for (const value in form) {
            if (value !== 'images') {
                formData.append(value, form[value]);
            }
        }

        for (let i = 0; i < form.images.length; i++) {
            formData.append('images[]', form.images[i]);
          }

        for (let i = 0; i < e.target.image.files.length; i++) {
            formData.append('image', e.target.image.files[i]);
        }

        fetch(`${process.env.REACT_APP_SERVER_ADRESS}products/edit/${id}`, {
            method: 'PUT',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                setResponseMessage({
                    alert: data.message,
                    success: data.success
                });
                setForm(formInitialState);
                setActiveEditProduct(null)
            })
    }; 

    const sortedProducts = sortByKey(allProducts, 'name');

    const { alert, success } = responseMessage;

    return (
        <div className='edit-product'>
            {alert ? <p className={`edit-product__response ${success ? 'edit-product__response--success' : ''}`}>{alert}</p> : null}
            {sortedProducts.map(product => {
                return (
                    <Fragment key={product._id}>
                        <div className='edit-product__row'>
                            {activeDeleteProduct === product._id ?
                                <>
                                    <p className='edit-product__row__name'>{product.name}</p>
                                    <div className='edit-product__row__confirm'>
                                        <img className='edit-product__row__confirm__icon' src={ok} alt='Potwierdź' onClick={() => handleDeleteProduct(product._id, true)} />
                                        <p className='edit-product__row__confirm__text'>Na pewno?</p>
                                        <img className='edit-product__row__confirm__icon' src={reject} alt='Zrezygnuj' onClick={() => handleDeleteProduct(product._id, false)} />
                                    </div>
                                </> :
                                <>
                                    <p className='edit-product__row__name'>{product.name}</p>
                                    <div className='edit-product__row__button' onClick={() => handleEditProduct(product)}>
                                        <Button variant='small' title='Edytuj' />
                                    </div>
                                    <div className='edit-product__row__button' onClick={() => handleDeleteProduct(product._id)}>
                                        <Button variant='small' title='Usuń' />
                                    </div>
                                </>
                            }
                        </div>
                        {activeEditProduct === product._id ?
                            <form className='edit-product__form'
                                id='editProductForm'
                                onSubmit={(e) => handleSubmitForm(e, product._id)}>
                                <div className='edit-product__form__row'>
                                    <label className='edit-product__form__row__label'>Nazwa</label>
                                    <input className='edit-product__form__row__input' type='text' name='name' placeholder={product.name} onChange={(e) => handleChangeInput(e, product.name)} />
                                </div>
                                <div className='edit-product__form__row'>
                                    <label className='edit-product__form__row__label'>Kategoria</label>
                                    <input className='edit-product__form__row__input' type='text' name='category' placeholder={product.category} onChange={(e) => handleChangeInput(e, product.category)} />
                                </div>
                                <div className='edit-product__form__row'>
                                    <label className='edit-product__form__row__label'>Cena</label>
                                    <input className='edit-product__form__row__input' type='number' step={0.01} name='price' placeholder={product.price} onChange={(e) => handleChangeInput(e, product.price)} />
                                </div>
                                <div className='edit-product__form__row'>
                                    <label className='edit-product__form__row__label'>Zdjęcia</label>
                                    <div className='edit-product__form__row__input edit-product__form__row__input--image'>
                                        <div>
                                            {form.images.map(img => {
                                                return (
                                                    <div key={img}>
                                                        <img src={`${process.env.REACT_APP_SERVER_ADRESS}products/image/${img}`} alt={img}/>
                                                        <img src={reject} alt='Usuń zdjcie' onClick={() => handleDeleteImage(img)}/>
                                                    </div>
                                                )    
                                            })}
                                        </div>
                                        <input id='image' type='file' name='image' multiple />
                                    </div>
                                </div>
                                <div className='edit-product__form__row'>
                                    <label className='edit-product__form__row__label'>Opis</label>
                                    <textarea className='edit-product__form__row__input' rows={6} type='text' name='description' placeholder={product.description} onChange={(e) => handleChangeInput(e, product.description)} />
                                </div>
                                <div className='edit-product__form__row'>
                                    <label className='edit-product__form__row__label'>Wysokość</label>
                                    <input className='edit-product__form__row__input' type='number' name='height' placeholder={product.height} onChange={(e) => handleChangeInput(e, product.height)} />
                                </div>
                                <div className='edit-product__form__row'>
                                    <label className='edit-product__form__row__label'>Szerokość</label>
                                    <input className='edit-product__form__row__input' type='number' name='width' placeholder={product.width} onChange={(e) => handleChangeInput(e, product.width)} />
                                </div>
                                <div className='edit-product__form__row'>
                                    <label className='edit-product__form__row__label'>Obwód</label>
                                    <input className='edit-product__form__row__input' type='number' name='circuit' placeholder={product.circuit} onChange={(e) => handleChangeInput(e, product.circuit)} />
                                </div>
                                <div className='edit-product__form__row'>
                                    <label className='edit-product__form__row__label'>Głębokość</label>
                                    <input className='edit-product__form__row__input' type='number' name='depth' placeholder={product.depth} onChange={(e) => handleChangeInput(e, product.depth)} />
                                </div>
                                <div className='edit-product__form__row'>
                                    <label className='edit-product__form__row__label'>Materiały</label>
                                    <textarea className='edit-product__form__row__input' rows={6} type='text' name='materials' placeholder={product.materials} onChange={(e) => handleChangeInput(e, product.materials)} />
                                </div>
                                <div className='edit-product__form__row'>
                                    <label className='edit-product__form__row__label'>Pielęgnacja</label>
                                    <textarea className='edit-product__form__row__input' rows={6} type='text' name='care' placeholder={product.care} onChange={(e) => handleChangeInput(e, product.care)} />
                                </div>
                                <div className='edit-product__form__row'>
                                    <label className='edit-product__form__row__label'>Promocja</label>
                                    <input className='edit-product__form__row__input edit-product__form__row__input--checkbox' type="checkbox" name='promotion' checked={form.promotion} onChange={handleCheckbox} />
                                </div>
                                <div className='edit-product__form__row'>
                                    <label className='edit-product__form__row__label'>Wielkość promocji</label>
                                    <input className='edit-product__form__row__input' type='number' name='promotionSize' placeholder={product.promotionSize} onChange={(e) => handleChangeInput(e, product.promotionSize)} disabled={form.promotion ? false : true} />
                                </div>
                                <div className='edit-product__form__row'>
                                    <label className='edit-product__form__row__label'>Dostępna ilość</label>
                                    <input className='edit-product__form__row__input' type='number' name='quantity' placeholder={product.quantity} onChange={(e) => handleChangeInput(e, product.quantity)} />
                                </div>
                                <div className='edit-product__form__button-wrapper'>
                                    <Button variant='small' title='Zatwierdź zmiany' type='submit' form='editProductForm' />
                                </div>
                            </form> : null
                        }
                    </Fragment>
                )
            })}
        </div>
    )
}

export default EditProduct;