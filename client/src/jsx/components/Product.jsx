import React, { useEffect, useState } from 'react';
import { Redirect, useLocation, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, getProductsList } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import useWindowDimensions from '../utils/useWindowDimensions';
import Button from './Button';
import Loading from './Loading';

SwiperCore.use([Pagination, Navigation, Thumbs]);

const Product = () => {
    const { name, category } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();

    const product = useSelector(state => state.productReducer.product);
    const cart = useSelector(state => state.cartReducer.cartProducts);
    const allProducts = useSelector(state => state.productReducer.allProducts);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeDetail, setActiveDetail] = useState([]);

    useEffect(() => {
        dispatch(getProductsList())
        dispatch(getProduct(category, name));
        window.scrollTo(0, 0);
    }, [location, dispatch]);

    const handleAddToCart = () => {
        dispatch(addToCart(category, name));
    };

    const handleDropdown = (e) => {
        if (!activeDetail.includes(e.currentTarget.id)) setActiveDetail([...activeDetail, e.currentTarget.id]);
        else setActiveDetail(activeDetail.filter((detail) => detail !== e.currentTarget.id));
    };

    const checkActive = (id) => {
        if (!activeDetail.includes(id)) return false;
        else return true;
    };

    const isProductInCart = cart.some(product => product['name'] === name);

    const { width } = useWindowDimensions();

    const checkProduct = (productsList) => {
        const routeExist = productsList.some(product => product.name === name)

        if (routeExist) {
            return (
                <section className='product'>
                    <div className='product__slider'>
                        <Swiper
                            pagination={width < 992 ? true : false}
                            style={{ '--swiper-pagination-color': '#fff' }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            className="mySwiper2">

                            {product.images.map(img => {
                                return (
                                    <SwiperSlide key={img}>
                                        <img src={`${process.env.REACT_APP_SERVER_ADRESS}products/image/${img}`}
                                            alt='image'
                                            className='product__slider__image' />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                        <div className='product__slider__small-images-wrapper'>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                className='mySwiper'>

                                {product.images.map(img => {
                                    return (
                                        <SwiperSlide key={img}>
                                            <img src={`${process.env.REACT_APP_SERVER_ADRESS}products/image/${img}`}
                                                alt='image'
                                                className='product__slider__small-image' />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </div>
                    <div className='product__informations'>
                        <h2 className='product__informations__title'>{product.name}</h2>
                        {product.promotion ?
                            <h3 className='product__informations__price'><s>{product.price.toFixed(2)}zł</s> {product.priceWithPromotion.toFixed(2)}zł</h3> :
                            <h3 className='product__informations__price'> {product.price.toFixed(2)}zł</h3>
                        }
                        <p className='product__informations__description'>{product.description}</p>
                        {width < 992 ?
                            <div className='product__informations__button-wrapper' onClick={isProductInCart || !product.quantity ? null : handleAddToCart}>
                                {product.quantity ? <Button variant='submit' title={isProductInCart ? 'Produkt w koszyku!' : 'Dodaj do koszyka'} /> : <p className='product__informations__lack'>Produkt niedostępny</p>}
                            </div>
                            : null
                        }

                        <div className='product__informations__list' >
                            <div className='product-detail'>
                                <div className='product-detail__first-row'
                                    onClick={handleDropdown}
                                    id={1} >
                                    <p>Wymiary</p>
                                    <Button variant='empty'
                                        title={checkActive('1') === true ? '-' : '+'} />
                                </div>

                                {checkActive('1') ?
                                    <div className='product-detail__second-row'>
                                        {product.height && <div className='product-detail__second-row__size-wrapper'>
                                            <p>Wysokość</p>
                                            <p>{product.height}cm</p>
                                        </div>}
                                        {product.width && <div className='product-detail__second-row__size-wrapper'>
                                            <p>Szerokość</p>
                                            <p>{product.width}cm</p>
                                        </div>}
                                        {product.circuit && <div className='product-detail__second-row__size-wrapper'>
                                            <p>Obwód</p>
                                            <p>{product.circuit}cm</p>
                                        </div>}
                                        {product.depth && <div className='product-detail__second-row__size-wrapper'>
                                            <p>Głębokość</p>
                                            <p>{product.depth}cm</p>
                                        </div>}
                                    </div> :
                                    null
                                }
                            </div>

                            <div className='product-detail'>
                                <div className='product-detail__first-row'
                                    onClick={handleDropdown}
                                    id={2}>
                                    <p>Materiały</p>
                                    <Button variant='empty'
                                        title={checkActive('2') === true ? '-' : '+'} />
                                </div>
                                {checkActive('2') ?
                                    <p className='product-detail__product-care'>
                                        {product.materials}
                                    </p> :
                                    null
                                }
                            </div>

                            <div className='product-detail'>
                                <div className='product-detail__first-row'
                                    onClick={handleDropdown}
                                    id={3}>
                                    <p>Pielęgnacja</p>
                                    <Button variant='empty'
                                        title={checkActive('3') === true ? '-' : '+'} />
                                </div>
                                {checkActive('3') ?
                                    <p className='product-detail__product-care'>
                                        {product.care}
                                    </p> :
                                    null
                                }

                            </div>
                        </div>

                        {width < 992 ?
                            null
                            : <div className='product__informations__button-wrapper' onClick={isProductInCart || !product.quantity ? null : handleAddToCart}>
                                {product.quantity ? <Button variant='submit' title={isProductInCart ? 'Produkt w koszyku!' : 'Dodaj do koszyka'} /> : <p className='product__informations__lack'>Produkt niedostępny</p>}
                            </div>
                        }
                    </div>
                </section>
            )
        } else return <Redirect to={`/${category}`} />
    }

    return product && allProducts.length > 0 ? checkProduct(allProducts) : <Loading allPage={true} />
}

export default Product;