import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../redux/actions/productActions';
import Button from './Button';

const EditProduct = () => {
    const [responseMessage, setResponseMessage] = useState(null);

    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.productReducer.productsList);

    useEffect(() => {
        getData();
    }, [dispatch, allProducts]);

    const getData = async () => {
        dispatch(getProductsList())
    };

    const handleEditProduct = () => {

    }

    const handleDeleteProduct = (id) => {
        fetch(`http://localhost:5000/products/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => setResponseMessage(data.message))
    }

    return (
        <div className='edit-product'>
            {responseMessage ? <p className='edit-product__response'>{responseMessage}</p> : null}
            {allProducts.map(product => {
                return (
                    <div className='edit-product__row'>
                        <p className='edit-product__row__name'>{product.name}</p>
                        <div className='edit-product__row__button'>
                            <Button variant='small' title='Edytuj' />
                        </div>
                        <div className='edit-product__row__button' onClick={() => handleDeleteProduct(product._id)}>
                            <Button variant='small' title='Usuń' />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default EditProduct;