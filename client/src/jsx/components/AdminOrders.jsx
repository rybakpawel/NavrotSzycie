import React, { Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { isDesktop } from 'react-device-detect';
import leftArrow from '../../assets/icons/left-arrow.svg';
import AdminMenu from './AdminMenu';
import AddOrder from './AddOrder';

const AdminOrders = ({ action }) => {
    const [orders, setOrders] = useState('');

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_ADRESS}orders`);
        const data = await response.json();
        setOrders(data);
    }

    const getOrders = () => {
        const ordersList = orders.map(order => {
            let products = order.product.join(', ');
            return (
                <Fragment key={order._id}>
                    <div className='order'>
                        <p className='order__detail'>{products}</p>
                        <p className='order__detail'>{order.date}</p>
                        <p className='order__detail'>{order.orderNo}</p>
                        <p className='order__detail'>{order.amount}zł</p>
                    </div>
                </Fragment>
            )
        })

        return ordersList;
    }

    return (
        isDesktop ?
            <div className='admin__overall-wrapper'>
                <AdminMenu />
                {action ? <AddOrder /> : 
                <div className='orders'>
                    <div className='order'>
                        <p className='order__detail'><strong>Produkty</strong></p>
                        <p className='order__detail'><strong>Data</strong></p>
                        <p className='order__detail'><strong>Faktura</strong></p>
                        <p className='order__detail'><strong>Kwota</strong></p>
                    </div>
                    {orders ? getOrders() : null}
                </div>}
            </div>
            :
            action ? <AddOrder /> : <>
                <div className='admin__back-wrapper'>
                    <Link to='/admin'>
                        <img src={leftArrow} alt='wróć' className='admin__back' />
                    </Link>
                    <h1 className='admin__title'>Zamówienia</h1>
                </div>
                <div className='orders'>
                    {orders ? getOrders() : null}
                </div>
            </>
    )
}

export default AdminOrders;