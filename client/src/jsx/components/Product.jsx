import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper';
import useWindowDimensions from '../utils/useWindowDimenstions';
import Button from './Button';
import Loading from './Loading';
import example from '../../assets/images/example-bag.jpg';
import heightIcon from '../../assets/icons/height.svg';
import widthIcon from '../../assets/icons/width.svg';
import pocztaPolska from '../../assets/images/poczta-polska.png';
import inpost from '../../assets/images/inpost.png';

SwiperCore.use([Pagination, Navigation, Thumbs]);

const Product = () => {
    const { name, category } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();

    const product = useSelector(state => state.productReducer.product);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeDetail, setActiveDetail] = useState([]);

    useEffect(() => {
        getData();
        window.scrollTo(0, 0)
    }, [location, dispatch]);

    const getData = async () => {
        dispatch(getProduct(category, name))
    };

    const handleAddToCart = () => {
        dispatch(addToCart(category, name))
    };

    const handleDropdown = (e) => {
        if (!activeDetail.includes(e.currentTarget.id)) setActiveDetail([...activeDetail, e.currentTarget.id]);
        else setActiveDetail(activeDetail.filter((detail) => detail !== e.currentTarget.id));
    };

    const checkActive = (id) => {
        if (!activeDetail.includes(id)) return false
        else return true;
    };

    const { width } = useWindowDimensions();

    return (
        product ?
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
                        <SwiperSlide>
                            <img src={example}
                                alt='image'
                                className='product__slider__image' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={example}
                                alt='image'
                                className='product__slider__image' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={example}
                                alt='image'
                                className='product__slider__image' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={example}
                                alt='image'
                                className='product__slider__image' />
                        </SwiperSlide>
                    </Swiper>
                    {width < 992
                        ? null
                        : <div className='product__slider__small-images-wrapper'>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true} spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                className="mySwiper">
                                <SwiperSlide>
                                    <img src={example}
                                        alt='image'
                                        className='product__slider__small-image' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={example}
                                        alt='image'
                                        className='product__slider__small-image' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={example}
                                        alt='image'
                                        className='product__slider__small-image' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={example}
                                        alt='image'
                                        className='product__slider__small-image' />
                                </SwiperSlide>
                            </Swiper>
                        </div>}
                </div>
                <div className='product__informations'>
                    <h2 className='product__informations__title'>{product.name}</h2>
                    <h3 className='product__informations__price'>{product.price}zł</h3>
                    <p className='product__informations__description'>{product.description}</p>
                    {width < 992 ?
                        <div className='product__informations__button-wrapper' onClick={handleAddToCart}>
                            <Button variant='submit' title='Dodaj do koszyka' />
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
                                    <div className='product-detail__second-row__image-wrapper'>
                                        <img src={heightIcon}
                                            alt='height'
                                            className='product-detail__second-row__image' />
                                    </div>
                                    <p>{product.height}cm</p>
                                    <div className='product-detail__second-row__image-wrapper'>
                                        <img src={widthIcon}
                                            alt='width'
                                            className='product-detail__second-row__image' />
                                    </div>
                                    <p>{product.width}cm</p>
                                </div> :
                                null
                            }
                        </div>

                        <div className='product-detail'>
                            <div className='product-detail__first-row'
                                onClick={handleDropdown}
                                id={2}>
                                <p>Pielęgnacja</p>
                                <Button variant='empty'
                                    title={checkActive('2') === true ? '-' : '+'} />
                            </div>
                            {checkActive('2') ?
                                <p className='product-detail__product-care'>
                                    {product.care}
                                </p> :
                                null
                            }
                        </div>

                        <div className='product-detail'>
                            <div className='product-detail__first-row'
                                onClick={handleDropdown}
                                id={3}>
                                <p>Dostawa</p>
                                <Button variant='empty'
                                    title={checkActive('3') === true ? '-' : '+'} />
                            </div>
                            {checkActive('3') ?
                                <div className='product-detail__second-row'>
                                    <div className='product-detail__second-row__image-wrapper'>
                                        <img src={pocztaPolska}
                                            alt='poczta-polska'
                                            className='product-detail__second-row__image product-detail__second-row__image--delivery' />
                                    </div>
                                    <p>14zł</p>
                                    <div className='product-detail__second-row__image-wrapper'>
                                        <img src={inpost}
                                            alt='inpost'
                                            className='product-detail__second-row__image product-detail__second-row__image--delivery' />
                                    </div>
                                    <p>8,99zł</p>
                                </div> :
                                null
                            }

                        </div>
                    </div>

                    {width < 992 ?
                        null
                        : <div className='product__informations__button-wrapper' onClick={handleAddToCart}>
                            <Button variant='submit' title='Dodaj do koszyka' />
                        </div>
                    }
                </div>
            </section> : <Loading />
    )
}

export default Product;